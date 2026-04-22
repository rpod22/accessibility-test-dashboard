/** * SkipLink.jsx
 *
 * ACCESSIBLE BY DESIGN:
 * - Provides skip navigation mechanism
 *
 * INTENTIONAL A11Y ISSUES:
 * - Target element is not focusable
 * - Skip link becomes visible only on focus but scrolls imperfectly
 */

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link"
    >
      Skip to main content
    </a>
  );
}
