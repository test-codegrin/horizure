//--------------------------------------------------------------------------------------------//
//-------------------------------------- Portfolio Data --------------------------------------//
//--------------------------------------------------------------------------------------------//
export const portfolioData = [
  {
    title: "Codegrin Technology",
    heroImage: "/portfolio/codegrin.png",
    link: "https://www.codegrin.com/",

    tags: [
      "E-commerce",
      "Web Design & Development",
      "Web Design & Development",
    ],

    description: `
      A dynamic e-commerce platform that revolutionized online shopping...
    `,

    technologies: ["⚛️", "🧩", "💻", "📦"],

    team: [
      {
        role: "Web Developers",
        members: [
          { name: "John Smith", image: "/homepage/teammember3.webp" },
          { name: "Emily Johnson", image: "/homepage/teammember1.webp" },
        ],
      },

      {
        role: "UI/UX Designer",
        members: [{ name: "Jessica Lee", image: "/homepage/teammember1.webp" }],
      },

      {
        role: "Project Manager",
        members: [{ name: "Michael Williams", image: "/homepage/teammember2.webp" }],
      },
    ],

    methods: ["Agile Development", "User Testing", "A/B Testing"],
  },

  // ------ SECOND PROJECT ------
  {
    title: "horizure",
    heroImage: "/portfolio/horizure.png",
    link: "https://horizure-five.vercel.app/",
    tags: ["Branding", "UI/UX Design", "Full Stack Development"],

    description: `
      A next-gen online marketplace built for modern shoppers...
    `,

    technologies: ["🌐", "🎨", "⚙️", "🚀"],

    team: [
      {
        role: "Front-End Dev",
        members: [{ name: "Aisha Patel", image: "/homepage/teammember1.webp" }],
      },
      {
        role: "Back-End Dev",
        members: [{ name: "Marcus Lee", image: "/homepage/teammember2.webp" }],
      },
      {
        role: "Project Manager",
        members: [{ name: "Sarah Kim", image: "/homepage/teammember3.webp" }],
      },
    ],

    methods: ["Rapid Prototyping", "UX Research", "Continuous Deployment"],
  },
];





//--------------------------------------------------------------------------------------------//
//------------------------------ Services Data -----------------------------------------------//
//--------------------------------------------------------------------------------------------//

