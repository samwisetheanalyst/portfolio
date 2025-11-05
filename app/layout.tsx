import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "My Portfolio",
  description: "A minimalist portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-950 text-white min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main className="flex-1 container mx-auto px-6 py-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
