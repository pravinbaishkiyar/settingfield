import SettingField from "./components/SettingField";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Complex field to toggle configuration</h1>

      <SettingField config={{ label: "simple field", showSelector: false }} />
      <SettingField
        config={{
          label: "simple field",
          children: [
            { label: "Company Settings", showToggle: false },
            { label: "edit company", defaultChecked: true },
            {
              label: "Users",
              defaultChecked: true
            }
          ]
        }}
      />

      <SettingField
        config={{
          label: "nested field",
          showSelector: false,
          defaultChecked: true,
          children: [
            { label: "Company Settings", showToggle: false },
            { label: "edit company", defaultChecked: true },
            {
              label: "Users",
              defaultChecked: true,
              children: [
                { label: "edit username", showSelector: false },
                { label: "edit email" }
              ]
            }
          ]
        }}
      />
    </div>
  );
}
