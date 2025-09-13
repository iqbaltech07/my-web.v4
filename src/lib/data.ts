export const profileData = {
  name: "Muhammad Iqbal",
  asal: "Bandung, Indonesia ID",
  position: "Web Developer",
  username: "iqbalfry.dv",
  tagline: "Informatics Management Student | Web Developer",
  bio: "A passionate problem-solver in building efficient and user-friendly digital solutions, focusing on modern web development using Next.js and TypeScript.",
  avatarUrl: "/images/me.jpg",
  contact: {
    email: "youremail@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
};

export const skillsData = [
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Prisma", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "Git", category: "Tools" },
];

export const projectsData = [
  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    description:
      "A web application for tracking incoming and outgoing stock in real time. Built with Next.js for both frontend and backend, and Prisma for database management.",
    features: [
      "User authentication with roles (Admin & User)",
      "Real-time dashboard for stock visualization",
      "Product management (CRUD)",
      "Transaction recording for incoming and outgoing goods",
      "Product search and filter functionality",
      "Export reports to CSV format",
    ],
    techStack: ["Next.js", "Prisma", "Tailwind CSS", "MySQL", "NextAuth.js"],
    imageUrl: "/images/placeholder-project-1.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    description:
      "The dynamic portfolio you are currently viewing. Users can manage content through a separate admin dashboard.",
    features: [
      "Modern design with Dark & Light Mode",
      "Smooth animations with Framer Motion",
      "Dynamic content management (Projects, Skills, Profile)",
      "Protected admin page for content management",
      "Built with the latest technologies in the Next.js ecosystem",
    ],
    techStack: ["Next.js", "Shadcn/UI", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/images/placeholder-project-2.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "discord-clone-app",
    title: "Discord Clone Application",
    description:
      "A real-time chat application inspired by Discord, allowing users to create servers, channels, and communicate via text, voice, and video.",
    features: [
      "Real-time communication with WebSockets (Socket.io)",
      "Server, Channel, and Member structure",
      "Send text, images, and files",
      "Unique invite feature for each server",
      "Role and permission management for members",
    ],
    techStack: ["Next.js", "Socket.io", "PostgreSQL", "Prisma"],
    imageUrl: "/images/placeholder-project-3.png",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const experienceData = [
  {
    position: "Web Developer Intern",
    company: "PT Teknologi Maju",
    logoUrl: "/logos/pt-teknologi-maju.png",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    description: [
      "Assisted in developing and maintaining features of the company's main web application using React and TypeScript.",
      "Collaborated with the UI/UX team to implement responsive designs.",
      "Involved in bug fixing and performance optimization.",
    ],
  },
  {
    position: "Web Programming Teaching Assistant",
    company: "Your University",
    logoUrl: "/logos/universitas-anda.png",
    startDate: "Feb 2025",
    endDate: "May 2025",
    description: [
      "Guided students during HTML, CSS, and JavaScript lab sessions.",
      "Reviewed and provided feedback on lab assignments.",
      "Prepared materials and weekly exercises for lab assistance.",
    ],
  },
];

export const educationData = [
  {
    institution: "Telkom University",
    degree: "Bachelor in Informatics Management",
    logoUrl: "/logos/telkom-university.png",
    startDate: "2022",
    endDate: "2026 (Expected)",
    description:
      "Focused on software engineering, information systems management, and web application development.",
  },
  {
    institution: "SMK Negeri 1 Soreang",
    degree: "Software Engineering",
    logoUrl: "/logos/smkn1-soreang.png",
    startDate: "2019",
    endDate: "2022",
    description:
      "Learned programming fundamentals, databases, and web development.",
  },
];

export const certificationData = [
  {
    name: "Learning to Build Web Applications with React",
    issuingOrganization: "Dicoding Indonesia",
    issueDate: "May 2025",
    credentialUrl: "#",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuingOrganization: "freeCodeCamp",
    issueDate: "Jan 2025",
    credentialUrl: "#",
  },
];
