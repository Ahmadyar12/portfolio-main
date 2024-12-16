import project1 from "../assets/projects/project-1.jpg"
import project2 from "../assets/projects/project-2.jpg"
import project3 from "../assets/projects/project-3.jpg"
import project4 from "../assets/projects/project-4.jpg"
import project5 from "../assets/projects/project-5.jpg"
import project6 from "../assets/projects/project-6.jpg"

import clienimage1 from "../assets/clients/client-sm-1.jpg"
import clienimage2 from "../assets/clients/client-sm-2.jpg"
import clienimage3 from "../assets/clients/client-sm-3.jpg"
import clienimage4 from "../assets/clients/client-sm-4.jpg"

import Newicon from "../assets/icons8-paint-palette-50.png";
import Destopicon from "../assets/icons8-desktop-computer-48.png";
import Penicon from "../assets/icons8-design-48.png";
import PenBrush from "../assets/icons8-paint-brush-64.png";
import Areapic from "../assets/icons8-area-chart-64.png";
import Megaphone from "../assets/icons8-megaphone-94.png";


export const filterLinks = [
    "All",
    "Frontend",
    "Full Stack",
    "React",
    ".NET",
    "APIs",
    "Database"
];

export const Portfoliodata = [
    {
        id: 1,
        title: "Art Gallery Website",
        description: "Developed a user-friendly art gallery website showcasing diverse artworks.",
        technologies: "React, TailWindCSS, Node.js, MongoDB",
        date: "July 16, 2020",
        github: "https://github.com/username/art-gallery",
        LiveDemoUrl: "https://art-gallery-demo.com",
        Category: "All",
        icon: <i class="fa-solid fa-palette"></i>,
        image: project1
    },
    {
        id: 2,
        title: "E-commerce Store",
        description: "Built a fully functional e-commerce platform with a sleek user interface.",
        technologies: "Next.js, TailWindCSS, Express.js, MySQL",
        date: "March 10, 2021",
        github: "https://github.com/username/e-commerce-store",
        LiveDemoUrl: "https://ecommerce-demo.com",
        Category: "FullStack",
        icon: <i class="fa-solid fa-cart-shopping"></i>,
        image: project2
    },
    {
        id: 3,
        title: "Personal Portfolio",
        description: "Created a responsive portfolio to showcase my skills and projects.",
        technologies: "React, CSS, Framer Motion",
        date: "September 22, 2021",
        github: "https://github.com/username/portfolio",
        LiveDemoUrl: "https://portfolio-demo.com",
        Category: ".Net",
        icon: <i class="fa-solid fa-user"></i>,
        image: project3
    },
    {
        id: 4,
        title: "Food Delivery App",
        description: "Designed and developed a food delivery app with real-time tracking.",
        technologies: "Flutter, Firebase, Dart",
        date: "January 15, 2022",
        github: "https://github.com/username/food-delivery-app",
        LiveDemoUrl: "https://food-delivery-demo.com",
        Category: "React",
        icon: <i class="fa-solid fa-burger"></i>,
        image: project4
    },
    {
        id: 5,
        title: "Chat Application",
        description: "Implemented a real-time chat application with group and private messaging.",
        technologies: "React, Socket.io, Node.js",
        date: "May 8, 2022",
        github: "https://github.com/username/chat-app",
        LiveDemoUrl: "https://chat-app-demo.com",
        Category: "APIs",
        icon: <i class="fa-solid fa-comments"></i>,
        image: project5
    },
    {
        id: 6,
        title: "Fitness Tracker",
        description: "Developed a fitness tracking app to monitor workouts and progress.",
        technologies: "React Native, Redux, Firebase",
        date: "August 30, 2023",
        github: "https://github.com/username/fitness-tracker",
        LiveDemoUrl: "https://fitness-tracker-demo.com",
        Category: "Database",
        icon: <i class="fa-solid fa-dumbbell"></i>,
        image: project6
    }

]
export const Questions = [
    { title: "What is Callum?", description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet." },
    { title: "How Can I Help You?", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel justo nec libero vulputate convallis." },
    { title: "Simple process for workflow?", description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." },
    { title: "Is Callum a Multi-purpose template?", description: "Fusce vel mauris nec eros ullamcorper fermentum a ut arcu." },
    { title: "Why responsive one page template?", description: "Curabitur ac ligula eu urna aliquam tempor vitae sit amet neque." },
];

export const SwapingQuestion = [

    {
        title: "Chris Tom",
        description: "“I have used them twice now. Good rates, very efficient service and priced simply dummy text of the printing and typesetting industry quidam interesset his et. simply dummy text of the printing and typesetting industry. Excellent.”",
        image: clienimage1,
        additionalInfo: "User from UK"
    },
    {
        title: "Jay Shah",
        description: "“Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure. simply dummy text of the printing and typesetting industry.”",
        image: clienimage2,
        additionalInfo: "Founder at Icomatic Pvt Ltd"
    },
    {
        title: "Patrick Cary",
        description: "“I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure. simply dummy text of the printing and typesetting industry.”",
        image: clienimage3,
        additionalInfo: "Freelancer from USA"
    },
    {
        title: "Dennis Jacques",
        description: "“Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.”",
        image: clienimage4,
        additionalInfo: "Noon Inc"
    }

];


export const skillsData = [
    {
        image: Newicon,
        title: "Graphic Design",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
    },
    {
        image: Destopicon,
        title: "Web Design",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
    },
    {
        image: Penicon,
        title: "UI/UX Design",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
    },
    {
        image: PenBrush,
        title: "App Design & Develop",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
    },
    {
        image: Areapic,
        title: "Business Analysis",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
    },
    {
        image: Megaphone,
        title: "SEO Marketing",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
    }
];


export const Resumedata = [
    {
        Educationsection: "My Education",
        items: [
            {
                title: "Master in Computer Engineering",
                institution: "Harvard University",
                duration: "2015 - 2017",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
            },
            {
                title: "Bachelor in Computer Engineering",
                institution: "University of California",
                duration: "2014 - 2015",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
            },
            {
                title: "International Science",
                institution: "Harvard University",
                duration: "2013 - 2014",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
            },
        ],
    },
    {
        Experiencesection: "My Experience",
        items: [
            {
                title: "Master in Computer Engineering",
                institution: "Harvard University",
                duration: "2015 - 2017",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
            },
            {
                title: "Bachelor in Computer Engineering",
                institution: "University of California",
                duration: "2014 - 2015",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
            },
            {
                title: "International Science",
                institution: "Harvard University",
                duration: "2013 - 2014",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
            },
        ],
    },
];






