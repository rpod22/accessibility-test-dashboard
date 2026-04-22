/**.jsx
 *
 * ACCESSIBLE BY DESIGN:
 * - Visible dialog content
 * - Clear heading
 *
 * INTENTIONAL A11Y ISSUES:
 * - Missing role="dialog"
 * - Missing aria-modal
 * - No focus trap
 * - Focus not returned after close
 * - ESC does nothing
 */

export default function ConfirmModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Confirm action</h2>
        <p>Are you sure you want to delete this user?</p>

        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={() => alert("Deleted!")}>Delete</button>
        </div>
      </div>
    </div>
  );
}

