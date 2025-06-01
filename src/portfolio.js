/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Prabhat Mishra",
  title: "Hi all, I'm Prabhat",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / MERN stack and cloud-native solutions using Docker and Kubernetes."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/prab18hat",
  linkedin: "https://www.linkedin.com/in/prabhat-mishra-8a39521ba/",
  gmail: "prabhatmdi8953@gmail.com",
  facebook: "https://www.facebook.com/18prabhat", // Add your Facebook profile URL
  medium: "https://medium.com/@prabhatmdi8953", // Add your Medium profile URL
  instagram: "https://www.instagram.com/18_prabhat/", // Add your Instagram profile URL
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full Stack Developer with expertise in MERN Stack and Cloud Solutions",
  skills: [
    emoji(
      "⚡ Building scalable web applications with MERN stack"
    ),
    emoji(
      "⚡ Developing enterprise applications with Java and Spring Boot"
    ),
    emoji(
      "⚡ Developing AI-powered solutions using OpenAI and LangChain"
    ),
    emoji(
      "⚡ Implementing cloud-native solutions with Docker and Kubernetes"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "spring-boot",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "expressjs",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "openai",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "langchain",
      fontAwesomeClassname: "fas fa-brain"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Quantum University",
      logo: require("./assets/images/quantum-logo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "September 2022 - 2026",
      desc: "Consistently achieving high academic excellence with a current CGPA of 8.7/10.00.",
      descBullets: [
        "Published two research papers in the field of AI and Cloud Computing",
        "Awarded for outstanding academic performance in multiple semesters",
        "Led College Placement Committee, facilitating successful placements for over 100 students"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "AI/ML Development",
      progressPercentage: "60%"
    },
    {
      Stack: "Cloud Solutions",
      progressPercentage: "65%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer Intern",
      company: "The Sparks Foundation",
      companylogo: require("./assets/images/logo_small.png"),
      date: "May 2023 – July 2023",
      desc: "Served as a Frontend Developer Intern, contributing to impactful web development projects.",
      descBullets: [
        "Developed user-friendly web interfaces using React.js and modern UI frameworks",
        "Enhanced user experience through responsive design and performance optimization",
        "Collaborated with cross-functional teams to deliver high-quality web solutions",
        "Contributed to the development of a charity donation platform",
        "Implemented security best practices in web applications"
      ]
    },
    {
      role: "Freelance Software Developer",
      company: "LD Talent",
      companylogo: require("./assets/images/ldtalent-logo.png"),
      date: "January 2025 - Present",
      desc: "Providing professional software development services with a focus on AI/ML and cloud solutions.",
      descBullets: [
        "Served over 15+ clients with successful project deliveries",
        "Specialized in AI/ML solutions and cloud-native applications",
        "Developed real-world applications including health monitoring systems",
        "Expertise in full-stack development and cloud infrastructure",
        "Maintained high client satisfaction through quality deliverables"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "Key Projects I've Developed and Contributed To",
  projects: [
    {
      image: require("./assets/images/thea-logo.PNG"),
      projectName: "Thea - Mental Health Companion",
      projectDesc: "Developed the backend infrastructure and frontend carousel components for Thea, a desktop application designed to enhance mental health for remote workers. Implemented JSON data compilation, Pomodoro technique integration, and mental health tracking features.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.jointhea.com/"
        },
        {
          name: "Download App",
          url: "https://www.jointhea.com/download"
        }
      ]
    },
    {
      image: require("./assets/images/lawjano-logo.png"),
      projectName: "LawJano - RAG-based Legal AI Assistant",
      projectDesc: "Developed a multilingual legal AI chatbot that provides accurate legal information in 10+ Indian languages. Implemented RAG (Retrieval-Augmented Generation) architecture using LangChain and OpenAI's GPT-4. The system uses vector embeddings for semantic search across legal documents and generates context-aware responses.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/prab18hat/Law-Jano_RAGify-AI-Legal-Asistant-for-india"
        },
        {
          name: "View Demo",
          url: "https://github.com/prab18hat/Law-Jano_RAGify-AI-Legal-Asistant-for-india#demo"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Key Achievements and Recognition in Technical and Leadership Roles",

  achievementsCards: [
    {
      title: "University Hackathon Winner",
      subtitle: "First Prize Winner - CodeFest 2024",
      image: require("./assets/images/codefest-award.jpg"),
      imageAlt: "CodeFest 2024 Award Ceremony",
      footerLink: [
        {
          name: "Event Details",
          url: "https://www.quantumuniversity.ac.in/codefest2024"
        },
        {
          name: "Project Repository",
          url: "https://github.com/prab18hat/Smart-AI-E-Learning-Platform-"
        }
      ]
    },
    {
      title: "Indian Army Technical Entry Scheme",
      subtitle: "Selected for SSB Interview - 2022",
      image: require("./assets/images/ssb-badge.png"),
      imageAlt: "SSB Technical Entry Scheme Badge",
      footerLink: [
        {
          name: "SSB Portal",
          url: "https://ssbinterview.gov.in/"
        },
        {
          name: "Technical Entry Scheme",
          url: "https://army.mil.in/technical-entry-scheme"
        }
      ]
    },
    {
      title: "Top 25 Teams - QubitX Hackathon",
      subtitle: "Top minds - QubitX Hackathon 2025",
      image: require("./assets/images/qubitx-presentation.jpg"),
      imageAlt: "QubitX Hackathon Presentation",
      footerLink: [
        {
          name: "Hackathon Website",
          url: "https://qubitxhackathon.com/"
        },
        {
          name: "Project Repository",
          url: "https://github.com/prab18hat/Law-Jano_RAGify-AI-Legal-Asistant-for-india"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Sharing my journey and insights in tech and career development",
  blogs: [
    {
      url: "https://medium.com/@prabhatmdi8953/how-i-cracked-an-early-remote-sde-job-as-a-freelancer-at-a-us-startup-ec3e49586009",
      title: "How I Cracked an Early Remote SDE Job as a Freelancer at a US Startup 💻🌍",
      description:
        "A detailed account of my journey from starting as a freelancer to landing a remote SDE role at a US startup, sharing insights on technical preparation, interview process, and career growth."
    },
    {
      url: "https://medium.com/@prabhatmdi8953/my-hackathon-journey-from-winning-my-first-hackathon-to-pitching-at-national-level-tech-fests-16e03fd8f11d",
      title: "My Hackathon Journey: From Winning My First Hackathon to Pitching at National-Level Tech Fests 🚀",
      description:
        "A personal story of my growth through hackathons, from winning my first event to presenting at national-level competitions, sharing valuable lessons and experiences."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "SPEAKING ENGAGEMENTS",
  subtitle: emoji(
    "Sharing knowledge and insights as an international speaker"
  ),

  talks: [
    {
      title: "GLOBAL VIRTUAL TECH SHOW",
      subtitle: "Guest Speaker - Tech Innovation Track",
      event_url: "https://meet.google.com/",
      slides_url: "https://drive.google.com/file/d/1nnFhs_a9QI2rO7qb19F6_Fi1il9FpOI8/view?usp=sharing",
      date: "June 21, 2024",
      location: "Virtual Conference",
      description: "Presented on modern web development practices and technologies in a global virtual tech conference with speakers from diverse tech fields. Invited by Adeyemi Tope as a guest speaker.",
      image: "./assets/images/global-tech-show-poster.jpeg"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

// Podcast Section - Uncomment and update when you have podcast content
// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
// 
//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     ""
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Uncomment this line when you have podcast content
// export { podcastSection },

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Get in Touch 📞"),
  subtitle:
    "Feel free to reach out for collaboration, projects, or just to connect!",
  number: "+918090409197",
  email_address: "prabhatmdi8953@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
