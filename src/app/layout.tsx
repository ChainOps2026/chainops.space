
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ChainOps.space — AI automation & systems orchestration",
  description: "ChainOps.space builds AI-driven automation, ops tooling, and orchestration.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="ChainOps.space builds AI-driven automation, ops tooling, and orchestration." />
        <meta property="og:title" content="ChainOps.space — AI automation & systems orchestration" />
        <meta property="og:description" content="ChainOps.space builds AI-driven automation, ops tooling, and orchestration." />
        <meta property="og:image" content="/favicon.svg" />
        <meta property="og:url" content="https://chainops.space" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ChainOps.space — AI automation & systems orchestration" />
        <meta name="twitter:description" content="ChainOps.space builds AI-driven automation, ops tooling, and orchestration." />
        <meta name="twitter:image" content="/favicon.svg" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body style={{ background: "#060a0f", color: "#e6f0ff", fontFamily: "system-ui,Segoe UI,Inter,Roboto" }}>
        {children}
        <Footer />
        <script defer data-domain="chainops.space" src="https://plausible.io/js/plausible.js"></script>
      </body>
    </html>
  );
}
