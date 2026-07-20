# Design System — Layout, Struktur Halaman & Animasi
### Portfolio Next.js + Tailwind + Framer Motion

Lanjutan dari `01-design-system-warna.md`. File ini fokus ke struktur halaman, efek scroll, marquee tools, dan animasi signature yang belum banyak orang pakai.

---

## 1. Struktur Halaman (urutan section)

```
┌─────────────────────────────────────┐
│  NAVBAR (sticky, transparan → solid  │
│  saat scroll)                        │
├─────────────────────────────────────┤
│  HERO                                │
│  - Nama besar (Display font)         │
│  - 1 kalimat value proposition       │
│  - CTA: "Lihat Project" + "Contact"  │
│  - Signature: tachometer scroll gauge│
├─────────────────────────────────────┤
│  MARQUEE TOOLS (banner kecil)        │
│  React・Next.js・TypeScript・         │
│  Tailwind・Framer Motion・...        │
├─────────────────────────────────────┤
│  ABOUT (singkat, 2-3 paragraf)       │
├─────────────────────────────────────┤
│  SKILLS (grid card, bukan progress   │
│  bar — progress bar skill itu klise) │
├─────────────────────────────────────┤
│  PROJECTS (card besar, hover reveal) │
├─────────────────────────────────────┤
│  EXPERIENCE (timeline vertikal)      │
├─────────────────────────────────────┤
│  CONTACT / FOOTER                    │
└─────────────────────────────────────┘
```

**Kenapa marquee taruh persis di bawah hero?** Biar jadi "napas" transisi — abis pembaca baca headline besar, mata langsung disuguhin bukti konkret (tools) dalam bentuk yang ringan & bergerak, sebelum masuk ke konten berat (about/skills).

---

## 2. Efek Scroll Reveal (Framer Motion)

Pola dasar yang konsisten dipakai di SEMUA section:

```tsx
const revealVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

<motion.div
  variants={revealVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  {children}
</motion.div>
```

Untuk grid/list (skills, project cards), pakai **stagger** biar muncul satu-satu:

```tsx
const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
```

**Aturan:** durasi 0.5–0.7s, easing custom `[0.22, 1, 0.36, 1]` (mirip "ease-out-expo") — jangan pakai `easeInOut` bawaan, kerasa kaku. `viewport once: true` supaya animasi cuma jalan sekali (nggak re-trigger tiap scroll naik-turun, ini yang bikin web AI-generated kerasa berlebihan).

---

## 3. Marquee Tools (banner kecil berjalan)

Ini yang kamu maksud "tools yang aku kuasai jalan ke samping". Implementasi:

```tsx
const tools = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js"];

<div className="relative overflow-hidden py-3 bg-surface border-y border-line">
  <motion.div
    className="flex gap-8 whitespace-nowrap"
    animate={{ x: ["0%", "-50%"] }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  >
    {[...tools, ...tools].map((t, i) => (
      <span key={i} className="font-mono text-sm uppercase tracking-wider text-ink-muted">
        {t} <span className="text-spark">●</span>
      </span>
    ))}
  </motion.div>
</div>
```

**Variasi biar nggak generic** (pilih salah satu, jangan semua):
- Tambahkan `whileHover={{ animationPlayState: "paused" }}` via state React (pause saat di-hover, biar interaktif).
- Bikin **2 baris marquee** arah berlawanan (baris atas ke kiri, baris bawah ke kanan) — efek "konveyor", jarang dipakai orang.
- Background baris marquee pakai **hazard stripe** (diagonal repeating-linear-gradient hitam-kuning tipis di border atas/bawah) — nyambung ke tema racing kamu, ini yang jadi ciri khas.

```css
.hazard-border {
  background: repeating-linear-gradient(
    45deg,
    #0A0A0B, #0A0A0B 10px,
    #FFC93C 10px, #FFC93C 20px
  );
  opacity: 0.15;
}
```

---

