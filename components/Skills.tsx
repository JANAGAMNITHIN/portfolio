const skills = [
  "Python",
  "Java",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "MySQL",
  "Machine Learning",
  "Cybersecurity",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 px-5 py-3 rounded-lg"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}