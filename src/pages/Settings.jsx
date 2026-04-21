import Header from "../components/Header"

export default function Settings() {
  return (
    <>
      <Header />
      <div style={{ padding: "24px" }}>
        <div>
          <input type="checkbox" />
          Enable notifications
        </div>

        <div>
          <input type="checkbox" />
          Dark mode
        </div>
      </div>
    </>
  )
}

//no labels for checkboxes, no fieldset/legend, no aria-roles, no landmarks, no headers