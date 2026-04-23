import MainLayout from "../components/layout/MainLayout";
import KpiCard from "../components/dashboard/KpiCard";
import Chart from "../components/dashboard/Chart";
import RecentActions from "../components/dashboard/RecentActions";
import ActivityTable from "../components/dashboard/ActivityTable";
import LiveFilter from "../components/dashboard/LiveFilter";
import ExternalWidget from "../components/dashboard/ExternalWidget";
import ActionsDropdown from "../components/dashboard/ActionsDropdown";
import { useState } from "react";
import AnnouncementPopup from "../components/popup/AnnouncementPopup";



export default function Dashboard() {

  const [showAnnouncement, setShowAnnouncement] = useState(false);

  return (
    <MainLayout>
      <h1>User Analytics Dashboard</h1>
      
      <section>
        <h2>Key metrics</h2>
        <div style={{ display: "flex", gap: "16px" }}>
          <KpiCard title="Active users" value="1,248" />
          <KpiCard title="Revenue" value="$12,400" />
          <KpiCard title="Errors" value="32" />
        </div>

        {/* keyboard-focusable element */}
        <button style={{ marginTop: "16px", marginBottom: "24px" }} onClick={() => alert("Data refreshed")}>
          Refresh data
        </button>
        <hr />
      </section>

      <section>
        <h2>Traffic overview</h2>
        <div style={{display: "flex", flexDirection: "row", gap: "24px"}}>
          <Chart />
          <button style={{height: "60px"}} onClick={() => setShowAnnouncement(true)}>
            Show important announcement
          </button>
        </div>
      </section>
      <hr />

      <br />  
      <ActivityTable />
      <hr />
      <br />
      <LiveFilter />
      <hr />
      <br />
      <ExternalWidget />
      <hr />

      <br />
      <section>
        <h2>Quick actions</h2>
        <ActionsDropdown />
      </section>
      <br />
      <hr />
      <section>
        <h2>Recent actions</h2>
        <RecentActions />
      </section>
      
      <AnnouncementPopup open={showAnnouncement}
        onClose={() => setShowAnnouncement(false)}
      />

    </MainLayout>
  );
}