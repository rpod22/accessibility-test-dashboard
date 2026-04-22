/**
 * ActionsDropdown.jsx
 *
 * ACCESSIBLE BY DESIGN:
 * - Visible menu options
 *
 * INTENTIONAL A11Y ISSUES:
 * - No keyboard interaction
 * - No role="menu"
 * - Hover dependent
 * - Focus can escape dropdown
 */

export default function ActionsDropdown() {
  return (
    <div>
        <select className="dropdown">
            <option className="dropdown-item">Edit</option>
            <option className="dropdown-item">Delete</option>
        </select>
        <input className="actionSubmit" type="submit" value="Go" onClick={() => alert(`Action triggered!`)}/>
    </div>
  );
}