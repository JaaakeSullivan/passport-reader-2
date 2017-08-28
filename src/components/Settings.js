import React from 'react'
import PropTypes from 'prop-types'
import Switch from 'material-ui/Switch'
import { FormLabel } from 'material-ui/Form';
import Radio from 'material-ui/Radio';

const switchContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between'
}

function Settings(props){
  const { settings, toggleAudio, toggleHighlights, toggleDarkMode, fontSize, changeFontSize } = props

  return (
    <div>
      <div style={switchContainerStyle}>
        <h3>Show Highlights / Focus Reading Mode</h3>
        <Switch
          onChange={toggleHighlights}
          checked={settings.showHighlights}
        />
      </div>

      <div style={switchContainerStyle}>
        <h3>Show Audio:</h3>
        <Switch
          onChange={toggleAudio}
          checked={settings.showAudio}
        />
      </div>

      <div style={switchContainerStyle}>
        <h3>Dark Mode:</h3>
        <Switch
          onChange={toggleDarkMode}
          checked={settings.darkMode}
        />
      </div>

      <div style={switchContainerStyle}>
        <h3>Show Paragraph Numbers</h3>
        <Switch
          onChange={toggleDarkMode}
          checked={settings.darkMode}
        />
      </div>

      <div style={switchContainerStyle}>
        <h3>Advanced Settings -- Dropdown</h3>
      </div>

      <div style={switchContainerStyle}>
        <h3>Navigation -- Top / Bottom</h3>
      </div>

      <div style={switchContainerStyle}>
        <h3>Default Styles -- Button</h3>
      </div>

    </div>
  )
}

export default Settings;
