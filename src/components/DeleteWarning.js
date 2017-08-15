import React from 'react';

import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ModeEditIcon from 'material-ui-icons/ModeEdit';

function DeleteWarning(props) {

  const deleteListing = props.modal.highlightSelected.matches.map((item) => {

      let highlight = props.highlights.getHighlight(item);
      let highlightText = highlight.selectedText;
      let highlightNote = highlight.note;

      return (
        <ListItem button onClick={() => {props.openHighlight(highlight)}}>
          <Avatar>
            <ModeEditIcon />
          </Avatar>
          <ListItemText primary={highlightText} secondary={highlightNote} />
        </ListItem>
      )
    }
  );

  if (!!props.modal.highlightSelected.toDelete) {
    return (
      <div>
        <List>
          <div>WARNING: The following hightlights will be deleted</div>
          {deleteListing}
        </List>
      </div>
    );
  } else return null;
}

export default DeleteWarning;
