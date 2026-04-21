export default function Header() {
  return (
    <div style={{ padding: "16px", background: "#222", color: "#fff" }}>
      <img src="/logo.png" width="40" />
      <a href="/" style={{ marginLeft: "16px", color: "#fff" }}>Dashboard</a>
      <a href="/settings" style={{ marginLeft: "12px", color: "#aaa" }}>
        Settings
      </a>
    </div>
  )
}
// no <header>, no alert, active link is only visually indicated