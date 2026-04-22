/**
 * Footer.jsx
 *
 * ACCESSIBLE BY DESIGN:
 * - Proper <footer> landmark
 * - Plain, readable text
 * - No interactive elements
 */

export default function Footer() {
  return (
    <footer
      style={{
        padding: "12px",
        textAlign: "center",
        background: "#f4f4f4",
      }}
    >
      © 2026 Accessibility Test Dashboard
    </footer>
  );
}
