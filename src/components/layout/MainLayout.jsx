/**
 * MainLayout.jsx
 *
 * ACCESSIBLE BY DESIGN:
 * - Uses semantic landmarks: header, main, footer
 * - Ensures clear document structure
 *
 * INTENTIONAL A11Y ISSUE:
 * - Does NOT manage skip links (no "Skip to content")
 */

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div className="layout">
        <Sidebar />

        {/*  main landmark present */}
        <main className="content">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
