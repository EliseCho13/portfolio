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
  username: "Youji Cho",
  title: "Hello, I am Youji Cho",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native / TypeScript / Vue.js and some other cool libraries and frameworks."
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

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
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
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
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

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
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
  projectsDone: [
    // React: 5,
    // Vue: 1,
    // C: 3,
    // python: 10,
    //TODO: chart.js로 원형 통계 - 웹 관련, 비 웹 관련
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //my projects
  experience: [
    {
      name: "For Your Cocktail",
      team: "MixBowl",
      teamlogo: require("./assets/images/ForYourCocktailLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ],
      link: "https://github.com/silverwest8/MixBowl"
    },
    {
      name: "HEART",
      team: "Heart Number 1",
      teamlogo: require("./assets/images/HeartLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Codedang",
      team: "SKKUDING",
      teamlogo: require("./assets/images/codedangLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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

const additionalComment = {
  title: "What I want to say more",
  subtitle:
    "I am a developer: I have also done many kinds of projects which are not related to web frontend, such as C or python games.",
  description:
    "I am a software engineer: Nowaday, AI is growing rapidly. In such situation, What really important is software engineering, not just coding and debugging. I want to see how the large system works, and make improvements in that, while wisely using AI.",
  display: true
  //TODO: say more
};

// Achievement Section
// Include certificates, talks etc

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
        {
          name: "Certification",
          url: "https://www.notion.so/Certifications-64208a6408d645bea62277b0e7900b71"
          //TODO: add link
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

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+8210-5247-8351",
  email_address: "youjicho@g.skku.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false
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
  additionalComment,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails,
  isHireable
};
