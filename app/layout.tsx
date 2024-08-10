import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Status | Peyronnet Group",
    template: "%s | Peyronnet Group",
  },
  description: "Official Status page for Peyronnet's products and services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen grid grid-rows-[1fr,auto] ${inter.className}`}
      >
        {children}
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Peyronnet Group. All rights
            reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              href="https://peyronnet.group/privacy"
              className="text-xs hover:underline underline-offset-4"
              prefetch={false}
            >
              Privacy Policy
            </Link>
            <Link
              href="https://github.com/peyronnet-group/"
              className="text-xs hover:underline underline-offset-4"
              prefetch={false}
            >
              GitHub
            </Link>
            <Link
              href="https://x.com/PeyronnetGroup"
              className="text-xs hover:underline underline-offset-4"
              prefetch={false}
            >
              Follow Us
            </Link>
          </nav>
        </footer>
      </body>
    </html>
  );
}
