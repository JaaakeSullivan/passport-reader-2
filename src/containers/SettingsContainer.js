import React from 'react'
import PropTypes from 'prop-types'
import Settings from '../components/Settings'


const SettingsContainer = (props) => (
  <Settings {...props}/>
)

SettingsContainer.propTypes = {
	settings: PropTypes.object.isRequired,
};

export default SettingsContainer
