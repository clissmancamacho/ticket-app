import PropTypes from "prop-types";
import { createContext } from "react";
// hooks
import useLocalStorage from "hooks/useLocalStorage";

const initialState = {
  isLight: true,
  onChangeMode: () => {},
};

const SettingsContext = createContext(initialState);

SettingsProvider.propTypes = {
  children: PropTypes.node,
};

function SettingsProvider({ children }) {
  const [settings, setSettings] = useLocalStorage("settings", {
    isLight: initialState.isLight,
  });

  const onChangeMode = (event) => {
    setSettings({
      ...settings,
      isLight: !event,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        // Mode
        onChangeMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
