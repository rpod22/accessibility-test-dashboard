/**
 * Toast.jsx
 *
 * ACCESSIBLE BY DESIGN:
 * - Visible feedback message
 *
 * INTENTIONAL A11Y ISSUES:
 * - No aria-live
 * - Screen readers are not notified
 */

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="toast">
      {message}
    </div>
  );
}