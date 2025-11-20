// src/lib/auth-utils.ts
import { auth, db } from '@/lib/firebaseConfig'
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'

export interface UserData {
  email: string
  name: string
  password: string
  phone?: string
  birthYear?: string
}

export interface UserPreferences {
  fontSize?: string
  contrast?: string
  voiceEnabled?: boolean
  tutorialSpeed?: string
  reducedMotion?: boolean
  simpleLayout?: boolean
}

export class AuthError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'AuthError'
  }
}

// --- CREATE USER ---
export async function createUser(userData: UserData) {
  try {
    const userRef = doc(db, 'users', userData.email)
    const userSnap = await getDoc(userRef)
    if (userSnap.exists()) throw new AuthError('User with this email already exists')

    const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password)
    const user = userCredential.user

    await updateProfile(user, { displayName: userData.name })

    await setDoc(userRef, {
      name: userData.name,
      email: userData.email,
      phone: userData.phone || '',
      birthYear: userData.birthYear || '',
      preferences: {
        fontSize: 'medium',
        contrast: 'normal',
        voiceEnabled: false,
        tutorialSpeed: 'normal',
        reducedMotion: false,
        simpleLayout: false
      }
    })

    return { uid: user.uid, email: user.email, name: user.displayName, phone: userData.phone || '', birthYear: userData.birthYear || '' }
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') throw new AuthError('User with this email already exists')
    throw error
  }
}

// --- GET USER BY ID (email used as ID) ---
export async function getUserById(email: string) {
  const userRef = doc(db, 'users', email)
  const userSnap = await getDoc(userRef)
  if (!userSnap.exists()) throw new AuthError('User not found')
  return userSnap.data()
}

// --- UPDATE USER PROFILE ---
export async function updateUserProfile(email: string, updates: Partial<{ name: string; phone: string; birthYear: string }>) {
  const userRef = doc(db, 'users', email)
  const userSnap = await getDoc(userRef)
  if (!userSnap.exists()) throw new AuthError('User not found')

  if (updates.name) {
    await updateProfile(auth.currentUser!, { displayName: updates.name }).catch(() => {})
  }

  await updateDoc(userRef, updates)
  const updatedSnap = await getDoc(userRef)
  return updatedSnap.data()
}

// --- UPDATE USER PREFERENCES ---
export async function updateUserPreferences(email: string, preferences: UserPreferences) {
  const userRef = doc(db, 'users', email)
  const userSnap = await getDoc(userRef)
  if (!userSnap.exists()) throw new AuthError('User not found')

  await updateDoc(userRef, { preferences })
  const updatedSnap = await getDoc(userRef)
  return updatedSnap.data()?.preferences
}

// --- LOGIN (verify user) ---
export async function verifyUser({ email, password }: { email: string; password: string }) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    const userSnap = await getDoc(doc(db, 'users', email))
    if (!userSnap.exists()) throw new AuthError('User not found')
    return { uid: user.uid, email: user.email, name: user.displayName, ...userSnap.data() }
  } catch (error: any) {
    if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
      throw new AuthError('Invalid email or password')
    }
    throw error
  }
}
