/**
 * Sidebar.jsx
 *
 * ACCESSIBLE BY DESIGN:
 * - Uses <aside> landmark to represent complementary content
 * - Simple structure, clearly separated from main content
 *
 * INTENTIONAL A11Y ISSUES:
 * - Interactive items implemented as clickable <div> instead of <button> or <a>
 * - No keyboard support (Enter / Space do nothing)
 * - Missing <nav> landmark for navigation
 */

export default function Sidebar() {
  return (
    <aside
      className="sidebar"
      style={{
        padding: "16px",
        minWidth: "100px",
      }}
    >
      {/*  Clickable div instead of semantic navigation elements */}
      <div onClick={() => alert("Overview clicked")}>
        Overview
      </div>

      <div onClick={() => alert("Reports clicked")}>
        Reports
      </div>

      <div onClick={() => alert("Analytics clicked")}>
        Analytics
      </div>
    </aside>
  );
}
