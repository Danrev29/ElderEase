'use client'

import { useState, useRef, useEffect } from 'react'
import tutorials from '@/app/tutoriallibrary/tutorialData'
import { getTutorialAnswer } from '@/app/tutoriallibrary/tutorialUtils'

interface Message {
  id: string
  text: string
  sender: 'user' | 'assistant'
  timestamp: Date
}

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your ElderEase assistant. How can I help you with social media today?",
      sender: 'assistant',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Quick questions and mapped answers
  const quickQuestions = [
    "How to post on Facebook?",
    "Send photos on WhatsApp",
    "Video call my family",
    "What is Instagram?",
    "Make my account safe"
  ]

  const quickAnswers: { [key: string]: string } = {
    "how to post on facebook?": getTutorialAnswer("facebook", "post status"),
    "send photos on whatsapp": getTutorialAnswer("whatsapp", "send photo"),
    "video call my family": getTutorialAnswer("video call"),
    "what is instagram?": getTutorialAnswer("instagram"),
    "make my account safe": "To keep your account safe: 1) Use a strong password, 2) Enable two-factor authentication, 3) Avoid sharing personal info, 4) Keep your apps updated."
  }

  const handleSend = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsLoading(true)

    setTimeout(() => {
      const userText = inputText.toLowerCase()
      let response = ''

      // Check quickAnswers first
      response = quickAnswers[userText] || ''

      // If not a quick answer, try tutorial matching
      if (!response) {
        // Match tutorial by platform and specific topic keywords
        const matchedTutorial = tutorials.find(t =>
          userText.includes(t.category.toLowerCase()) ||
          t.steps.some(step => userText.includes(step.text.toLowerCase()))
        )

        if (matchedTutorial) {
          response = getTutorialAnswer(
            matchedTutorial.category,
            userText
          )
        } else {
          // fallback generic response
          const responses = [
            "Sorry, I couldn't find a tutorial for that. Try another question or platform."
          ]
          response = responses[Math.floor(Math.random() * responses.length)]
        }
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'assistant',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000)
  }

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Voice recognition is not supported in your browser. Please use Chrome or Edge.")
      return
    }

    const recognition = new (window as any).webkitSpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false

    recognition.onstart = () => setIsListening(true)
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript
      setInputText(transcript)
      setIsListening(false)
    }
    recognition.onerror = () => setIsListening(false)
    recognition.onend = () => setIsListening(false)
    recognition.start()
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-50"
          aria-label="Open AI Assistant"
        >
          <div className="relative">
            <span className="text-2xl">🤖</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </button>
      )}

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-lg">AI</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">ElderEase Assistant</h3>
                <p className="text-blue-100 text-sm">Online - Ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 text-2xl"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm">{message.text}</div>
                  <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-none p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="border-t border-gray-200 p-3">
            <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-1">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const answer = quickAnswers[question.toLowerCase()] || "Sorry, I don't have an answer for that."
                    const userMessage: Message = {
                      id: Date.now().toString(),
                      text: question,
                      sender: 'user',
                      timestamp: new Date()
                    }
                    const assistantMessage: Message = {
                      id: (Date.now() + 1).toString(),
                      text: answer,
                      sender: 'assistant',
                      timestamp: new Date()
                    }
                    setMessages(prev => [...prev, userMessage, assistantMessage])
                  }}
                  className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs hover:bg-blue-700 transition"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputText}
                  onChange={e => setInputText(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about social media..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 text-sm"
                />

                {/* Voice Input Button */}
                <button
                  onClick={handleVoiceInput}
                  disabled={isListening}
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${isListening ? 'text-red-500' : 'text-gray-400 hover:text-blue-600'}`}
                >
                  <span className="text-lg">{isListening ? '🔴' : '🎤'}</span>
                </button>
              </div>

              <button
                onClick={handleSend}
                disabled={!inputText.trim() || isLoading}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50 transition font-semibold text-sm"
              >
                Send
              </button>
            </div>

            {isListening && (
              <div className="text-center mt-2">
                <div className="text-red-500 font-semibold text-sm">Listening... Speak now</div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
