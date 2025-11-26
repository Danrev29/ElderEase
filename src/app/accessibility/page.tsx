'use client'

import { useAccessibility } from '@/context/AccessibilityContext'

export default function Accessibility() {
  const { fontSize, contrast, voiceEnabled, setSettings } = useAccessibility()

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-blue-700 text-white p-6">
            <h1 className="text-3xl font-bold">Accessibility Settings</h1>
            <p className="text-blue-100 mt-2">Customize your experience</p>
          </div>

          <div className="p-6 space-y-6">

            {/* Text Size */}
            <div className="border border-gray-200 rounded-lg p-4">
              <label className="text-lg font-medium text-gray-800 mb-2 block">
                Text Size
              </label>
              <select
                value={fontSize}
                onChange={(e) => setSettings({ fontSize: e.target.value as any })}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="xlarge">Extra Large</option>
              </select>
            </div>

            {/* Contrast */}
            <div className="border border-gray-200 rounded-lg p-4">
              <label className="text-lg font-medium text-gray-800 mb-2 block">
                Color Contrast
              </label>
              <select
                value={contrast}
                onChange={(e) => setSettings({ contrast: e.target.value as any })}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              >
                <option value="normal">Normal</option>
                <option value="high">High Contrast</option>
                <option value="blue">Blue Light Filter</option>
              </select>
            </div>

            {/* Voice Commands */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <label className="text-lg font-medium text-gray-800 block">
                    Voice Commands
                  </label>
                  <p className="text-gray-600 text-sm">
                    Enable voice input and navigation
                  </p>
                </div>

                <button
                  onClick={() => setSettings({ voiceEnabled: !voiceEnabled })}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    voiceEnabled ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`block w-4 h-4 bg-white rounded-full transform transition-transform ${
                      voiceEnabled ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* 🎤 Command List */}
              {voiceEnabled && (
                <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800">Available Voice Commands:</h3>

                  <ul className="text-sm text-blue-900 mt-2 space-y-1">
                    <li>• <strong>“Go home”</strong> — Navigate to homepage</li>
                    <li>• <strong>“Open profile”</strong> — Navigate to profile</li>
                    <li>• <strong>“Open settings”</strong> — Open accessibility settings</li>
                    <li>• <strong>“Open tutorials”</strong> — Open tutorial library</li>

                    <li className="mt-2">• <strong>“Bigger text”</strong> — Increase text size</li>
                    <li>• <strong>“Largest text”</strong> — Extra large text</li>
                    <li>• <strong>“Medium text”</strong> — Reset text size</li>
                    <li>• <strong>“Smaller text”</strong> — Small text</li>

                    <li className="mt-2">• <strong>“High contrast”</strong> — Enable high contrast</li>
                    <li>• <strong>“Normal contrast”</strong> — Default colors</li>
                    <li>• <strong>“Blue light”</strong> — Enable blue light filter</li>

                    <li className="mt-2">• <strong>“Stop listening”</strong> — Disable voice commands</li>
                  </ul>
                </div>
              )}

              {voiceEnabled && (
                <p className="mt-3 text-sm text-green-600 font-medium">
                  🎤 Voice commands active
                </p>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
