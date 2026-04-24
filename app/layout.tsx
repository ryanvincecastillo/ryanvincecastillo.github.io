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
      </body>
    </html>
  );
}
