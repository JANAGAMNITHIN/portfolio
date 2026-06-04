import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-cyan-400 text-xl">
            Hello, I'm
          </h2>

          <h1 className="text-6xl font-bold mt-4">
            Janagam Nithin
          </h1>

          <h3 className="text-2xl text-gray-400 mt-4">
            Aspiring Cybersecurity Analyst & Full Stack Developer
          </h3>

          <p className="mt-6 text-gray-400">
           Final-year Computer Science student with a strong
           interest in Cybersecurity, Artificial Intelligence,
           Machine Learning, and Full-Stack Development.

           Currently building practical skills through
           projects, internships, certifications, and
           hands-on security labs.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/Resume.pdf"
              className="bg-cyan-500 px-6 py-3 rounded-lg"
            >
              Resume
            </a>

            <a
              href="#projects"
              className="border border-cyan-500 px-6 py-3 rounded-lg"
            >
              Projects
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/profile.jpg"
            alt="Nithin"
            width={350}
            height={350}
            className="rounded-3xl"
          />
        </div>

      </div>
    </section>
  );
}