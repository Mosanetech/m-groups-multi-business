import {
  getSettings,
} from "@/actions/settings";

import SettingsForm
from "@/components/admin/settings/SettingsForm";

export default async function SettingsPage() {

  const settings =
    await getSettings();

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Website Settings
        </h1>

        <p className="text-gray-500">
          Manage company information.
        </p>

      </div>

      <SettingsForm
        settings={settings}
      />

    </div>

  );

}