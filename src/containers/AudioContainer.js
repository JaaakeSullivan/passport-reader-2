import React from 'react'
import PropTypes from 'prop-types'
import AudioPlayer from '../components/AudioPlayer'


function AudioContainer(props) {
  // TODO need to check if props.showAudio is true and decide what to display

  return (
     <div>
       {props.showAudio ? (
         <AudioPlayer {...props}/>
       ) : (
         null
       )}
     </div>
   );
}

AudioContainer.propTypes = {
  audio: PropTypes.array.isRequired,
  showAudio: PropTypes.bool.isRequired
};

export default AudioContainer