## 4. Ide Halaman Depan (Hero)

Hindari template "nama besar + subjudul + 2 tombol + foto bulat" yang sudah terlalu umum. Alternatif:

1. **Split hero**: Kiri — nama + role + CTA. Kanan — bukan foto, tapi **kotak "live status"** kecil (font mono) berisi: lokasi, status ("Available for work"), stack utama — kesan dashboard/telemetry, sinkron ke tema kamu.
2. **Underline nama pakai `--gradient-ignition`** yang bentuknya kayak coretan tangan (SVG path), animasi "digambar" (stroke-dashoffset) saat page load — first impression yang kuat tapi cuma 1 elemen berani, sisanya tenang (sesuai prinsip "spend your boldness in one place").
3. Role/jabatan pakai efek **text scramble** (huruf random ganti-ganti sebentar sebelum settle ke teks final, ala terminal hacking) — cocok untuk web developer, belum banyak yang pakai di portfolio lokal.

---

## 5. Animasi Signature (yang jarang orang pikirin)

Ini bagian yang kamu minta — animasi fresh, bukan sekadar fade-in biasa.

### 🎯 Signature #1 — Tachometer Scroll Gauge
Ganti scroll-progress-bar (garis tipis di atas, sudah terlalu umum) jadi **gauge/jarum RPM** kecil di pojok layar (fixed position) yang berputar dari 0° ke 180° sesuai persentase scroll halaman. Nyambung 100% ke tema racing.
```tsx
const { scrollYProgress } = useScroll();
const rotate = useTransform(scrollYProgress, [0, 1], [-90, 90]);
<motion.div style={{ rotate }} className="origin-bottom w-1 h-8 bg-flame rounded-full" />
```

### 🔥 Signature #2 — Velocity-Reactive Hazard Divider
Divider antar-section berupa hazard stripe (hitam-kuning) yang **skew-nya berubah sesuai kecepatan scroll** — makin cepat scroll, makin miring stripenya (efek ala mobil ngebut), lalu balik tegak lurus saat scroll berhenti.
```tsx
const { scrollY } = useScroll();
const velocity = useVelocity(scrollY);
const skew = useTransform(velocity, [-2000, 0, 2000], [-8, 0, 8]);
```
Ini spesifik banget dan hampir pasti belum ada yang pakai di portfolio manapun — karena animasinya react ke *behavior* user, bukan cuma posisi scroll.

### ⚡ Signature #3 — Combustion Text Reveal
Untuk judul section (H2), tiap huruf muncul dengan mask gradient `--gradient-ignition` yang "menyapu" dari kiri ke kanan (kayak api ngerambat), bareng sedikit blur→sharp. Beda dari stagger-huruf biasa karena pakai `background-clip: text` yang animatable via Framer Motion, bukan cuma opacity per huruf.

### 🏁 Signature #4 — Pit-Board Flip Card (Project Cards)
Saat project card masuk viewport, judul project muncul dengan efek **flip per baris** kayak papan skor bandara/pit-stop lama (rotateX 90°→0° per baris teks, staggered), bukan hover-3D-tilt yang udah pasaran.

### Micro-interactions tambahan (opsional, jangan pakai semua sekaligus)
- Tombol CTA: magnetic effect (tombol "ketarik" dikit ke arah cursor pas didekati).
- Custom cursor: titik kecil merah dengan trailing spark/ember partikel kuning yang fade out (canvas 2D, ringan).
- Ambient breathing: background scale 1 → 1.008 → 1 durasi 6-8 detik infinite, biar halaman kerasa "hidup" tapi hampir tidak disadari.

**Prinsip penting:** dari semua ide di atas, **pilih 1 signature utama** (misal Tachometer Gauge ATAU Velocity Divider) buat jadi "wow moment", sisanya cukup micro-interaction kecil. Kalau semua animasi besar dipakai bareng, malah kerasa berlebihan dan "AI-generated".
