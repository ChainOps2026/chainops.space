
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 20px 64px" }}>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", margin: "8px 0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: 600, letterSpacing: ".4px" }}>
          <span style={{ display: 'inline-block', filter: 'drop-shadow(0 0 6px rgba(124,195,255,.35))' }}>
            <Image src="/favicon.svg" alt="ChainOps logo" width={28} height={28} priority />
          </span>
          <span>ChainOps.space</span>
        </div>
        <div>
          <Link href="/links">Links</Link>
          <a href="https://calendly.com/chainops-chainops/30min" target="_blank" rel="noopener" style={{ marginLeft: 16 }}>Book</a>
        </div>
      </nav>
      <section style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: "28px", alignItems: "center", margin: "24px 0 10px" }}>
        <div>
          <h1 style={{ fontSize: 42, lineHeight: 1.15, margin: "0 0 12px" }}>Automation that ships itself.</h1>
          <p style={{ color: "#9ab0c4", fontSize: 18, margin: "0 0 22px" }}>
            We design and deploy AI workflows, ops systems, and autonomous helpers—fast, secure, and production‑ready.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="https://calendly.com/chainops-chainops/30min" target="_blank" rel="noopener" style={{ background: "linear-gradient(180deg,#0d57a7,#0b3f7a)", border: "1px solid #154a83", color: "#fff", padding: "12px 16px", borderRadius: 14, textDecoration: "none", fontWeight: 600 }}>Book a 30‑min consult</a>
            <Link href="/links" style={{ background: "transparent", border: "1px solid #1e2a38", color: "#e6f0ff", padding: "12px 16px", borderRadius: 14, textDecoration: "none", fontWeight: 600 }}>Explore the Links Hub</Link>
          </div>
        </div>
        <div style={{ background: "linear-gradient(180deg,#0c1320,#0b1524)", border: "1px solid #152237", borderRadius: 18, padding: 18, boxShadow: "0 8px 28px rgba(0,0,0,.35)" }}>
          <div style={{ display: "inline-block", fontSize: 12, color: "#9ab0c4", border: "1px solid #223142", borderRadius: 999, padding: "2px 10px", marginBottom: 8 }}>Capabilities</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 16 }}>
            <div><strong>AI Agents</strong><div style={{ fontSize: 15, color: "#9ab0c4" }}>Task orchestration, RAG, tool use</div></div>
            <div><strong>Ops Automation</strong><div style={{ fontSize: 15, color: "#9ab0c4" }}>Back‑office, CRM, lead flow</div></div>
            <div><strong>Data & Integrations</strong><div style={{ fontSize: 15, color: "#9ab0c4" }}>APIs, webhooks, ETL, analytics</div></div>
            <div><strong>Deploy</strong><div style={{ fontSize: 15, color: "#9ab0c4" }}>Netlify, Vercel, Cloud, CI/CD</div></div>
          </div>
        </div>
      </section>
      <section style={{ background: "linear-gradient(180deg,#0c1320,#0b1524)", border: "1px solid #152237", borderRadius: 18, padding: 18, boxShadow: "0 8px 28px rgba(0,0,0,.35)", marginTop: 24 }} id="contact">
        <div style={{ display: "inline-block", fontSize: 12, color: "#9ab0c4", border: "1px solid #223142", borderRadius: 999, padding: "2px 10px", marginBottom: 8 }}>Contact</div>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <p><input style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: "1px solid #1e2a38", background: "#0f151d", color: "#e6f0ff", outline: "none" }} type="text" name="name" placeholder="Your name" required /></p>
          <p><input style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: "1px solid #1e2a38", background: "#0f151d", color: "#e6f0ff", outline: "none" }} type="email" name="email" placeholder="Email" required /></p>
          <p><textarea style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: "1px solid #1e2a38", background: "#0f151d", color: "#e6f0ff", outline: "none" }} name="message" rows={5} placeholder="Tell us what you want to automate…" required /></p>
          <p>
            <button style={{ background: "linear-gradient(180deg,#0d57a7,#0b3f7a)", border: "1px solid #154a83", color: "#fff", padding: "12px 16px", borderRadius: 14, textDecoration: "none", fontWeight: 600 }} type="submit">Send</button>
            <a href="https://calendly.com/chainops-chainops/30min" target="_blank" rel="noopener" style={{ background: "transparent", border: "1px solid #1e2a38", color: "#e6f0ff", padding: "12px 16px", borderRadius: 14, textDecoration: "none", fontWeight: 600, marginLeft: 8 }}>Or book on Calendly</a>
          </p>
        </form>
      </section>
    </main>
  );
}
