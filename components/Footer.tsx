export default function Footer() {
  return (
    <footer className="bg-black text-center py-10">

      <h3 className="text-xl font-bold text-cyan-400">
        Janagam Nithin
      </h3>

      <p className="text-gray-500 mt-3">
        Cybersecurity Enthusiast | AI & ML Developer
      </p>

      <div className="flex justify-center gap-6 mt-6">

        <a
          href="https://github.com/JANAGAMNITHIN"
          target="_blank"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/janagam-nithin01"
          target="_blank"
        >
          LinkedIn
        </a>

      </div>

      <p className="text-gray-600 mt-6">
        © 2026 Janagam Nithin
      </p>

    </footer>
  );
}