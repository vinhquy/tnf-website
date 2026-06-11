import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageContext";

export const metadata: Metadata = {
  title: "TNF Group | T&N Financial Group",
  description:
    "Công ty Cổ phần T&N Financial Group - Đối tác tài chính chiến lược tại Việt Nam. Capital management, investment cooperation, financial solutions.",
  keywords: ["TNF Group", "T&N Financial", "tài chính Việt Nam", "financial Vietnam", "capital management"],
  openGraph: {
    title: "TNF Group | T&N Financial Group",
    description: "Đối tác tài chính chiến lược tại Việt Nam",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
