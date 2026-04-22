/**
 * MainLayout.jsx
 *
 * ACCESSIBLE BY DESIGN:
 * - Uses semantic landmarks: header, main, footer
 * - Ensures clear document structure
 
* INTENTIONAL A11Y ISSUES:
  * - Sidebar navigation implemented with non-semantic elements and no keyboard support
  * Skip link targets a non-focusable element and has imperfect scroll behavior
  * No ARIA roles or attributes used for interactive elements in the sidebar
  * No focus styles for interactive elements in the sidebar
  * No <nav> landmark for the sidebar navigation
  * No keyboard support for sidebar items (Enter/Space do nothing)
**/

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import SkipLink from "./SkipLink";

export default function MainLayout({ children }) {
  return (
    <>
      <SkipLink />
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
