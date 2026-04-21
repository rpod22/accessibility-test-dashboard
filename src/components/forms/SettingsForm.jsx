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

export default function SettingsForm() {
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

      <button style={{ marginTop: "12px" }}>Save settings</button>
    </form>
  );
}
