# Design System — Warna & Tipografi
### Portfolio Next.js + Tailwind + Framer Motion

**Konsep:** *"Ignition"* — hitam sebagai aspal/malam, merah sebagai lampu rem/api, kuning sebagai warning-light/spark. Terinspirasi dari livery balap & hazard tape, bukan cuma "dark mode + accent" biasa.

---

## 1. Palet Warna

| Token | Hex | Peran |
|---|---|---|
| `--bg-void` | `#0A0A0B` | Background utama, hitam sedikit hangat (bukan #000 pure) |
| `--bg-surface` | `#141416` | Background card/section elevated |
| `--bg-surface-2` | `#1C1C1F` | Hover state surface, nested card |
| `--line` | `#2A2A2E` | Border, divider tipis |
| `--ink` | `#F5F5F0` | Teks utama (off-white, bukan putih pure) |
| `--ink-muted` | `#9A9A9E` | Teks sekunder/deskripsi |
| `--flame` | `#FF3D2E` | **Merah utama** — CTA, link aktif, hover penting |
| `--flame-dim` | `#B8281F` | Merah gelap — hover state dari `--flame`, shadow |
| `--flame-glow` | `#FF3D2E` @ 20% opacity | Glow/shadow di belakang elemen merah |
| `--spark` | `#FFC93C` | **Kuning utama** — highlight, tag, badge, marquee |
| `--spark-dim` | `#D9A824` | Kuning gelap — border/hover kuning |
| `--gradient-ignition` | `linear-gradient(135deg, #FF3D2E 0%, #FFC93C 100%)` | Signature gradient — dipakai TERBATAS (garis bawah nama, progress bar, 1 elemen signature) |

### Aturan pemakaian (penting biar nggak berantakan)
- **Merah = aksi/interaksi** (button, link hover, indikator "sedang aktif").
- **Kuning = informasi/highlight** (skill tag, label "featured", angka statistik).
- **Jangan pernah taruh merah & kuning bersebelahan dalam ukuran besar** kecuali di elemen signature (hazard stripe divider) — biar nggak norak kayak tema Halloween.
- Gradient `--gradient-ignition` maksimal dipakai di 2-3 tempat di seluruh web (misal: underline nama di hero, scroll progress bar, border hover project card).
- Background tetap dominan `--bg-void` minimal 80% dari luas layar tiap section.

### Contoh Tailwind config
```ts
// tailwind.config.ts
colors: {
  void: "#0A0A0B",
  surface: "#141416",
  surface2: "#1C1C1F",
  line: "#2A2A2E",
  ink: {
    DEFAULT: "#F5F5F0",
    muted: "#9A9A9E",
  },
  flame: {
    DEFAULT: "#FF3D2E",
    dim: "#B8281F",
  },
  spark: {
    DEFAULT: "#FFC93C",
    dim: "#D9A824",
  },
}
```

---

## 2. Tipografi

| Role | Font | Alasan |
|---|---|---|
| **Display** (H1, nama, judul section) | `Clash Display` atau `General Sans` (Fontshare, gratis) | Karakter bold, sedikit industrial, cocok sama tema racing |
| **Body** | `Inter` | Netral, sangat readable buat paragraf panjang |
| **Utility/Mono** (skill tag, angka, label kecil, timestamp) | `Space Mono` atau `JetBrains Mono` | Kesan "dashboard/telemetry" — nyambung ke tema |

### Type scale (rekomendasi)
```
H1 / Hero      : 64–96px, Clash Display, Bold, tracking -0.02em
H2 / Section    : 40–48px, Clash Display, SemiBold
H3 / Card title : 22–28px, Clash Display, Medium
Body            : 16–18px, Inter, Regular, line-height 1.6
Caption/Tag     : 12–13px, Space Mono, uppercase, tracking 0.08em
```

### Micro-rule
Semua **angka** (tahun, jumlah project, stat) pakai font mono (`Space Mono`) — ini kecil tapi bikin web kamu kerasa "engineered", bukan cuma web portfolio template biasa.

---

## 3. Efek Visual Pendukung Warna
- **Grain/noise overlay** tipis (opacity 3-4%) di seluruh background — bikin hitamnya nggak flat/plastic.
- **Glow shadow** hanya pada elemen interaktif: `box-shadow: 0 0 24px rgba(255,61,46,0.25)` saat hover button merah.
- **Border 1px `--line`** untuk semua card, jangan pakai shadow tebal ala Material Design — biar kesan "clean industrial", bukan "soft UI".
