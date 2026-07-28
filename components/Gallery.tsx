"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Maximize2 } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{ id: number, src: string, alt: string, category: string } | null>(null);

  const galleryItems = [
    { id: 1, src: "/gallery/draw-arsitektur-sistem-B2C.jpg", alt: "B2C System Architecture", category: "Architecture" },
    { id: 2, src: "/gallery/UI-beranda-joranku-rod-custom.jpg", alt: "Joranku Custom Rod Homepage", category: "UI Design" },
    { id: 3, src: "/gallery/figma-ui-web-joranku.jpg", alt: "Figma UI Joranku", category: "Wireframe" },
    { id: 4, src: "/gallery/UI-pos-dashboard-af-promotion.jpg", alt: "POS Dashboard AF Promotion", category: "UI Design" },
    { id: 5, src: "/gallery/draw-usecase-B2C.jpg", alt: "B2C Usecase Diagram", category: "Diagram" },
    { id: 6, src: "/gallery/UI-detail-produk-toko-asun.jpg", alt: "Asun Store Product Detail", category: "UI Design" },
    { id: 7, src: "/gallery/draw-arsitektur-halaman-user.jpg", alt: "User Page Architecture", category: "Architecture" },
    { id: 8, src: "/gallery/UI-pos-kasir-af-promotion.jpg", alt: "POS Cashier AF Promotion", category: "UI Design" },
    { id: 9, src: "/gallery/demonstrasi-pihak-owner.jpg", alt: "Client Demonstration", category: "Documentation" },
    { id: 10, src: "/gallery/UI-katalog-toko-asun.jpg", alt: "Asun Store Catalog", category: "UI Design" },
    { id: 11, src: "/gallery/figma-ui-web-toko-baju.jpg", alt: "Clothing Store Figma UI", category: "Wireframe" },
    { id: 12, src: "/gallery/draw-activity-diagram-B2C.jpg", alt: "B2C Activity Diagram", category: "Diagram" },
    { id: 13, src: "/gallery/UI-pos-transaksi-af-promotion.jpg", alt: "POS Transaction AF Promotion", category: "UI Design" },
    { id: 14, src: "/gallery/draw-arsitektur-halaman-admin.jpg", alt: "Admin Page Architecture", category: "Architecture" },
    { id: 15, src: "/gallery/UI-katalog-joranku-rod-custom.jpg", alt: "Joranku Custom Rod Catalog", category: "UI Design" },
  ];

  return (
    <section id="gallery" className="flex flex-col items-center justify-center px-4 py-24 bg-transparent relative z-10 border-t border-line/50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-6xl"
      >
        <div className="text-center mb-16">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl font-display text-ink">
            Project <span className="text-spark">Gallery</span>
          </h2>
          <p className="text-base text-ink-muted leading-relaxed max-w-xl mx-auto">
            A collection of my design work, wireframes, and project documentation.
          </p>
        </div>

        {/* Masonry Layout (Pinterest Style) */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? -4 : 4, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.5, delay: (index % 5) * 0.1, ease: "easeOut" }}
              onClick={() => setSelectedImage(item)}
              className="group break-inside-avoid relative rounded-xl overflow-hidden cursor-pointer border border-line/50 hover:border-spark/50 transition-all duration-300"
            >
              <img 
                src={item.src} 
                alt={item.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-void/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <div className="bg-spark text-void p-2.5 rounded-full mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 size={20} />
                </div>
                <span className="text-spark font-mono text-xs uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.category}
                </span>
                <span className="text-white font-medium text-center text-sm mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {item.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-void/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-surface border border-line rounded-full text-ink-muted hover:text-spark hover:border-spark transition-colors z-[1000]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-line"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-surface/80 px-6 py-2 rounded-full border border-line backdrop-blur-md flex items-center gap-3">
                <span className="text-spark text-xs uppercase tracking-wider font-mono">{selectedImage.category}</span>
                <span className="w-1 h-1 rounded-full bg-line"></span>
                <span className="text-ink text-sm font-medium">{selectedImage.alt}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
