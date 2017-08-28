import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import Divider from 'material-ui/Divider';


const styles = theme => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    textAlign: 'left',
    // background: theme.palette.background.paper,
  },
});


function HighlightsList(props) {

  const classes = props.classes;
  const highlights = props.highlights;


  const displayHighlightsList = highlights.map((highlight) => {
    let highlightText = highlight.selectedText;
    let highlightNote = highlight.note;
    let openHighlight = () => {
      props.openHighlight(highlight);
    }

    return (
      <div>
        <ListItem button onClick={openHighlight}>
          <Avatar style={{margin: '10px', minWidth: '40px', backgroundColor: highlight.colorCode, color: '#FFF'}} >
            <ModeEditIcon />
          </Avatar>
          <ListItemText primary={highlightText} secondary={highlightNote} />
        </ListItem>
        {/*<ListItemText secondary={highlightNote} />*/}
        <Divider />
      </div>
    )
  });

  return (
    <div className={classes.root}>
      <List>
        {displayHighlightsList}
      </List>
    </div>
  );
};


HighlightsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HighlightsList);
