export const profileData = {
  name: "Muhammad Iqbal",
  asal: "Bandung, Indonesia",
  position: "Web Developer",
  username: "iqbalfry.dv",
  tagline: "Informatics Management Student | Web Developer",
  bio: "Informatics Management student with a background in Software Engineering and more than a year of experience as a Web Developer intern. Skilled in building modern and user-friendly web applications using React.js, Next.js, and Tailwind CSS.",
  avatarUrl: "/images/me.jpg",
  description:
    "My name is <b>Muhammad Iqbal Ferdiansyah</b>, and I am a <b>student in Informatics Management</b> with a foundation in <b>Software Engineering</b> and more than a year of experience as a <b>Web Developer</b> gained through internships at Nusantech and the Nusa Development Program. I have developed web applications with <b>React.js, Next.js, and Tailwind CSS</b>, and I possess backend knowledge in <b>Express.js, MySQL, and PostgreSQL</b>. I also enjoy collaborating in teams using <b>Git</b> and contributing to technical documentation.\n\nI enjoy transforming ideas into digital products, from designing in Figma to coding and optimizing for performance. Going forward, I aim to keep growing as a web developer and contribute to impactful projects that deliver real value.",
  contact: {
    email: "miqbalferdiansyah.s@gmail.com",
    github: "https://github.com/iqbaltech07",
    linkedin: "https://www.linkedin.com/in/muhammdiqbalfs",
    instagram: "https://instagram.com/iqbalfry.dv",
  },
  cv: {
    latest: "http://codewithiqbal.my.id/download/latestcv.pdf",
    old: "http://codewithiqbal.my.id/download/oldcv.pdf",
  },
};

export const skillsData = [
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Prisma", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "Git", category: "Tools" },
];

