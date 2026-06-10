import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { getAppStoreHref, hasDirectAppStoreListing } from "@/lib/siteConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Cents - Family Budgeting Made Simple",
  description: "Simple budgeting designed for busy families. Track expenses, set budgets, and share with your household.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-amber-50 min-h-screen flex flex-col`}>
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-amber-800">
                Home Cents
              </Link>
              <div className="flex gap-6">
                <Link href="/" className="text-amber-700 hover:text-amber-900 transition">
                  Home
                </Link>
                <Link href="/reset-password" className="text-amber-700 hover:text-amber-900 transition">
                  Reset Password
                </Link>
                <Link href="/support" className="text-amber-700 hover:text-amber-900 transition">
                  Support
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-amber-800 text-amber-100">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <p className="font-semibold">Home Cents Family Budgeting</p>
                <p className="text-sm text-amber-200">Simple budgeting for busy families</p>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a
                  href={getAppStoreHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  {hasDirectAppStoreListing() ? "App Store" : "Find on App Store"}
                </a>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
                <Link href="/support" className="hover:text-white transition">
                  Support
                </Link>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-amber-700 text-center text-sm text-amber-200">
              © 2026 Joseph Lamoreaux. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
