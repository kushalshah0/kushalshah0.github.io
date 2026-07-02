// Portfolio Data - filled from kushalshah0.github.io

export const personalInfo = {
  name: "Kushal Shah",
  role: "Full Stack Developer",
  tagline:
    "Motivated and adaptable developer passionate about learning and building impactful web experiences.",
  email: "dev@kushalshah.com.np",
  location: "Kathmandu, Nepal",
  // Using an existing image from the older portfolio repo (keeps portfolio-pro self-contained)
  avatarUrl:
    "https://raw.githubusercontent.com/kushalshah0/kushalshah0.github.io/main/public/HeroImage.png",
  // In the source portfolio this is a website link rather than a downloadable PDF
  resumeUrl: "https://www.kushalshah.com.np",
};

export const socialLinks = {
  github: "https://github.com/kushalshah0",
  linkedin: "https://www.linkedin.com/in/",
  twitter: "https://twitter.com/",
  email: "mailto:dev@kushalshah.com.np",
};

export const about = {
  description: [
    "I'm a motivated and adaptable Full Stack Developer, constantly seeking new challenges.",
    "Driven by a passion for learning, I'm committed to delivering top-notch results. With a positive attitude and a growth mindset, I'm prepared to make a significant impact and achieve remarkable outcomes.",
  ],
  stats: [
    { label: "Years Experience", value: "2020 - Present" },
    { label: "Projects Completed", value: "9+" },
    { label: "Technologies", value: "20+" },
    { label: "Open Source", value: "Active" },
  ],
};

export const skills = {
  frontend: [
    "React Js",
    "Next Js",
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Material UI",
    "Flutter",
  ],
  backend: ["Node Js", "Express Js", "Python", "MySQL", "MongoDB", "Firebase"],
  tools: [
    "Git",
    "GitHub",
    "Docker",
    "Netlify",
    "Postman",
    "Figma",
    "Android Studio",
    "Java",
    "Kotlin",
    "XML",
  ],
};

