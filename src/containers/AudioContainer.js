import React from 'react'
import PropTypes from 'prop-types'
import AudioPlayer from '../components/AudioPlayer'
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import Snackbar from 'material-ui/Snackbar';


let dynamicStyles = {};

const styles = theme => ({
  root: {
    backgroundColor: 'white',
    height: 300,
    padding: '0 30px',
    border: 0,
  },
  button: {
    margin: theme.spacing.unit,
  },
  
});


const darkStyles = theme => ({
  root: {
    backgroundColor: 'red',  
    height: 300,
    padding: '0 30px',
    border: 0,
    
  },
  button: {
    margin: theme.spacing.unit,
  },
  
});

dynamicStyles = styles
// dynamicStyles = darkStyles

function AudioContainer(props) {

  // TODO need to check if props.showAudio is true and decide what to display
  const classes = props.classes;

  const { openAudio, closeAudio, audio, showAudio } = props;

  return (
    <div>
      <div>
        <Button onClick={openAudio } fab color="primary" aria-label="add" className={classes.button}>
          <AddIcon />
        </Button>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={showAudio}
        SnackbarContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<AudioPlayer {...props}/>}
      />
     </div>
   );
}

AudioContainer.propTypes = {
  audio: PropTypes.array.isRequired,
  showAudio: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(dynamicStyles)(AudioContainer);
