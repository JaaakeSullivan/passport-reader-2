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

const headers = new Headers();

const url = 'http://www.dictionaryapi.com/api/v1/references/collegiate/xml/test?key=5ca3f9ee-2ebd-4e28-8d3a-c230a95753ed'


var dicInit = {
  method: 'GET',
  // headers: { 'app_id': config.oxfordAppId, 'app_key': config.oxfordAppKey},
  // headers: { 'app_id': appId, 'app_key': appKey},
  // mode: 'cors',
  // cach: 'default'
};

function myTest() {
  console.log('testing fetch!!!')
}


// >>> TIPS ON USING FETCH FOR XML: https://css-tricks.com/using-fetch/ <<< //

fetch(url, {
  method: "GET",
})
  .then(function(response) {
    if(response.ok) {
      console.log(response)
      return response.text();
    } else throw new Error('Network is angry');
  })
  .then(function(text) {
    console.log(text)
  })
  .catch(function(error) {
    console.log('error', error);
  })

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
