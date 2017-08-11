import React from 'react';
import PropTypes from 'prop-types';
import Input from 'material-ui/Input/Input';


function NoteForm() {
  return (
    <div className='note'>
      <Input defaultValue="Hello world"/>

    </div>
  );
}

export default NoteForm;
