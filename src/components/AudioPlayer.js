import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 960,
    backgroundColor: 'red'
  },
});

function AudioPlayer(props){
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <h2>I'm the audio player!!! Dude</h2>
    </div>
  )
}

AudioPlayer.propTypes = {
  audio: PropTypes.array.isRequired,
};

export default withStyles(styles)(AudioPlayer);
