export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Authentic Content Creation',
        desc: 'I provide personalized UGC creation services that transform brand messaging into engaging, authentic content. My creative process ensures your story resonates deeply with your target audience.',
        subdesc: 'Empowering brands with compelling visuals and tailored social media strategies.',
        video: '/assets/project/project1.MOV',
    },
    {
        title: 'Social Media Strategy & Execution',
        desc: 'I craft integrated social media campaigns that elevate brand presence and drive genuine engagement. By combining creative storytelling with data-driven insights, I help brands connect meaningfully with their audience.',
        subdesc: 'Building powerful digital narratives that foster lasting relationships.',
        video: '/assets/project/project2.MP4',
    },
    {
        title: 'Creative Mentorship & Consultancy',
        desc: 'I offer one-on-one mentorship and consultancy to help aspiring creators and brands unlock their creative potential. My guidance is tailored to foster growth and innovation in digital storytelling.',
        subdesc: 'Personalized strategies and expert advice to boost your creative journey.',
        video: '/assets/project/project4.mov',
    },
    {
        title: 'Brand Development & UGC Services',
        desc: 'I empower brands with authentic, user-generated content and strategic brand development. My services transform creative visions into impactful digital narratives that drive growth.',
        subdesc: 'Tailored content solutions to elevate your brand and engage your audience.',
    },
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.03 : isMobile ? 0.04 : 0.045,
        deskPosition: isMobile ? [0.1, -1, 0] : [0.25, -2, -3],
        cubePosition: isSmall ? [2, -5, 0] : isMobile ? [3, -5, 0] : isTablet ? [3, -5, 0] : [6, -5.5, 0],
        cube2Position: isSmall ? [1, 4, 0] : isMobile ? [2, 4, 0] : isTablet ? [2, 4, 0] : [5, 3, 0],
        cube3Position: isSmall ? [-3, -10, -10] : isMobile ? [-4, -10, -10] : isTablet ? [-5, -7, -10] : [-7, -13, -10],

    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2022 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];