import { projectsData } from "@/lib/projectsData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import BackgroundY2K from "@/components/BackgroundY2K";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-void overflow-x-hidden relative">
      <BackgroundY2K />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12 sm:py-20">
        
        {/* Back Button */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 mb-10 text-ink-muted hover:text-spark transition-colors font-medium">
          <ArrowLeft size={20} /> Back to Home
        </Link>

        {/* Header / Featured Image */}
        <div className="relative w-full h-[40vh] sm:h-[60vh] rounded-2xl overflow-hidden border border-line mb-12 shadow-[0_0_50px_rgba(255,61,46,0.1)] group">
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent z-10" />
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20 w-full">
            <span className="inline-block px-3 py-1 mb-3 sm:mb-4 text-[10px] sm:text-xs font-mono font-bold text-spark bg-surface-2 border border-line rounded-full uppercase tracking-wider">
              {project.category}
            </span>
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold font-display text-ink leading-tight drop-shadow-2xl">
              {project.title}
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Description */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold font-display text-ink mb-6">About The Project</h2>
            <div className="text-ink-muted text-lg leading-relaxed space-y-6">
              {project.longDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Sidebar (Tech Stack & Links) */}
          <div className="bg-surface border border-line rounded-2xl p-8 h-fit shadow-xl">
            <h3 className="text-xl font-bold font-display text-ink mb-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-lg border border-line bg-void px-3 py-1 font-mono text-xs font-medium text-ink-muted uppercase tracking-wider hover:border-spark/50 hover:text-spark transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-flame px-6 py-4 text-sm font-bold text-void transition-all hover:bg-flame-dim hover:shadow-[0_0_20px_rgba(255,61,46,0.4)] w-full">
                <ExternalLink size={18} /> Visit Live Website
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
