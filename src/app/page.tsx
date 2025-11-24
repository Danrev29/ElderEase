'use client'

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebaseConfig";

export default function Home() {
  const [user, loading] = useAuthState(auth); // get Firebase user state

  const features = [
    { title: "Simple Tutorials", description: "Easy-to-follow guides for popular social media apps", icon: "📚" },
    { title: "Voice Assistance", description: "Use voice commands to navigate and learn", icon: "🎤" },
    { title: "AI Chat Helper", description: "Get instant answers to your questions", icon: "🤖" },
    { title: "Safe Learning", description: "Learn in a secure, scam-free environment", icon: "🛡️" }
  ];

  const steps = [
    { step: "1", title: "Create Your Account", desc: "Sign up with your email and create a secure password", color: "blue" },
    { step: "2", title: "Set Up Your Profile", desc: "Add your photo and tell us what you want to learn", color: "green" },
    { step: "3", title: "Start Learning", desc: "Choose from our simple tutorials or ask our AI helper", color: "yellow" }
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-100 to-green-100 overflow-hidden py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Social Media Made <span className="text-blue-600">Simple</span> for Seniors
            </h1>
            <p className="text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Learn to connect with family and friends through Facebook, WhatsApp, and more with friendly, step-by-step guidance.
            </p>

            {/* Conditionally show buttons */}
            {!loading && !user && (
              <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
                <a 
                  href="/register" 
                  className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-blue-700 transition font-semibold shadow-lg text-sm sm:text-base"
                >
                  Start Learning Free
                </a>
                <a 
                  href="/login" 
                  className="bg-green-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-green-700 transition font-semibold shadow-lg text-sm sm:text-base"
                >
                  Returning User
                </a>
              </div>
            )}

            {/* Show alternative CTA if logged in */}
            {!loading && user && (
              <div className="flex gap-4 justify-center lg:justify-start">
                <a 
                  href="/tutoriallibrary" 
                  className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-blue-700 transition font-semibold shadow-lg text-sm sm:text-base"
                >
                  Go to Tutorials
                </a>
              </div>
            )}
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <img 
              src="/photo.png" 
              alt="ElderEase Hero" 
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Why Choose ElderEase?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">How ElderEase Works</h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Follow our easy three-step process to get started and enjoy learning social media safely.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 sm:gap-8 max-w-7xl mx-auto">
          {steps.map((item) => (
            <div key={item.step} className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 flex-1 hover:shadow-2xl transition transform hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 text-xl sm:text-2xl font-bold bg-${item.color}-100 text-${item.color}-600 mx-auto`}>
                {item.step}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
