import React from 'react';

import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import pink from 'material-ui/colors/pink';

const warningStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  borderRadius: '100px',
  backgroundColor: pink['100'],
  margin: '0px 20px'
}

function DeleteWarning(props) {
  let warningNumber;
  let warningS = 's';

  const deleteListing = props.modal.highlightSelected.matches.map((item) => {

      let highlight = props.highlights.getHighlight(item);
      let highlightText = highlight.selectedText;
      let highlightNote = highlight.note;

      return (
        <ListItem button onClick={() => {props.openHighlight(highlight)}}>
          <Avatar style={{margin: '10px', minWidth: '40px'}} >
            <ModeEditIcon />
          </Avatar>
          <ListItemText primary={highlightText} secondary={highlightNote} />
        </ListItem>
      )
    }
  );

  switch(deleteListing.length) {
    case(1):
      warningNumber = 'One'
      warningS = ''
      break;
    case(2):
      warningNumber = 'Two'
      break;
    case(3):
      warningNumber = 'Three'
      break;
    default:
      warningNumber = 'Many'
      break;
  }

  if (!!props.modal.highlightSelected.toDelete) {
    return (
      <div>
        <List>
          <div style={warningStyles}>
            <div>WARNING: {warningNumber} hightlight{warningS} will be deleted</div>
          </div>
          {deleteListing}
        </List>
      </div>
    );
  } else return null;
}

export default DeleteWarning;
