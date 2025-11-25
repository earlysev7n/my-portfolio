
export default function Projects() {
  const projects = [
    { title: "Project 1", description: "Full-stack app built with Next.js." },
    { title: "Project 2", description: "E-commerce platform with Stripe." },
  ];

  return (
    <section id="projects" className="py-20 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white">Projects</h2>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-[#161b22] border border-gray-700 p-8 rounded-xl shadow-lg hover:border-blue-500 transition"
            >
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-400 mt-3">{project.description}</p>

              <button className="mt-6 text-blue-400 hover:text-blue-300 transition">
                View Project →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
