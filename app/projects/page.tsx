export default function Projects() {
  const projects = [
    {
      title: "University Notification System",
      desc: "A Django-based platform integrating scraping, push notifications, and academic result updates.",
      year: "2024",
    },
    {
      title: "E-commerce Clothing Site",
      desc: "A minimalist online clothing store with secure payments and admin dashboard.",
      year: "2025",
    },
  ];

  return (
    <section className="min-h-screen py-24 bg-[#f9f9f9] text-center">
      <h2 className="text-4xl font-serif font-bold mb-12 text-black">Selected Projects</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.title}
            className="border border-black p-8 rounded-md hover:shadow-[4px_4px_0_#000] transition text-left bg-white"
          >
            <h3 className="text-2xl font-serif mb-2 text-black">{p.title}</h3>
            <p className="text-gray-700 mb-3">{p.desc}</p>
            <p className="text-gold text-sm font-semibold">{p.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
