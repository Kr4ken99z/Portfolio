import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Koustav — Portfolio",
  description:
    "I like taking ideas from a blank screen and turning them into products that actually work. I build full-stack applications, AI-powered systems, and engineering projects, working across frontend, backend, databases, APIs, and deployment.",
  keywords: [
    "Koustav Mondal",
    "Full Stack Developer",
    "Software Engineer",
    "MERN Stack",
    "Next.js",
    "React",
    "Java",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Koustav", url: "https://github.com/Kr4ken99z" }],
  openGraph: {
    title: "Koustav — Portfolio",
    description:
      "Entry-level Full Stack Software Developer building reliable web systems, REST APIs, and modern AI-powered applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-on-surface`}
      >
        {children}
      </body>
    </html>
  );
}
