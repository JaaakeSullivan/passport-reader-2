import React, { Component } from 'react'
import Button from 'material-ui/Button'
import config from '../config.js'

// className={classes.definition}
// word={props.response[wordIndex]} 
// definition={props.response[wordIndex].def[definitionIndex].dt[0]}
// partOfSpeech={props.response[wordIndex].fl[0]}

// ;

function Dictionary(props) {


  console.log('DIC COMPONENTS', props)
  return (
    <div>
    <h4>{props.word} - {props.partOfSpeech}{props.definition}</h4>
    </div>
  )

}

export default Dictionary;