import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sam R.",
  initials: "SR",
  // location: "Brazil",
  // locationLink: "https://www.google.com/maps/place/Wrocław",
  about: "Developer",
  summary:
    "Refining my problem-solving skills and fueled by a passion for continuous learning, I'm dedicated to making strides in software development. Currently, I'm honing my expertise in the basics of PHP and Laravel, and I'm eager to delve deeper into their intricacies. I strive to thrive in a collaborative environment where I can learn from industry leaders and work on projects that make a meaningful difference.",
  avatarUrl: "https://avatars.githubusercontent.com/u/84884629?v=4",
  personalWebsiteUrl: "https://smlrods.github.io",
  contact: {
    // email: "bartosz.jarocki@hey.com",
    // tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/smlrods",
        icon: GitHubIcon,
      },
      // {
      //   name: "LinkedIn",
      //   url: "https://www.linkedin.com/in/bjarocki/",
      //   icon: LinkedInIcon,
      // },
      {
        name: "X",
        url: "https://x.com/smlrods",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Wrocław University of Technology",
      degree: "Bachelor's Degree in Control systems engineering and Robotics",
      start: "2019",
      end: "",
    },
  ],
  work: [
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: [],
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description: "Creating and testing software for LTE base stations",
    },
  ],
  skills: ["JavaScript", "React/Next.js", "PHP", "Laravel", "TailwindCSS"],
  projects: [
    {
      title: "CRM",
      techStack: ["Side Project", "PHP", "InertiaJS", "Laravel", "React"],
      description:
        "Empowering businesses to efficiently manage customer data, interactions, and beyond.",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://github.com/smlrods/CRM",
      },
    },
    {
      title: "Social Network Rest API",
      techStack: ["Side Project", "JavaScript", "Node.js", "REST API"],
      description:
        "Engineered a robust RESTful API facilitating seamless interactions, data management, and engagement features for a dynamic social networking platform.",
      logo: MonitoLogo,
      link: {
        label: "https://github.com/smlrods/social-network-api",
        href: "https://github.com/smlrods/social-network-api",
      },
    },
  ],
} as const;
