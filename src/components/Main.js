import React, { Component } from 'react'
import './styles/App.css'

import BookContainer from '../containers/BookContainer'
import UndockedDrawer from './UndockedDrawer'
import { MuiThemeProvider } from 'material-ui/styles'
//import FullWidthTabs from './FullWidthTabs'
import SwipeableViews from 'react-swipeable-views'
import HighlightsList from './HighlightsList'
import Tabs, { Tab } from 'material-ui/Tabs';
import GalleryContainer from '../containers/GalleryContainer'
import ModalContainer from '../containers/ModalContainer'
import AsideContainer from '../containers/AsideContainer'
import SettingsContainer from '../containers/SettingsContainer'
import AudioContainer from '../containers/AudioContainer'
import NavigationMenu from './NavigationMenu'

import Settings from 'material-ui-icons/Settings'

import LibraryBooks from 'material-ui-icons/LibraryBooks'
import Book from 'material-ui-icons/Book'
import Subject from 'material-ui-icons/Subject'

import Bookmark from 'material-ui-icons/Bookmark'
import Label from 'material-ui-icons/Label'
import FormatListBulleted from 'material-ui-icons/FormatListBulleted'

import Assignment from 'material-ui-icons/Assignment'
import QuestionAnswer from 'material-ui-icons/QuestionAnswer'

const styles = {
  slideContainer: {
    height: '100vh',
    WebkitOverflowScrolling: 'touch', // iOS momentum scrolling

  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
    marginTop: '48px',
    maxWidth: '960px'
  },

  slide0: {

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
  menuStyle: {
    position: 'absolute',
    top: 0,
    zIndex: 99,
    backgroundColor: 'white',
    width: '100vw',
    maxWidth: '960px',
    display: 'flex',
    justifyContent: 'space-around'
  }
};

class Main extends Component {

  handleChange = (event, view) => {
    this.props.changeView(view)
  };

  handleChangeIndex = view => {
    this.props.changeView(view)
  };

  render() {
    const { view } = this.props.settings;

    return (

      <MuiThemeProvider style={{  }}>
        <div className="Main" >
          <div >
            <ModalContainer {...this.props} />
            <AsideContainer {...this.props} />


            {/* <UndockedDrawer /> */}
            <Tabs index={view} fullWidth fixed onChange={this.handleChange} style={styles.menuStyle}>
              <Tab icon={<Settings />} />
              <Tab icon={<Book />} />
              <Tab icon={<FormatListBulleted />} />
              <Tab icon={<QuestionAnswer />} />
            </Tabs>
            <SwipeableViews
              index={view}
              onChangeIndex={this.handleChangeIndex}
              containerStyle={styles.slideContainer}
            >
              <div style={Object.assign({}, styles.slide, styles.slide0)}>
                <SettingsContainer
                  settings={this.props.settings}
                  toggleAudio={this.props.toggleAudio}
                  toggleHighlights={this.props.toggleHighlights}
                  toggleDarkMode={this.props.toggleDarkMode}
                  changeFontSize={this.props.changeFontSize}
                />
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide1)}>
                <AudioContainer audio={this.props.book.audio}/>
                <GalleryContainer
                  images={this.props.book.images}
                  openGallery={this.props.openGallery}
                  closeGallery={this.props.closeGallery}
                  nextImage={this.props.nextImage}
                  previousImage={this.props.previousImage}
                  galleryDisplay={this.props.galleryDisplay}
                />
                <BookContainer {...this.props} />
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide2)}>
                <HighlightsList highlights={this.props.highlights} openHighlight={this.props.openHighlight}/>
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide3)}>
                slide n°3
              </div>
            </SwipeableViews>

            <NavigationMenu />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
