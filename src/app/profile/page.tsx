'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { 
  updatePassword, 
  reauthenticateWithCredential, 
  EmailAuthProvider, 
  verifyBeforeUpdateEmail, 
  signOut 
} from 'firebase/auth'
import app, { auth, db } from '@/lib/firebaseConfig'
import tutorials from '@/app/tutoriallibrary/tutorialData' // adjust path

interface UserProfile {
  id: string
  name: string
  email: string | null   // allow null
  phone: string
  profilePhoto?: string
  pendingEmail?: string
}


export default function Profile() {
  const router = useRouter()
  const [profile, setProfile] = useState<UserProfile>({ id: '', name: '', email: '', phone: '' })
  const [isEditing, setIsEditing] = useState(false)
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [isChangingEmail, setIsChangingEmail] = useState(false)
  const [passwordData, setPasswordData] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [emailData, setEmailData] = useState({ newEmail: '', currentPassword: '' })
  const [message, setMessage] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [completed, setCompleted] = useState<string[]>([])
  const [favorites, setFavorites] = useState<string[]>([])
  const totalTutorials = tutorials.length

  useEffect(() => { loadUserProfile() }, [])

  // Auto-update Firestore email after verification
 useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if (user && user.email) {
      const userId = user.uid
      const snap = await getDoc(doc(db, 'users', userId))
      if (snap.exists()) {
        const userData = snap.data()
        if (userData.pendingEmail && user.email === userData.pendingEmail) {
          await setDoc(doc(db, 'users', userId), {
            email: user.email,
            pendingEmail: undefined  // use undefined for optional field
          }, { merge: true })

        setProfile(prev => ({
  ...prev,
  email: user.email ?? '', // fallback to empty string if null
  pendingEmail: undefined
}))

        }
      }
    }
  })
  return () => unsubscribe()
}, [])


  const loadUserProfile = async () => {
    try {
      const user = auth.currentUser
      const userId = user?.uid || localStorage.getItem('elderease_user_id')
      if (!userId) return router.push('/login')

      const snap = await getDoc(doc(db, 'users', userId))
      if (snap.exists()) {
        const data = { id: userId, ...snap.data() } as UserProfile
        setProfile(data)
        setCompleted(snap.data().completed || [])
        setFavorites(snap.data().favorites || [])
        localStorage.setItem('elderease_user', JSON.stringify(data))
        localStorage.setItem('elderease_user_id', userId)
        setLoaded(true)
      } else setMessage('Profile not found.')
    } catch (err) {
      console.error(err)
      setMessage('Error loading profile')
    }
  }

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setProfile({ ...profile, [e.target.name]: e.target.value })

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    try {
      const userId = profile.id
      if (!userId) return setMessage('User not found.')

      await setDoc(doc(db, 'users', userId), {
        name: profile.name,
        phone: profile.phone,
        profilePhoto: profile.profilePhoto || null
      }, { merge: true })

      localStorage.setItem('elderease_user', JSON.stringify(profile))
      setMessage('Profile updated!')
      setIsEditing(false)
    } catch (err) {
      console.error(err)
      setMessage('Error saving profile')
    } finally {
      setIsSaving(false)
      setTimeout(() => setMessage(''), 3000)
    }
  }

  const handleProfilePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploadingPhoto(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'unsigned_preset'); // e.g., 'profile_upload'

      const cloudName = 'dv6kpdk7n';

      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (!data.secure_url) throw new Error('Upload failed');

      const updatedProfile = { ...profile, profilePhoto: data.secure_url };
      setProfile(updatedProfile);

      const userId = profile.id;
      if (userId) await setDoc(doc(db, 'users', userId), { profilePhoto: data.secure_url }, { merge: true });

      localStorage.setItem('elderease_user', JSON.stringify(updatedProfile));
      setMessage('Profile photo updated!');

    } catch (err) {
      console.error(err);
      setMessage('Error uploading photo');
    } finally {
      setIsUploadingPhoto(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleEmailChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) return setMessage('No logged-in user.');
    if (!emailData.newEmail || !emailData.currentPassword) return setMessage('Fill in both fields.');
    if (emailData.newEmail === profile.email) return setMessage('New email is the same as current.');

    try {
      const credential = EmailAuthProvider.credential(auth.currentUser.email!, emailData.currentPassword);
      await reauthenticateWithCredential(auth.currentUser, credential);

      // Send verification email to new email
      await verifyBeforeUpdateEmail(auth.currentUser, emailData.newEmail);

      // Save pending email in Firestore
      const userId = profile.id;
      if (userId) {
        await setDoc(doc(db, 'users', userId), {
          pendingEmail: emailData.newEmail
        }, { merge: true });
      }

      setMessage('Verification email sent! Please check your inbox.');

      setTimeout(async () => {
        localStorage.clear();
        await signOut(auth);
        router.push('/login');
      }, 3000);

    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/wrong-password') setMessage('Wrong password.');
      else if (err.code === 'auth/email-already-in-use') setMessage('Email already in use.');
      else setMessage('Error updating email.');
    } finally {
      setTimeout(() => setMessage(''), 5000);
    }
  };

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

  const handleLogout = async () => {
    localStorage.clear()
    await signOut(auth)
    router.push('/login')
  }

  if (!loaded) return <div className="flex justify-center items-center h-screen text-gray-600">Loading...</div>

  return (
    <div className="min-h-screen bg-white py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Left Column: Profile */}
      <div className="md:col-span-1 space-y-6">
        <div className="p-6 bg-white rounded-3xl shadow-lg border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <button onClick={() => router.push('/')} className="text-blue-500 font-medium hover:underline">← Home</button>
            <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
            <button onClick={handleLogout} className="text-red-500 font-medium hover:underline">Logout</button>
          </div>

          {message && <div className={`p-3 mb-4 rounded ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>{message}</div>}

          {/* Profile Photo */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
              {profile.profilePhoto
                ? <img src={profile.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
                : <span className="text-gray-400 text-4xl flex justify-center items-center h-full">👤</span>}
            </div>
            <input type="file" id="profilePhoto" className="hidden" accept="image/*" onChange={handleProfilePhotoUpload} disabled={isUploadingPhoto} />
            <label htmlFor="profilePhoto" className={`mt-3 px-4 py-2 rounded-full ${isUploadingPhoto ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 cursor-pointer'} text-white font-medium`}>
              {isUploadingPhoto ? 'Uploading...' : 'Change Photo'}
            </label>
          </div>

          {/* Profile Info */}
          <div className="space-y-4 text-black">
            {['name', 'phone'].map(field => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-800 capitalize">{field}</label>
                <input
                  type="text"
                  name={field}
                  value={profile[field as keyof UserProfile] || ''}
                  onChange={handleProfileChange}
                  disabled={!isEditing}
                  className={`mt-1 w-full px-3 py-2 rounded-xl border ${isEditing ? 'border-blue-400 focus:ring-2 focus:ring-blue-400' : 'border-gray-300'} focus:outline-none transition bg-white`}
                />
              </div>
            ))}

            {isEditing ? (
  <form onSubmit={handleSaveProfile} className="flex justify-between mt-4 gap-3">

    {/* Save Button */}
    <button
      type="submit"
      className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition flex-1"
      disabled={isSaving}
    >
      {isSaving ? 'Saving...' : 'Save'}
    </button>

    {/* Cancel Button */}
    <button
      type="button"
      onClick={() => setIsEditing(false)}
      className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400 transition flex-1"
    >
      Cancel
    </button>

  </form>
) : (

              <button type="button" onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition mt-4">
                Edit Profile
              </button>
            )}
          </div>

          {/* Email & Password */}
          <div className="mt-6 pt-6 border-t space-y-4">
            {/* Email Change */}
           {/* Email Change */}
<div>
  <button 
    onClick={() => setIsChangingEmail(!isChangingEmail)} 
    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition w-full mb-2"
  >
    {isChangingEmail ? 'Cancel Email Change' : 'Change Email'}
  </button>

  {isChangingEmail && (
    <form onSubmit={handleEmailChange} className="space-y-2 text-black">
      <input
        type="email"
        value={profile.email ?? ''}
        readOnly
        className="mt-1 w-full px-3 py-2 rounded-xl border border-gray-300 bg-gray-100 cursor-not-allowed focus:outline-none transition"
      />
      <input
        type="email"
        placeholder="New Email"
        value={emailData.newEmail}
        onChange={(e) => setEmailData({ ...emailData, newEmail: e.target.value })}
        className="mt-1 w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        required
      />
      <input
        type="password"
        placeholder="Current Password"
        value={emailData.currentPassword}
        onChange={(e) => setEmailData({ ...emailData, currentPassword: e.target.value })}
        className="mt-1 w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        required
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition w-full"
      >
        Update Email
      </button>

      {/* Verification note */}
      <p className="text-sm text-gray-600 mt-1">
        Note: You need to verify the new email address via the email sent to you for the change to take effect.
      </p>
    </form>
  )}
</div>


            {/* Password Change */}
            <div>
              <button 
                onClick={() => setIsChangingPassword(!isChangingPassword)} 
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition w-full mb-2"
              >
                {isChangingPassword ? 'Cancel Password Change' : 'Change Password'}
              </button>

              {isChangingPassword && (
                <form onSubmit={handleChangePassword} className="space-y-2 text-black">
                  {['currentPassword', 'newPassword', 'confirmPassword'].map(field => (
                    <div key={field}>
                      <input type="password" name={field} value={passwordData[field as keyof typeof passwordData]} onChange={(e) => setPasswordData({ ...passwordData, [field]: e.target.value })} placeholder={field.replace(/([A-Z])/g, ' $1')} className="mt-1 w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" required />
                    </div>
                  ))}
                  <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition w-full">Update Password</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Progress / Motivation */}
      <div className="md:col-span-3 sticky top-8 space-y-6">
        <div className="p-6 bg-gray-50 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">Learning Progress</h2>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between mb-1 text-sm text-gray-600">
              <span>Completed Tutorials</span>
              <span>{completed.length} / {totalTutorials}</span>
            </div>
            <div className="w-full h-4 bg-gray-200 rounded-full">
              <div
                className="h-4 bg-green-500 rounded-full transition-all"
                style={{ width: `${(completed.length / totalTutorials) * 100}%` }}
              />
            </div>
          </div>

          {/* Visual Badges */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Achievements</h3>
            <div className="flex flex-wrap gap-2">
              {completed.length >= 1 && (
                <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full text-sm">
                  🏅 <span>First Steps</span>
                </div>
              )}
              {completed.length >= 5 && (
                <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full text-sm">
                  🎯 <span>5 Tutorials Completed</span>
                </div>
              )}
              {completed.length >= 10 && (
                <div className="flex items-center gap-1 bg-blue-100 px-2 py-1 rounded-full text-sm">
                  🏆 <span>10 Tutorials Completed</span>
                </div>
              )}
              {completed.length === 0 && (
                <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-sm text-gray-500">
                  ⚪ No badges yet
                </div>
              )}
            </div>
          </div>
          

          {/* Motivational messages */}
          <div className="mb-2">
            <h3 className="font-semibold mb-2">Motivation</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              {completed.length === 0 && <li>✨ Start your first tutorial today!</li>}
              {completed.length > 0 && completed.length < totalTutorials && <li>🚀 Keep going! You’re making progress.</li>}
              {completed.length === totalTutorials && <li>🎉 Amazing! You completed all tutorials!</li>}
            </ul>
          </div>
          <div className="mt-6">
  <h3 className="font-semibold mb-2">Bookmarked Tutorials</h3>
  {favorites.length === 0 ? (
    <p className="text-gray-500 text-sm">No favorites yet.</p>
  ) : (
    <div className="flex flex-wrap gap-2">
      {favorites.map(favId => {
        const tutorial = tutorials.find(t => t.id === favId);
        if (!tutorial) return null;
        return (
          <span key={favId} className="bg-yellow-100 px-2 py-1 rounded-full text-sm">{tutorial.title}</span>
        );
      })}
    </div>
  )}
</div>

        </div>
      </div>
    </div>
  )
}
