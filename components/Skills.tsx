import { motion } from "framer-motion";

export default function Skills() {
  const technicalSkills = [
    {
      category: "Web Development",
      skills: ["PHP", "JavaScript", "TypeScript", "HTML", "CSS", "Laravel 11/12", "Next.js", "React", "WordPress"]
    },
    {
      category: "UI/UX, System Analysis & Design",
      skills: ["Figma", "draw.io", "Wireframing", "UI Design", "Prototyping", "Adobe Photoshop", "Canva"]
    },
    {
      category: "Software Testing & QA",
      skills: ["Manual Testing", "Black Box Testing", "State Transition Testing", "Test Case", "Test Scenario"]
    },
    {
      category: "Deployment",
      skills: ["Git", "GitHub", "Nginx", "Ngrok", "Hosting", "Domain", "DNS Management"]
    },
    {
      category: "System Integration",
      skills: ["Midtrans", "RajaOngkir", "SMTP", "Tawk.to"]
    },
    {
      category: "Database & Tools",
      skills: ["MySQL", "Ms. Word", "Ms. Excel", "Ms. Teams", "Capcut", "Google Workspace"]
    }
  ];

  const softSkills = [
    "Problem Solving", 
    "Analytical Thinking", 
    "Detail-Oriented", 
    "User-Centric Thinking", 
    "Fast Learner", 
    "Communication", 
    "Teamwork", 
    "Adaptable"
  ];

  return (
    <section id="skills" className="flex flex-col items-center justify-center px-4 py-24 bg-transparent relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl"
      >
        <div className="text-center mb-16">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl font-display text-ink">
            My <span className="text-spark">Skills</span>
          </h2>
          <p className="text-base text-ink-muted leading-relaxed max-w-xl mx-auto">
            The tools, technologies, and personal skills I use to build and design digital projects.
          </p>
        </div>
        {/* Technical Skills Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-ink mb-6 text-center sm:text-left">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface/50 p-6 rounded-2xl border border-line hover:border-spark/50 transition-all hover:shadow-[0_0_20px_rgba(255,201,60,0.1)] group backdrop-blur-sm flex flex-col">
                <h4 className="text-ink font-semibold mb-4 text-lg group-hover:text-spark transition-colors">
                  {item.category}
                </h4>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-void/50 border border-line rounded-lg text-xs font-medium text-ink-muted group-hover:border-line/80 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-surface/30 p-8 rounded-3xl border border-line backdrop-blur-sm text-center"
        >
          <h3 className="text-xl font-bold text-ink mb-8">Personal Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {softSkills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 sm:px-5 sm:py-2.5 bg-void border border-spark/20 rounded-full text-sm font-medium text-ink hover:border-spark hover:text-spark hover:shadow-[0_0_15px_rgba(255,201,60,0.2)] transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}