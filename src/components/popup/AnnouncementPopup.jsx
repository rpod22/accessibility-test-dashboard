/**
 * AnnouncementPopup.jsx
 *
 * ACCESSIBLE BY DESIGN:
 * - Visible overlay and content
 * - Clear heading and message
 *
 * INTENTIONAL A11Y ISSUES:
 * - Missing role="dialog"
 * - Missing aria-modal="true"
 * - No focus trap
 * - No keyboard handling (ESC does nothing)
 * - Close action implemented as <div>, not <button>
 * - Focus is not moved into popup
 * - Focus is not returned on close
 */

export default function AnnouncementPopup({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Important announcement</h2>

        <p>
          We have updated our data processing policies.
          Please review the changes.
        </p>

        {/* Not a button, not keyboard accessible */}
        <div
          className="popup-close"
          onClick={onClose}
        >
          Close
        </div>
      </div>
    </div>
  );
}