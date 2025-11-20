'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type FontSize = 'small' | 'medium' | 'large' | 'xlarge'
type Contrast = 'normal' | 'high' | 'blue'

interface AccessibilitySettings {
  fontSize: FontSize
  contrast: Contrast
  voiceEnabled: boolean
}

interface AccessibilityContextType extends AccessibilitySettings {
  setSettings: (updates: Partial<AccessibilitySettings>) => void
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 'medium',
  contrast: 'normal',
  voiceEnabled: false,
}

const AccessibilityContext = createContext<AccessibilityContextType>({
  ...defaultSettings,
  setSettings: () => {},
})

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettingsState] = useState<AccessibilitySettings>(defaultSettings)

  // Load settings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('elderease_preferences')
    if (saved) {
      setSettingsState(JSON.parse(saved))
    }
  }, [])

  // Apply font size and contrast to <html> immediately and save to localStorage
  useEffect(() => {
    const html = document.documentElement

    // Remove previous classes
    html.classList.remove('font-small', 'font-medium', 'font-large', 'font-xlarge')
    html.classList.remove('contrast-normal', 'contrast-high', 'contrast-blue')

    // Add current classes
    html.classList.add(`font-${settings.fontSize}`)
    html.classList.add(`contrast-${settings.contrast}`)

    // Save to localStorage
    localStorage.setItem('elderease_preferences', JSON.stringify(settings))
  }, [settings])

  const setSettings = (updates: Partial<AccessibilitySettings>) => {
    setSettingsState((prev) => ({ ...prev, ...updates }))
  }

  return (
    <AccessibilityContext.Provider value={{ ...settings, setSettings }}>
      {children}
    </AccessibilityContext.Provider>
  )
}

export const useAccessibility = () => useContext(AccessibilityContext)
