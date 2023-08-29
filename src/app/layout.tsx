import { Metadata } from "next";
import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

const myFont = localFont({
  src: "./NanumBrushScript-Regular.ttf",
  variable: "--font-myFont",
  display: "swap",
});

export const metadata: Metadata = {
  generator: "Next.js",
  title: "DataFlagship",
  description: "Population Distribution Study",
  referrer: "origin-when-cross-origin",
  applicationName: "DataFlagship",
  // keywords: [],
  authors: { name: "전준형", url: "jhjeon@dataslab.co.kr" },
  colorScheme: "dark",
  creator: "Latemarch",
  publisher: "Data science lab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Population Dist.",
    siteName: "DataFlagship",
    description: "Population Distribution Study",
    // image: { url: "/images/frontend.png", alt: "My blog image" },
    locale: "kr_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} ${myFont.variable} `}
    >
      <body>
        <h1>My App</h1>
        <div>{children}</div>
      </body>
    </html>
  );
}
