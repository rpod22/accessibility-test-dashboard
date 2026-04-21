export default function Sidebar() {
  return (
    <div className="sidebar">
      <div onClick={() => alert("Users")}>Users</div>
      <div onClick={() => alert("Reports")}>Reports</div>
      <div onClick={() => alert("Analytics")}>Analytics</div>
    </div>
  )
}
// no <nav>, no keyboard support, no aria-roles, no active state indication