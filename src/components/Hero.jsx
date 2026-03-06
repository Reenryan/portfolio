function Hero() {
  return (

<section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-slate-900">

{/* PROFILE IMAGE */}

<div className="relative">

<img
src="/data/a.jpeg"
alt="profile"
className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-cyan-400 object-cover"
/>

<span className="absolute inset-0 rounded-full border-4 border-cyan-400 animate-ping"></span>

</div>


{/* TITLE */}

<h1 className="text-3xl md:text-5xl font-bold mt-6 text-white">

Hi, I'm <span className="text-cyan-400">Reen Ryan</span>

</h1>


{/* DESCRIPTION */}

<ol className="mt-6 max-w-2xl space-y-4 text-gray-300 text-sm md:text-base">

<li className="flex gap-3 text-left">
<span className="text-cyan-400 font-bold">01.</span>
<span>
Software Developer and Data Analyst experienced in building scalable systems and modern web applications.
</span>
</li>

<li className="flex gap-3 text-left">
<span className="text-cyan-400 font-bold">02.</span>
<span>
Strong background in backend services, APIs, and user interfaces with emphasis on clean, maintainable solutions.
</span>
</li>

<li className="flex gap-3 text-left">
<span className="text-cyan-400 font-bold">03.</span>
<span>
Passionate about solving real-world problems through data analysis, modelling, and modern technology.
</span>
</li>

</ol>


{/* BUTTON */}

<a
href="/data/reen.pdf"
download
className="mt-8 bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600 transition"
>

Download Resume

</a>

</section>

  )
}

export default Hero