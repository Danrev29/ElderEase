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

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-100 to-green-100 overflow-hidden py-24 px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Social Media Made <span className="text-blue-600">Simple</span> for Seniors
            </h1>
            <p className="text-lg mb-8 max-w-xl">
              Learn to connect with family and friends through Facebook, WhatsApp, and more with friendly, step-by-step guidance.
            </p>

            {/* Conditionally show buttons */}
            {!loading && !user && (
              <div className="flex gap-4 flex-wrap">
                <a 
                  href="/register" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition font-semibold shadow-lg"
                >
                  Start Learning Free
                </a>
                <a 
                  href="/login" 
                  className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition font-semibold shadow-lg"
                >
                  Returning User
                </a>
              </div>
            )}

            {/* Show alternative CTA if logged in */}
            {!loading && user && (
              <div className="flex gap-4 flex-wrap">
                <a 
                  href="/tutoriallibrary" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition font-semibold shadow-lg"
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
              className="w-full max-h-[600px] rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose ElderEase?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">How ElderEase Works</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Follow our easy three-step process to get started and enjoy learning social media safely.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 max-w-7xl mx-auto">
          {[
            { step: "1", title: "Create Your Account", desc: "Sign up with your email and create a secure password", color: "blue" },
            { step: "2", title: "Set Up Your Profile", desc: "Add your photo and tell us what you want to learn", color: "green" },
            { step: "3", title: "Start Learning", desc: "Choose from our simple tutorials or ask our AI helper", color: "yellow" }
          ].map((item) => (
            <div key={item.step} className="bg-white rounded-3xl shadow-lg p-8 flex-1 hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl font-bold bg-${item.color}-100 text-${item.color}-600 mx-auto`}>
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
