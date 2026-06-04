const certifications = [
  "Cisco Introduction to Networks",
  "Cisco Junior Cybersecurity Analyst",
  "Cisco Switching, Routing and Wireless Essentials",
  "AWS Cloud Foundations",
  "AWS Virtual Internship",
];

export default function Certifications() {
  return (
    <section className="py-24 bg-slate-900 text-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          {certifications.map((cert) => (
            <div
              key={cert}
              className="bg-slate-800 p-5 rounded-lg"
            >
              {cert}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}