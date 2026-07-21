import { motion } from "framer-motion";
import { ExternalLink, Image as ImageIcon } from "lucide-react";

export default function Projects() {

  // Data Project
  const projectsData = [
    {
      title: "E-Commerce B2C Joranku Rod Custom",
      category: "E-Commerce",
      description: "Dashboard admin interaktif dengan chart dan tabel data real-time.",
    
      tags: ["Laravel 12", "PHP", "HTML", "CSS", "JavaSript", "Fabric.Js", "Chart.Js", "MySql", "Midtrans", "RajaOngkir", "Tawk.To"],
      image: "/jrcstore1.jpg", 
      liveUrl: "https://jrcstore.my.id/",
      caseStudyUrl: "#", 
    },
    {
      title: "Aplikasi Kasir (POS)",
      category: "Web Point Of Sale (POS)",
      description: "Sistem point-of-sale berbasis web dengan fitur manajemen stok.",
      tags: ["Laravel 12", "PHP", "HTML", "Bootstrap", "JavaSript", "Chart.Js", "MySql", "Midtrans"],
      image: "/pos_af.jpg",
      liveUrl: "", 
      caseStudyUrl: "#",
    },
    {
      title: "E- Commerce B2C Toko Asun",
      category: "E-Commerce",
      description: "Website personal yang sedang kamu lihat saat ini, full animasi Y2K.",
      tags: ["Laravel 12", "PHP", "HTML", "Bootstrap", "JavaSript", "Chart.Js", "MySql", "Midtrans", "RajaOngkir"],
      image: "/sembako.jpg",
      liveUrl: "https://tokoasun.my.id/",
      caseStudyUrl: "#",
    },
  ];

  return (
    <section id="projects" className="flex min-h-screen flex-col items-center justify-center px-6 py-24 bg-transparent relative z-10">
      <div className="max-w-6xl w-full">

        {/* Judul & Subjudul Section */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold sm:text-4xl font-display text-ink"
          >
           Featured <span className="text-flame">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-ink-muted text-lg leading-relaxed"
          >
            A selection of projects that showcase my approach to solving real-world problems through web development.
          </motion.p>
        </div>


        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-surface border border-line transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,61,46,0.15)] hover:border-flame/50">
              {/* Gambar  */}
              <div className="w-full h-64 bg-surface-2 overflow-hidden border-b border-line relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              </div>

              {/* Konten Kartu */}
              <div className="p-6 flex flex-col flex-1">
                {/* Category */}
                <span className="text-spark text-xs font-mono font-bold uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>

                {/* Project Title */}
                <h3 className="mb-2 text-xl font-bold font-display text-ink group-hover:text-spark transition-colors">
                  {project.title}
                </h3>
                
                {/* Short Description */}
                <p className="mb-4 text-ink-muted text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Stack (Tags) */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="rounded-md border border-line bg-void px-3 py-1 font-mono text-[10px] font-medium text-ink-muted uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tombol Aksi (2 Buttons) */}
                <div className="flex gap-3 mt-auto pt-4 border-t border-line border-dashed">
             
                  <a
                    href={project.caseStudyUrl}
                    className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-line bg-surface-2 px-4 py-2 text-xs font-bold text-ink transition-all hover:border-spark/50 hover:text-spark" >
                    <ImageIcon size={14} /> View
                  </a>

                  {/* Tombol Website (Hanya muncul jika liveUrl diisi) */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-flame/10 border border-flame/20 px-4 py-2 text-xs font-bold text-flame transition-all hover:bg-flame hover:text-void hover:shadow-[0_0_15px_rgba(255,61,46,0.4)]"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
