import React from 'react'
import PropTypes from 'prop-types'
import Dictionary from '../components/Dictionary'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import config from '../config.js'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function DictionaryContainer(props) {
  console.log('DIC PROPS', props)
  const classes = props.classes;
  let { wordIndex, definitionIndex } = props;
  const handleClick = () => {
    props.fetchDefinition(props.word)
  }

  // TODO need to check if props.word === 1 -- if true, display WordsAPI
  const countPlaceholder = 1;
  const buttonText = props.isFetching ? '...one sec' : props.showDefinition ? 'Save Definition' : 'Lookup Definition';


  // if (countPlaceholder === 1) {
    return (
      <div>
        {props.showDefinition && !props.isFetching 
          ? <Dictionary 
              word = {props.response[wordIndex].ew[0]}
              definition = {props.response[wordIndex].def[definitionIndex].dt[0]}
              partOfSpeech = {props.response[wordIndex].fl[0]}
            /> 
          : null
        }
        <Button
          raised
          color={props.showDefinition ? "accent" : "primary" }
          className={classes.button}
          onClick={handleClick}>{buttonText}
        </Button>
      </div>
     );
  // } else return null
}

DictionaryContainer.propTypes = {

};

export default withStyles(styles)(DictionaryContainer);
