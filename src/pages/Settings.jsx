/**
 * DESIGN: * Settings.jsx
 * - Clear heading structure
 * - Uses SettingsForm component
 */

import MainLayout from "../components/layout/MainLayout";
import SettingsForm from "../components/forms/SettingsForm";

export default function Settings() {
  return (
    <MainLayout>
      <h1>Settings</h1>
      <SettingsForm />
    </MainLayout>
  );
}