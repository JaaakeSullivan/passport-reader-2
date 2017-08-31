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
const url = 'https://od-api.oxforddictionaries.com/api/v1/entries/en/purse'
const appId = '067c7ef4'
const appKey = '85c78e7942c28000e4c9ea4087f501da'

var dicInit = {
  method: 'GET',
  headers: { 'app_id': config.oxfordAppId, 'app_key': config.oxfordAppKey},
  headers: { 'app_id': appId, 'app_key': appKey},
  mode: 'cors',
  cach: 'default'
};

function myTest() {
  console.log('testing fetch!!!')
}

fetch(url, dicInit).then(function(response) {
  if(response.ok) {
    console.log(response)
  } 
  throw new Error('Network is angry');
}).then(function(myTest) {
  console.log('more tests');
}).catch(function(error) {
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
