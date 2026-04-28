export type Profile = {
  name: string;
  title: string;
  description: string;
  email: string;
  linkedin: string;
  whatsapp: string;
  instagram: string;
  photo: string;
};

export type Project = {
  title: string;
  description: string;
  tech_stack: string;
  highlights: string;
  image: string;
  demo_link: string;
  github_link: string;
};

export type Experience = {
  title: string;
  role: string;
  description: string;
  image: string;
};

export type Achievement = {
  category: "Conference" | "Competition";
  title: string;
  description: string;
  country_flag: string;
};

export type Skill = {
  logo: string;
  name: string;
};

export type Certification = {
  title: string;
  issuer: string;
  image: string;
};

export type PortfolioData = {
  profile: Profile;
  projects: Project[];
  experiences: Experience[];
  achievements: Achievement[];
  skills: Skill[];
  certifications: Certification[];
};

const SHEET_NAMES = {
  profile: "Profile",
  projects: "Projects",
  experiences: "Experience",
  achievements: "Achievements",
  skills: "Skills",
  certifications: "Certifications",
} as const;

const SHOULD_DISABLE_CACHE =
  process.env.SHEET_DISABLE_CACHE === "true" || process.env.NODE_ENV !== "production";

const MOCK_DATA: PortfolioData = {
  profile: {
    name: "Ahmad Rizky",
    title: "Senior UI/UX Designer & Frontend Engineer",
    description:
      "Berpengalaman lebih dari 5 tahun dalam membangun solusi digital yang estetis dan fungsional. Fokus pada pengembangan desain sistem dan interaksi pengguna yang intuitif. Saya percaya bahwa setiap pixel memiliki cerita dan tujuan untuk meningkatkan pengalaman pengguna.",
    email: "rizky@example.com",
    linkedin: "https://linkedin.com/in/rizky",
    whatsapp: "https://wa.me/628123456789",
    instagram: "https://instagram.com/rizky",
    photo: "profile-rizky.jpg",
  },
  projects: [
    {
      title: "FinTech Dashboard Pro",
      description:
        "Platform manajemen keuangan pribadi dengan visualisasi data real-time dan analisis AI.",
      tech_stack: "Next.js, Tailwind, Recharts",
      highlights: "Optimasi performa 40%, Integrasi API Perbankan, Keamanan 2FA",
      image: "project-fintech.jpg",
      demo_link: "#",
      github_link: "#",
    },
    {
      title: "E-Commerce Luxe App",
      description:
        "Aplikasi belanja online premium dengan fitur AR preview untuk produk furnitur mewah.",
      tech_stack: "React Native, Three.js, Firebase",
      highlights: "10k+ Download, Rating 4.8, Pembayaran Multi-Currencies",
      image: "project-ecommerce.jpg",
      demo_link: "#",
      github_link: "#",
    },
  ],
  experiences: [
    {
      title: "Creative Tech Solutions Inc.",
      role: "Lead UI/UX Designer",
      description:
        "Memimpin tim desain strategis untuk menghadirkan solusi digital inovatif bagi klien global.",
      image: "exp-creative-tech.png",
    },
    {
      title: "Global Digital Agency",
      role: "Senior Frontend Developer",
      description:
        "Membangun arsitektur frontend yang skalabel dan performan untuk aplikasi skala besar.",
      image: "exp-global-digital.png",
    },
  ],
  achievements: [
    {
      category: "Conference",
      title: "Google I/O Extended Jakarta 2024",
      description:
        "Speaker Utama: 'Building Accessible Design Systems with Next.js'.",
      country_flag: "🇮🇩",
    },
    {
      category: "Competition",
      title: "Asia Design Hackathon 2023",
      description: "Juara 1: Inovasi Desain untuk Keberlanjutan Lingkungan.",
      country_flag: "🇸🇬",
    },
  ],
  skills: [
    { name: "Figma", logo: "skill-figma.svg" },
    { name: "React", logo: "skill-react.svg" },
    { name: "Next.js", logo: "skill-nextjs.svg" },
    { name: "Tailwind CSS", logo: "skill-tailwind.svg" },
  ],
  certifications: [
    {
      title: "Google UX Design Professional",
      issuer: "Coursera",
      image: "cert-google-ux.png",
    },
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      image: "cert-aws-dev.png",
    },
  ],
};

function toStringValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function pickString(row: Record<string, string>, keys: string[]): string {
  for (const key of keys) {
    const value = row[key];
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }
  return "";
}