export const servicesData = [
  // =============================
  // UX DESIGN
  // =============================
  {
    category: "User Experience (UX) Design",
    slug: "user-research-and-persona-development",
    icon: "ux",
    title: "User Research and Persona Development",
    description: [
      `In the digital world, understanding your audience is the key to creating products and experiences that truly resonate. Our User Research and Persona Development service helps businesses uncover insights about their target users, guiding strategic decisions and improving overall user experience. We start by conducting in-depth research using methods like interviews, surveys, analytics, and user testing to gather real data about your audience’s behaviours, needs, and preferences.`,
      `Based on these insights, we develop detailed user personas—representative profiles that capture audience goals, motivations, and challenges. By leveraging these personas, your team can make informed decisions ensuring that every feature, message, and interaction aligns with what your audience truly wants.`,
    ],
  },
  {
    category: "User Experience (UX) Design",
    slug: "information-architecture-and-wireframing",
    icon: "workflow",
    title: "Information Architecture and Wireframing",
    description: [
      `Information Architecture (IA) is the backbone of a seamless user journey. We structure your digital experience logically so users can intuitively find what they need.`,
      `Wireframes provide a skeleton layout of your product, ensuring clarity before visual design begins.`,
    ],
  },
  {
    category: "User Experience (UX) Design",
    slug: "interactive-prototyping-and-user-testing",
    icon: "layers",
    title: "Interactive Prototyping and User Testing",
    description: [
      `We build high-fidelity interactive prototypes that simulate real product behavior.`,
      `User testing sessions validate your ideas early, helping refine the experience before launch.`,
    ],
  },
  {
    category: "User Experience (UX) Design",
    slug: "ui-design-and-visual-branding",
    icon: "brush",
    title: "UI Design and Visual Branding",
    description: [
      `Transform your ideas into visually appealing user interfaces that elevate brand perception.`,
      `We align aesthetics with usability to strike the perfect balance.`,
    ],
  },

  // =============================
  // UI DESIGN
  // =============================
  {
    category: "User Interface (UI) Design",
    slug: "intuitive-interface-design",
    icon: "brush",
    title: "Intuitive and Visually Appealing Interface Design",
    description: [
      `We craft beautiful, modern, and clean UI interfaces that enhance usability and guide user actions effectively.`,
    ],
  },
  {
    category: "User Interface (UI) Design",
    slug: "custom-iconography-and-illustration",
    icon: "pen",
    title: "Custom Iconography and Illustration",
    description: [
      `Custom-designed icons and illustrations that visually communicate your brand identity.`,
    ],
  },
  {
    category: "User Interface (UI) Design",
    slug: "typography-and-color-selection",
    icon: "layers",
    title: "Typography and Color Palette Selection",
    description: [
      `Professional selection of typography and color systems that enhance readability and brand consistency.`,
    ],
  },
  {
    category: "User Interface (UI) Design",
    slug: "responsive-design",
    icon: "workflow",
    title: "Responsive Design for Various Devices",
    description: [
      `We ensure your product performs beautifully on all devices—mobile, tablet, and desktop.`,
    ],
  },

  // =============================
  // BRANDING
  // =============================
  {
    category: "Branding and Identity",
    slug: "logo-and-visual-identity",
    icon: "brush",
    title: "Logo Design and Visual Identity Development",
    description: [
      `We create brand identities that stand out and communicate the true essence of your business.`,
    ],
  },
  {
    category: "Branding and Identity",
    slug: "brand-strategy-and-positioning",
    icon: "workflow",
    title: "Brand Strategy and Positioning",
    description: [
      `Strategic brand positioning to help your business occupy the right space in the market.`,
    ],
  },
  {
    category: "Branding and Identity",
    slug: "brand-guidelines",
    icon: "layers",
    title: "Brand Guidelines and Style Guides",
    description: [
      `Comprehensive brand guidelines to maintain consistency across all platforms and media.`,
    ],
  },
  {
    category: "Branding and Identity",
    slug: "marketing-collateral-design",
    icon: "pen",
    title: "Marketing Collateral Design",
    description: [
      `Beautifully designed brochures, posters, banners, and digital assets to enhance your brand presence.`,
    ],
  },

  // =============================
  // WEB DEVELOPMENT
  // =============================
  {
    category: "Web Development",
    slug: "frontend-development",
    icon: "code",
    title: "Front-End Development (HTML, CSS, JavaScript)",
    description: [
      `We build fast, responsive, and modern web interfaces using the latest frontend technologies.`,
    ],
  },
  {
    category: "Web Development",
    slug: "backend-development",
    icon: "code",
    title: "Back-End Development (PHP, Python, Ruby)",
    description: [
      `Strong backend systems, secure APIs, and robust server-side logic tailored to your needs.`,
    ],
  },
  {
    category: "Web Development",
    slug: "cms-development",
    icon: "layers",
    title: "CMS Development (WordPress, Drupal)",
    description: [
      `Flexible and user-friendly CMS solutions to help you manage content easily.`,
    ],
  },
  {
    category: "Web Development",
    slug: "ecommerce-development",
    icon: "workflow",
    title: "E-Commerce Development (Magento, Shopify)",
    description: [
      `Custom eCommerce stores that are optimized for speed, conversion, and user experience.`,
    ],
  },

  // =============================
  // MOBILE DEVELOPMENT
  // =============================
  {
    category: "Mobile App Development",
    slug: "ios-android-native-apps",
    icon: "phone",
    title: "Native iOS and Android App Development",
    description: [
      `High-performance native mobile apps with seamless user experiences.`,
    ],
  },
  {
    category: "Mobile App Development",
    slug: "cross-platform-apps",
    icon: "phone",
    title: "Cross-Platform Apps (React Native, Flutter)",
    description: [
      `Build once — run everywhere. Beautiful cross-platform apps using modern frameworks.`,
    ],
  },
  {
    category: "Mobile App Development",
    slug: "app-prototyping-uiux",
    icon: "layers",
    title: "App Prototyping and UI/UX Design Integration",
    description: [
      `Interactive prototypes and refined UI/UX processes for mobile experiences.`,
    ],
  },
  {
    category: "Mobile App Development",
    slug: "app-testing-deployment",
    icon: "settings",
    title: "App Testing, Deployment, and Maintenance",
    description: [
      `Full support lifecycle including QA testing, deployment, and ongoing updates.`,
    ],
  },

  // =============================
  // CUSTOM SOFTWARE
  // =============================
  {
    category: "Custom Software Development",
    slug: "enterprise-software-development",
    icon: "settings",
    title: "Enterprise Software Development",
    description: [
      `Build powerful enterprise systems tailored to your organization’s needs.`,
    ],
  },
  {
    category: "Custom Software Development",
    slug: "custom-web-application",
    icon: "code",
    title: "Custom Web Application Development",
    description: [
      `We create tailored web applications with scalable architecture and excellent performance.`,
    ],
  },
  {
    category: "Custom Software Development",
    slug: "third-party-api-integration",
    icon: "workflow",
    title: "Third-Party API Integration",
    description: [
      `Seamless integration of third-party APIs to expand your product’s capabilities.`,
    ],
  },
  {
    category: "Custom Software Development",
    slug: "legacy-system-modernization",
    icon: "layers",
    title: "Legacy System Modernization & Migration",
    description: [
      `Upgrade outdated systems with modern technology to improve performance, security, and reliability.`,
    ],
  },
];


