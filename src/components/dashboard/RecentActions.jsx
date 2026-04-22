/**
 * RecentActions.jsx
 *
 * ACCESSIBLE BY DESIGN:
 * - Uses semantic <ul> and <li>
 * - Text content is readable by screen readers
 */

export default function RecentActions() {
  return (
    <ul className="recentActions">
      <li>User John updated profile</li>
      <li>Admin created new report</li>
      <li>Password reset requested</li>
    </ul>
  );
}
