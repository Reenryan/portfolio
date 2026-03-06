function Skills() {
  const softSkills = [
    "Problem Solving",
    "System Design Thinking",
    "Cross-functional Collaboration",
    "Adaptability",
    "Clear Communication",
    "Critical Thinking",
    "Time Management",
    "Continuous Learning",
    "Team Collaboration",
    "Emotional Intelligence",
    "Leadership",
    "Creativity"
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">

      {/* SOFT SKILLS */}
      <h3 className="text-3xl text-center text-cyan-400 mt-24 mb-10">
        Soft Skills
      </h3>

      {/* Add px-4 for mobile padding */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
        {softSkills.map((skill, i) => (
          <div
            key={i}
            className="bg-slate-800 p-6 rounded-xl text-center hover:scale-105 hover:bg-slate-700 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;