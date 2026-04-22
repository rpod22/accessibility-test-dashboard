/** UserDetails.jsx
 *
 * ACCESSIBLE BY DESIGN:
 * - Clear page and section headings
 * - Uses semantic <dl> for user data
 * - Uses real <button> elements for actions
 *
 * INTENTIONAL A11Y ISSUES:
 * - Modal has no focus trap
 * - Focus does not return to trigger button
 * - User status communicated only by color
 */

import { useParams } from "react-router-dom";
import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import ConfirmModal from "../modal/ConfirmModal";

export default function UserDetails() {
  const { id } = useParams();

  //  State controlling modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <MainLayout>
      <h1>User details</h1>
      <h2>User ID: {id}</h2>

      {/*  Semantic description list */}
      <dl>
        <dt>Name</dt>
        <dd>John Doe</dd>

        <dt>Email</dt>
        <dd>john@example.com</dd>

        <dt>Status</dt>
        {/*  Status conveyed only by color */}
        <dd style={{ color: "green" }}>Active</dd>
      </dl>

      {/*  Proper buttons */}
      <div style={{ marginTop: "24px" }}>
        <button>Reset password</button>

        <button
          style={{ marginLeft: "12px" }}
          onClick={() => setIsModalOpen(true)}
        >
          Delete user
        </button>
      </div>

      {/*  Modal rendered conditionally */}
      <ConfirmModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </MainLayout>
  );
}
