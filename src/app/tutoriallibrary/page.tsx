'use client'

import { useState, useEffect } from 'react'
import tutorials from './tutorialData'
import './tutoriallibrary.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/lib/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function TutorialLibrary() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [favorites, setFavorites] = useState<string[]>([])
  const [completed, setCompleted] = useState<string[]>([])
  const [selectedTutorial, setSelectedTutorial] = useState<any>(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const [user, loading, error] = useAuthState(auth);

  // Load user data from Firestore if logged in
  useEffect(() => {
    if (!user) return

    const fetchUserData = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setFavorites(data.favorites || []);
        setCompleted(data.completed || []);
      } else {
        await setDoc(docRef, { favorites: [], completed: [] });
      }
    };
    fetchUserData();
  }, [user]);

  // Save user data only if logged in
  const saveUserData = async (updatedFavorites: string[], updatedCompleted: string[]) => {
    if (!user) return
    const docRef = doc(db, "users", user.uid);
    await setDoc(docRef, { favorites: updatedFavorites, completed: updatedCompleted }, { merge: true });
  };

  const toggleFavorite = async (id: string) => {
    if (!user) {
      alert('Please log in to save favorites.');
      return; 
    }
    const updated = favorites.includes(id)
      ? favorites.filter(f => f !== id)
      : [...favorites, id];
    setFavorites(updated);
    await saveUserData(updated, completed);
  };

  const toggleCompleted = async (id: string) => {
    if (!user) {
      alert('Please log in to mark tutorials as completed.');
      return;
    }
    const updated = completed.includes(id)
      ? completed.filter(c => c !== id)
      : [...completed, id];
    setCompleted(updated);
    await saveUserData(favorites, updated);
  };

  if (loading) return <p>Loading...</p>;
  if (!user) return <p className="text-center mt-20 text-xl">Please log in to access tutorials.</p>;

  // Filter tutorials
  const filteredTutorials = tutorials.filter(t =>
    (filter === 'All' || t.category === filter) &&
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen w-full p-8 relative">

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-1">Tutorial Library</h1>
        <p className="text-lg text-gray-600 mb-2">
          Learn social media step-by-step with easy tutorials.
        </p>
        <p className="text-sm text-gray-700 mb-6">
          Completed {completed.length} / {tutorials.length} tutorials &nbsp;|&nbsp; 
          Bookmarked {favorites.length}
        </p>

        {/* Search + Filters */}
        <div className="flex flex-wrap gap-4 mb-8 text-black relative">
          <input
            type="text"
            placeholder="Search tutorials..."
            className="px-4 py-2 border rounded-lg flex-1 text-black placeholder-gray-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => setTimeout(() => setDropdownOpen(false), 200)} // delay to allow click
          />
          <select
            className="px-4 py-2 border rounded-lg"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Facebook</option>
            <option>Messenger</option>
            <option>WhatsApp</option>
            <option>YouTube</option>
            <option>TikTok</option>
            <option>Instagram</option>
          </select>

          {/* Search Dropdown */}
          {dropdownOpen && search && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto mt-1">
              {filteredTutorials.length === 0 ? (
                <p className="p-3 text-gray-500">No tutorials found.</p>
              ) : (
                filteredTutorials.map(tutorial => (
                  <div
                    key={tutorial.id}
                    className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setSelectedTutorial(tutorial)}
                  >
                    <span>{tutorial.title}</span>
                    <span className="flex gap-2">
                      {user && favorites.includes(tutorial.id) && <span className="text-yellow-400">★</span>}
                      {user && completed.includes(tutorial.id) && <span className="text-green-500">✔</span>}
                    </span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {/* Tutorial Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTutorials.map(tutorial => (
          <div
            key={tutorial.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer p-5 border border-gray-100"
            onClick={() => setSelectedTutorial(tutorial)}
          >
            <img
              src={tutorial.image}
              className="w-full h-60  rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">{tutorial.title}</h2>
            <p className="text-gray-600 text-sm mt-1">{tutorial.description}</p>

            {/* Bookmark & Completed */}
            <div className="flex justify-between items-center mt-4">
              {/* Bookmark */}
              <button
                className={`flex items-center gap-1 px-3 py-1 rounded-lg text-sm transition ${
                  user && favorites.includes(tutorial.id) ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={(e) => { e.stopPropagation(); toggleFavorite(tutorial.id) }}
                disabled={!user}
                title={!user ? 'Log in to bookmark' : ''}
              >
                ★ {user && favorites.includes(tutorial.id) ? 'Bookmarked' : 'Bookmark'}
              </button>

              {/* Completed */}
              <button
                className={`px-3 py-1 rounded-lg text-sm transition ${
                  user && completed.includes(tutorial.id) ? 'bg-green-500 text-white' : 'bg-gray-800 text-white'
                }`}
                onClick={(e) => { e.stopPropagation(); toggleCompleted(tutorial.id) }}
                disabled={!user}
                title={!user ? 'Log in to mark as done' : ''}
              >
                {user && completed.includes(tutorial.id) ? 'Completed ✔' : 'Mark as Done'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedTutorial && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4 "
          onClick={() => setSelectedTutorial(null)}
        >
          <div
            className="bg-white rounded-xl shadow-lg w-full max-w-4xl p-6 relative transform transition-all duration-300 scale-95 opacity-0 animate-modalOpen z-10 border-2 border-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-black text-xl font-bold"
              onClick={() => setSelectedTutorial(null)}
            >
              ×
            </button>

            <h2 className="text-3xl font-bold mb-6 text-black">{selectedTutorial.title}</h2>
            <p className="mb-6 text-black">{selectedTutorial.description}</p>

            {selectedTutorial.steps && selectedTutorial.steps.map((step: any, index: number) => (
              <div key={index} className="mb-7">
                <h3 className="font-semibold mb-4 text-black">Step {index + 1}</h3>
                <p className="mb-4 text-black">{step.text}</p>
                {step.image && <img src={step.image} className="w-full rounded-lg mb-2" />}
              </div>
            ))}

            {selectedTutorial.video && (
              <div className="mt-6">
                <p className="font-semibold mb-2 text-black">Video Tutorial:</p>
                <a href={selectedTutorial.video} target="_blank" className="text-blue-600 underline">
                  Watch on YouTube
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
