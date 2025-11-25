
export default function Skills() {
  const skills = ["JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS"];

  return (
    <section id="skills" className="py-20 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-12">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-[#161b22] border border-gray-700 text-white p-6 rounded-xl hover:scale-105 transition shadow-md"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
