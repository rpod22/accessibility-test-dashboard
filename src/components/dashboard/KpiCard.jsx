/**
 * KpiCard.jsx
 *
 * ACCESSIBLE BY DESIGN:
 * - Proper heading usage inside card
 *
 * INTENTIONAL A11Y ISSUE:
 * - Entire card is clickable <div> instead of <button>
 * - Not keyboard accessible
 */

export default function KpiCard({ title, value }) {
  return (
    <div
      onClick={() => alert(`${title} clicked`)}
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        width: "200px",
        cursor: "pointer",
      }}
    >
      <h3>{title}</h3>
      <strong>{value}</strong>
    </div>
  );
}