export const projects = [
  {
    id: 1,
    title: "TeleVault – Telegram Cloud Storage",
    description:
      "File storage system via Telegram bots with a full web UI for upload and retrieval, built with Node.js and the Telegram Bot API. Cost-efficient and scalable through creative API integration.",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fvault.kushal.qzz.io%2F?w=800",
    tags: ["Node.js", "Telegram Bot API", "TypeScript"],
    githubUrl: "https://github.com/kushalshah0/TeleVault",
    liveUrl: "https://vault.kushal.qzz.io/",
    featured: true,
  },
  {
    id: 2,
    title: "VoidMail – Disposable Email",
    description:
      "Temporary disposable email service with no signup and no tracking. Instantly generate throwaway inboxes for privacy-conscious browsing.",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmail.kushal.qzz.io%2F?w=800",
    tags: ["Node.js", "JavaScript"],
    githubUrl: "https://github.com/kushalshah0/VoidMail",
    liveUrl: "https://mail.kushal.qzz.io/",
    featured: true,
  },
  {
    id: 3,
    title: "Hisab Barabar – Expense Splitter",
    description:
      "Cross-platform expense-splitting app for friends, roommates, and travel companions. Features equal/unequal/percentage splits, an optimized settlement algorithm to minimize transactions, Google OAuth, QR group sharing, and push notifications via Firebase.",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fhisabbarabar.qzz.io%2F?w=800",
    tags: ["React Native", "Next.js", "MongoDB", "TypeScript", "Firebase"],
    githubUrl: null,
    liveUrl: "https://hisabbarabar.qzz.io/",
    featured: true,
  },
  {
    id: 4,
    title: "KeyHive – Password Manager",
    description:
      "Full-stack password manager with encrypted storage, secure authentication, and password generation. Built with TypeScript and modern security best practices.",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fkeyhive.qzz.io%2F?w=800",
    tags: ["TypeScript", "React", "MongoDB"],
    githubUrl: "https://github.com/kushalshah0/KeyHive",
    liveUrl: "https://keyhive.qzz.io/",
    featured: true,
  },
  {
    id: 5,
    title: "FlowTeX – LaTeX Editor",
    description:
      "Online LaTeX editor with real-time preview and compilation, making it easy to write and render LaTeX documents directly in the browser.",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Flatex.kushal.qzz.io%2F?w=800",
    tags: ["React", "JavaScript", "LaTeX"],
    githubUrl: "https://github.com/kushalshah0/FlowTeX",
    liveUrl: "https://latex.kushal.qzz.io/",
    featured: true,
  },
  {
    id: 6,
    title: "CookieVault – Session Management",
    description:
      "Secure cookie and session management system built with Next.js, TypeScript, and MongoDB, implementing authentication and modern encryption best practices.",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fcookie.kushal.qzz.io%2F?w=800",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    githubUrl: "https://github.com/kushalshah0/CookieVault",
    liveUrl: "https://cookie.kushal.qzz.io/",
    featured: true,
  },
  {
    id: 7,
    title: "NeuraMind – AI Chat Assistant",
    description:
      "Real-time streaming AI chat interface with session management and syntax highlighting. Designed a scalable frontend architecture for LLM-based applications.",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fneuramind.pages.dev%2F?w=800",
    tags: ["React", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/kushalshah0/NeuraMind",
    liveUrl: "https://neuramind.pages.dev/",
    featured: false,
  },
  {
    id: 8,
    title: "SharePulse – NEPSE Tracker",
    description:
      "Real-time Nepal Stock Exchange (NEPSE) monitoring dashboard with dynamic charts and portfolio tracking, built with React and Node.js.",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsharepulse.qzz.io%2F?w=800",
    tags: ["React", "Node.js"],
    githubUrl: "https://github.com/kushalshah0/SharePulse",
    liveUrl: "https://sharepulse.qzz.io/",
    featured: false,
  },
  {
    id: 9,
    title: "HTTP Server – Systems Programming",
    description:
      "Fully functional HTTP server built from scratch in C++ using TCP sockets, covering concurrency handling and HTTP protocol design. Demonstrates strong understanding of low-level backend and networking concepts.",
    image: null,
    tags: ["C++", "TCP Sockets", "Systems Programming"],
    githubUrl: null,
    liveUrl: null,
    featured: false,
  },
  
];

export const experience = [
  {
    id: 1,
    type: "work",
    title: "MERN Stack Developer Intern",
    company: "CloudTech Services",
    location: "Kathmandu, Nepal",
    period: "Jul 2026 - Present",
    description: [
      "Working as a MERN Stack Developer Intern, contributing to full-stack web application development using MongoDB, Express.js, React, and Node.js.",
      "Collaborating with the development team to build and maintain scalable web solutions.",
    ],
  },
  {
    id: 2,
    type: "work",
    title: "Freelancing",
    company: "Independent",
    location: "Remote",
    period: "2020 - Present",
    description: [
      "As a dedicated developer, I actively seek opportunities to bolster my skills and deliver impactful solutions.",
      "Freelancing helps me balance academic commitments with real-world experience while honing my technical skills.",
    ],
  },
  {
    id: 3,
    type: "work",
    title: "Open Source Contributor",
    company: "Open Source",
    location: "Remote",
    period: "2021 - Present",
    description: [
      "Actively contributed to open-source projects and collaborated with a diverse developer community.",
      "Honed programming and problem-solving skills through real-world contributions.",
    ],
  },
  {
    id: 4,
    type: "education",
    title: "Bachelor In Computer Engineering",
    company: "IOE Thapathali Campus, Thapathali",
    location: "Kathmandu, Nepal",
    period: "2023 - Present",
    description: [
      "As a Computer Engineering student at Thapathali Campus (IOE), I'm focused on expanding my knowledge and building real-world skills through challenging projects.",
    ],
  },
  {
    id: 5,
    type: "education",
    title: "ISC (XII), Science with Computer",
    company: "Makawanpur Multiple Campus, Hetauda",
    location: "Hetauda, Nepal",
    period: "2019 - 2022",
    description: [
      "Completed high school education (2019-2022) with a focus on Science and Computer.",
    ],
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
