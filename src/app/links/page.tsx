"use client";


import React, { useEffect, useState } from "react";

type Link = {
  name: string;
  url: string;
  category: string;
};

const LinksPage: React.FC = () => {
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    fetch("/links.json")
      .then((res) => res.json())
      .then(setLinks);
  }, []);

  return (
    <main style={{ maxWidth: "700px", margin: "0 auto", padding: "32px 20px 64px" }}>
      <h1 style={{ fontSize: 32, marginBottom: 24 }}>Links Hub</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {links.map((link) => (
          <li key={link.url} style={{ marginBottom: 18 }}>
            <a href={link.url} target="_blank" rel="noopener" style={{ fontWeight: 600, color: "#7cc3ff", fontSize: 18 }}>
              {link.name}
            </a>
            <span style={{ color: "#9ab0c4", marginLeft: 8, fontSize: 14 }}>({link.category})</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default LinksPage;
