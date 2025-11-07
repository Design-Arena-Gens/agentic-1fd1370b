import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aurora Insights",
  description: "Discover actionable insights powered by AI assistance and beautiful data storytelling."
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <div className="pointer-events-none fixed inset-x-0 top-0 flex justify-center opacity-60">
          <div className="h-[600px] w-[600px] bg-primary-500/40 blur-3xl" />
        </div>
        {children}
      </body>
    </html>
  );
}
