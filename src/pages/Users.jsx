/**
 * Users.jsx
 *
 * ACCESSIBLE BY DESIGN:
 * - Uses <main> via MainLayout
 * - Clear page heading
 */

import MainLayout from "../components/layout/MainLayout";
import UsersTable from "../components/users/UsersTable";

export default function Users() {
  return (
    <MainLayout>
      <h1>Users</h1>
      <UsersTable />
    </MainLayout>
  );
}
