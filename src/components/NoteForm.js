import React from 'react';
import PropTypes from 'prop-types';
// import Input from 'material-ui/Input/Input';
import TextField from 'material-ui/TextField';


function NoteForm(props) {
  const {note, updateNote, highlightId} = props;
  console.log('prippity props', props)

  return (
    <div className='note'>
      {/* <Input defaultValue={props.note} onChange={event => props.updateNote(props.highlightId, event.target.value)}/> */}
      <TextField
        id="multiline-flexible"
        multiline
        rowsMax="4"
        label="Note"
        InputProps={{ placeholder: ''}}
        defaultValue={note}
        fullWidth
        margin="normal"
        onChange={event => updateNote(highlightId, event.target.value)}
      />
    </div>
  );
}

NoteForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default NoteForm;
