// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
});

const options = [
  '1',
  '1.5',
  '2',
];

class SpeedSettings extends Component {
  state = {
    anchorEl: undefined,
    open: false,
    selectedIndex: 1,
  };

  button = undefined;

  handleClickListItem = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, open: false });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <List>
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="When device is locked"
            onClick={this.handleClickListItem}
          >
            <ListItemText
              primary="Audio Speed"
              secondary={options[this.state.selectedIndex]}
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          {options.map((option, index) =>
            <MenuItem
              key={option}
              selected={index === this.state.selectedIndex}
              onClick={event => this.handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>,
          )}
        </Menu>
      </div>
    );
  }
}

SpeedSettings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpeedSettings);