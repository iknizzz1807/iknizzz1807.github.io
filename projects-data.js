const allProjects = [
  {
    id: "skillforge",
    title: "SkillForge",
    type: "Web Application",
    categories: ["web", "ai"],
    image: "images/skillforge.png",
    description:
      "A platform connecting students and businesses. My role was a fullstack developer and architect, designing the system from the ground up.",
    features: [
      "Real-time job matching for students.",
      "Company dashboards for managing applications.",
      "AI-powered resume parsing and skill extraction.",
    ],
    tech: ["SvelteKit", "Go", "Python", "FastAPI", "MongoDB"],
    links: {
      code: "https://github.com/iknizzz1807/SkillForge",
    },
    isFeatured: true, // Hiển thị trên trang chủ
  },
  {
    id: "learn2aid",
    title: "Learn2Aid",
    type: "Mobile AI Powered App",
    categories: ["web", "ai"],
    image: "images/learn2aid.png",
    description:
      "An AI-powered mobile app for learning and practicing first aid. I developed the backend services and the admin interface.",
    features: [
      "Interactive first-aid lessons and tutorials.",
      "AI video analysis for practice session feedback.",
      "Admin dashboard for content management.",
    ],
    tech: ["HTML/CSS/JS", "Firebase", "Go", "Python", "FastAPI"],
    links: {
      code: "https://github.com/iknizzz1807/learn2aid",
    },
    isFeatured: true, // Hiển thị trên trang chủ
  },
  {
    id: "realtime-chatroom",
    title: "Realtime Chatroom",
    type: "Web Application",
    categories: ["web"],
    image: "images/chatapp.png",
    description:
      "A modern chat app with real-time messaging, user authentication, and multiple rooms, built for performance and scalability.",
    features: [
      "Live messaging with WebSocket technology.",
      "Secure user authentication and profiles.",
      "Create and join multiple chat channels.",
    ],
    tech: ["SvelteKit", "Pocketbase", "WebSocket"],
    links: {
      code: "https://github.com/iknizzz1807/chat-app-v2",
    },
    isFeatured: false,
  },
  {
    id: "personal-blog",
    title: "Personal Blog Platform",
    type: "Content Management System",
    categories: ["web"],
    image: "images/blog.png",
    description:
      "A minimalist blog for sharing tech insights, featuring Markdown support and a clean, responsive design.",
    features: [
      "Easy content creation with Markdown editor.",
      "Fast-loading pages with server-side rendering.",
      "Tagging system for content organization.",
    ],
    tech: ["SvelteKit", "Firebase"],
    links: {
      code: "https://github.com/iknizzz1807/blog-site",
    },
    isFeatured: false,
  },
  {
    id: "forward-thinking-game",
    title: "Forward Thinking",
    type: "Game Development",
    categories: ["game"],
    image: "images/game.png",
    description:
      "An innovative puzzle game developed for the GMTK Game Jam 2024. The theme was 'Roles Reversed.'",
    features: [
      "Unique puzzle mechanics based on future prediction.",
      "Engaging level design and atmospheric art style.",
      "Developed and submitted within a 48-hour timeframe.",
    ],
    tech: ["Godot", "GDScript", "Game Design"],
    links: {
      play: "https://kohrabi.itch.io/forward-thinking",
    },
    isFeatured: false,
  },
  {
    id: "shooter-game",
    title: "Shooter Game",
    type: "Game Development",
    categories: ["game", "web"],
    image: "images/shooter.png",
    description:
      "A simple browser-based multiplayer shooter game built with WebSockets for real-time action.",
    features: [
      "Singleplayer and multiplayer modes.",
      "Real-time player synchronization using a Go backend.",
      "Simple, fast-paced top-down gameplay.",
    ],
    tech: ["TypeScript", "Go", "WebSocket"],
    links: {
      code: "https://github.com/iknizzz1807/ShooterGame",
    },
    isFeatured: false,
  },
];

// {
//   id: "super-app",
//   title: "Super App",
//   type: "Web Application",
//   categories: ["web"], // 'web', 'ai', 'game'
//   image: "images/superapp.png", // Đảm bảo có ảnh này trong thư mục images
//   description: "Đây là mô tả về ứng dụng tuyệt vời của tôi.",
//   features: [
//     "Tính năng 1.",
//     "Tính năng 2.",
//   ],
//   tech: ["React", "Node.js", "MongoDB"],
//   links: {
//     code: "https://github.com/link-to-repo",
//     live: "https://link-to-live-demo" // Tùy chọn, có thể thêm link xem trực tiếp
//   },
//   isFeatured: false, // Đặt là true nếu muốn nó xuất hiện trên trang chủ
// }
