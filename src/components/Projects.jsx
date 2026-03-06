function Projects() {
  const projects = [
    {
      title: "Cnetflix Website",
      image: "/data/projects/net.png",
      live: true,
      link: "https://cnetflix-reen-ryan.onrender.com/",
    },
    {
      title: "React  App",
      image: "/data/projects/r.png",
      live: true,
      link: "https://reenryan.github.io/React-app/",
    },
    {
      title: "Data Dashboard",
      image: "/dashboard.png",
      live: false,
      link: "https://reenryan-dashboard.com",
    },
    // add more...
  ];

  return (
    <section  id="projects" className="py-24 bg-slate-900 text-white">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
        Projects
      </h2>

      {/* Add px-4 for small screen margin */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <a
            href={project.live ? project.link : "#"}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-lg bg-slate-800 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
            className={`absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center transition-opacity duration-500
              ${project.live ? "opacity-100 md:opacity-0 group-hover:opacity-100" : "opacity-100 md:opacity-0 group-hover:opacity-100"}`}
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <span
              className={`px-4 py-1 rounded-full text-sm ${
                project.live ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {project.live ? "Live" : "Not Live"}
            </span>
          </div>
           
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;