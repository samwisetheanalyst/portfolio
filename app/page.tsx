"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center min-h-screen relative">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[85vh] space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center space-y-5"
        >
          {/* Profile Picture */}
          <div className="relative w-36 h-36 rounded-full overflow-hidden border border-neutral-700 shadow-lg">
            <Image
              src="/profile.jpeg" // Place in /public/profile.jpeg
              alt="Samuel's Profile Picture"
              fill
              priority
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <div>
            <h1 className="text-5xl md:text-6xl font-serif italic tracking-tight">
              Hello, I'm Samuel
            </h1>
            <p className="text-neutral-400 mt-4 max-w-md mx-auto text-base leading-relaxed">
              A data analyst, and developer blending logic and design to craft digital experiences that feel alive.
            </p>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="#projects" className="button">View Projects</a>
            <a
              href="#contact"
              className="border border-neutral-700 px-6 py-3 rounded-full hover:bg-neutral-800 transition-all"
            >
              Contact Me
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-400">
            <span>Data Analyst || Full-Stack Developer || Writer</span>
            <span>5+ Projects Delivered</span>
            <span>2+ Years Building</span>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-3xl text-left">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl mb-4 border-b border-neutral-700 pb-2"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-neutral-400 leading-relaxed text-base"
        >
          I'm a creative technologist, data analyst, writer, and developer who enjoys taking on one random, interesting idea at a time, with this website being one of them. I use Excel and SQL for data analysis, Django and React for software and web development, and a mix of design tools to bring concepts to life. When I'm not coding or analyzing data, I am making notes about my experiences, creating stories from them.
        </motion.p>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-4xl text-left">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl mb-10 border-b border-neutral-700 pb-2"
        >
          Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Data Analysis & Dashboards",
              desc: "Turn messy datasets into clean insights, dashboards, and decision-ready reports.",
            },
            {
              title: "Product & Web Development",
              desc: "Build fast, modern web apps with careful attention to UX and performance.",
            },
            {
              title: "Storytelling & Content",
              desc: "Transform complex ideas into clear narratives and engaging digital experiences.",
            },
          ].map((service, i) => (
            <div key={i} className="card text-left">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section id="skills" className="max-w-4xl text-left">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl mb-8 border-b border-neutral-700 pb-2"
        >
          Skills & Tools
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Data",
              items: [
                { name: "Excel", icon: "/icons/tool.svg" },
                { name: "SQL", icon: "/icons/tool.svg" },
              ],
            },
            {
              title: "Development",
              items: [
                { name: "Django", icon: "/icons/tool.svg" },
                { name: "React", icon: "/icons/tool.svg" },
                { name: "Next.js", icon: "/icons/tool.svg" },
                { name: "TypeScript", icon: "/icons/tool.svg" },
                { name: "REST APIs", icon: "/icons/tool.svg" },
              ],
            },
          ].map((group, i) => (
            <div key={i} className="card text-left">
              <h3 className="text-xl font-semibold mb-3">{group.title}</h3>
              <ul className="text-sm text-neutral-400 space-y-1">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-2">
                    <Image
                      src={item.icon}
                      alt=""
                      width={16}
                      height={16}
                      className="opacity-70"
                    />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-4xl text-left">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl mb-8 border-b border-neutral-700 pb-2"
        >
          Experience
        </motion.h2>
        <div className="space-y-6">
          {[
            {
              title: "Data Analyst - Freelance",
              date: "2023 - Present",
              points: [
                "Built reporting dashboards for small teams and startups.",
                "Cleaned and modeled datasets for weekly decision-making.",
              ],
            },
            {
              title: "Full-Stack Developer - Independent Projects",
              date: "2025 - Present",
              points: [
                "Developed web apps with Next.js and Django.",
                "Shipped responsive UI with consistent design language.",
              ],
            },
          ].map((role, i) => (
            <div key={i} className="card text-left">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h3 className="text-xl font-semibold">{role.title}</h3>
                <span className="text-sm text-neutral-500">{role.date}</span>
              </div>
              <ul className="text-sm text-neutral-400 space-y-1">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl mb-10 border-b border-neutral-700 pb-2"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "kede: A Notification System, and social app",
              desc: "A Django + React Native app for academic updates and community discussions with real-time push notifications.",
              role: "Role: Full-Stack Developer",
              stack: "Stack: Django, React Native, Firebase",
              outcomes: [
                "Built a notification pipeline for event reminders and announcements.",
                "Designed user flows for posts, comments, and mentions.",
              ],
              link: "https://github.com/samwisetheanalyst/k-de",
            },
            {
              title: "E-commerce Platform",
              desc: "A fashion-forward Nigerian e-store built with Next.js and integrated with local payments and admin dashboards.",
              role: "Role: Fullstack Developer",
              stack: "Stack: Next.js, TailwindCSS, Paystack",
              outcomes: [
                "Implemented product catalog and cart experience.",
                "Integrated checkout with local payment rails.",
              ],
              link: "https://github.com/samwisetheanalyst/oge",
            },
            {
              title: "Portfolio Website",
              desc: "This website, designed with Next.js, TailwindCSS, and Framer Motion for smooth transitions and minimal beauty.",
              role: "Role: Designer & Developer",
              stack: "Stack: Next.js, TailwindCSS, Framer Motion",
              outcomes: [
                "Crafted a motion-first layout for storytelling.",
                "Optimized page structure for clarity and flow.",
              ],
              link: "#",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card text-left"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-neutral-400 leading-relaxed mb-3">{project.desc}</p>
              <p className="text-sm text-neutral-500 mb-2">{project.role}</p>
              <p className="text-sm text-neutral-500 mb-4">{project.stack}</p>
              <ul className="text-sm text-neutral-400 mb-4 space-y-1">
                {project.outcomes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:underline text-neutral-300"
              >
                Visit Project
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Writing & Notes Section */}
      <section id="writing" className="max-w-4xl text-left">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl mb-8 border-b border-neutral-700 pb-2"
        >
          Writing & Notes
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Building Thoughtful Dashboards",
              desc: "How I design data stories that communicate quickly and clearly.",
              link: "#",
            },
            {
              title: "Minimal Design, Maximum Clarity",
              desc: "Notes on reducing visual noise without losing personality.",
              link: "#",
            },
          ].map((post, i) => (
            <div key={i} className="card text-left">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-neutral-400 leading-relaxed mb-3">{post.desc}</p>
              <a href={post.link} className="text-sm font-medium hover:underline text-neutral-300">
                Read more
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl text-center">
        <h2 className="text-3xl mb-6 border-b border-neutral-700 pb-2">Get In Touch</h2>
        <p className="text-neutral-400 mb-6">
          Let's collaborate on something meaningful, whether it's code, design, or innovation.
        </p>
        <div className="text-sm text-neutral-500 mb-6 space-y-1">
          <p>Location: Lagos, Nigeria (GMT+1)</p>
          <p>Availability: Open for freelance and full-time opportunities</p>
        </div>
        <div className="flex gap-4 justify-center">
          <a href="mailto:samueloluwaseun989@gmail.com" className="button">Email</a>
          <a href="https://github.com/samwisetheanalyst" className="border border-neutral-700 px-6 py-3 rounded-full hover:bg-neutral-800 transition-all">GitHub</a>
          <a href="https://linkedin.com/in/samuel" className="border border-neutral-700 px-6 py-3 rounded-full hover:bg-neutral-800 transition-all">LinkedIn</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-neutral-600 text-sm">
        © {new Date().getFullYear()} Samuel Oluwaseun · Built with Next.js & TailwindCSS
      </footer>
    </main>
  );
}
