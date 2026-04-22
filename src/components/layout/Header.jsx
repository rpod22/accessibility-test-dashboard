import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  console.log("HEADER RENDER");
  return (
    <header
      style={{
        padding: "12px",
        background: "#242121",
        color: "#fff",
        display: "flex",
        gap: "16px",
      }}
    >
      
      {/* INTENTIONAL A11Y ISSUE: missing alt
        ALSO missing yellow highlight on active help link */}

      <img src="/Capgemini_Primary-spade_Capgemini-Blue.png" alt="Company Logo" style={{ width: "40px", height: "40px" }} />
      <Link to="/" style={{ color: location.pathname === "/" ? "yellow" : "white", fontSize: "24px", fontWeight: "bold" }}>
        Dashboard
      </Link>

      <Link to="/users" style={{ color: location.pathname === "/users" ? "yellow" : "white", fontSize: "24px", fontWeight: "bold"}}>
        Users
      </Link>

      <Link to="/settings" style={{ color: location.pathname === "/settings" ? "yellow" : "white", fontSize: "24px", fontWeight: "bold"}}>
        Settings
      </Link>

      <Link to="/help" style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>
        Help
      </Link>
    </header>
  );
}