// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Youji Cho",
  title: "Hello, I am Youji Cho",
  subTitle: emoji(
    "A passionate Frontend Software Engineer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native / TypeScript / Vue.js and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://github.com/EliseCho13/portfolio/blob/main/Resume_English.pdf",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/EliseCho13",
  linkedin:
    "https://www.linkedin.com/in/%EC%9C%A0%EC%A7%80-%EC%A1%B0-ba82b6298/",
  email: "youjicho@g.skku.com",
  gmail: "kellycho1031@gmail.com",
  kakaotalk: "kellycho1031",
  discord: "elisecho",
  display: true
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for the web and mobile applications"
    ),
    emoji("⚡ Have done most projects as a team in harmony"),
    emoji("⚡ Willing to learn more, contribute more")
  ],

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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
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
      skillName: "redux",
      fontAwesomeClassname: "redux"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Typescript",
      fontAwesomeClassname: "typescript"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Sungkyunkwan University",
      logo: require("./assets/images/Emblem_01.jpg"),
      subHeader: [
        "Bachelor of Science in Computer Science and Engineering",
        "Bachelor of Science in Physics"
      ],
      duration: "March 2019 - August 2024",
      desc: "Participated in the multiple team projects",
      descBullets: ["Mix Bowl", "SKKUDING"]
    },
    {
      schoolName: "Codestates Bootcamp",
      logo: require("./assets/images/codestates.png"),
      subHeader: ["Frontend Bootcamp"],
      duration: "August 2022 - February 2023",
      desc: "Participated in two React Projects",
      descBullets: ["pre_003", "main_001"]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "90%"
    },
    {
      Stack: "UI design",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "50%"
    },
    {
      Stack: "Software Engineering",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true, //my projects
  experience: [
    {
      name: "For Your Cocktail",
      team: "MixBowl",
      teamlogo: require("./assets/images/ForYourCocktailLogo.png"),
      date: "March 2023 – July 2023",
      desc: "Search and upload cocktail recipe, communicate and share information about cocktail, leave a review about cocktail bars",
      descBullets: [
        "Used Kakao map api for cocktail bars",
        "Trustworthy information provided by experts who has Craftsman Bartender Certification"
      ],
      link: "https://github.com/silverwest8/MixBowl"
    },
    {
      name: "Codedang",
      team: "SKKUDING",
      teamlogo: require("./assets/images/codedangLogo.png"),
      date: "June 2022 – Present",
      desc: "Online Judge system for official Sungkyunkwan University",
      descBullets: [
        "Open Source. Students can participate in Programming Competitions and improve skills with various practice questions",
        "Can freely create and customize functions that were lacking in the existing OJ"
      ],
      link: "https://github.com/skkuding/codedang"
    },
    {
      name: "HEART",
      team: "Heart Number 1",
      teamlogo: require("./assets/images/HeartLogo.png"),
      date: "December 2022 – February 2023",
      desc: "HEART(Healthy Exercise Around Residance Together) is location based community website targeting people who wants to work out together with neighbors",
      descBullets: [
        "Used Kakao map api to find nearby users",
        "3 Frontend, 3 Backend team (Main reposity is now removed)"
      ],
      link: "https://github.com/codestates-seb/seb41_main_001"
    }
  ]
};

const additionalComment = {
  title: "What else I want to say",
  subtitle: ["I am a developer", "I am a software engineer"],
  description: [
    "I have done many kinds of projects from web frontend to python games and so on. I prefer working together, rather than doing alone; I gain energy from communicating with people, and from people themselves. I love the feeling of pleasure of when something that hasn't been resolved for a long time is clearly resolved. That's why I can't ever quit the programming.",
    "Nowaday, AI is growing rapidly. In such situation, What really important is software engineering, such as when or how to apply what engineering principle and what software methodology to use. Partial codings can be done by AI, which means how to utilize AI by making proper prompt would matter more. I want to see how the large system works, and make improvements in that, while using AI wisely."
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "OPIC",
      subtitle: "Intermediate High(IH)",
      image: require("./assets/images/opicLogo.webp"),
      imageAlt: "Opic logo",
      footerLink: [
        //note: 환경을 독립적으로. 이전에는 하나의 서버에 혼재되어서 사용. 모든 프로그램이 다 돌아갈 수 있는 서버를 만드는 게 어려웠다. docker로 프론트엔드, 백엔드 간 서로 영향을 주지 않는 독립적 영역 구축.
        {
          //typescript는 속도 면에서 용이하다. 큰 프로젝트일수록.
          name: "Certification",
          url: "https://www.notion.so/Certifications-64208a6408d645bea62277b0e7900b71"
        }
      ]
    },
    {
      title: "eTest",
      subtitle: "Microsoft Office Professionals Certification",
      image: require("./assets/images/etest.png"),
      imageAlt: "E-test Logo",
      footerLink: [
        {
          name: "Professional Certification",
          url: "https://www.notion.so/Certifications-64208a6408d645bea62277b0e7900b71"
        },
        {
          name: "OA Master Certification",
          url: "https://www.notion.so/Certifications-64208a6408d645bea62277b0e7900b71"
        }
      ]
    },

    {
      title: "Computer Specialist in Spreadsheet & Database",
      subtitle: "Level 2",
      image: require("./assets/images/KCCI.png"),
      imageAlt: "Computer Specialist in Spreadsheet and Database Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/EliseCho13/portfolio/blob/main/src/assets/images/Report_Pass_Eng_Print.pdf"
        }
      ]
    },
    {
      title: "Chinese Character Proficiency test (한자능력검정시험)",
      subtitle: "Grade 2(2급)",
      image: require("./assets/images/logo_ChineseCharacter.jpeg"),
      imageAlt: "Korea association for the promotion of hanja education Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/EliseCho13/portfolio/blob/main/src/assets/images/hanjaCertification.pdf"
        }
      ]
    },
    {
      title: "CodeStates BootCamp",
      subtitle: "Frontend Course",
      image: require("./assets/images/codestates.png"),
      imageAlt: "Codestates Logo",
      footerLink: [
        {
          name: "Certification from Codestates",
          url: "https://www.notion.so/Certifications-64208a6408d645bea62277b0e7900b71"
        },
        {
          name: "Certification from HRD",
          url: "https://www.notion.so/Certifications-64208a6408d645bea62277b0e7900b71"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://blog.naver.com/chaenu13",
      title: "Naver blog postings of basic frontend knowledge",
      description:
        "From linux problem handling to CSS, graphQL, rendering, REST and so on...all in 코딩(coding) category. Written in Korean."
    },
    {
      url: "https://www.notion.so/Mix-Bowl-a3c4885e519c4f85a1ad397305b962bc",
      title: "Notion page of team and personal space",
      description:
        "Team space is for Mix Bowl(For your cocktail), personal space for TIL. Written in Korean."
    }
  ],
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+8210-5247-8351",
  email_address: "youjicho@g.skku.com"
};

const isHireable = true;
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  additionalComment,
  openSource,
  achievementSection,
  blogSection,
  contactInfo,
  isHireable
};
