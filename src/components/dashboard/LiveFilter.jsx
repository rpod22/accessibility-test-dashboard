/**
 * LiveFilter.jsx
 *
 * ACCESSIBLE BY DESIGN:
 * - Input has visible label
 *
 * INTENTIONAL A11Y ISSUES:
 * - Results update dynamically without aria-live
 * - No message like “X results found”
 */

import { useState } from "react";

const items = [
  "Active users",
  "Monthly revenue",
  "Error reports",
  "Export jobs",
  "API calls",
];

export default function LiveFilter() {
  const [query, setQuery] = useState("");

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section>
      <h2>Filter metrics</h2>

      <label htmlFor="filter">Search metrics</label>
      <input
        id="filter"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {filtered.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}