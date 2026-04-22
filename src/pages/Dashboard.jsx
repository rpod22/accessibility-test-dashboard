/**
 * Dashboard.jsx
 *
 * ACCESSIBLE BY DESIGN:
 * - Single <h1> for the page
 * - Sections are logically grouped
 *
 * INTENTIONAL A11Y ISSUES:
 * - Some cards are clickable <div>s
 * - Chart lacks accessible description
 */

import MainLayout from "../components/layout/MainLayout";
import KpiCard from "../components/dashboard/KpiCard";
import Chart from "../components/dashboard/Chart";
import RecentActions from "../components/dashboard/RecentActions";

export default function Dashboard() {
  return (
    <MainLayout>
      <h1>User Analytics Dashboard</h1>

      <section style={{padding: 10, border: "1px solid #ddd", marginBottom:10}}>
        <h2>Key metrics</h2>

        <div style={{ display: "flex", gap: "16px" }}>
          <KpiCard title="Active users" value="1,248" />
          <KpiCard title="Monthly revenue" value="$12,400" />
          <KpiCard title="Errors reported" value="32" />
        </div>
      </section>

      <section style={{padding: 10, border: "1px solid #ddd", marginBottom: 10}}>
        <h2>Traffic overview</h2>
        <Chart />
      </section>

      <section style={{padding: 10, border: "1px solid #ddd", marginBottom: 10}}>
        <h2>Recent actions</h2>
        <RecentActions />
      </section>
    </MainLayout>
  );
}
