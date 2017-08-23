// @flow weak
/* eslint-disable react/no-multi-comp */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import WordsAPI from './WordsAPI'
import BookContainer from '../containers/BookContainer'

function TabContainer(props) {
  return (
    <div style={{ padding: 20 }}>
      {props.children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

// === GET RID OF THIS === //
// const styles = theme => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//   },
// });

// === ADD THIS === // + ADD import createStyleSheet
const styles = createStyleSheet('FullWidthTabs', theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

class FullWidthTabs extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} style={{  }}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Settings" />
            <Tab label="Book" />
            <Tab label="Highlights" />
          </Tabs>
        </AppBar>
        <SwipeableViews index={this.state.value} onChangeIndex={this.handleChangeIndex}>
          <TabContainer>
            {'Item One'}
          </TabContainer>
          <TabContainer>
            {'Item Two'}
            <BookContainer {...this.props}/>
          </TabContainer>
          <TabContainer>
            {'Item Three'}
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthTabs);
