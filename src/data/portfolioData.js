/**
 * Central portfolio content — edit values here to update the site.
 * Leave fields as empty string or `[ADD …]` until you have real values;
 * the UI hides missing contact/social/project links automatically.
 */

export const portfolioData = {
  name: 'Ashutosh Kumar',
  nameDisplay: 'ASHUTOSH KUMAR',
  roleLine1: 'B.Tech IT',
  roleLine2: 'Aspiring Software Developer',
  role: 'B.Tech IT | Aspiring Software Developer',
  location: 'India',

  seo: {
    title: 'Ashutosh Kumar | IT Student & Developer',
    description:
      'Personal portfolio of Ashutosh Kumar, a B.Tech IT student interested in software development, web technologies, problem solving, and AI/ML.',
    siteUrl: '',
  },

  hero: {
    greeting: "Hi, I'm Ashutosh Kumar",
    headline: 'Building Ideas Into Digital Solutions.',
    description:
      'Passionate about software development, problem solving, and turning ideas into useful digital products.',
    floatingTags: ['React', 'Java', 'Python', 'ML', '{ }', 'DSA'],
  },

  about: {
    summary:
      'B.Tech IT student with a strong interest in software development, Java, data structures & algorithms, web development, and AI/ML. I focus on building practical projects, writing clean code, and solving real-world problems through continuous learning.',
    highlights: [
      { label: 'B.Tech IT', icon: 'graduation' },
      { label: 'Problem Solver', icon: 'puzzle' },
      { label: 'Project Builder', icon: 'layers' },
      { label: 'Continuous Learner', icon: 'book' },
    ],
  },

  skills: {
    categories: [
      {
        title: 'Programming',
        items: ['Java', 'Python', 'C', 'JavaScript'],
      },
      {
        title: 'Web Development',
        items: ['HTML', 'CSS', 'JavaScript', 'React'],
      },
      {
        title: 'Database',
        items: ['SQL'],
      },
      {
        title: 'Core Computer Science',
        items: [
          'Data Structures & Algorithms',
          'OOP',
          'DBMS',
          'Computer Networks',
        ],
      },
      {
        title: 'AI / ML',
        items: ['Machine Learning', 'Image Processing'],
      },
    ],
  },

  projects: [
    {
      id: 'brain-tumor-detection',
      title: 'Brain Tumor Detection System',
      description:
        'A machine-learning-based system for detecting brain tumors from medical brain images using image processing and machine learning techniques.',
      tags: ['Python', 'Machine Learning', 'Image Processing'],
      category: 'ML · Healthcare',
      liveUrl: '[ADD PROJECT DEMO URL]',
      githubUrl: 'https://github.com/adoreashu/Brain-Tumor-Detection',
    },
  ],

  education: {
    degree: 'B.Tech in Information Technology',
    institution: 'Raj Kumar Goel Institute of Technology, Ghaziabad',
    duration: '2023-27',
    description:
      'Focused on computer science fundamentals, programming, software development, databases, networking, and emerging technologies.',
  },

  interests: [
    {
      title: 'Software Development',
      description: 'Building practical and scalable software solutions.',
      icon: 'code',
    },
    {
      title: 'Web Development',
      description: 'Creating responsive and user-friendly web experiences.',
      icon: 'globe',
    },
    {
      title: 'Problem Solving',
      description:
        'Improving logical thinking through DSA and programming challenges.',
      icon: 'brain',
    },
    {
      title: 'AI & Machine Learning',
      description: 'Exploring intelligent systems and machine-learning applications.',
      icon: 'sparkles',
    },
  ],

  contact: {
    heading: "Let's Connect",
    description:
      "Open to internships, collaborations, hackathons, and learning opportunities.",
    email: 's***********p****@gmail.com',
    phone: '7644*****',
    github: 'https://github.com/adoreashu',
    linkedin: 'www.linkedin.com/in/ashutosh-kumar-155416295',
    resume: '[ RESUME LINK]',
  },

  footer: {
    tagline: 'Built with passion and curiosity.',
    year: 2026,
  },

  navLinks: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ],
}

export const NAV_SECTION_IDS = portfolioData.navLinks.map((link) => link.id)

export function isPlaceholder(value) {
  if (value == null) return true
  const trimmed = String(value).trim()
  return trimmed === '' || trimmed.startsWith('[ADD')
}

/** Returns display text or null when unset (never show raw placeholders). */
export function displayText(value) {
  if (isPlaceholder(value)) return null
  return String(value).trim()
}

/** Returns a usable href or null if still a placeholder. */
export function resolveExternalUrl(value) {
  if (isPlaceholder(value)) return null
  const trimmed = String(value).trim()
  if (trimmed.startsWith('mailto:') || trimmed.startsWith('http')) return trimmed
  if (trimmed.includes('@') && !trimmed.includes(' ')) return `mailto:${trimmed}`
  return `https://${trimmed.replace(/^\/+/, '')}`
}
