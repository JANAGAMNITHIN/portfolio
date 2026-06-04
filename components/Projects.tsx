const projects = [
  {
    title: "Traffic Congestion Prediction",
    description:
      "Developed machine learning models using Random Forest Regression and Support Vector Regression to predict traffic congestion.",
    tech: "Python, Scikit-Learn, Machine Learning",
  },

  {
    title: "Secure Email Communication",
    description:
      "Built a secure email communication system using AES, DES, and Caesar Cipher encryption techniques.",
    tech: "Python, Cryptography",
  },

  {
    title: "AI vs Human Text Classification",
    description:
      "Developed an NLP-based model to identify AI-generated text and human-written text.",
    tech: "Python, NLP, Machine Learning",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {project.description}
              </p>

              <div className="mt-4 text-cyan-400">
                {project.tech}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}