/**
 * SettingsForm.jsx
 *
 * ACCESSIBLE BY DESIGN:
 * - Uses <form>, <fieldset>, <legend>
 * - Labels properly associated with inputs
 * - Error message uses role="alert"
 *
 * INTENTIONAL A11Y ISSUES:
 * - One checkbox missing label
 * - One input relies on placeholder only
 * - Error message communicated only visually (color)
 */
import { useState } from "react";
import Toast from "../notifications/Toast";

export default function SettingsForm() {
  
  const [toast, setToast] = useState("");

  return (
    <form>
      <fieldset>
        <legend>Profile settings</legend>

        {/*  Proper label */}
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />

        <br />

        {/*  Placeholder-only */}
        <input type="email" placeholder="Email address" />

        <br />

        {/*  Accessible error handling */}
        <div role="alert" style={{ color: "red" }}>
          Password must be at least 8 characters
        </div>

        <label htmlFor="password">Password</label>
        <input id="password" type="password" />

        <br />

        {/*  Checkbox without label */}
        <input type="checkbox" /> Receive marketing emails
      </fieldset>

      <button onClick={() => setToast("Settings saved")}>
        Save settings
      </button>

      <Toast message={toast} />
    </form>
  );
}