//--------------------------------------------------------------------------------------------//
//------------------------------------- Blog Data --------------------------------------------//
//--------------------------------------------------------------------------------------------//
export const blogData = [
  // ======================================================
  // BLOG 1 — YOUR ORIGINAL BLOG
  // ======================================================
  {
    heroImage: "/blog/blog.png",
    heroTitle: "The Rise of Artificial Intelligence: Shaping Tomorrow, Today",

    sections: [
      {
        heading: "Introduction",
        content: `
        Artificial Intelligence (AI) has emerged as a transformative force in the healthcare
        industry, reshaping patient care, diagnostics, and research. In this blog post, we explore
        the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to
        enhancing patient outcomes.
        `,
      },

      {
        heading: "Artificial Intelligence (AI)",
        content: `
        Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and
        healthcare is no exception. Machines now complement the capabilities of doctors,
        improving patient outcomes and enhancing the efficiency of healthcare systems.
        `,
        content2: `
        AI continues to evolve with advancements such as autonomous medical assistants,
        real-time diagnosis tools, and predictive health monitoring systems.
        `,
      },

      {
        heading: "Predictive Analytics and Disease Prevention",
        content: `
        AI algorithms can detect anomalies that might be overlooked by human specialists.
        This is especially valuable in early disease detection and preventive care.
        `,
      },
    ],
  },

  // ======================================================
  // BLOG 2 — UI/UX DESIGN (DUMMY)
  // ======================================================
  {
    heroImage: "/blog/uiux.jpg", // you will place this image in /public/blog
    heroTitle: "UI/UX Trends in 2025: Designing for the Future",

    sections: [
      {
        heading: "Introduction",
        content: `
        The landscape of UI/UX is evolving rapidly in 2025, driven by technology, user behavior,
        and design innovations. Designers must stay adaptable and forward-thinking.
        `,
      },

      {
        heading: "Minimalistic Interfaces",
        content: `
        Users now prefer clean, clutter-free interfaces that deliver information without
        unnecessary distractions. Minimalism remains one of the strongest trends in UI/UX.
        `,
        content2: `
        Designers are moving towards functional minimalism — clean visuals with purposeful
        interactions and subtle microanimations.
        `,
      },

      {
        heading: "Neumorphism & Glassmorphism",
        content: `
        Rounded edges, soft shadows, and transparent layers define modern interfaces. These
        styles create a futuristic and visually appealing user experience.
        `,
      },
    ],
  },

  // ======================================================
  // BLOG 3 — WEB DEVELOPMENT (DUMMY)
  // ======================================================
  {
    heroImage: "/blog/webdev.png",
    heroTitle: "Web Development in 2025: What Every Developer Should Know",

    sections: [
      {
        heading: "Introduction",
        content: `
        The web development world continues to grow rapidly with new frameworks, tools,
        and technologies shaping the future of the internet. Developers must adapt quickly.
        `,
      },

      {
        heading: "Rise of AI-Assisted Coding",
        content: `
        Tools like GitHub Copilot, ChatGPT, and AI-powered IDEs are changing the workflow
        of developers. Efficiency has increased dramatically due to intelligent coding assistants.
        `,
        content2: `
        AI won't replace developers, but developers who use AI will replace those who don't.
        `,
      },

      {
        heading: "Modern Web Tech Stack",
        content: `
        Technologies like Next.js, Astro, SvelteKit, and Bun are gaining massive popularity in 2025.
        The focus has shifted to speed, developer experience, and server-side performance.
        `,
      },
    ],
  },
];
