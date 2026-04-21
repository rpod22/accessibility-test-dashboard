export default function Card({ title, value }) {
  return (
    <div
      onClick={() => alert(title)}
      style={{
        padding: "16px",
        border: "1px solid #ddd",
        marginBottom: "12px",
        cursor: "pointer"
      }}
    >
      <h4>{title}</h4>
      <span>{value}</span>
    </div>
  )
}

// no <article>, no keyboard support, no aria-roles, no alert alternative, clickable div