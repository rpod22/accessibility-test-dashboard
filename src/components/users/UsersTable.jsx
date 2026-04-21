/**
 * UsersTable.jsx
 *
 * ACCESSIBLE BY DESIGN:
 * - Uses semantic <table>, <thead>, <tbody>
 * - Search input has proper <label>
 *
 * INTENTIONAL A11Y ISSUES:
 * - Missing <caption> for the table
 * - <th> elements missing scope attribute
 * - Pagination uses clickable <span>
 */

import { Link } from "react-router-dom";

export default function UsersTable() {
  return (
    <>
      {/* Properly labeled search */}
      <label htmlFor="search">Search users:</label>
      <input id="search" type="text" />

      <table border="1" style={{ marginTop: "16px", width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <Link to="/users/1">John Doe</Link>
            </td>
            <td>john@example.com</td>
            <td style={{ color: "green" }}>Active</td>
          </tr>

          <tr>
            <td>
              <Link to="/users/2">Jane Smith</Link>
            </td>
            <td>jane@example.com</td>
            <td style={{ color: "red" }}>Disabled</td>
          </tr>
        </tbody>
      </table>

      {/* Non-semantic pagination */}
      <div style={{ marginTop: "12px" }}>
        <span onClick={() => alert("Prev")}>Prev</span> |{" "}
        <span onClick={() => alert("Next")}>Next</span>
      </div>
    </>
  );
}
