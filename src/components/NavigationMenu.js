// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import Badge from 'material-ui/Badge';

import Book from 'material-ui-icons/Book'
import Settings from 'material-ui-icons/Settings'
import FormatListBulleted from 'material-ui-icons/FormatListBulleted'
import QuestionAnswer from 'material-ui-icons/QuestionAnswer'


const styles = theme => ({
  root: {
    width: '100vw',
    maxWidth: "100%s",
    position: 'absolute',
    bottom: 0,
    zIndex: 2901,
  },
  icon: {
    display: 'block',
  },
  badge: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
});

function NavigationMenu(props) {
  const classes = props.classes;
  const value = props.view

  return (
    <BottomNavigation value={props.view} onChange={props.handleChange} className={classes.root}>
      <BottomNavigationButton label="Settings" value={0} icon={<Settings className={classes.icon} />} />
      <BottomNavigationButton label="Book" value={1} icon={<Book className={classes.icon} />} />
      <BottomNavigationButton label="Highlights" value={2} icon={<FormatListBulleted className={classes.icon} />} />
      <BottomNavigationButton label="Activities" value={3} icon={<QuestionAnswer className={classes.icon} />} />
      {/*<BottomNavigationButton label="Activities" value={3} icon={<Badge className={classes.badge} badgeContent={4} color="accent"><QuestionAnswer className={classes.icon} /></Badge>} />*/}
    </BottomNavigation>
  );
}

NavigationMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  view: PropTypes.function,
  handleChange: PropTypes.number
};

export default withStyles(styles)(NavigationMenu);
