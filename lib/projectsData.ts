export interface ProjectData {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string[];
  tags: string[];
  image: string;
  liveUrl: string;
  caseStudyUrl: string;
}

export const projectsData: ProjectData[] = [
  {
    slug: "joranku-rod-custom",
    title: "E-Commerce B2C Joranku Rod Custom",
    category: "E-Commerce",
    description: "B2C platform for custom fishing rods with personalized ordering and after-sales service.",
    longDescription: [
      "Joranku Rod Custom has utilized TikTok as a promotional tool to reach potential customers. However, the ordering process is still handled via WhatsApp, requiring customers to contact the seller for product information, stock availability, pricing, and custom rod specifications. Furthermore, order details, transaction confirmation, and after-sales service are still managed separately, resulting in a lack of integrated business processes.",
      "Through this project, I designed and developed a Business-to-Consumer (B2C) platform that connects the entire purchasing process into a single system. This website provides a structured product catalog, supports online ordering, and helps customers obtain information and complete transactions more easily without relying on manual communication via chat.",
      "The platform's primary focus is its rod personalization feature, which allows customers to customize colors, materials, and components before placing an order. The system is also integrated with Midtrans as a payment gateway, RajaOngkir for shipping cost calculations, and provides after-sales service in the form of product returns, allowing the entire process, from promotion to after-sales service, to be handled within a single, integrated platform."
    ],
    tags: ["Laravel 12", "PHP", "HTML", "CSS", "JavaSript", "Fabric.Js", "Chart.Js", "MySql", "Midtrans", "RajaOngkir", "Tawk.To"],
    image: "/jrcstore1.jpg", 
    liveUrl: "https://jrcstore.my.id/",
    caseStudyUrl: "#", 
  },
  {
    slug: "aplikasi-kasir-pos",
    title: "Point Of Sale (POS) Berbasis Web AF-Promotion",
    category: "Web Point Of Sale (POS)",
    description: "Web-based POS system for managing custom apparel orders and sales operations.",
    longDescription: [
      "AF-Promotion is a business specializing in custom clothing manufacturing and convection. Before the system was developed, order recording was done manually using paper, which posed a risk of errors, data loss, and made it difficult to manage orders with various screen print sizes, including A3, A4, A5, and other custom requirements.",
      "Through this project, I developed a web-based Point of Sale (POS) system that facilitates order recording, transaction management, and sales administration within a single, integrated platform. The system is designed to support business processes by digitally recording every order from the moment a customer places an order until the transaction is completed.",
      "Platform ini menyediakan fitur pengelolaan pesanan custom, pencatatan transaksi penjualan, manajemen produk, stok, pelanggan, serta laporan penjualan yang membantu proses monitoring bisnis. Dengan seluruh data yang tersimpan dalam satu sistem, risiko kesalahan pencatatan dapat diminimalkan sekaligus meningkatkan efisiensi operasional sehari-hari."
    ],
    tags: ["Laravel 12", "PHP", "HTML", "Bootstrap", "JavaSript", "Chart.Js", "MySql", "Midtrans"],
    image: "/pos_af.jpg",
    liveUrl: "", 
    caseStudyUrl: "#",
  },
  {
    slug: "toko-asun",
    title: "E- Commerce B2C Sembako Asun",
    category: "E-Commerce",
    description: "B2C platform for grocery shopping with online ordering and integrated delivery services.",
    longDescription: [
      "Toko Asun is an MSME specializing in the sale of basic necessities and basic food items. Before the website was developed, sales were still conducted conventionally, requiring customers to visit the store in person to view products, obtain information, and make purchases. This situation limited marketing reach and made the transaction process less convenient for customers.",
      "Through this project, I developed a Business-to-Consumer (B2C) platform that supports digital sales processes. This website allows customers to browse the product catalog, place orders online, and obtain product information more easily through a single, integrated platform.",
      "This platform features a shopping cart, checkout, online payment through Midtrans, and RajaOngkir integration for automatic shipping cost calculations. With the entire purchasing process centralized in one system, the website helps improve transaction management efficiency while providing a more convenient shopping experience for customers."
    ],
    tags: ["Laravel 12", "PHP", "HTML", "Bootstrap", "JavaSript", "Chart.Js", "MySql", "Midtrans", "RajaOngkir"],
    image: "/sembako.jpg",
    liveUrl: "https://tokoasun.my.id/",
    caseStudyUrl: "#",
  },
];
