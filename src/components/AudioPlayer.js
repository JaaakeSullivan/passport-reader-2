import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import ReactPlayer from 'react-player'
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 960,
    backgroundColor: 'blue'
  },
});

function AudioPlayer(props){

  const classes = props.classes;

  const {closeAudio} = props;

  return (

    <div className={classes.root}>
      <Button onClick={closeAudio } fab color="primary" aria-label="add" className={classes.button}>
          <AddIcon />
      </Button>
      <ReactPlayer url={props.audio[0]} progressFrequency={1000} controls playbackRate={props.speed} height={50} width={'100%'} />
    </div>
  )
}

AudioPlayer.propTypes = {
  audio: PropTypes.array.isRequired,
};

export default withStyles(styles)(AudioPlayer);
