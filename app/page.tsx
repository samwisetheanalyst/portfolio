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
              src="/profile.jpg" // Place in /public/profile.jpg
              alt="Samuel's Profile Picture"
              fill
              priority
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <div>
            <h1 className="text-5xl md:text-6xl font-serif italic tracking-tight">
              Hello, I’m Samuel
            </h1>
            <p className="text-neutral-400 mt-4 max-w-md mx-auto text-base leading-relaxed">
              A data analyst, and developer blending logic and design to craft digital experiences that feel alive.
            </p>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="#projects" className="button">View Projects</a>
            <a
              href="samueloluwaseun989@gmail.com"
              className="border border-neutral-700 px-6 py-3 rounded-full hover:bg-neutral-800 transition-all"
            >
              Contact Me
            </a>
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
          I’m a creative technologist, data analyst, writer, and developer who enjoys taking on one random, interesting idea at a time. This website being one of them. I use Excel and SQL for data analysis, Django and React for software development, and a mix of design tools to bring concepts to life. When I’m not coding or analyzing data, I am making notes about my experiences, creating stories from them.
        </motion.p>
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
              title: "kéde: A Notification System, and social app",
              desc: "A Django + React Native app for academic updates and community discussions with real-time push notifications.",
              link: "github.com/samwisetheanalyst/k-de",
            },
            {
              title: "E-commerce Platform",
              desc: "A fashion-forward Nigerian e-store built with Next.js and integrated with local payments and admin dashboards.",
              link: "github.com/samuel/clothing-store",
            },
            {
              title: "Portfolio Website",
              desc: "This website — designed with Next.js, TailwindCSS, and Framer Motion for smooth transitions and minimal beauty.",
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
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:underline text-neutral-300"
              >
                Visit Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl text-center">
        <h2 className="text-3xl mb-6 border-b border-neutral-700 pb-2">Get In Touch</h2>
        <p className="text-neutral-400 mb-6">
          Let’s collaborate on something meaningful — whether it’s code, design, or innovation.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="mailto:samueloluwaseun989@gmail.com" className="button">Email</a>
          <a href="https://github.com/samwisetheanalyst" className="border border-neutral-700 px-6 py-3 rounded-full hover:bg-neutral-800 transition-all">GitHub</a>
          <a href="https://linkedin.com/in/samuel" className="border border-neutral-700 px-6 py-3 rounded-full hover:bg-neutral-800 transition-all">LinkedIn</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-neutral-600 text-sm">
        © {new Date().getFullYear()} Samuel Oluwaseun· Built with Next.js & TailwindCSS
      </footer>
    </main>
  );
}
