import React from "react";

const Footer: React.FC = () => (
  <footer style={{
    background: "#222",
    color: "#fff",
    textAlign: "center",
    padding: "1.5rem 0",
    position: "relative",
    left: 0,
    bottom: 0,
    width: "100%",
    fontSize: "1rem"
  }}>
    <span>Email <a href="mailto:sales@chainops.space" style={{ color: '#fff', textDecoration: 'underline' }}>sales@chainops.space</a></span>
  </footer>
);

export default Footer;
