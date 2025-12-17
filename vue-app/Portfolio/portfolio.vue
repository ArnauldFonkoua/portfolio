<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Education from './components/Education.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ScrollTop from './components/ScrollTop.vue'

// --- Portfolio Data ---
const portfolioData = {
  name: "FONKOUA DJONTU ARNAULD",
  title: "Software Engineering Student & Aspiring Full Stack Developer",
  bio: "Currently pursuing a B.S. in Software Engineering. I am passionate about leveraging modern frameworks to build impactful web applications and constantly seeking opportunities to learn and contribute to challenging projects. Co-founder experience has given me a strong foundation in product development and technical leadership.",
  careerSummary: "Focused on mastering the fundamentals of full-stack development. I build projects using the MERN/PERN stack and am eager to transition theoretical knowledge into practical, scalable solutions. Currently looking for 2026 internship opportunities.",
  skills: [
    { name: "JavaScript / Python", icon: "code" },
    { name: "React / Vue.js", icon: "code" },
    { name: "HTML / CSS / Tailwind", icon: "code" },
    { name: "Node.js / Express.js", icon: "code" },
    { name: "SQL (Postgres/MySQL)", icon: "terminal" },
    { name: "PHP ", icon: "terminal" },
    { name: "Agile / Scrum", icon: "zap" },
    { name: "API Design (REST)", icon: "zap" },
  ],
  experience: [
    {
      title: "Co-founder & Lead Developer",
      company: "businesslibres",
      duration: "2025 - Present",
      description: "Co-founded a directory service and led the development of the initial MVP using PHP and a simple Firebase backend. Managed feature implementation and gained practical experience in product market fit.",
      tags: ["Startup", "PHP", "Firebase"]
    },
    {
      title: "Software Engineering Intern",
      company: "SOPECAM",
      duration: "Sept 2024 - Oct 2024",
      description: "Performed preventive maintenance and conducted weekly inspections of company IT equipment. Successfully carried out diagnostic checks and repairs on computers and networks.",
      tags: ["Python", "PHP", "Networking", "Maintenance"]
    }
  ],
  projects: [
    {
      name: "Online Intervention Management (found on github)",
      description: "A web app developed for SOPECAM to solve task delays in the IT department. Manages requests for networking, hardware, and software issues company-wide.",
      link: "#",
      tags: ["Full Stack", "PHP", "Agile"],
      image: "https://placehold.co/600x400/4f46e5/ffffff?text=Intervention+System"
    },
    {
      name: "Universal Store e-Commerce (Still under development)",
      description: "User-friendly platform for electronic devices. Powered by AI features for easier purchasing. Built with PHP (PDO), Python, and JavaScript.",
      link: "#",
      tags: ["PHP", "Python", "MySQL"],
      image: "https://placehold.co/600x400/4f46e5/ffffff?text=e-Commerce"
    },
    {
      name: "Diabetes Predictive AI (found on github)",
      description: "Machine learning program in Python analyzing diabetes datasets to make health predictions using TensorFlow and Scikit-Learn.",
      link: "#",
      tags: ["Python", "TensorFlow", "ML"],
      image: "https://placehold.co/600x400/4f46e5/ffffff?text=Predictive+AI"
    }
  ],
  education: {
    degree: "B.S. Software Engineering",
    institution: "Siantou University Institute",
    duration: "Expected Oct 2026",
    details: "Relevant coursework includes Algorithms, Data Structures, Database Systems, and Web Application Development."
  },
  contact: {
    email: "arnauldfonkoua@gmail.com",
    github: "ArnauldFonkoua",
    linkedin: "arnauld-fonkoua-djontu",
    phone: "+237 694817663"
  }
}

// --- State & Logic ---
const isMenuOpen = ref(false)
const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 400
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    isMenuOpen.value = false
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Education', id: 'education' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' }
]
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100">
    <Navbar :portfolioData="portfolioData" :navItems="navItems" :isMenuOpen="isMenuOpen" :toggleMenu="toggleMenu" :scrollTo="scrollTo" />

    <Hero :portfolioData="portfolioData" :scrollTo="scrollTo" />

    <About :portfolioData="portfolioData" :scrollTo="scrollTo" />

    <Education :portfolioData="portfolioData" />

    <Experience :portfolioData="portfolioData" />

    <Skills :portfolioData="portfolioData" />

    <Projects :portfolioData="portfolioData" />

    <Contact :portfolioData="portfolioData" />

    <Footer :portfolioData="portfolioData" />

    <ScrollTop :showScrollTop="showScrollTop" :scrollTo="scrollTo" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style>
