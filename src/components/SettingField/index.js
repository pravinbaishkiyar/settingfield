import { useState } from "react";
import CollapseField from "./../CollapseField";
import ToggleSwitch from "./../ToggleSwitch";
import "./style.css";

/**
 * config=
 * {label: '', number: {from, to}, checked: true, children: [{label: '', number: {from, to}, enable: true}, {label: '', number: {from, to}, enable: true}]},
 * @param {object} param0
 */
const SettingField = ({ config }) => {
  const [checked, setChecked] = useState(false);
  return (
    <CollapseField
      label={config.label}
      collapsible={Boolean(config.children)}
      avatar={() => <div className="setting-avatar" />}
      renderField={() => {
        return (
          <>
            {config.showSelector === false ? null : (
              <select className="select-field">
                {Array.from(Array(10).keys()).map((v) => (
                  <option value={v}>{v}</option>
                ))}
              </select>
            )}
            {config.showToggle === false ? null : (
              <ToggleSwitch
                defaultChecked={config.defaultChecked}
                checked={config.checked}
                disabled={config.disabled}
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            )}
          </>
        );
      }}
    >
      {Array.isArray(config.children)
        ? config.children.map((child) => (
            <SettingField config={{ disabled: !checked, ...child }} />
          ))
        : null}
    </CollapseField>
  );
};

export default SettingField;
