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
  const [modalVisible, setModalVisible] = useState(false)
  const [loadingData, setLoadingData] = useState(true) // New loading state

  const [user, loading, error] = useAuthState(auth);

  // Modal effect
  useEffect(() => {
    if (selectedTutorial) {
      setModalVisible(true);
    } else {
      const timer = setTimeout(() => setModalVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [selectedTutorial]);

  // Fetch user data (once when user logs in)
  useEffect(() => {
    if (!user) return;

    const fetchUserData = async () => {
      setLoadingData(true)
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setFavorites(data.favorites || []);
        setCompleted(data.completed || []);
      } else {
        await setDoc(docRef, { favorites: [], completed: [] });
      }
      setLoadingData(false)
    };
    fetchUserData();
  }, [user]);

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

  if (loading || loadingData) return (
    <div className="p-4 sm:p-8 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Skeleton cards */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="animate-pulse flex flex-col gap-3 p-5 rounded-xl bg-gray-100 h-72">
          <div className="bg-gray-300 h-36 rounded-lg w-full"></div>
          <div className="h-5 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="flex gap-2 mt-auto">
            <div className="h-8 w-1/2 bg-gray-300 rounded"></div>
            <div className="h-8 w-1/2 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );

  if (!user) return <p className="text-center mt-20 text-xl">Please log in to access tutorials.</p>;

  const filteredTutorials = tutorials.filter(t =>
    (filter === 'All' || t.category === filter) &&
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen w-full p-4 sm:p-8 relative">

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">Tutorial Library</h1>
        <p className="text-md sm:text-lg text-gray-600 mb-2">
          Learn social media step-by-step with easy tutorials.
        </p>
        <p className="text-sm text-gray-700 mb-6">
          Completed {completed.length} / {tutorials.length} tutorials &nbsp;|&nbsp; 
          Bookmarked {favorites.length}
        </p>

        {/* Search + Filters */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8 relative">
          <input
            type="text"
            placeholder="Search tutorials..."
            className="px-4 py-2 border rounded-lg flex-1 text-black placeholder-gray-400 w-full sm:w-auto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
          />
          <select
            className="px-4 py-2 border rounded-lg w-full sm:w-auto"
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
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto mt-1 sm:max-w-md">
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
                      {favorites.includes(tutorial.id) && <span className="text-yellow-400">★</span>}
                      {completed.includes(tutorial.id) && <span className="text-green-500">✔</span>}
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
            className={`rounded-xl cursor-pointer p-5 flex flex-col transition shadow-lg hover:shadow-2xl border
              ${completed.includes(tutorial.id)
                ? 'border-green-500 bg-green-50 shadow-green-300 shadow-lg'
                : 'bg-white border-gray-100'
              }
            `}
            onClick={() => setSelectedTutorial(tutorial)}
          >
            <img
              src={tutorial.image || '/placeholder.png'} // fallback placeholder
              className="w-full h-48 sm:h-60 md:h-52 lg:h-60 rounded-lg mb-4 object-cover"
            />
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">{tutorial.title}</h2>
            <p className="text-gray-600 text-sm mt-1">{tutorial.description}</p>

            {/* Bookmark & Completed */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-2">
              <button
                className={`flex items-center gap-1 px-3 py-1 rounded-lg text-sm transition w-full sm:w-auto justify-center ${
                  favorites.includes(tutorial.id) ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={(e) => { e.stopPropagation(); toggleFavorite(tutorial.id) }}
                disabled={!user}
              >
                ★ {favorites.includes(tutorial.id) ? 'Bookmarked' : 'Bookmark'}
              </button>

              <button
                className={`px-3 py-1 rounded-lg text-sm transition w-full sm:w-auto ${
                  completed.includes(tutorial.id) ? 'bg-green-500 text-white' : 'bg-blue-600 text-white'
                }`}
                onClick={(e) => { e.stopPropagation(); toggleCompleted(tutorial.id) }}
                disabled={!user}
              >
                {completed.includes(tutorial.id) ? 'Completed ✔' : 'Mark as Done'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedTutorial && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/50 overflow-auto"
          onClick={() => setSelectedTutorial(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl sm:max-w-4xl p-6 relative transform transition-all duration-300 overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-black text-3xl font-bold transition"
              onClick={() => setSelectedTutorial(null)}
            >
              ×
            </button>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">{selectedTutorial.title}</h2>
            <p className="text-gray-700 mb-6">{selectedTutorial.description}</p>

            {/* Steps */}
            {selectedTutorial.steps?.map((step: any, index: number) => (
              <div
                key={index}
                className="mb-5 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500 shadow-sm flex flex-col gap-2"
              >
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <span className="text-blue-500 font-bold">{index + 1}.</span> {step.title || `Step ${index + 1}`}
                </h3>
                <p className="text-gray-700">{step.text}</p>
               
              </div>
            ))}

          {selectedTutorial.video && (
  <div className="mt-6">
    <p className="font-semibold text-gray-800 mb-2">Video Tutorial:</p>
    <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
      <iframe
        className="w-full h-full rounded-lg"
        src={selectedTutorial.video.replace("watch?v=", "embed/")}
        title={selectedTutorial.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
)}

          </div>
        </div>
      )}
    </div>
  )
}
