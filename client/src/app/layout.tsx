import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Watch Me",
  description: "Watch Market, Track Products, and Get Alerts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
