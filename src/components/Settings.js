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
        <h3>Show Highlights:</h3>
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

    </div>
  )
}

export default Settings;
