import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ryanvincecastillo.com"),
  title: "Ryan Vince Castillo",
  description:
    "Philippines-based software developer building modern web apps, backend systems, and AI-assisted engineering workflows.",
  openGraph: {
    type: "website",
    url: "https://ryanvincecastillo.com/",
    title: "Ryan Vince Castillo",
    description:
      "Philippines-based software developer building modern web apps, backend systems, and AI-assisted engineering workflows.",
    images: ["/files/profile-photo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Vince Castillo",
    description:
      "Philippines-based software developer building modern web apps, backend systems, and AI-assisted engineering workflows.",
    images: ["/files/profile-photo.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ryan Vince Castillo",
  jobTitle: "Software Developer",
  url: "https://ryanvincecastillo.com",
  image: "https://ryanvincecastillo.com/files/profile-photo.jpg",
  email: "mailto:ryanvincecastillo@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PH",
    addressLocality: "Davao City",
  },
  sameAs: [
    "https://github.com/ryanvincecastillo",
    "https://www.linkedin.com/in/ryan-vince-castillo-67690b20a/",
  ],
  knowsAbout: [
    ".NET",
    "Node.js",
    "TypeScript",
    "React",
    "React Native",
    "Flutter",
    "Supabase",
    "PostgreSQL",
    "Azure",
    "Docker",
    "Microservices",
    "AI-assisted software development",
    "MCP servers",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-sans min-h-screen`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
