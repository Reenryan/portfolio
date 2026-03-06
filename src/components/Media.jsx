function Media() {
  const mediaItems = [
    { title: " Poster 1", type: "Poster", src: "/data/posters/poster1.jpeg", link: "/media/poster1.jpg" },
    { title: "CV Video", type: "Video", src: "/data/posters/cv.mp4" },
    { title: "Dashboard Mockup", type: "Poster", src: "/data/posters/poster2.jpeg", link: "/media/design1.jpg" },
    { title: "Data Analysis", type: "Video", src: "/data/posters/slide1.mp4" },
    { title: "Dashboard Mockup", type: "Poster", src: "/data/posters/poster3.jpeg", link: "/media/design1.jpg" },
  ];

  return (
    <section  id="dashboards" className="py-24 bg-slate-900 text-white">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
        Media
      </h2>

      {/* Add px-4 for mobile spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {item.type === "Poster" ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </a>
            ) : (
              <video
                src={item.src}
                className="w-full h-64 object-cover rounded-xl"
                controls
                loop
                muted
                autoPlay
              />
            )}

            <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded text-white text-sm">
              {item.title}
            </div>

            <span className="absolute top-4 right-4 px-2 py-1 text-xs rounded bg-cyan-500">
              {item.type}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Media;