/**
 * Chart.jsx
 *
 * INTENTIONAL A11Y ISSUES:
 * - SVG has no <title> or <desc>
 * - No textual alternative describing the data
 *
 * PURPOSE:
 * - Test accessibility evaluation of charts/visualizations
 */

export default function Chart() {
  return (
    <svg width="300" height="120">
      <rect x="10" y="40" width="40" height="70" fill="#4a90e2" />
      <rect x="70" y="20" width="40" height="90" fill="#4a90e2" />
      <rect x="130" y="60" width="40" height="50" fill="#4a90e2" />
    </svg>
  );
}