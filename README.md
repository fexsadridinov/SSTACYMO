# Stacy | UGC & Social Media Marketing Portfolio

A modern, interactive website showcasing the services of Stacy—a dedicated professional specializing in User-Generated Content (UGC), Social Media Marketing, Brand Development, and Mentorship. This site leverages cutting-edge web technologies to deliver a dynamic and responsive experience across all devices.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

This website is an online portfolio for Stacy, a professional UGC creator and social media marketing expert. It showcases her services, project highlights, and contact information, all presented with engaging interactive elements including 3D scenes, an animated globe, and dynamic content displays.

## Features

- **Interactive 3D Experiences:** Built using React Three Fiber and Three.js to provide animated, engaging visual elements.
- **Responsive Design:** Styled with Tailwind CSS to ensure a seamless experience on mobile, tablet, and desktop devices.
- **Dynamic Project Showcase:** Easily browse through projects and services.
- **Integrated Contact Form:** Connect directly via a form powered by EmailJS.
- **Fast Performance:** Leveraging Vite for rapid development and optimized builds.

## Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [Three.js](https://threejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)
- [Netlify](https://www.netlify.com/)

## Getting Started

Follow these instructions to set up a local copy of the project.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo

2. **Install dependencies:**

bash
Copy
npm install
# or
yarn install

3. **Configure Environment Variables:**

Create a .env file in the root directory with the following content (using the VITE_ prefix):
    VITE_EMAILJS_USERID=your_emailjs_user_id
    VITE_EMAILJS_TEMPLATEID=your_emailjs_template_id
    VITE_EMAILJS_RECEIVERID=your_emailjs_receiver_id

4. **Running Locally:**

npm run dev
# or
yarn dev