function parseCategory(raw: string): "Conference" | "Competition" {
  const normalized = raw.trim().toLowerCase();
  return normalized === "competition" ? "Competition" : "Conference";
}

function parseCSV(csv: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < csv.length; i += 1) {
    const char = csv[i];
    const next = csv[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        cell += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (!inQuotes && char === ",") {
      row.push(cell.trim());
      cell = "";
      continue;
    }

    if (!inQuotes && (char === "\n" || char === "\r")) {
      if (char === "\r" && next === "\n") {
        i += 1;
      }
      row.push(cell.trim());
      cell = "";
      const hasValue = row.some((item) => item.length > 0);
      if (hasValue) {
        rows.push(row);
      }
      row = [];
      continue;
    }

    cell += char;
  }

  if (cell.length > 0 || row.length > 0) {
    row.push(cell.trim());
    const hasValue = row.some((item) => item.length > 0);
    if (hasValue) {
      rows.push(row);
    }
  }

  return rows;
}

function rowsToObjects(csv: string): Record<string, string>[] {
  const parsed = parseCSV(csv);
  if (parsed.length === 0) return [];

  const headers = parsed[0].map((header) => header.trim());
  const dataRows = parsed.slice(1);

  return dataRows
    .map((cells) => {
      const row: Record<string, string> = {};
      headers.forEach((header, index) => {
        row[header] = (cells[index] ?? "").trim();
      });
      return row;
    })
    .filter((row) => Object.values(row).some((value) => value.length > 0));
}

function normalizeFromSheetRows(rows: {
  profile: Record<string, string>[];
  projects: Record<string, string>[];
  experiences: Record<string, string>[];
  achievements: Record<string, string>[];
  skills: Record<string, string>[];
  certifications: Record<string, string>[];
}): PortfolioData {
  const firstProfile = rows.profile[0] ?? {};

  return {
    profile: {
      name: pickString(firstProfile, ["name"]),
      title: pickString(firstProfile, ["title"]),
      description: pickString(firstProfile, ["description"]),
      email: pickString(firstProfile, ["email"]),
      linkedin: pickString(firstProfile, ["linkedin"]),
      whatsapp: pickString(firstProfile, ["whatsapp"]),
      instagram: pickString(firstProfile, ["instagram"]),
      photo: pickString(firstProfile, ["photo", "photo_image", "photo_file", "photo_url"]),
    },
    projects: rows.projects.map((row) => ({
      title: pickString(row, ["title"]),
      description: pickString(row, ["description"]),
      tech_stack: pickString(row, ["tech_stack", "tech"]),
      highlights: pickString(row, ["highlights"]),
      image: pickString(row, ["image", "image_file", "image_name", "image_url"]),
      demo_link: pickString(row, ["demo_link", "demo"]),
      github_link: pickString(row, ["github_link", "github"]),
    })),
    experiences: rows.experiences.map((row) => ({
      title: pickString(row, ["title", "company"]),
      role: pickString(row, ["role", "position"]),
      description: pickString(row, ["description"]),
      image: pickString(row, ["image", "image_file", "image_name", "image_url"]),
    })),
    achievements: rows.achievements.map((row) => ({
      category: parseCategory(pickString(row, ["category"])),
      title: pickString(row, ["title"]),
      description: pickString(row, ["description"]),
      country_flag: pickString(row, ["country_flag", "flag"]),
    })),
    skills: rows.skills.map((row) => ({
      name: pickString(row, ["name"]),
      logo: pickString(row, ["logo", "logo_file", "logo_name", "logo_url"]),
    })),
    certifications: rows.certifications.map((row) => ({
      title: pickString(row, ["title"]),
      issuer: pickString(row, ["issuer"]),
      image: pickString(row, ["image", "image_file", "image_name", "image_url"]),
    })),
  };
}

