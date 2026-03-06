function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-8 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Name / Copyright */}
        <div className="text-sm">
          © 2026 <span className="text-cyan-400 font-semibold">Reen Ryan</span>. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://wa.me/254114134699"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            WhatsApp
          </a>
          <a
            href="mailto:andrianmutwii@gmail.com"
            className="hover:text-blue-500 transition"
          >
            Email
          </a>
          <a
            href="https://github.com/Reenryan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-100 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
        </div>

        {/* Back to top */}
        <div>
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-cyan-400 transition"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;