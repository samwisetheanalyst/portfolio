export default function Skills() {
  const skills = [
    "HTML5",
    "CSS3 / TailwindCSS",
    "JavaScript (ES6+)",
    "React / Next.js",
    "Git / GitHub",
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8">My Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/30 hover:scale-105 transition-transform"
          >
            <p className="text-lg font-semibold text-indigo-300">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
