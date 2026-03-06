export default function Techskills() {
  const skills = [
    "Python","R","Matlab","NodeJS","C","Express","JavaScript",
    "Java","CSS","HTML","React","Embedded JS",
    "MySQL","SQL Server","MongoDB","Docker",
    "Git","GitHub","Power BI","MS Excel","Canva"
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 animated-gradient px-4 md:px-6"
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-14">
        Technical Skills
      </h2>

      <div className="space-y-10 max-w-full">

        {/* Row 1: scroll left */}
        <div className="relative w-full overflow-hidden h-12">
          <div className="flex gap-10 animate-scroll-left">
            {skills.concat(skills).map((skill, i) => (
              <span
                key={i}
                className="px-6 py-2 bg-slate-800/60 rounded-xl backdrop-blur text-sky-400 text-lg font-medium whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: scroll right */}
        <div className="relative w-full overflow-hidden h-12">
          <div className="flex gap-10 animate-scroll-right">
            {skills.concat(skills).map((skill, i) => (
              <span
                key={i}
                className="px-6 py-2 bg-slate-800/60 rounded-xl backdrop-blur text-purple-400 text-lg font-medium whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Row 3: scroll left slow */}
        <div className="relative w-full overflow-hidden h-12">
          <div className="flex gap-10 animate-scroll-left-slow">
            {skills.concat(skills).map((skill, i) => (
              <span
                key={i}
                className="px-6 py-2 bg-slate-800/60 rounded-xl backdrop-blur text-emerald-400 text-lg font-medium whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Row 4: scroll right slow */}
        <div className="relative w-full overflow-hidden h-12">
          <div className="flex gap-10 animate-scroll-right-slow">
            {skills.concat(skills).map((skill, i) => (
              <span
                key={i}
                className="px-6 py-2 bg-slate-800/60 rounded-xl backdrop-blur text-orange-400 text-lg font-medium whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}