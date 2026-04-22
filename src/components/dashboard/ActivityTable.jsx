/**
 * ActivityTable.jsx
 *
 * ACCESSIBLE BY DESIGN:
 * - Uses semantic <table>, <thead>, <tbody>
 * - Data is structured and readable
 *
 * INTENTIONAL A11Y ISSUES:
 * - Missing <caption>
 * - <th> elements missing scope attribute
 * - Sorting is click-only
 * - No aria-sort to announce sort state
 * - Status conveyed only by color
 */

import { useState } from "react";

const data = [
  { category: "Logins", count: 120, change: "+5%", status: "ok" },
  { category: "Errors", count: 32, change: "+12%", status: "alert" },
  { category: "Exports", count: 7, change: "-3%", status: "ok" },
];

export default function ActivityTable() {
  const [rows, setRows] = useState(data);

  function sortByCount() {
    const sorted = [...rows].sort((a, b) => b.count - a.count);
    setRows(sorted);
  }

  return (
    <section>
      <h2>Activity by category</h2>

      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th onClick={sortByCount}>Count ↓</th>
            <th>Change</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.category}>
              <td>{row.category}</td>
              <td>{row.count}</td>
              <td>{row.change}</td>
              <td
                className={
                  row.status === "ok"
                    ? "status-active"
                    : "status-disabled"
                }
              >
                {row.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
