import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import ReactPlayer from 'react-player'


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 960,
    backgroundColor: 'blue'
  },
});

function AudioPlayer(props){

  const classes = props.classes;


  return (

    <div className={classes.root}>
      <ReactPlayer url={props.audio[0]} controls playbackRate={props.speed}/>

    </div>
  )
}

AudioPlayer.propTypes = {
  audio: PropTypes.array.isRequired,
};

export default withStyles(styles)(AudioPlayer);
