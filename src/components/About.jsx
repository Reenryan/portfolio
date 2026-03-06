export default function About() {
  const skillIcons = [
    "/data/skills/python.png",
    "/data/skills/canva.png",
    "/data/skills/mat.png",
    "/data/skills/mysql.png",
    "/data/skills/node.png",
    "/data/skills/data.png",
    "/data/skills/mongo.png",
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 text-white ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">

        {/* Circular rotating skill ring */}
        <div className="relative w-64 h-64 flex items-center justify-center mx-auto md:mx-0">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ animation: "rotateRing 20s linear infinite" }}
          >
            {skillIcons.map((icon, index) => {
              const angle = (360 / skillIcons.length) * index;
              return (
                <img
                  key={index}
                  src={icon}
                  alt={`Skill ${index}`}
                  className="w-12 h-12 md:w-16 md:h-16 absolute"
                  style={{
                    transform: `rotate(${angle}deg) translate(100px) rotate(-${angle}deg)`,
                    transformOrigin: "center center",
                  }}
                />
              );
            })}
          </div>

          <div className="absolute w-12 h-12 rounded-full bg-slate-800/30 border-2 border-cyan-400"></div>

          <style>
            {`
              @keyframes rotateRing {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>

        {/* Text */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h2 className="text-4xl font-bold text-cyan-400">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Hi, I'm <span className="text-cyan-400 font-semibold">Muwtii Andrian Muia</span>, a Full-Stack Web Developer, Data Analyst, and Designer of engaging posters and slides. I build scalable web applications, craft insightful dashboards, and design visual content that captures attention.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            I love turning ideas into reality with modern technologies, and I’m always looking for exciting projects. If you need quality work done, whether it’s web development, data analysis, or creative design, don’t hesitate to <span className="text-cyan-400 font-semibold">reach out</span>!
          </p>
          <ul className="list-decimal list-inside space-y-2 text-gray-400">
            <li>Full-stack web applications with React, Node.js, and databases</li>
            <li>Data analysis and interactive dashboards for smart decisions</li>
            <li>Creative poster and slide designs to communicate your message</li>
          </ul>

          <div className="mt-6">
            <a href="/data/reen.pdf" download className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600 transition">
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}