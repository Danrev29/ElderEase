// tutorialData.ts
const tutorials = [
  // --- Facebook Tutorials ---
  {
    id: "fb-1",
    title: "How to Create a Facebook Account",
    category: "Facebook",
    image: "https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png",
    description: "A simple guide for new Facebook users.",
    video: "/videos/facebook1.mp4",
    link: "https://www.facebook.com",
    steps: [
      { text: "Go to facebook.com", image: "/tutorials/steps/fb1-step1.png" },
      { text: "Click 'Create New Account'", image: "/tutorials/steps/fb1-step2.png" },
      { text: "Fill out your name, email, and password", image: "/tutorials/steps/fb1-step3.png" },
      { text: "Click 'Sign Up' and verify your account", image: "/tutorials/steps/fb1-step4.png" }
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
      { text: "Log in to your Facebook account", image: "/tutorials/steps/fb2-step1.png" },
      { text: "Click on 'What's on your mind?'", image: "/tutorials/steps/fb2-step2.png" },
      { text: "Type your status or upload a photo/video", image: "/tutorials/steps/fb2-step3.png" },
      { text: "Click 'Post' to share with friends", image: "/tutorials/steps/fb2-step4.png" }
    ]
  },
  {
    id: "fb-3",
    title: "How to Add Friends on Facebook",
    category: "Facebook",
    image: "https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png",
    description: "Step-by-step instructions to connect with friends.",
    video: "/videos/facebook3.mp4",
    link: "https://www.facebook.com",
    steps: [
      { text: "Go to the 'Find Friends' section", image: "/tutorials/steps/fb3-step1.png" },
      { text: "Search for a friend's name", image: "/tutorials/steps/fb3-step2.png" },
      { text: "Click 'Add Friend' next to their profile", image: "/tutorials/steps/fb3-step3.png" },
      { text: "Wait for confirmation if necessary", image: "/tutorials/steps/fb3-step4.png" }
    ]
  },
  {
    id: "fb-4",
    title: "How to Create a Facebook Page",
    category: "Facebook",
    image: "https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png",
    description: "Guide for starting a page for business or community.",
    video: "/videos/facebook4.mp4",
    link: "https://www.facebook.com",
    steps: [
      { text: "Log in to Facebook", image: "/tutorials/steps/fb4-step1.png" },
      { text: "Click 'Pages' and then 'Create New Page'", image: "/tutorials/steps/fb4-step2.png" },
      { text: "Fill in page name, category, and description", image: "/tutorials/steps/fb4-step3.png" },
      { text: "Click 'Create Page'", image: "/tutorials/steps/fb4-step4.png" }
    ]
  },
  {
    id: "fb-5",
    title: "How to Adjust Facebook Privacy Settings",
    category: "Facebook",
    image: "https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png",
    description: "Keep your account safe with simple settings.",
    video: "/videos/facebook5.mp4",
    link: "https://www.facebook.com/settings",
    steps: [
      { text: "Go to Settings & Privacy", image: "/tutorials/steps/fb5-step1.png" },
      { text: "Select 'Privacy Settings'", image: "/tutorials/steps/fb5-step2.png" },
      { text: "Adjust who can see your posts and info", image: "/tutorials/steps/fb5-step3.png" },
      { text: "Save your changes", image: "/tutorials/steps/fb5-step4.png" }
    ]
  },

  // --- Instagram Tutorials ---
  {
    id: "ig-1",
    title: "How to Create an Instagram Account",
    category: "Instagram",
    image: "https://tse4.mm.bing.net/th/id/OIP._ZYtCLwJgEqV1bpMdAI23wHaFQ?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Step-by-step account setup for beginners.",
    video: "/videos/instagram1.mp4",
    link: "https://www.instagram.com",
    steps: [
      { text: "Download the Instagram app", image: "/tutorials/steps/ig1-step1.png" },
      { text: "Open the app and tap 'Sign Up'", image: "/tutorials/steps/ig1-step2.png" },
      { text: "Enter your email or phone number", image: "/tutorials/steps/ig1-step3.png" },
      { text: "Set a username and password", image: "/tutorials/steps/ig1-step4.png" },
      { text: "Complete profile info and tap 'Next'", image: "/tutorials/steps/ig1-step5.png" }
    ]
  },
  {
    id: "ig-2",
    title: "How to Post Photos on Instagram",
    category: "Instagram",
    image: "https://tse4.mm.bing.net/th/id/OIP._ZYtCLwJgEqV1bpMdAI23wHaFQ?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Learn to upload and share pictures easily.",
    video: "/videos/instagram2.mp4",
    link: "https://www.instagram.com",
    steps: [
      { text: "Open Instagram and tap '+' button", image: "/tutorials/steps/ig2-step1.png" },
      { text: "Select a photo from your gallery or take one", image: "/tutorials/steps/ig2-step2.png" },
      { text: "Apply filters or edit the photo", image: "/tutorials/steps/ig2-step3.png" },
      { text: "Add a caption and hashtags", image: "/tutorials/steps/ig2-step4.png" },
      { text: "Tap 'Share' to post the photo", image: "/tutorials/steps/ig2-step5.png" }
    ]
  },
  {
    id: "ig-3",
    title: "How to Use Instagram Stories",
    category: "Instagram",
    image: "https://tse4.mm.bing.net/th/id/OIP._ZYtCLwJgEqV1bpMdAI23wHaFQ?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Share moments quickly with Stories.",
    video: "/videos/instagram3.mp4",
    link: "https://www.instagram.com",
    steps: [
      { text: "Tap your profile picture at the top left", image: "/tutorials/steps/ig3-step1.png" },
      { text: "Take a photo/video or upload from gallery", image: "/tutorials/steps/ig3-step2.png" },
      { text: "Add text, stickers, or filters", image: "/tutorials/steps/ig3-step3.png" },
      { text: "Tap 'Your Story' to share", image: "/tutorials/steps/ig3-step4.png" }
    ]
  },
  {
    id: "ig-4",
    title: "How to Follow People on Instagram",
    category: "Instagram",
    image: "https://tse4.mm.bing.net/th/id/OIP._ZYtCLwJgEqV1bpMdAI23wHaFQ?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Connect with friends and favorite accounts.",
    video: "/videos/instagram4.mp4",
    link: "https://www.instagram.com",
    steps: [
      { text: "Use the search tab to find people", image: "/tutorials/steps/ig4-step1.png" },
      { text: "Click 'Follow' next to their profile", image: "/tutorials/steps/ig4-step2.png" },
      { text: "Optional: Turn on notifications for new posts", image: "/tutorials/steps/ig4-step3.png" }
    ]
  },
  {
    id: "ig-5",
    title: "How to Use Instagram Reels",
    category: "Instagram",
    image: "https://tse4.mm.bing.net/th/id/OIP._ZYtCLwJgEqV1bpMdAI23wHaFQ?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Create short, fun videos with Reels.",
    video: "/videos/instagram5.mp4",
    link: "https://www.instagram.com",
    steps: [
      { text: "Tap the Reels icon", image: "/tutorials/steps/ig5-step1.png" },
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
    video: "/videos/whatsapp1.mp4",
    link: "https://www.whatsapp.com",
    steps: [
      { text: "Open WhatsApp app", image: "/tutorials/steps/wa1-step1.png" },
      { text: "Tap the 'Chats' tab", image: "/tutorials/steps/wa1-step2.png" },
      { text: "Select a contact or tap 'New Chat'", image: "/tutorials/steps/wa1-step3.png" },
      { text: "Type your message", image: "/tutorials/steps/wa1-step4.png" },
      { text: "Tap 'Send' button", image: "/tutorials/steps/wa1-step5.png" }
    ]
  },
  {
    id: "wa-2",
    title: "How to Make a WhatsApp Call",
    category: "WhatsApp",
    image: "https://tse2.mm.bing.net/th/id/OIP.rVT3Wm60UZubSjyX_QGUgQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Learn voice and video calls easily.",
    video: "/videos/whatsapp2.mp4",
    link: "https://www.whatsapp.com",
    steps: [
      { text: "Open a chat with a contact", image: "/tutorials/steps/wa2-step1.png" },
      { text: "Tap the phone or video icon", image: "/tutorials/steps/wa2-step2.png" },
      { text: "Wait for the call to connect", image: "/tutorials/steps/wa2-step3.png" }
    ]
  },
  {
    id: "wa-3",
    title: "How to Create a WhatsApp Group",
    category: "WhatsApp",
    image: "https://tse2.mm.bing.net/th/id/OIP.rVT3Wm60UZubSjyX_QGUgQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Communicate with multiple people at once.",
    video: "/videos/whatsapp3.mp4",
    link: "https://www.whatsapp.com",
    steps: [
      { text: "Go to the 'Chats' tab", image: "/tutorials/steps/wa3-step1.png" },
      { text: "Tap 'New Group'", image: "/tutorials/steps/wa3-step2.png" },
      { text: "Select participants and tap 'Next'", image: "/tutorials/steps/wa3-step3.png" },
      { text: "Give the group a name and create it", image: "/tutorials/steps/wa3-step4.png" }
    ]
  },
  {
    id: "wa-4",
    title: "How to Send WhatsApp Voice Messages",
    category: "WhatsApp",
    image: "https://tse2.mm.bing.net/th/id/OIP.rVT3Wm60UZubSjyX_QGUgQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Record and send voice messages easily.",
    video: "/videos/whatsapp4.mp4",
    link: "https://www.whatsapp.com",
    steps: [
      { text: "Open a chat", image: "/tutorials/steps/wa4-step1.png" },
      { text: "Hold the microphone icon", image: "/tutorials/steps/wa4-step2.png" },
      { text: "Record your message and release to send", image: "/tutorials/steps/wa4-step3.png" }
    ]
  },
  {
    id: "wa-5",
    title: "How to Share Files on WhatsApp",
    category: "WhatsApp",
    image: "https://tse2.mm.bing.net/th/id/OIP.rVT3Wm60UZubSjyX_QGUgQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Send documents, photos, and videos in chats.",
    video: "/videos/whatsapp5.mp4",
    link: "https://www.whatsapp.com",
    steps: [
      { text: "Open the chat", image: "/tutorials/steps/wa5-step1.png" },
      { text: "Tap the attachment icon", image: "/tutorials/steps/wa5-step2.png" },
      { text: "Select the file/photo/video", image: "/tutorials/steps/wa5-step3.png" },
      { text: "Tap 'Send'", image: "/tutorials/steps/wa5-step4.png" }
    ]
  },

  // --- Messenger Tutorials ---
  {
    id: "ms-1",
    title: "How to Send Messages on Messenger",
    category: "Messenger",
    image: "https://logos-world.net/wp-content/uploads/2021/02/Facebook-Messenger-Logo-2020-present.jpg",
    description: "Beginner-friendly messaging guide.",
    video: "/videos/messenger1.mp4",
    link: "https://www.messenger.com",
    steps: [
      { text: "Open Messenger app", image: "/tutorials/steps/ms1-step1.png" },
      { text: "Tap 'New Message'", image: "/tutorials/steps/ms1-step2.png" },
      { text: "Select a contact", image: "/tutorials/steps/ms1-step3.png" },
      { text: "Type your message and send", image: "/tutorials/steps/ms1-step4.png" }
    ]
  },
  {
    id: "ms-2",
    title: "How to Make Video Calls on Messenger",
    category: "Messenger",
    image: "https://logos-world.net/wp-content/uploads/2021/02/Facebook-Messenger-Logo-2020-present.jpg",
    description: "Connect face-to-face with friends.",
    video: "/videos/messenger2.mp4",
    link: "https://www.messenger.com",
    steps: [
      { text: "Open a chat", image: "/tutorials/steps/ms2-step1.png" },
      { text: "Tap the video icon", image: "/tutorials/steps/ms2-step2.png" },
      { text: "Wait for the call to connect", image: "/tutorials/steps/ms2-step3.png" }
    ]
  },
  {
    id: "ms-3",
    title: "How to Send Stickers on Messenger",
    category: "Messenger",
    image: "https://logos-world.net/wp-content/uploads/2021/02/Facebook-Messenger-Logo-2020-present.jpg",
    description: "Make conversations fun with stickers.",
    video: "/videos/messenger3.mp4",
    link: "https://www.messenger.com",
    steps: [
      { text: "Open a chat", image: "/tutorials/steps/ms3-step1.png" },
      { text: "Tap the sticker icon", image: "/tutorials/steps/ms3-step2.png" },
      { text: "Select a sticker to send", image: "/tutorials/steps/ms3-step3.png" }
    ]
  },
  {
    id: "ms-4",
    title: "How to Create Messenger Groups",
    category: "Messenger",
    image: "https://logos-world.net/wp-content/uploads/2021/02/Facebook-Messenger-Logo-2020-present.jpg",
    description: "Chat with multiple friends simultaneously.",
    video: "/videos/messenger4.mp4",
    link: "https://www.messenger.com",
    steps: [
      { text: "Tap 'New Group'", image: "/tutorials/steps/ms4-step1.png" },
      { text: "Add participants", image: "/tutorials/steps/ms4-step2.png" },
      { text: "Name your group and create it", image: "/tutorials/steps/ms4-step3.png" }
    ]
  },
  {
    id: "ms-5",
    title: "How to Adjust Messenger Notifications",
    category: "Messenger",
    image: "https://logos-world.net/wp-content/uploads/2021/02/Facebook-Messenger-Logo-2020-present.jpg",
    description: "Control when and how you get alerts.",
    video: "/videos/messenger5.mp4",
    link: "https://www.messenger.com",
    steps: [
      { text: "Go to Settings > Notifications", image: "/tutorials/steps/ms5-step1.png" },
      { text: "Toggle notification settings", image: "/tutorials/steps/ms5-step2.png" },
      { text: "Save your preferences", image: "/tutorials/steps/ms5-step3.png" }
    ]
  },

 // --- YouTube Tutorials ---
{
  id: "yt-1",
  title: "How to Search Videos on YouTube",
  category: "YouTube",
  image: "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg",
  description: "Learn how to find videos easily.",
  video: "/videos/youtube1.mp4",
  link: "https://www.youtube.com",
  steps: [
    { text: "Go to youtube.com or open the app", image: "/tutorials/steps/yt1-step1.png" },
    { text: "Use the search bar at the top", image: "/tutorials/steps/yt1-step2.png" },
    { text: "Type keywords for the video", image: "/tutorials/steps/yt1-step3.png" },
    { text: "Press Enter or tap Search to see results", image: "/tutorials/steps/yt1-step4.png" }
  ]
},
{
  id: "yt-2",
  title: "How to Subscribe to Channels",
  category: "YouTube",
  image: "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg",
  description: "Follow your favorite creators.",
  video: "/videos/youtube2.mp4",
  link: "https://www.youtube.com",
  steps: [
    { text: "Open a video from the channel", image: "/tutorials/steps/yt2-step1.png" },
    { text: "Click the 'Subscribe' button below the video", image: "/tutorials/steps/yt2-step2.png" },
    { text: "Optional: Click the bell icon for notifications", image: "/tutorials/steps/yt2-step3.png" }
  ]
},
{
  id: "yt-3",
  title: "How to Like and Comment on Videos",
  category: "YouTube",
  image: "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg",
  description: "Engage with content creators easily.",
  video: "/videos/youtube3.mp4",
  link: "https://www.youtube.com",
  steps: [
    { text: "Open a YouTube video", image: "/tutorials/steps/yt3-step1.png" },
    { text: "Click the thumbs up icon to like", image: "/tutorials/steps/yt3-step2.png" },
    { text: "Scroll down to comments and type your message", image: "/tutorials/steps/yt3-step3.png" },
    { text: "Click 'Comment' to post it", image: "/tutorials/steps/yt3-step4.png" }
  ]
},
{
  id: "yt-4",
  title: "How to Create a YouTube Playlist",
  category: "YouTube",
  image: "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg",
  description: "Organize videos into playlists.",
  video: "/videos/youtube4.mp4",
  link: "https://www.youtube.com",
  steps: [
    { text: "Click 'Save' below a video", image: "/tutorials/steps/yt4-step1.png" },
    { text: "Choose an existing playlist or 'Create new playlist'", image: "/tutorials/steps/yt4-step2.png" },
    { text: "Name your playlist and set privacy", image: "/tutorials/steps/yt4-step3.png" },
    { text: "Click 'Create' to save", image: "/tutorials/steps/yt4-step4.png" }
  ]
},
{
  id: "yt-5",
  title: "How to Upload Videos to YouTube",
  category: "YouTube",
  image: "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg",
  description: "Share your own videos with the world.",
  video: "/videos/youtube5.mp4",
  link: "https://www.youtube.com",
  steps: [
    { text: "Click the camera icon with '+'", image: "/tutorials/steps/yt5-step1.png" },
    { text: "Select 'Upload video'", image: "/tutorials/steps/yt5-step2.png" },
    { text: "Choose the file from your device", image: "/tutorials/steps/yt5-step3.png" },
    { text: "Add title, description, and settings", image: "/tutorials/steps/yt5-step4.png" },
    { text: "Click 'Publish' to upload", image: "/tutorials/steps/yt5-step5.png" }
  ]
},

// --- TikTok Tutorials ---
{
  id: "tt-1",
  title: "How to Create a TikTok Account",
  category: "TikTok",
  image: "https://pngimg.com/uploads/tiktok/tiktok_PNG17.png",
  description: "Beginner's guide to TikTok setup.",
  video: "/videos/tiktok1.mp4",
  link: "https://www.tiktok.com",
  steps: [
    { text: "Download TikTok from App Store/Play Store", image: "/tutorials/steps/tt1-step1.png" },
    { text: "Open TikTok and tap 'Sign Up'", image: "/tutorials/steps/tt1-step2.png" },
    { text: "Use phone, email, or social media to register", image: "/tutorials/steps/tt1-step3.png" },
    { text: "Set a username and password", image: "/tutorials/steps/tt1-step4.png" }
  ]
},
{
  id: "tt-2",
  title: "How to Upload TikTok Videos",
  category: "TikTok",
  image: "https://pngimg.com/uploads/tiktok/tiktok_PNG17.png",
  description: "Step-by-step video upload guide.",
  video: "/videos/tiktok2.mp4",
  link: "https://www.tiktok.com",
  steps: [
    { text: "Tap '+' at the bottom", image: "/tutorials/steps/tt2-step1.png" },
    { text: "Record a video or select from gallery", image: "/tutorials/steps/tt2-step2.png" },
    { text: "Edit video, add effects, music, and captions", image: "/tutorials/steps/tt2-step3.png" },
    { text: "Tap 'Post' to share", image: "/tutorials/steps/tt2-step4.png" }
  ]
},
{
  id: "tt-3",
  title: "How to Follow TikTok Creators",
  category: "TikTok",
  image: "https://pngimg.com/uploads/tiktok/tiktok_PNG17.png",
  description: "Discover and follow your favorite creators.",
  video: "/videos/tiktok3.mp4",
  link: "https://www.tiktok.com",
  steps: [
    { text: "Open TikTok and search for a user", image: "/tutorials/steps/tt3-step1.png" },
    { text: "Go to their profile", image: "/tutorials/steps/tt3-step2.png" },
    { text: "Tap 'Follow'", image: "/tutorials/steps/tt3-step3.png" }
  ]
},
{
  id: "tt-4",
  title: "How to Like and Comment on TikTok",
  category: "TikTok",
  image: "https://pngimg.com/uploads/tiktok/tiktok_PNG17.png",
  description: "Engage with TikTok videos easily.",
  video: "/videos/tiktok4.mp4",
  link: "https://www.tiktok.com",
  steps: [
    { text: "Watch a video", image: "/tutorials/steps/tt4-step1.png" },
    { text: "Tap the heart to like", image: "/tutorials/steps/tt4-step2.png" },
    { text: "Tap the comment icon to write a comment", image: "/tutorials/steps/tt4-step3.png" }
  ]
},
{
  id: "tt-5",
  title: "How to Use TikTok Effects",
  category: "TikTok",
  image: "https://pngimg.com/uploads/tiktok/tiktok_PNG17.png",
  description: "Add fun effects to your videos.",
  video: "/videos/tiktok5.mp4",
  link: "https://www.tiktok.com",
  steps: [
    { text: "Open the TikTok camera", image: "/tutorials/steps/tt5-step1.png" },
    { text: "Tap 'Effects'", image: "/tutorials/steps/tt5-step2.png" },
    { text: "Select the desired effect", image: "/tutorials/steps/tt5-step3.png" },
    { text: "Record or apply effect to your video", image: "/tutorials/steps/tt5-step4.png" }
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
  video: "/videos/x1.mp4",
  link: "https://www.x.com",
  steps: [
    { text: "Go to x.com or open the app", image: "/tutorials/steps/x1-step1.png" },
    { text: "Click 'Sign Up' and enter your details", image: "/tutorials/steps/x1-step2.png" },
    { text: "Set username and password", image: "/tutorials/steps/x1-step3.png" },
    { text: "Verify your email or phone number", image: "/tutorials/steps/x1-step4.png" }
  ]
},
{
  id: "x-2",
  title: "How to Post on X",
  category: "X",
  image: "https://tse2.mm.bing.net/th/id/OIP.TD1sz3urAFOfFe42OrGbqQHaE8?w=900&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
  description: "Post updates and messages easily.",
  video: "/videos/x2.mp4",
  link: "https://www.x.com",
  steps: [
    { text: "Click the Post button", image: "/tutorials/steps/x2-step1.png" },
    { text: "Type your message or add media", image: "/tutorials/steps/x2-step2.png" },
    { text: "Click 'Post' to share", image: "/tutorials/steps/x2-step3.png" }
  ]
},
{
  id: "x-3",
  title: "How to Repost and Like on X",
  category: "X",
  image: "https://tse2.mm.bing.net/th/id/OIP.TD1sz3urAFOfFe42OrGbqQHaE8?w=900&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
  description: "Engage with posts quickly.",
  video: "/videos/x3.mp4",
  link: "https://www.x.com",
  steps: [
    { text: "Click the Repost icon to share", image: "/tutorials/steps/x3-step1.png" },
    { text: "Click the heart to like a post", image: "/tutorials/steps/x3-step2.png" }
  ]
},
{
  id: "x-4",
  title: "How to Follow Accounts on X",
  category: "X",
  image: "https://tse2.mm.bing.net/th/id/OIP.TD1sz3urAFOfFe42OrGbqQHaE8?w=900&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
  description: "Keep up with interesting people.",
  video: "/videos/x4.mp4",
  link: "https://www.x.com",
  steps: [
    { text: "Search for an account", image: "/tutorials/steps/x4-step1.png" },
    { text: "Go to profile and click 'Follow'", image: "/tutorials/steps/x4-step2.png" }
  ]
},
{
  id: "x-5",
  title: "How to Use X Hashtags",
  category: "X",
  image: "https://tse2.mm.bing.net/th/id/OIP.TD1sz3urAFOfFe42OrGbqQHaE8?w=900&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
  description: "Discover topics and trends.",
  video: "/videos/x5.mp4",
  link: "https://www.x.com",
  steps: [
    { text: "Add '#' before keywords in posts", image: "/tutorials/steps/x5-step1.png" },
    { text: "Click hashtags to explore topics", image: "/tutorials/steps/x5-step2.png" }
  ]
},




// --- Snapchat Tutorials ---
{
  id: "sc-1",
  title: "How to Create a Snapchat Account",
  category: "Snapchat",
  image: "https://logos-world.net/wp-content/uploads/2020/06/Snapchat-Logo.jpg",
  description: "Beginner's guide to Snapchat.",
  video: "/videos/snapchat1.mp4",
  link: "https://www.snapchat.com",
  steps: [
    { text: "Download Snapchat and tap Sign Up", image: "/tutorials/steps/sc1-step1.png" },
    { text: "Enter name, email, and birthday", image: "/tutorials/steps/sc1-step2.png" },
    { text: "Create username and password", image: "/tutorials/steps/sc1-step3.png" },
    { text: "Verify account via email/phone", image: "/tutorials/steps/sc1-step4.png" }
  ]
},
{
  id: "sc-2",
  title: "How to Add Friends on Snapchat",
  category: "Snapchat",
  image: "https://logos-world.net/wp-content/uploads/2020/06/Snapchat-Logo.jpg",
  description: "Connect with friends quickly.",
  video: "/videos/snapchat2.mp4",
  link: "https://www.snapchat.com",
  steps: [
    { text: "Open Snapchat and tap 'Add Friends'", image: "/tutorials/steps/sc2-step1.png" },
    { text: "Search by username or scan Snapcode", image: "/tutorials/steps/sc2-step2.png" },
    { text: "Tap '+' to add", image: "/tutorials/steps/sc2-step3.png" }
  ]
},
{
  id: "sc-3",
  title: "How to Send Snaps",
  category: "Snapchat",
  image: "https://logos-world.net/wp-content/uploads/2020/06/Snapchat-Logo.jpg",
  description: "Learn to send photos and videos.",
  video: "/videos/snapchat3.mp4",
  link: "https://www.snapchat.com",
  steps: [
    { text: "Take a photo or video with the camera", image: "/tutorials/steps/sc3-step1.png" },
    { text: "Tap the arrow to send", image: "/tutorials/steps/sc3-step2.png" },
    { text: "Select recipients and send", image: "/tutorials/steps/sc3-step3.png" }
  ]
},
{
  id: "sc-4",
  title: "How to Use Snapchat Filters",
  category: "Snapchat",
  image: "https://logos-world.net/wp-content/uploads/2020/06/Snapchat-Logo.jpg",
  description: "Make your snaps creative and fun.",
  video: "/videos/snapchat4.mp4",
  link: "https://www.snapchat.com",
  steps: [
    { text: "Swipe left or right to apply filters", image: "/tutorials/steps/sc4-step1.png" },
    { text: "Tap to add stickers or text", image: "/tutorials/steps/sc4-step2.png" },
    { text: "Send your snap", image: "/tutorials/steps/sc4-step3.png" }
  ]
},
{
  id: "sc-5",
  title: "How to Chat on Snapchat",
  category: "Snapchat",
  image: "https://logos-world.net/wp-content/uploads/2020/06/Snapchat-Logo.jpg",
  description: "Send instant messages easily.",
  video: "/videos/snapchat5.mp4",
  link: "https://www.snapchat.com",
  steps: [
    { text: "Open chat from friends list", image: "/tutorials/steps/sc5-step1.png" },
    { text: "Type your message or send stickers", image: "/tutorials/steps/sc5-step2.png" },
    { text: "Tap send to deliver", image: "/tutorials/steps/sc5-step3.png" }
  ]
},

];

export default tutorials;
