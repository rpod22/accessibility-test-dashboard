import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Card from "../components/Card"
import ActionMenu from "../components/ActionMenu"

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="layout">
        <Sidebar />
        <div className="content">
          <h2>Overview</h2>
          <Card title="Users" value="1240" />
          <Card title="Sessions" value="9800" />
          <ActionMenu />
        </div>
      </div>
    </>
  )
}

//no <main>, no headings structure, no landmarks, no aria-roles