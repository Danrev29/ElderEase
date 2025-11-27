// tutorialData.ts
const tutorials = [
  // --- Facebook Tutorials ---
  {
    id: "fb-1",
    title: "How to Create a Facebook Account",
    category: "Facebook",
    image: "https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png",
    description: "A simple guide for new Facebook users.",
    video: "https://www.youtube.com/watch?v=EYgKPSC32Po",
    link: "https://www.facebook.com",
    steps: [
      { text: "Go to facebook.com", image: "/placeholder.png" },
      { text: "Click 'Create New Account'", image: "/placeholder.png" },
      { text: "Fill out your name, email, and password", image: "/placeholder.png" },
      { text: "Click 'Sign Up' and verify your account", image: "/placeholder.png" }
    ]
  },
  {
    id: "fb-2",
    title: "How to Post a Status on Facebook",
    category: "Facebook",
    image: "https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png",
    description: "Learn how to share updates with friends.",
    video: "https://www.youtube.com/watch?v=amhjrRHqKqE",
    link: "https://www.facebook.com",
    steps: [
      { text: "Log in to your Facebook account", image: "/placeholder.png" },
      { text: "Click on 'What's on your mind?'", image: "/placeholder.png" },
      { text: "Type your status or upload a photo/video", image: "/placeholder.png" },
      { text: "Click 'Post' to share with friends", image: "/placeholder.png" }
    ]
  },
  {
    id: "fb-3",
    title: "How to Add Friends on Facebook",
    category: "Facebook",
    image: "https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png",
    description: "Step-by-step instructions to connect with friends.",
    video: "https://www.youtube.com/watch?v=ukQm05z6HyA",
    link: "https://www.facebook.com",
    steps: [
      { text: "Go to the 'Find Friends' section", image: "/placeholder.png" },
      { text: "Search for a friend's name", image: "/placeholder.png" },
      { text: "Click 'Add Friend' next to their profile", image: "/placeholder.png" },
      { text: "Wait for confirmation if necessary", image: "/placeholder.png" }
    ]
  },
  {
    id: "fb-4",
    title: "How to Create a Facebook Page",
    category: "Facebook",
    image: "https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png",
    description: "Guide for starting a page for business or community.",
    video: "https://www.youtube.com/watch?v=3-ExhqRdDZU",
    link: "https://www.facebook.com",
    steps: [
      { text: "Log in to Facebook", image: "/placeholder.png" },
      { text: "Click 'Pages' and then 'Create New Page'", image: "/placeholder.png" },
      { text: "Fill in page name, category, and description", image: "/placeholder.png" },
      { text: "Click 'Create Page'", image: "/placeholder.png" }
    ]
  },
  {
    id: "fb-5",
    title: "How to Adjust Facebook Privacy Settings",
    category: "Facebook",
    image: "https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png",
    description: "Keep your account safe with simple settings.",
    video: "https://www.youtube.com/watch?v=p39YVzBhdt0",
    link: "https://www.facebook.com/settings",
    steps: [
      { text: "Go to Settings & Privacy", image: "/placeholder.png" },
      { text: "Select 'Privacy Settings'", image: "/placeholder.png" },
      { text: "Adjust who can see your posts and info", image: "/placeholder.png" },
      { text: "Save your changes", image: "/placeholder.png" }
    ]
  },

  // --- Instagram Tutorials ---
  {
    id: "ig-1",
    title: "How to Create an Instagram Account",
    category: "Instagram",
    image: "https://tse4.mm.bing.net/th/id/OIP._ZYtCLwJgEqV1bpMdAI23wHaFQ?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Step-by-step account setup for beginners.",
    video: "https://www.youtube.com/watch?v=Un96yioqlgU",
    link: "https://www.instagram.com",
    steps: [
      { text: "Download the Instagram app", image: "/placeholder.png" },
      { text: "Open the app and tap 'Sign Up'", image: "/placeholder.png" },
      { text: "Enter your email or phone number", image: "/placeholder.png" },
      { text: "Set a username and password", image: "/placeholder.png" },
      { text: "Complete profile info and tap 'Next'", image: "/placeholder.png" }
    ]
  },
  {
    id: "ig-2",
    title: "How to Post Photos on Instagram",
    category: "Instagram",
    image: "https://tse4.mm.bing.net/th/id/OIP._ZYtCLwJgEqV1bpMdAI23wHaFQ?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Learn to upload and share pictures easily.",
    video: "https://www.youtube.com/watch?v=2qATrUVwBO4",
    link: "https://www.instagram.com",
    steps: [
      { text: "Open Instagram and tap '+' button", image: "/placeholder.png"},
      { text: "Select a photo from your gallery or take one", image: "/placeholder.png" },
      { text: "Apply filters or edit the photo", image: "/placeholder.png" },
      { text: "Add a caption and hashtags", image: "/placeholder.png" },
      { text: "Tap 'Share' to post the photo", image: "/placeholder.png" }
    ]
  },
  {
    id: "ig-3",
    title: "How to Use Instagram Stories",
    category: "Instagram",
    image: "https://tse4.mm.bing.net/th/id/OIP._ZYtCLwJgEqV1bpMdAI23wHaFQ?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Share moments quickly with Stories.",
    video: "https://www.youtube.com/watch?v=lWY2nE6sSwg",
    link: "https://www.instagram.com",
    steps: [
      { text: "Tap your profile picture at the top left", image: "/placeholder.png" },
      { text: "Take a photo/video or upload from gallery", image: "/placeholder.png" },
      { text: "Add text, stickers, or filters", image: "/placeholder.png" },
      { text: "Tap 'Your Story' to share", image: "/placeholder.png" }
    ]
  },
  {
    id: "ig-4",
    title: "How to Follow People on Instagram",
    category: "Instagram",
    image: "https://tse4.mm.bing.net/th/id/OIP._ZYtCLwJgEqV1bpMdAI23wHaFQ?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Connect with friends and favorite accounts.",
    video: "",
    link: "https://www.instagram.com",
    steps: [
      { text: "Use the search tab to find people", image: "/placeholder.png" },
      { text: "Click 'Follow' next to their profile", image: "/placeholder.png" },
      { text: "Optional: Turn on notifications for new posts", image: "/placeholder.png" }
    ]
  },
  {
    id: "ig-5",
    title: "How to Use Instagram Reels",
    category: "Instagram",
    image: "https://tse4.mm.bing.net/th/id/OIP._ZYtCLwJgEqV1bpMdAI23wHaFQ?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Create short, fun videos with Reels.",
    video: "",
    link: "https://www.instagram.com",
    steps: [
      { text: "Tap the Reels icon", image: "/placeholder.png"},
      { text: "Record or upload a video", image: "/tutorials/steps/ig5-step2.png" },
      { text: "Add music, effects, or text", image: "/tutorials/steps/ig5-step3.png" },
      { text: "Tap 'Share' to post your Reel", image: "/tutorials/steps/ig5-step4.png" }
    ]
  },

  // --- WhatsApp Tutorials ---
  {
    id: "wa-1",
    title: "How to Send a WhatsApp Message",
    category: "WhatsApp",
    image: "https://tse2.mm.bing.net/th/id/OIP.rVT3Wm60UZubSjyX_QGUgQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Step-by-step messaging guide.",
    video: "",
    link: "https://www.whatsapp.com",
    steps: [
      { text: "Open WhatsApp app", image: "/placeholder.png" },
      { text: "Tap the 'Chats' tab", image: "/placeholder.png" },
      { text: "Select a contact or tap 'New Chat'", image: "/placeholder.png" },
      { text: "Type your message", image: "/placeholder.png" },
      { text: "Tap 'Send' button", image: "/placeholder.png" }
    ]
  },
  {
    id: "wa-2",
    title: "How to Make a WhatsApp Call",
    category: "WhatsApp",
    image: "https://tse2.mm.bing.net/th/id/OIP.rVT3Wm60UZubSjyX_QGUgQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Learn voice and video calls easily.",
video: "",
    link: "https://www.whatsapp.com",
    steps: [
      { text: "Open a chat with a contact", image: "/placeholder.png" },
      { text: "Tap the phone or video icon", image: "/placeholder.png" },
      { text: "Wait for the call to connect", image: "/placeholder.png" }
    ]
  },
  {
    id: "wa-3",
    title: "How to Create a WhatsApp Group",
    category: "WhatsApp",
    image: "https://tse2.mm.bing.net/th/id/OIP.rVT3Wm60UZubSjyX_QGUgQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Communicate with multiple people at once.",
  video: "",
    link: "https://www.whatsapp.com",
    steps: [
      { text: "Go to the 'Chats' tab", image: "/placeholder.png" },
      { text: "Tap 'New Group'", image: "/placeholder.png" },
      { text: "Select participants and tap 'Next'", image: "/placeholder.png" },
      { text: "Give the group a name and create it", image: "/placeholder.png" }
    ]
  },
  {
    id: "wa-4",
    title: "How to Send WhatsApp Voice Messages",
    category: "WhatsApp",
    image: "https://tse2.mm.bing.net/th/id/OIP.rVT3Wm60UZubSjyX_QGUgQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Record and send voice messages easily.",
 video: "",
    link: "https://www.whatsapp.com",
    steps: [
      { text: "Open a chat", image: "/placeholder.png" },
      { text: "Hold the microphone icon", image: "/placeholder.png" },
      { text: "Record your message and release to send", image: "/placeholder.png" }
    ]
  },
  {
    id: "wa-5",
    title: "How to Share Files on WhatsApp",
    category: "WhatsApp",
    image: "https://tse2.mm.bing.net/th/id/OIP.rVT3Wm60UZubSjyX_QGUgQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Send documents, photos, and videos in chats.",
  video: "",
    link: "https://www.whatsapp.com",
    steps: [
      { text: "Open the chat", image: "/placeholder.png" },
      { text: "Tap the attachment icon", image: "/placeholder.png" },
      { text: "Select the file/photo/video", image: "/placeholder.png" },
      { text: "Tap 'Send'", image: "/placeholder.png" }
    ]
  },

  // --- Messenger Tutorials ---
  {
    id: "ms-1",
    title: "How to Send Messages on Messenger",
    category: "Messenger",
    image: "https://logos-world.net/wp-content/uploads/2021/02/Facebook-Messenger-Logo-2020-present.jpg",
    description: "Beginner-friendly messaging guide.",
   video: "",
    link: "https://www.messenger.com",
    steps: [
      { text: "Open Messenger app", image: "/placeholder.png" },
      { text: "Tap 'New Message'", image: "/placeholder.png" },
      { text: "Select a contact", image: "/placeholder.png" },
      { text: "Type your message and send", image: "/placeholder.png" }
    ]
  },
  {
    id: "ms-2",
    title: "How to Make Video Calls on Messenger",
    category: "Messenger",
    image: "https://logos-world.net/wp-content/uploads/2021/02/Facebook-Messenger-Logo-2020-present.jpg",
    description: "Connect face-to-face with friends.",
   video: "",
    link: "https://www.messenger.com",
    steps: [
      { text: "Open a chat", image: "/placeholder.png" },
      { text: "Tap the video icon", image: "/placeholder.png" },
      { text: "Wait for the call to connect", image: "/placeholder.png" }
    ]
  },
  {
    id: "ms-3",
    title: "How to Send Stickers on Messenger",
    category: "Messenger",
    image: "https://logos-world.net/wp-content/uploads/2021/02/Facebook-Messenger-Logo-2020-present.jpg",
    description: "Make conversations fun with stickers.",
    video: "",
    link: "https://www.messenger.com",
    steps: [
      { text: "Open a chat", image: "/placeholder.png" },
      { text: "Tap the sticker icon", image: "/placeholder.png" },
      { text: "Select a sticker to send", image: "/placeholder.png" }
    ]
  },
  {
    id: "ms-4",
    title: "How to Create Messenger Groups",
    category: "Messenger",
    image: "https://logos-world.net/wp-content/uploads/2021/02/Facebook-Messenger-Logo-2020-present.jpg",
    description: "Chat with multiple friends simultaneously.",
   video: "",
    link: "https://www.messenger.com",
    steps: [
      { text: "Tap 'New Group'", image: "/placeholder.png" },
      { text: "Add participants", image: "/placeholder.png" },
      { text: "Name your group and create it", image: "/placeholder.png" }
    ]
  },
  {
    id: "ms-5",
    title: "How to Adjust Messenger Notifications",
    category: "Messenger",
    image: "https://logos-world.net/wp-content/uploads/2021/02/Facebook-Messenger-Logo-2020-present.jpg",
    description: "Control when and how you get alerts.",
    video: "",
    link: "https://www.messenger.com",
    steps: [
      { text: "Go to Settings > Notifications", image: "/placeholder.png" },
      { text: "Toggle notification settings", image: "/placeholder.png" },
      { text: "Save your preferences", image: "/placeholder.png" }
    ]
  },

 // --- YouTube Tutorials ---
{
  id: "yt-1",
  title: "How to Search Videos on YouTube",
  category: "YouTube",
  image: "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg",
  description: "Learn how to find videos easily.",
  video: "",
  link: "https://www.youtube.com",
  steps: [
    { text: "Go to youtube.com or open the app", image: "/placeholder.png" },
    { text: "Use the search bar at the top", image: "/placeholder.png" },
    { text: "Type keywords for the video", image: "/placeholder.png" },
    { text: "Press Enter or tap Search to see results", image: "/placeholder.png" }
  ]
},
{
  id: "yt-2",
  title: "How to Subscribe to Channels",
  category: "YouTube",
  image: "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg",
  description: "Follow your favorite creators.",
video: "",
  link: "https://www.youtube.com",
  steps: [
    { text: "Open a video from the channel", image: "/placeholder.png" },
    { text: "Click the 'Subscribe' button below the video", image: "/placeholder.png" },
    { text: "Optional: Click the bell icon for notifications", image: "/placeholder.png" }
  ]
},
{
  id: "yt-3",
  title: "How to Like and Comment on Videos",
  category: "YouTube",
  image: "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg",
  description: "Engage with content creators easily.",
  video: "",
  link: "https://www.youtube.com",
  steps: [
    { text: "Open a YouTube video", image: "/placeholder.png" },
    { text: "Click the thumbs up icon to like", image: "/placeholder.png" },
    { text: "Scroll down to comments and type your message", image: "/placeholder.png" },
    { text: "Click 'Comment' to post it", image: "/placeholder.png" }
  ]
},
{
  id: "yt-4",
  title: "How to Create a YouTube Playlist",
  category: "YouTube",
  image: "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg",
  description: "Organize videos into playlists.",
  video: "",
  link: "https://www.youtube.com",
  steps: [
    { text: "Click 'Save' below a video", image: "/placeholder.png" },
    { text: "Choose an existing playlist or 'Create new playlist'", image: "/placeholder.png" },
    { text: "Name your playlist and set privacy", image: "/placeholder.png" },
    { text: "Click 'Create' to save", image: "/placeholder.png" }
  ]
},
{
  id: "yt-5",
  title: "How to Upload Videos to YouTube",
  category: "YouTube",
  image: "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg",
  description: "Share your own videos with the world.",
 video: "",
  link: "https://www.youtube.com",
  steps: [
    { text: "Click the camera icon with '+'", image: "/placeholder.png"},
    { text: "Select 'Upload video'", image: "/placeholder.png" },
    { text: "Choose the file from your device", image: "/placeholder.png" },
    { text: "Add title, description, and settings", image: "/placeholder.png" },
    { text: "Click 'Publish' to upload", image: "/placeholder.png" }
  ]
},

// --- TikTok Tutorials ---
{
  id: "tt-1",
  title: "How to Create a TikTok Account",
  category: "TikTok",
  image: "https://pngimg.com/uploads/tiktok/tiktok_PNG17.png",
  description: "Beginner's guide to TikTok setup.",
 video: "",
  link: "https://www.tiktok.com",
  steps: [
    { text: "Download TikTok from App Store/Play Store", image: "/placeholder.png" },
    { text: "Open TikTok and tap 'Sign Up'", image: "/placeholder.png" },
    { text: "Use phone, email, or social media to register", image: "/placeholder.png" },
    { text: "Set a username and password", image: "/placeholder.png" }
  ]
},
{
  id: "tt-2",
  title: "How to Upload TikTok Videos",
  category: "TikTok",
  image: "https://pngimg.com/uploads/tiktok/tiktok_PNG17.png",
  description: "Step-by-step video upload guide.",
 video: "",
  link: "https://www.tiktok.com",
  steps: [
    { text: "Tap '+' at the bottom", image: "/placeholder.png" },
    { text: "Record a video or select from gallery", image: "/placeholder.png" },
    { text: "Edit video, add effects, music, and captions", image: "/placeholder.png" },
    { text: "Tap 'Post' to share", image: "/placeholder.png" }
  ]
},
{
  id: "tt-3",
  title: "How to Follow TikTok Creators",
  category: "TikTok",
  image: "https://pngimg.com/uploads/tiktok/tiktok_PNG17.png",
  description: "Discover and follow your favorite creators.",
 video: "",
  link: "https://www.tiktok.com",
  steps: [
    { text: "Open TikTok and search for a user", image: "/placeholder.png" },
    { text: "Go to their profile", image: "/placeholder.png" },
    { text: "Tap 'Follow'", image: "/placeholder.png" }
  ]
},
{
  id: "tt-4",
  title: "How to Like and Comment on TikTok",
  category: "TikTok",
  image: "https://pngimg.com/uploads/tiktok/tiktok_PNG17.png",
  description: "Engage with TikTok videos easily.",
video: "",
  link: "https://www.tiktok.com",
  steps: [
    { text: "Watch a video", image: "/placeholder.png" },
    { text: "Tap the heart to like", image: "/placeholder.png" },
    { text: "Tap the comment icon to write a comment", image: "/placeholder.png" }
  ]
},
{
  id: "tt-5",
  title: "How to Use TikTok Effects",
  category: "TikTok",
  image: "https://pngimg.com/uploads/tiktok/tiktok_PNG17.png",
  description: "Add fun effects to your videos.",
  video: "",
  link: "https://www.tiktok.com",
  steps: [
    { text: "Open the TikTok camera", image: "/placeholder.png" },
    { text: "Tap 'Effects'", image: "/placeholder.png" },
    { text: "Select the desired effect", image: "/placeholder.png" },
    { text: "Record or apply effect to your video", image: "/placeholder.png" }
  ]
},

// --- Twitter Tutorials ---
// --- X Tutorials ---
{
  id: "x-1",
  title: "How to Create an X Account",
  category: "X",
  image: "https://tse2.mm.bing.net/th/id/OIP.TD1sz3urAFOfFe42OrGbqQHaE8?w=900&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
  description: "Step-by-step setup for beginners.",
video: "",
  link: "https://www.x.com",
  steps: [
    { text: "Go to x.com or open the app", image: "/placeholder.png" },
    { text: "Click 'Sign Up' and enter your details", image: "/placeholder.png" },
    { text: "Set username and password", image: "/placeholder.png" },
    { text: "Verify your email or phone number", image: "/placeholder.png" }
  ]
},
{
  id: "x-2",
  title: "How to Post on X",
  category: "X",
  image: "https://tse2.mm.bing.net/th/id/OIP.TD1sz3urAFOfFe42OrGbqQHaE8?w=900&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
  description: "Post updates and messages easily.",
 video: "",
  link: "https://www.x.com",
  steps: [
    { text: "Click the Post button", image: "/placeholder.png" },
    { text: "Type your message or add media", image: "/placeholder.png" },
    { text: "Click 'Post' to share", image: "/placeholder.png" }
  ]
},
{
  id: "x-3",
  title: "How to Repost and Like on X",
  category: "X",
  image: "https://tse2.mm.bing.net/th/id/OIP.TD1sz3urAFOfFe42OrGbqQHaE8?w=900&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
  description: "Engage with posts quickly.",
video: "",
  link: "https://www.x.com",
  steps: [
    { text: "Click the Repost icon to share", image: "/placeholder.png" },
    { text: "Click the heart to like a post", image: "/placeholder.png" }
  ]
},
{
  id: "x-4",
  title: "How to Follow Accounts on X",
  category: "X",
  image: "https://tse2.mm.bing.net/th/id/OIP.TD1sz3urAFOfFe42OrGbqQHaE8?w=900&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
  description: "Keep up with interesting people.",
 video: "",
  link: "https://www.x.com",
  steps: [
    { text: "Search for an account", image: "/placeholder.png" },
    { text: "Go to profile and click 'Follow'", image: "/placeholder.png" }
  ]
},
{
  id: "x-5",
  title: "How to Use X Hashtags",
  category: "X",
  image: "https://tse2.mm.bing.net/th/id/OIP.TD1sz3urAFOfFe42OrGbqQHaE8?w=900&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
  description: "Discover topics and trends.",
video: "",
  link: "https://www.x.com",
  steps: [
    { text: "Add '#' before keywords in posts", image: "/placeholder.png" },
    { text: "Click hashtags to explore topics", image: "/placeholder.png" }
  ]
},




// --- Snapchat Tutorials ---
{
  id: "sc-1",
  title: "How to Create a Snapchat Account",
  category: "Snapchat",
  image: "https://logos-world.net/wp-content/uploads/2020/06/Snapchat-Logo.jpg",
  description: "Beginner's guide to Snapchat.",
video: "",
  link: "https://www.snapchat.com",
  steps: [
    { text: "Download Snapchat and tap Sign Up", image: "/placeholder.png" },
    { text: "Enter name, email, and birthday", image: "/placeholder.png" },
    { text: "Create username and password", image: "/placeholder.png" },
    { text: "Verify account via email/phone", image: "/placeholder.png" }
  ]
},
{
  id: "sc-2",
  title: "How to Add Friends on Snapchat",
  category: "Snapchat",
  image: "https://logos-world.net/wp-content/uploads/2020/06/Snapchat-Logo.jpg",
  description: "Connect with friends quickly.",
 video: "",
  link: "https://www.snapchat.com",
  steps: [
    { text: "Open Snapchat and tap 'Add Friends'", image: "/placeholder.png" },
    { text: "Search by username or scan Snapcode", image: "/placeholder.png" },
    { text: "Tap '+' to add", image: "/placeholder.png" }
  ]
},
{
  id: "sc-3",
  title: "How to Send Snaps",
  category: "Snapchat",
  image: "https://logos-world.net/wp-content/uploads/2020/06/Snapchat-Logo.jpg",
  description: "Learn to send photos and videos.",
video: "",
  link: "https://www.snapchat.com",
  steps: [
    { text: "Take a photo or video with the camera", image: "/placeholder.png" },
    { text: "Tap the arrow to send", image: "/placeholder.png" },
    { text: "Select recipients and send", image: "/placeholder.png" }
  ]
},
{
  id: "sc-4",
  title: "How to Use Snapchat Filters",
  category: "Snapchat",
  image: "https://logos-world.net/wp-content/uploads/2020/06/Snapchat-Logo.jpg",
  description: "Make your snaps creative and fun.",
 video: "",
  link: "https://www.snapchat.com",
  steps: [
    { text: "Swipe left or right to apply filters", image: "/placeholder.png" },
    { text: "Tap to add stickers or text", image: "/placeholder.png" },
    { text: "Send your snap", image: "/placeholder.png" }
  ]
},
{
  id: "sc-5",
  title: "How to Chat on Snapchat",
  category: "Snapchat",
  image: "https://logos-world.net/wp-content/uploads/2020/06/Snapchat-Logo.jpg",
  description: "Send instant messages easily.",
 video: "",
  link: "https://www.snapchat.com",
  steps: [
    { text: "Open chat from friends list", image: "/placeholder.png" },
    { text: "Type your message or send stickers", image: "/placeholder.png" },
    { text: "Tap send to deliver", image: "/placeholder.png" }
  ]
},

];

export default tutorials;
