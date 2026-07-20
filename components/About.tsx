import { motion } from "framer-motion";

export default function About() {
  return (
    // Menggunakan bg-transparent agar menyatu dengan bg-void dari halaman utama
    <section id="about" className="flex min-h-screen flex-col items-center justify-center px-6 py-24 bg-transparent relative overflow-hidden">
      
      {/* Efek Glow tambahan di latar belakang About agar nyambung dengan Hero */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-flame/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-spark/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full z-10"
      >
        <h2 className="mb-16 text-center text-3xl font-bold sm:text-4xl font-display text-ink">
          About <span className="text-spark">Me</span>
        </h2>
        
        <div className="flex flex-col items-center">
          {/* Kolom Teks Deskripsi */}
          <div className="flex flex-col items-center text-center max-w-3xl mb-20">
            <p className="mb-6 text-lg leading-relaxed text-ink-muted">
              I am a Web Developer interested in building websites that not only function well,
              but also provide a user-friendly experience and meet business needs.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-ink-muted">
              I believe that a website is not just lines of code, 
              but a solution born from understanding problems, analyzing user needs, 
              and translating them into a user-friendly digital product.
            </p>
            <p className="text-lg leading-relaxed text-ink-muted">
              I am currently developing my skills in building modern web applications with a focus on performance, 
              user experience, security, and interface quality to deliver better digital solutions.
            </p>
          </div>

          {/* Kolom My Approach */}
          <div className="w-full max-w-4xl">
            <h3 className="mb-12 text-center text-2xl font-bold font-display text-ink">
              My <span className="text-spark">Approach</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Garis penghubung (hanya di desktop) */}
              <div className="hidden md:block absolute top-[32px] left-[16.6%] right-[16.6%] h-[1px] bg-line z-0" />
              
              {[
                { 
                  step: "01", 
                  title: "Understand Before Building",
                  desc: "Every project begins with understanding user needs and business goals so that the solution built truly fits the problem at hand." 
                },
                { 
                  step: "02", 
                  title: "Design With Purpose",
                  desc: "Designing an interface that is simple but remains modern, functional, and provides a comfortable experience so that it is easy for users to use." 
                },
                { 
                  step: "03", 
                  title: "Build With Responsibility",
                  desc: "Developing websites with attention to quality, performance, and ease of maintenance to provide long-term value." 
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative z-10 flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-void border-2 border-line flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-spark group-hover:shadow-[0_0_20px_rgba(255,201,60,0.2)] group-hover:-translate-y-2">
                    <span className="font-mono text-xl font-bold text-flame group-hover:text-spark transition-colors">{item.step}</span>
                  </div>
                  <h4 className="text-center font-bold text-ink uppercase tracking-wide px-2 group-hover:text-spark transition-colors mb-2">
                    {item.title}
                  </h4>
                  
                  {/* Animasi memunculkan deskripsi saat hover */}
                  <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-40 group-hover:opacity-100">
                    <p className="text-sm text-center text-ink-muted/80 px-4 pt-2">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
