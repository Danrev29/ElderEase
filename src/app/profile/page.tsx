'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth'
import app, { auth, db, storage } from '@/lib/firebaseConfig'

interface UserProfile {
  id: string
  name: string
  email: string
  phone: string
  profilePhoto?: string
}

export default function Profile() {
  const router = useRouter()
  const [profile, setProfile] = useState<UserProfile>({ id: '', name: '', email: '', phone: '' })
  const [originalProfile, setOriginalProfile] = useState<UserProfile | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [passwordData, setPasswordData] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false)
  const [isSaving, setIsSaving] = useState(false)


  useEffect(() => {
    loadUserProfile()
  }, [])

  const loadUserProfile = async () => {
    setIsLoading(true)
    try {
      const user = auth.currentUser
      const userId = user?.uid || localStorage.getItem('elderease_user_id')
      if (!userId) return router.push('/login')

      const snap = await getDoc(doc(db, 'users', userId))
      if (snap.exists()) {
        const data = { id: userId, ...snap.data() } as UserProfile
        setProfile(data)
        setOriginalProfile(data) // store original for cancel
        localStorage.setItem('elderease_user', JSON.stringify(data))
        localStorage.setItem('elderease_user_id', userId)
      } else {
        setMessage('Profile not found.')
      }
    } catch (err) {
      console.error(err)
      setMessage('Error loading profile')
    } finally {
      setIsLoading(false)
    }
  }

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setProfile({ ...profile, [e.target.name]: e.target.value })

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value })

const handleSaveProfile = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSaving(true)  // start saving
  try {
    const userId = profile.id || localStorage.getItem('elderease_user_id')
    if (!userId) return setMessage('User not found.')
    await setDoc(doc(db, 'users', userId), profile, { merge: true })
    setOriginalProfile(profile)
    localStorage.setItem('elderease_user', JSON.stringify(profile))
    setMessage('Profile updated successfully!')
    setIsEditing(false)
  } catch (err) {
    console.error(err)
    setMessage('Error updating profile')
  } finally {
    setIsSaving(false) // done saving
    setTimeout(() => setMessage(''), 3000)
  }
}



  const handleCancelEdit = () => {
    if (originalProfile) setProfile(originalProfile)
    setIsEditing(false)
  }

  const handleProfilePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setIsUploadingPhoto(true)
    try {
      const userId = profile.id || localStorage.getItem('elderease_user_id')
      if (!userId) return setMessage('User not found.')
      const storageRef = ref(storage, `profilePhotos/${userId}`)
      await uploadBytes(storageRef, file)
      const url = await getDownloadURL(storageRef)
      const updatedProfile = { ...profile, profilePhoto: url }
      setProfile(updatedProfile)
      setOriginalProfile(updatedProfile)
      await setDoc(doc(db, 'users', userId), updatedProfile, { merge: true })
      localStorage.setItem('elderease_user', JSON.stringify(updatedProfile))
      setMessage('Profile photo updated!')
    } catch (err) {
      console.error(err)
      setMessage('Error uploading photo')
    } finally {
      setIsUploadingPhoto(false)
      setTimeout(() => setMessage(''), 3000)
    }
  }

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!auth.currentUser) return setMessage('No logged-in user.')
    if (passwordData.newPassword !== passwordData.confirmPassword) return setMessage('Passwords do not match.')
    try {
      const credential = EmailAuthProvider.credential(auth.currentUser.email!, passwordData.currentPassword)
      await reauthenticateWithCredential(auth.currentUser, credential)
      await updatePassword(auth.currentUser, passwordData.newPassword)
      setMessage('Password updated successfully!')
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' })
      setIsChangingPassword(false)
    } catch (err: any) {
      console.error(err)
      if (err.code === 'auth/wrong-password') setMessage('Current password is incorrect.')
      else setMessage('Error changing password.')
    } finally {
      setTimeout(() => setMessage(''), 4000)
    }
  }

  const handleLogout = () => { localStorage.clear(); router.push('/login') }

  if (isLoading) return <div className="flex justify-center items-center h-screen text-gray-600">Loading...</div>

  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <div className="max-w-md mx-auto p-6 bg-white rounded-3xl shadow-lg border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => router.push('/')} className="text-blue-500 font-medium hover:underline">← Home</button>
          <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
          <button onClick={handleLogout} className="text-red-500 font-medium hover:underline">Logout</button>
        </div>

        {message && <div className={`p-3 mb-4 rounded ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>{message}</div>}

        <div className="flex flex-col items-center mb-6">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
            {profile.profilePhoto ? <img src={profile.profilePhoto} alt="Profile" className="w-full h-full object-cover" /> : <span className="text-gray-400 text-4xl flex justify-center items-center h-full">👤</span>}
          </div>
          <input type="file" id="profilePhoto" className="hidden" accept="image/*" onChange={handleProfilePhotoUpload} disabled={isUploadingPhoto} />
          <label htmlFor="profilePhoto" className={`mt-3 px-4 py-2 rounded-full ${isUploadingPhoto ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 cursor-pointer'} text-white font-medium`}>
            {isUploadingPhoto ? 'Uploading...' : 'Change Photo'}
          </label>
        </div>

    <div className="space-y-4 text-black">
  {['name', 'email', 'phone'].map(field => (
    <div key={field}>
      <label className="block text-sm font-medium text-gray-800 capitalize">{field}</label>
      <input
        type={field === 'email' ? 'email' : 'text'}
        name={field}
        value={profile[field as keyof UserProfile] || ''}
        onChange={handleProfileChange}
        disabled={!isEditing}
        className={`mt-1 w-full px-3 py-2 rounded-xl border ${isEditing ? 'border-blue-400 focus:ring-2 focus:ring-blue-400' : 'border-gray-300'} focus:outline-none transition bg-white`}
      />
    </div>
  ))}

  {isEditing && (
    <form onSubmit={handleSaveProfile} className="flex justify-between mt-4">
      <button
  type="submit"
  className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition flex items-center justify-center"
  disabled={isSaving}
>
  {isSaving ? (
    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
    </svg>
  ) : null}
  {isSaving ? 'Saving...' : 'Save'}
</button>

    </form>
  )}

  {!isEditing && (
    <button
      type="button"
      onClick={() => setIsEditing(true)}
      className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition mt-4"
    >
      Edit Profile
    </button>
  )}
</div>


      

        <div className="mt-6 pt-6 border-t">
          <button onClick={() => setIsChangingPassword(!isChangingPassword)} className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition">
            {isChangingPassword ? 'Cancel Password Change' : 'Change Password'}
          </button>

          {isChangingPassword && (
            <form onSubmit={handleChangePassword} className="mt-4 space-y-4 text-black">
              {['currentPassword', 'newPassword', 'confirmPassword'].map(field => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-600 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                  <input
                    type="password"
                    name={field}
                    value={passwordData[field as keyof typeof passwordData]}
                    onChange={handlePasswordChange}
                    className="mt-1 w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  />
                </div>
              ))}
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">Update Password</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
