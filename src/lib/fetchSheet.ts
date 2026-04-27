
export type Profile = {
  name: string;
  title: string;
  description: string;
  email: string;
  linkedin: string;
  whatsapp: string;
  instagram: string;
  photo_url: string;
};

export type Project = {
  title: string;
  description: string;
  tech_stack: string;
  highlights: string;
  image_url: string;
  demo_link: string;
  github_link: string;
};

export type Experience = {
  title: string;
  role: string;
  description: string;
  image_url: string;
};

export type Achievement = {
  category: 'Conference' | 'Competition';
  title: string;
  description: string;
  country_flag: string;
};

export type Skill = {
  logo_url: string;
  name: string;
};

export type Certification = {
  title: string;
  issuer: string;
  image_url: string;
};

export type PortfolioData = {
  profile: Profile;
  projects: Project[];
  experiences: Experience[];
  achievements: Achievement[];
  skills: Skill[];
  certifications: Certification[];
};

const MOCK_DATA: PortfolioData = {
  profile: {
    name: "Ahmad Rizky",
    title: "Senior UI/UX Designer & Frontend Engineer",
    description: "Berpengalaman lebih dari 5 tahun dalam membangun solusi digital yang estetis dan fungsional. Fokus pada pengembangan desain sistem dan interaksi pengguna yang intuitif. Saya percaya bahwa setiap pixel memiliki cerita dan tujuan untuk meningkatkan pengalaman pengguna.",
    email: "rizky@example.com",
    linkedin: "https://linkedin.com/in/rizky",
    whatsapp: "https://wa.me/628123456789",
    instagram: "https://instagram.com/rizky",
    photo_url: "https://picsum.photos/seed/elevate-about/800/1000"
  },
  projects: [
    {
      title: "FinTech Dashboard Pro",
      description: "Platform manajemen keuangan pribadi dengan visualisasi data real-time dan analisis AI.",
      tech_stack: "Next.js, Tailwind, Recharts",
      highlights: "Optimasi performa 40%, Integrasi API Perbankan, Keamanan 2FA",
      image_url: "https://picsum.photos/seed/fintech/800/600",
      demo_link: "#",
      github_link: "#"
    },
    {
      title: "E-Commerce Luxe App",
      description: "Aplikasi belanja online premium dengan fitur AR preview untuk produk furnitur mewah.",
      tech_stack: "React Native, Three.js, Firebase",
      highlights: "10k+ Download, Rating 4.8, Pembayaran Multi-Currencies",
      image_url: "https://picsum.photos/seed/ecommerce/800/600",
      demo_link: "#",
      github_link: "#"
    },
    {
      title: "Healthcare Smart Portal",
      description: "Sistem manajemen janji temu dokter dan rekam medis digital terenkripsi.",
      tech_stack: "Vue.js, Express, PostgreSQL",
      highlights: "Digunakan oleh 5 Rumah Sakit besar, Kepatuhan HIPAA",
      image_url: "https://picsum.photos/seed/healthcare/800/600",
      demo_link: "#",
      github_link: "#"
    },
    {
      title: "Portfolio Artist Template",
      description: "Template website portfolio modern berbasis Next.js untuk kreator visual.",
      tech_stack: "Next.js 15, Framer Motion",
      highlights: "Open Source, 1k+ Star di GitHub, SEO Friendly",
      image_url: "https://picsum.photos/seed/proj4/800/600",
      demo_link: "#",
      github_link: "#"
    },
    {
      title: "AI Creative Studio",
      description: "Alat pembuat gambar berbasis AI menggunakan model Stable Diffusion v3.",
      tech_stack: "Python, Flask, React",
      highlights: "Proses cepat < 5 detik, Dukungan API Eksternal",
      image_url: "https://picsum.photos/seed/proj5/800/600",
      demo_link: "#",
      github_link: "#"
    }
  ],
  experiences: [
    {
      title: "Creative Tech Solutions Inc.",
      role: "Lead UI/UX Designer",
      description: "Memimpin tim desain strategis untuk menghadirkan solusi digital inovatif bagi klien global.",
      image_url: "https://picsum.photos/seed/office-1/400/400"
    },
    {
      title: "Global Digital Agency",
      role: "Senior Frontend Developer",
      description: "Membangun arsitektur frontend yang skalabel dan performan untuk aplikasi skala besar.",
      image_url: "https://picsum.photos/seed/office-2/400/400"
    },
    {
      title: "Inovasi Nusantara Startup",
      role: "UI Engineer",
      description: "Berkolaborasi dengan product manager untuk merancang prototipe dan sistem desain.",
      image_url: "https://picsum.photos/seed/office-3/400/400"
    },
    {
      title: "Freelance Creative",
      role: "Brand Identity Designer",
      description: "Membantu UMKM membangun identitas visual yang kuat dan profesional di pasar digital.",
      image_url: "https://picsum.photos/seed/office-4/400/400"
    }
  ],
  achievements: [
    {
      category: "Conference",
      title: "Google I/O Extended Jakarta 2024",
      description: "Speaker Utama: 'Building Accessible Design Systems with Next.js'.",
      country_flag: "🇮🇩"
    },
    {
      category: "Competition",
      title: "Asia Design Hackathon 2023",
      description: "Juara 1: Inovasi Desain untuk Keberlanjutan Lingkungan.",
      country_flag: "🇸🇬"
    },
    {
      category: "Conference",
      title: "Tech Conference Bali 2023",
      description: "Panelis: 'Masa Depan AI dalam Proses Kreatif Desainer'.",
      country_flag: "🇮🇩"
    },
    {
      category: "Competition",
      title: "Global UX Challenge 2022",
      description: "Top 5 Finalis Tingkat Global kategori Edutech Solution.",
      country_flag: "🇺🇸"
    }
  ],
  skills: [
    { name: "Figma", logo_url: "https://cdn.simpleicons.org/figma/566039" },
    { name: "React", logo_url: "https://cdn.simpleicons.org/react/566039" },
    { name: "Next.js", logo_url: "https://cdn.simpleicons.org/nextdotjs/566039" },
    { name: "Tailwind CSS", logo_url: "https://cdn.simpleicons.org/tailwindcss/566039" },
    { name: "TypeScript", logo_url: "https://cdn.simpleicons.org/typescript/566039" },
    { name: "Node.js", logo_url: "https://cdn.simpleicons.org/nodedotjs/566039" },
    { name: "Firebase", logo_url: "https://cdn.simpleicons.org/firebase/566039" },
    { name: "Adobe XD", logo_url: "https://cdn.simpleicons.org/adobexd/566039" },
    { name: "Sass", logo_url: "https://cdn.simpleicons.org/sass/566039" },
    { name: "Git", logo_url: "https://cdn.simpleicons.org/git/566039" }
  ],
  certifications: [
    {
      title: "Google UX Design Professional",
      issuer: "Coursera",
      image_url: "https://picsum.photos/seed/certificate-1/400/300"
    },
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      image_url: "https://picsum.photos/seed/certificate-2/400/300"
    },
    {
      title: "Senior UI/UX Specialist",
      issuer: "Interaction Design Foundation",
      image_url: "https://picsum.photos/seed/certificate-3/400/300"
    }
  ]
};

export async function fetchPortfolioData(): Promise<PortfolioData> {
  const sheetUrl = process.env.SHEET_URL;

  // Real integration logic placeholder:
  // if (sheetUrl) {
  //   try {
  //     const response = await fetch(sheetUrl);
  //     const data = await response.json();
  //     return data as PortfolioData;
  //   } catch (e) {
  //     console.error("Failed to fetch sheet data", e);
  //   }
  // }

  await new Promise(resolve => setTimeout(resolve, 300));
  return MOCK_DATA;
}
