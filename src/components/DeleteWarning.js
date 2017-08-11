import React from 'react';

import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import DeleteIcon from 'material-ui-icons/Delete';


function DeleteWarning(props) {

  const deleteListing = props.modal.highlightSelected.matches.map((item) => {

      let highlightText = props.highlights.getHighlight(item).selectedText;

      return (
        <ListItem button>
          <Avatar>
            <DeleteIcon />
          </Avatar>
          <ListItemText primary={highlightText} secondary={item} />
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
