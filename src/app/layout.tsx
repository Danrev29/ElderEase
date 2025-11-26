'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import FloatingChatbot from '../../components/FloatingChatbot'
import { AccessibilityProvider, useAccessibility } from '@/context/AccessibilityContext'
import { auth, db } from '@/lib/firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'
import { doc, getDoc } from 'firebase/firestore'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>ElderEase - Social Media Made Simple for Seniors</title>
        <meta
          name="description"
          content="Helping seniors connect confidently through simple social media tutorials and AI assistance"
        />
      </head>
      <body className={`${inter.className}`}>
        <AccessibilityProvider>
          <DynamicLayout>{children}</DynamicLayout>
        </AccessibilityProvider>
      </body>
    </html>
  )
}

const DynamicLayout = ({ children }: { children: ReactNode }) => {
  const { fontSize, contrast } = useAccessibility()
  const router = useRouter()
  const [user, loading] = useAuthState(auth)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)


  // Firestore User Data
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    const fetchUser = async () => {
      if (!user) return

      try {
        const ref = doc(db, "users", user.uid)
        const snap = await getDoc(ref)

        if (snap.exists()) {
          setUserData(snap.data())
        }
      } catch (error) {
        console.error("Error fetching Firestore user:", error)
      }
    }

    fetchUser()
  }, [user])

  const handleLogout = async () => {
    await auth.signOut()
    router.push('/login')
  }

  const handleProfileClick = () => router.push('/profile')

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  return (
    <div className={`${fontSize} contrast-${contrast} min-h-screen flex flex-col`}>
     {/* Navigation */}
<nav className="bg-blue-700 text-white p-4 shadow-lg">
  <div className="container mx-auto flex justify-between items-center">
    
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
        <span className="text-blue-700 font-bold text-lg">EE</span>
      </div>
      <h1 className="text-2xl font-bold">ElderEase</h1>
    </div>

    {/* Mobile Burger Button */}
 <button
  onClick={() => {
    setDropdownOpen(false);
    setMobileMenu(prev => !prev);
  }}
  className="md:hidden focus:outline-none"
>
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="white"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>


    {/* Desktop Menu */}
    <div className="hidden md:flex md:items-center md:space-x-6">

      {/* Navbar Links */}
      <a href="/" className="hover:underline text-lg">Home</a>
      <a href="/tutoriallibrary" className="hover:underline text-lg">Tutorial Library</a>
      <a href="/accessibility" className="hover:underline text-lg">Settings</a>

      {/* User Area */}
      {loading ? (
        <div className="w-8 h-8 bg-blue-600 rounded-full animate-pulse"></div>
      ) : user ? (
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 hover:bg-blue-600 p-2 rounded-lg transition"
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
              {user.photoURL ? (
                <img src={user.photoURL} className="w-full h-full object-cover" />
              ) : (
                <span className="text-blue-700 font-bold text-sm">
                  {userData?.name?.charAt(0).toUpperCase() || 'U'}
                </span>
              )}
            </div>
            <span className="hidden md:inline">
              Hi, {userData?.name?.split(' ')[0]}
            </span>
            <svg
              className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
              <div className="px-4 py-2 border-b bg-gray-50">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {userData?.name || "Unknown User"}
                </p>
                <p className="text-xs text-gray-600 truncate">
                  {userData?.email || user.email}
                </p>
              </div>
              <button
                onClick={handleProfileClick}
                className="w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 flex items-center space-x-2"
              >
                <span>👤</span>
                <span>My Profile</span>
              </button>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 flex items-center space-x-2"
              >
                <span>🚪</span>
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex space-x-2">
          <a href="/register" className="bg-blue-600 px-4 py-2 rounded-lg">Register</a>
          <a href="/login" className="bg-green-600 px-4 py-2 rounded-lg">Login</a>
        </div>
      )}
    </div>
  </div>

  {/* Mobile Menu */}
  {mobileMenu && (
    <div className="md:hidden mt-3 bg-blue-600 p-4 rounded-lg space-y-3 text-lg">

      <a href="/" className="block text-white hover:underline">Home</a>
      <a href="/tutoriallibrary" className="block text-white hover:underline">Tutorial Library</a>
      <a href="/accessibility" className="block text-white hover:underline">Settings</a>

      {/* User Section */}
      {user ? (
        <div className="border-t border-blue-400 pt-3 space-y-2">

          <button
            onClick={handleProfileClick}
            className="w-full text-left text-white hover:underline"
          >
            👤 My Profile
          </button>

          <button
            onClick={handleLogout}
            className="w-full text-left text-white hover:underline"
          >
            🚪 Logout
          </button>

        </div>
      ) : (
        <div className="space-y-2 border-t border-blue-400 pt-3">
          <a href="/register" className="block bg-blue-500 px-3 py-2 rounded-lg text-center">Register</a>
          <a href="/login" className="block bg-green-600 px-3 py-2 rounded-lg text-center">Login</a>
        </div>
      )}

    </div>
  )}
</nav>


      {/* Main Content */}
      <main className="flex-1 min-h-screen px-4 sm:px-8">
        {children}
      </main>

      {/* Floating Chatbot */}
      <FloatingChatbot />

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-lg">ElderEase - Bridging the Digital Divide for Seniors</p>
          <p className="text-gray-400 mt-2">Simple, Safe, and Empowering Social Media Learning</p>
        </div>
      </footer>
    </div>
  )
}
