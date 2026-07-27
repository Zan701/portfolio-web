import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { useEffect } from "react";

export interface ProjectData {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  caseStudyUrl: string;
}

interface DetailProjectsProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function DetailProjects({ project, onClose }: DetailProjectsProps) {
  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-void/80 backdrop-blur-md"
          onClick={onClose}>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden rounded-2xl bg-surface border border-line shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {/* Header with Close Button */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-void/50 backdrop-blur-md border border-line text-ink hover:text-flame hover:border-flame transition-all">
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {/* Featured Image */}
              <div className="relative w-full h-64 sm:h-96 bg-surface-2 border-b border-line overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-10 relative z-20 -mt-16 sm:-mt-20">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-mono font-bold text-spark bg-void border border-line rounded-full uppercase tracking-wider shadow-lg shadow-void/50">
                  {project.category}
                </span>
                
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink mb-6">
                  {project.title}
                </h2>

                <div className="mb-10">
                  <p className="text-ink-muted text-base sm:text-lg leading-relaxed">
                    {project.description}
                  </p>
                  {/* Future-proofing for long descriptions if you want to add them to your data */}
                  {/* <p className="text-ink-muted text-base sm:text-lg leading-relaxed mt-4">
                    {project.longDescription}
                  </p> */}
                </div>

                {/* Tech Stack */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold font-display text-ink mb-4 flex items-center gap-2">
                    Technologies Used <span className="h-px flex-1 bg-line ml-4" />
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-lg border border-line bg-surface-2 px-4 py-2 font-mono text-xs font-medium text-ink-muted uppercase tracking-wider hover:border-spark/50 hover:text-spark transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-line">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-flame/10 border border-flame/30 px-6 py-4 text-sm font-bold text-flame transition-all hover:bg-flame hover:text-void hover:shadow-[0_0_20px_rgba(255,61,46,0.4)]"
                    >
                      <ExternalLink size={18} /> Visit Live Project
                    </a>
                  )}
                  {/* You can add a GitHub button here if you add githubUrl to your data */}
                  {/* {project.githubUrl && (
                    <a href={project.githubUrl} className="...">GitHub</a>
                  )} */}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
