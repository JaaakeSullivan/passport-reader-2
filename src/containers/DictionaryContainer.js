import React from 'react'
import PropTypes from 'prop-types'
import Dictionary from '../components/Dictionary'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});


function DictionaryContainer(props) {
  const classes = props.classes;
  const handleClick = () => {
    // TODO: Add functionality to lookup word or save definition
  }

  const countPlaceholder = 1;

  const buttonText = props.showDefinition ? 'Save Definition' : 'Lookup Definition';

  // TODO need to check if props.word === 1 -- if true, display WordsAPI

  if (countPlaceholder === 1) {
    return (
      <div>
        {props.showDefinition ? <Dictionary word={props.word} className={classes.definition} /> : null}
        <Button
          raised
          color={props.showDefinition ? "accent" : "primary"}
          className={classes.button}
          onClick={props.showDefinition
            ? props.saveDefinition
            : props.lookupWord}>{buttonText}
        </Button>
      </div>
     );
  } else return null
}

DictionaryContainer.propTypes = {

};

export default withStyles(styles)(DictionaryContainer);
