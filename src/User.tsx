import { IconBrandGithub,  IconBrandLeetcode, IconBrandLinkedin  } from "@tabler/icons-react";
const Info = {
    name: "Madhav Garg",
    stack: ["Tech Enthusiast", "Full Stack Developer", "Competitive Programmer"],
    bio: "I'm a final-year B.Tech student with a strong foundation in Java, Python, and full-stack web development. As a passionate coder and competitive programmer, I thrive on solving complex problems and building efficient, user-centric applications like campus marketplaces and educational games. My experience in logic building and coding challenges has sharpened my skills in crafting innovative and scalable solutions. Let’s connect and bring your ideas to life!"
}



const ProjectInfo = [
    {
        title: "Campus Cart",
        desc:"Campus Cart is a platform designed to connect college students, enabling them to buy and sell products and services within their campus community. The front end is built using HTML, CSS, and JavaScript, while Firebase serves as the backend for handling all CRUD operations and user authentication. The application features a secure College ID-only login system and a Common Chat feature to foster networking among students, resulting in a 30% increase in engagement.",
        image: <img src="CampusCart." alt="" />,
        live: true,
        technologies: ["HTML","Firebase", "CSS", "JavaScript"],
        link: "https://campus-cart-eight.vercel.app/",
        github: "https://github.com/Madhavgarg20/CampusCart"
    },
    {
        title: "Grid Warriors",
        desc: "Grid Warriors is a web application that allows two users to connect and play a custom 5x5 chess game. Developed using HTML, CSS, and JavaScript, the app features a turn-based grid system with dynamic character movement and custom rules. The game is designed to provide an engaging and strategic chess experience on a unique 5x5 grid.",
        image: "GridWarriors.png",
        live: true,
        technologies: [ "HTML", "CSS", "JavaScript" , "Node.js" , "Socket.io"],
        link: "https://two1bcg10129-madhav.onrender.com/",
        github: "https://github.com/Madhavgarg20/21bcg10129_madhav"
    },
    {
        title: "Sizzle and Dizzle",
        desc:"Sizzle and Dizzle is an educational web game designed for kids to make learning fun. Utilizing HTML5, CSS, JavaScript, Node.js, and Socket.io, this game integrates multiple-choice questions with interactive gameplay. The game features a unique 'Snake and Ladder' mechanic where correct answers advance players and incorrect ones send them back, combining learning with excitement.",
        image: "SizzleAndDizzle.png",
        live: true,
        technologies: ["HTML5", "CSS", "JavaScript"],
        link: "https://madhavgarg20.github.io/SizzleandDizzle/",
        github: "https://github.com/Madhavgarg20/SizzleandDizzle"
    }
]


const SkillInfo = [
    {
        title: "Languages",
        skills: [ "Java","python",  "JavaScript","HTML" , "CSS"]
    },
    {
        title: "FrameWorks",
        skills: ["Springboot", "React JS", "BootStrap", "Tailwind"]
    },
    {
        title: "Developer Tools",
        skills: ["GIT", "GITHUB", "VS-CODE", "Intellij idea ", "Unity", "Blender"
        ]
    },
    {
        title: "Databases",
        skills: [ "Firebase" , "MYSQL" , "MONGODB"]
    }
]
const socialLinks = [
    { link: "https://github.com/Madhavgarg20", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/madhav-garg-772637264/", icon: IconBrandLinkedin },
    { link: "https://leetcode.com/u/MadhavGarg/", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "",
        company: "",
        date: "",
        desc: " ",
        skills: [""]
    }
]
const Slugs = [
    "typescript",
    "javascript",
    "java",
    // "Python",
    "react",
    "angular",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "express",
    "mysql",
    "firebase",
    // "BootStrap",
    "docker",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "figma",

];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };