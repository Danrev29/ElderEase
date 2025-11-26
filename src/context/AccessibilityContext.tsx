'use client'

import { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react'
import { useRouter } from 'next/navigation'

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

  const router = useRouter()
  const recognitionRef = useRef<any>(null)

  // 🔊 VOICE COMMAND HANDLER
  const handleVoiceCommand = (command: string) => {
    console.log("🎤 Voice Command:", command)

    // === NAVIGATION ===
    if (command.includes("go home")) router.push("/")
    if (command.includes("open profile")) router.push("/profile")
    if (command.includes("open settings")) router.push("/accessibility")
    if (command.includes("open tutorials") || command.includes("tutorials")) router.push("/tutoriallibrary")

    // === FONT SIZE ===
    if (command.includes("bigger text")) setSettingsState((s) => ({ ...s, fontSize: 'large' }))
    if (command.includes("largest text")) setSettingsState((s) => ({ ...s, fontSize: 'xlarge' }))
    if (command.includes("smaller text")) setSettingsState((s) => ({ ...s, fontSize: 'small' }))

    // === CONTRAST ===
    if (command.includes("high contrast")) setSettingsState((s) => ({ ...s, contrast: 'high' }))
    if (command.includes("normal contrast")) setSettingsState((s) => ({ ...s, contrast: 'normal' }))
    if (command.includes("blue light")) setSettingsState((s) => ({ ...s, contrast: 'blue' }))

    // === STOP LISTENING ===
    if (command.includes("stop listening")) {
      setSettingsState((s) => ({ ...s, voiceEnabled: false }))
    }
  }

  // 🔊 GLOBAL VOICE LISTENING SYSTEM
  useEffect(() => {
    if (!settings.voiceEnabled) {
      if (recognitionRef.current) recognitionRef.current.stop()
      return
    }

    const SpeechRecognition =
      (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition

    if (!SpeechRecognition) {
      console.warn("SpeechRecognition is not supported in this browser.")
      return
    }

    const recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.lang = 'en-US'

    recognition.onresult = (event: any) => {
      const transcript = event.results[event.results.length - 1][0].transcript
        .trim()
        .toLowerCase()

      handleVoiceCommand(transcript)
    }

    recognition.onerror = (err: any) => {
      console.log("Voice recognition error:", err)
    }

    recognition.onend = () => {
      // Automatically restart if still enabled
      if (settings.voiceEnabled) recognition.start()
    }

    recognition.start()
    recognitionRef.current = recognition

    return () => recognition.stop()
  }, [settings.voiceEnabled])

  // 🔧 LOAD from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('elderease_preferences')
    if (saved) {
      setSettingsState(JSON.parse(saved))
    }
  }, [])

  // 🔧 APPLY & SAVE changes (font size, contrast, voiceEnabled)
  useEffect(() => {
    const html = document.documentElement

    // Apply classes
    html.classList.remove('font-small', 'font-medium', 'font-large', 'font-xlarge')
    html.classList.remove('contrast-normal', 'contrast-high', 'contrast-blue')

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