export const projectsData = [
  {
    slug: "nusantech-internship",
    title: "Nusantech Internship Projects",
    description:
      "Built and maintained user interfaces with React.js and Next.js, focusing on reusable components.",
    longDescription:
      "During my one-year internship at Nusantech, I was fully responsible for front-end development. My main tasks included building modular and reusable UI components using React.js and Next.js. Additionally, I managed dynamic pages and routing systems to support Single Page Application (SPA) navigation, and was actively involved in debugging and optimizing the UI/UX to improve performance and user interaction. Team collaboration was conducted via Git, and I also contributed to technical documentation.",
    features: [
      "Built reusable UI components with React.js and Next.js",
      "Managed dynamic pages and routing with Next.js",
      "Debugged and optimized UI/UX for better performance",
      "Collaborated using Git and contributed to technical documentation",
    ],
    techStack: ["React.js", "Next.js", "Tailwind", "Git"],
    imageUrl: "/images/portofolio/cepatpintar.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    slug: "personal-portfolio-v4",
    title: "Personal Portfolio v4",
    description:
      "The fourth version of my personal portfolio website that you are currently viewing. Built with a modern tech stack.",
    longDescription:
      "This is the fourth iteration of my personal portfolio website, designed to professionally showcase my projects, skills, and experience. This project was built from scratch using Next.js (App Router), TypeScript for type safety, and Tailwind CSS for styling. The main focus was to create a clean, responsive, and modern design with a seamless user experience, including smooth animations implemented with Framer Motion and support for both light and dark themes.",
    features: [
      "Responsive design for all devices",
      "Light & Dark Mode support",
      "Smooth animations using Framer Motion",
      "SEO-friendly page structure",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: "/images/portofolio/cepatpintar.png",
    liveUrl: "#",
    githubUrl: "https://github.com/iqbalfrydv/my-web.v4",
    featured: true,
  },
  {
    slug: "nusa-development-program",
    title: "Nusa Development Program",
    description:
      "Contributed to maintaining core web services and ensuring the website's functionality.",
    longDescription:
      "As part of my internship at the Nusa Development Program, I was involved in the web development team tasked with maintaining core services. My responsibilities included assisting in the debugging process to identify and fix technical issues on the web application, as well as collaborating closely with other developers to ensure smooth integration of front-end components according to the design.",
    features: [
      "Maintained core web services for functionality",
      "Assisted in debugging and troubleshooting",
      "Collaborated with developers for smooth front-end integration",
    ],
    techStack: ["React.js", "Next.js", "Tailwind"],
    imageUrl: "/images/portofolio/cepatpintar.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    slug: "course-marketplace-app",
    title: "Course Marketplace App",
    description:
      "An online course marketplace platform where users can register as instructors or students.",
    longDescription:
      "This project is a full-stack web application that functions as an online course marketplace. Users can register in two roles: as instructors to create, manage, and sell courses, or as students to purchase and access course materials. The application features an authentication system, a course management dashboard (CRUD), and a simulated payment process. The backend architecture is built using Next.js API Routes with Prisma as the ORM for interacting with a MySQL database.",
    features: [
      "Authentication system for students and instructors",
      "Dashboard for course management (CRUD)",
      "Checkout and payment process (simulation)",
      "Course search and filter functionality",
    ],
    techStack: ["Next.js", "Prisma", "MySQL", "NextAuth.js"],
    imageUrl: "/images/portofolio/cepatpintar.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    slug: "course-marketplace-apps",
    title: "Course Marketplace App",
    description:
      "An online course marketplace platform where users can register as instructors or students.",
    longDescription:
      "This project is a full-stack web application that functions as an online course marketplace. Users can register in two roles: as instructors to create, manage, and sell courses, or as students to purchase and access course materials. The application features an authentication system, a course management dashboard (CRUD), and a simulated payment process. The backend architecture is built using Next.js API Routes with Prisma as the ORM for interacting with a MySQL database.",
    features: [
      "Authentication system for students and instructors",
      "Dashboard for course management (CRUD)",
      "Checkout and payment process (simulation)",
      "Course search and filter functionality",
    ],
    techStack: ["Next.js", "Prisma", "MySQL", "NextAuth.js"],
    imageUrl: "/images/portofolio/cepatpintar.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export const experienceData = [
  {
    position: "Web Developer Intern",
    company: "Nusantech",
    logoUrl: "/images/nusantech.png",
    startDate: "Sep 2022",
    endDate: "Sep 2023",
    type: "Internship",
    location: "Remote",
    description: [
      "Built user interfaces using React.js and Next.js with reusable components.",
      "Managed dynamic pages and routing in Next.js to support SPA navigation.",
      "Debugged and optimized UI/UX for better performance and user interaction.",
      "Collaborated using Git and contributed to technical documentation.",
    ],
  },
  {
    position: "Web Developer Intern",
    company: "Nusa Development Program",
    logoUrl: "/images/nusadevelopment.png",
    startDate: "Nov 2023",
    endDate: "Nov 2023",
    type: "Internship",
    location: "Remote",
    description: [
      "Maintained core web services and ensured website functionality.",
      "Assisted in debugging and resolving technical issues on web applications.",
      "Collaborated with developers to integrate frontend components smoothly.",
    ],
  },
];

export const educationData = [
  {
    institution: "Universitas Komputer Indonesia",
    degree: "Associate’s Degree in Informatics Management",
    logoUrl: "/logos/unikom.png",
    startDate: "2024",
    endDate: "2027 (Expected)",
    location: "Bandung, Indonesia",
  },
  {
    institution: "SMK Yadika Soreang",
    degree: "Software Engineering",
    logoUrl: "/logos/yadika.png",
    startDate: "2021",
    endDate: "2024",
    location: "Soreang, Indonesia",
  },
];

export const certificationData = [
  {
    name: "Belajar Membuat Aplikasi Web dengan React",
    issuingOrganization: "Dicoding Indonesia",
    issueDate: "Nov 2023",
    credentialUrl: "https://www.dicoding.com/certificates/53XE4V989ZRN",
  },
  {
    name: "Belajar Membuat Front-End Web untuk Pemula",
    issuingOrganization: "Dicoding Indonesia",
    issueDate: "Nov 2023",
    credentialUrl: "https://www.dicoding.com/certificates/81P27YK5QZOY",
  },
  {
    name: "Project Based Internship Program at Nusa Development Program (NDP)",
    issuingOrganization: "Nusa Development Program",
    issueDate: "Nov 2023",
    credentialUrl: "#",
  },
  {
    name: "CCNA: Introduction to Networks",
    issuingOrganization: "Cisco Networking Academy",
    issueDate: "Aug 2025",
    credentialUrl: "#",
  },
  {
    name: "Pelatihan Dasar UI / UX",
    issuingOrganization: "UKM LAOS",
    issueDate: "Jul 2024",
    credentialUrl: "#",
  },
];
