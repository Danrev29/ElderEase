'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import FloatingChatbot from '../../components/FloatingChatbot'
import { AccessibilityProvider, useAccessibility } from '@/context/AccessibilityContext'
import { auth } from '@/lib/firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'
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

  // Firebase auth state
  const [user, loading] = useAuthState(auth)

  const handleLogout = async () => {
    await auth.signOut()
    router.push('/login')
  }

  const handleProfileClick = () => router.push('/profile')

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

          {/* Links & User */}
          <div className="flex items-center space-x-6">
            <a href="/" className="hover:underline text-lg">Home</a>
            <a href="/tutoriallibrary" className="hover:underline text-lg">Tutorial Library</a>
            <a href="/accessibility" className="hover:underline text-lg">Settings</a>

            {loading ? (
              <div className="w-8 h-8 bg-blue-600 rounded-full animate-pulse"></div>
            ) : user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 hover:bg-blue-600 p-2 rounded-lg transition">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-blue-700 font-bold text-sm">
                        {user.displayName?.charAt(0).toUpperCase() || 'U'}
                      </span>
                    )}
                  </div>
                  <span className="hidden md:inline">Hi, {user.displayName?.split(' ')[0] || 'User'}</span>
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm text-gray-800 font-semibold">{user.displayName}</p>
                    <p className="text-xs text-gray-600 truncate">{user.email}</p>
                  </div>

                  <button
                    onClick={handleProfileClick}
                    className="bg-green-600 w-full text-left px-4 py-2 text-sm text-gray-700  transition flex items-center space-x-2"
                  >
                    <span>👤</span>
                    <span>My Profile</span>
                  </button>

                  <button
                    onClick={handleLogout}
                    className="bg-green-600 w-full text-left px-4 py-2 text-sm text-gray-700  transition flex items-center space-x-2"
                  >
                    <span>🚪</span>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-2">
                <a href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Register
                </a>
                <a href="/login" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-semibold">
                  Login
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 min-h-screen">{children}</main>

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
