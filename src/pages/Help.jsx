/**
 * Help.jsx
 *
 * ACCESSIBLE BY DESIGN:
 * - Proper landmark usage
 * - Logical heading hierarchy
 * - Descriptive links
 * - Images with meaningful alt text
 *
 * INTENTIONAL A11Y ISSUES:
 * - Practically none (reference page)
 */

import MainLayout from "../components/layout/MainLayout";

export default function Help() {
  return (
    <MainLayout>
      <h1>Help & Accessibility information</h1>

      <section>
        <h2>How to use the dashboard</h2>
        <p>
          This dashboard allows administrators to manage users, view statistics
          and update settings.
        </p>
      </section>

      <section>
        <h2>Keyboard navigation</h2>
        <ul>
          <li>Use Tab to move between interactive elements</li>
          <li>Press Enter to activate buttons</li>
        </ul>
      </section>

      <section>
        <h2>Contact support</h2>
        <p>
          For accessibility-related issues, contact{" "}
          <a href="mailto:support@example.com">
            accessibility support team
          </a>.
        </p>
      </section>
    </MainLayout>
  );
}