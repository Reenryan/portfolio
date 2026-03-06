function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white animated-gradient">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
        Contact Me
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-around items-center gap-12 px-4">

        {/* WhatsApp */}
        <a
          href="https://wa.me/254114134699"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-green-500 hover:bg-green-600 px-6 py-4 rounded-lg transition transform hover:scale-105 shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.923 11.923 0 0012 0C5.373 0 0 5.373 0 12a11.95 11.95 0 001.84 6.27L0 24l5.79-1.81A11.957 11.957 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.24-6.2-3.48-8.52zm-8.52 19c-2.02 0-3.91-.58-5.5-1.57l-.39-.24-3.45 1.08 1.17-3.36-.26-.4A9.937 9.937 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.38-7.25c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.65.15s-.75.95-.92 1.14c-.17.19-.33.21-.61.07-.29-.15-1.22-.45-2.32-1.42-.86-.77-1.44-1.72-1.61-2 .17-.25.02-.38-.12-.53-.13-.13-.29-.33-.43-.5-.15-.17-.2-.29-.3-.48-.1-.19-.05-.35.02-.5.07-.14.65-1.56.89-2.15.23-.56.46-.49.63-.5.17-.01.37-.01.57-.01.19 0 .5.07.76.36s.87.85.95.92c.08.07.13.14.2.23.07.08.02.15-.02.23-.04.08-.61 1.46-.85 2s-.28.41.04.67c.32.26 1.35 2.07 3.28 2.9 1.92.83 1.92.55 2.27.51.35-.04 1.14-.46 1.3-.91.16-.45.16-.83.11-.91-.05-.08-.18-.13-.37-.23z" />
          </svg>
          <span className="font-semibold">Chat on WhatsApp</span>
        </a>

        {/* Email */}
        <a
          href="andrianmutwii@gmail.com"
          className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 px-6 py-4 rounded-lg transition transform hover:scale-105 shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 13.5L0 6v12a2 2 0 002 2h20a2 2 0 002-2V6l-12 7.5zM12 12L0 4V2a2 2 0 012-2h20a2 2 0 012 2v2l-12 8z" />
          </svg>
          <span className="font-semibold">Send Email</span>
        </a>

      </div>
    </section>
  );
}

export default Contact;