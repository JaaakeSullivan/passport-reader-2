import React from 'react'
import PropTypes from 'prop-types'

const audioPlayerStyle = {
  color: 'black',
}

const AudioContainer = (props) => (
  <div style={audioPlayerStyle}>
    <h2>I'm the audio player!!!</h2>
  </div>
)

AudioContainer.propTypes = {
  audio: PropTypes.array.isRequired,
};

export default AudioContainer
