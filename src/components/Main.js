import React, { Component } from 'react'
import './styles/App.css'

import BookContainer from '../containers/BookContainer'
import UndockedDrawer from './UndockedDrawer'
import { MuiThemeProvider } from 'material-ui/styles'
import ColorTabs from './ColorTabs'
//import FullWidthTabs from './FullWidthTabs'
import SwipeableViews from 'react-swipeable-views'
import HighlightsList from './HighlightsList'
import Tabs, { Tab } from 'material-ui/Tabs';


const styles = {
  slideContainer: {
    height: '100vh',
    WebkitOverflowScrolling: 'touch', // iOS momentum scrolling
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FFF',
  },
  slide2: {
    backgroundColor: '#FFF',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

class Main extends Component {

  state = {
    index: 0,
  };

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;

    return (

      <MuiThemeProvider>

      <div className="Main" style={{ width: '100vw' }}>

        {/* <UndockedDrawer /> */}
        <Tabs index={index} fullWidth onChange={this.handleChange}>
          <Tab label="Book" />
          <Tab label="Highlights" />
          <Tab label="Activities" />
        </Tabs>

        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex} containerStyle={styles.slideContainer}>
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <BookContainer {...this.props} />
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            <HighlightsList highlights={this.props.highlights} openHighlight={this.props.openHighlight}/>
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
        </SwipeableViews>


      </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
