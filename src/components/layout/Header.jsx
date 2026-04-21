import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  console.log("HEADER RENDER");
  return (
    <header
      style={{
        padding: "16px",
        background: "#1e1e1e",
        color: "#fff",
        display: "flex",
        gap: "16px"
      }}
    >
      
      {/* INTENTIONAL A11Y ISSUE: missing alt */}

      <Link to="/" style={{ color: location.pathname === "/" ? "yellow" : "white" }}>
        Dashboard
      </Link>

      <Link to="/users" style={{ color: location.pathname === "/users" ? "yellow" : "white" }}>
        Users
      </Link>

      <Link to="/settings" style={{ color: location.pathname === "/settings" ? "yellow" : "white" }}>
        Settings
      </Link>

      <Link to="/help" style={{ color: "white" }}>
        Help
      </Link>
    </header>
  );
}