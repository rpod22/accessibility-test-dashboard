/**
 * ExternalWidget.jsx
 *
 * INTENTIONAL A11Y ISSUES:
 * - iframe missing title attribute
 * - Embedded content context not announced
 *
 * PURPOSE:
 * - Test handling of external / embedded content
 */

let url = window.location.href;

export default function ExternalWidget() {
  return (
    <section>
      <h2>External analytics provider</h2>

      <iframe
        src="https://example.com"
        width="60%"
        height="200"
        title="External analytics report"
      ></iframe>
    </section>
  );
}