function normalizeFromJson(input: unknown): PortfolioData {
  const raw = (input ?? {}) as Record<string, unknown>;
  const profile = (raw.profile ?? {}) as Record<string, unknown>;

  const projects = Array.isArray(raw.projects) ? raw.projects : [];
  const experiences = Array.isArray(raw.experiences) ? raw.experiences : [];
  const achievements = Array.isArray(raw.achievements) ? raw.achievements : [];
  const skills = Array.isArray(raw.skills) ? raw.skills : [];
  const certifications = Array.isArray(raw.certifications) ? raw.certifications : [];

  return {
    profile: {
      name: toStringValue(profile.name),
      title: toStringValue(profile.title),
      description: toStringValue(profile.description),
      email: toStringValue(profile.email),
      linkedin: toStringValue(profile.linkedin),
      whatsapp: toStringValue(profile.whatsapp),
      instagram: toStringValue(profile.instagram),
      photo: toStringValue(profile.photo || profile.photo_image || profile.photo_file || profile.photo_url),
    },
    projects: projects.map((item) => {
      const row = item as Record<string, unknown>;
      return {
        title: toStringValue(row.title),
        description: toStringValue(row.description),
        tech_stack: toStringValue(row.tech_stack || row.tech),
        highlights: toStringValue(row.highlights),
        image: toStringValue(row.image || row.image_file || row.image_name || row.image_url),
        demo_link: toStringValue(row.demo_link || row.demo),
        github_link: toStringValue(row.github_link || row.github),
      };
    }),
    experiences: experiences.map((item) => {
      const row = item as Record<string, unknown>;
      return {
        title: toStringValue(row.title || row.company),
        role: toStringValue(row.role || row.position),
        description: toStringValue(row.description),
        image: toStringValue(row.image || row.image_file || row.image_name || row.image_url),
      };
    }),
    achievements: achievements.map((item) => {
      const row = item as Record<string, unknown>;
      return {
        category: parseCategory(toStringValue(row.category)),
        title: toStringValue(row.title),
        description: toStringValue(row.description),
        country_flag: toStringValue(row.country_flag || row.flag),
      };
    }),
    skills: skills.map((item) => {
      const row = item as Record<string, unknown>;
      return {
        name: toStringValue(row.name),
        logo: toStringValue(row.logo || row.logo_file || row.logo_name || row.logo_url),
      };
    }),
    certifications: certifications.map((item) => {
      const row = item as Record<string, unknown>;
      return {
        title: toStringValue(row.title),
        issuer: toStringValue(row.issuer),
        image: toStringValue(row.image || row.image_file || row.image_name || row.image_url),
      };
    }),
  };
}

async function fetchCSVSheet(sheetId: string, sheetName: string): Promise<Record<string, string>[]> {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
  const response = await fetch(
    url,
    SHOULD_DISABLE_CACHE ? { cache: "no-store" } : { next: { revalidate: 60 } }
  );

  if (!response.ok) {
    throw new Error(`Failed to load sheet ${sheetName}`);
  }

  const csv = await response.text();
  return rowsToObjects(csv);
}

async function fetchFromGoogleSheets(sheetId: string): Promise<PortfolioData> {
  const fetchExperienceRows = async () => {
    try {
      return await fetchCSVSheet(sheetId, SHEET_NAMES.experiences);
    } catch {
      // Compatibility fallback when tab is named `Experiences`.
      return fetchCSVSheet(sheetId, "Experiences");
    }
  };

  const [profile, projects, experiences, achievements, skills, certifications] =
    await Promise.all([
      fetchCSVSheet(sheetId, SHEET_NAMES.profile),
      fetchCSVSheet(sheetId, SHEET_NAMES.projects),
      fetchExperienceRows(),
      fetchCSVSheet(sheetId, SHEET_NAMES.achievements),
      fetchCSVSheet(sheetId, SHEET_NAMES.skills),
      fetchCSVSheet(sheetId, SHEET_NAMES.certifications),
    ]);

  return normalizeFromSheetRows({
    profile,
    projects,
    experiences,
    achievements,
    skills,
    certifications,
  });
}

export async function fetchPortfolioData(): Promise<PortfolioData> {
  const sheetUrl = process.env.SHEET_URL?.trim();
  const googleSheetId = process.env.GOOGLE_SHEET_ID?.trim();

  if (sheetUrl) {
    try {
      const response = await fetch(
        sheetUrl,
        SHOULD_DISABLE_CACHE ? { cache: "no-store" } : { next: { revalidate: 60 } }
      );
      if (!response.ok) {
        throw new Error("Invalid SHEET_URL response");
      }
      const rawJson = await response.json();
      return normalizeFromJson(rawJson);
    } catch (error) {
      console.error("Failed to fetch SHEET_URL data:", error);
    }
  }

  if (googleSheetId) {
    try {
      return await fetchFromGoogleSheets(googleSheetId);
    } catch (error) {
      console.error("Failed to fetch Google Sheets data:", error);
    }
  }

  return MOCK_DATA;
}
