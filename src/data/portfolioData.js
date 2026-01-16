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
    { label: "Projects Completed", value: "3+" },
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
    "VS Code",
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
    title: "To-Do List App",
    description:
      "Streamline your tasks effortlessly with a React.js-powered to-do app. Organize your day, manage priorities, and boost productivity with an intuitive interface.",
    image:
      "https://raw.githubusercontent.com/kushalshah0/kushalshah0.github.io/main/src/images/to-do-list-app.png",
    tags: ["React Js", "Node Js"],
    githubUrl: "https://github.com/kushalshah0/to-do-list-app",
    liveUrl: "https://kushalshah0.github.io/to-do-list-app/",
    featured: true,
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Real-time weather updates with an intuitive UI. Access current conditions, forecasts, and more in one place.",
    image:
      "https://raw.githubusercontent.com/kushalshah0/kushalshah0.github.io/main/src/images/weather-app.png",
    tags: ["HTML", "CSS", "JS"],
    githubUrl: "https://github.com/kushalshah0/weather-app",
    liveUrl: "https://kushalshah0.github.io/weather-app/",
    featured: true,
  },
  {
    id: 3,
    title: "Password Manager",
    description:
      "Securely store and manage passwords with features like password generation and encryption to keep sensitive information safe.",
    image:
      "https://raw.githubusercontent.com/kushalshah0/kushalshah0.github.io/main/src/images/password-manager.png",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    githubUrl: "https://github.com/kushalshah0/password-manager",
    liveUrl: "https://passmanager01.pages.dev/",
    featured: true,
  },
];

export const experience = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    type: "education",
    title: "ISC (XII), Science with Computer",
    company: "Makawanpur Multiple Campus, Hetauda",
    location: "Hetauda, Nepal",
    period: "2019 - 2022",
    description: [
      "Completed high school education (2019-2022) with a focus on Science and Computer.",
      "Grade: 3.50",
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
