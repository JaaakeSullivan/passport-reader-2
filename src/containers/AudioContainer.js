import React from 'react'
import PropTypes from 'prop-types'
import AudioPlayer from '../components/AudioPlayer'

function AudioContainer(props) {
  return (
    <AudioPlayer {...props}/>
  )
}

AudioContainer.propTypes = {
  audio: PropTypes.array.isRequired,
};

export default AudioContainer