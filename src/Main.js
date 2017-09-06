import React, { Component } from 'react'
import './components/styles/App.css'

import BookContainer from './containers/BookContainer'
import UndockedDrawer from './components/UndockedDrawer'
import NavigationMenu from './components/NavigationMenu'
import { MuiThemeProvider } from 'material-ui/styles'
//import FullWidthTabs from './FullWidthTabs'
import SwipeableViews from 'react-swipeable-views'
import Tabs, { Tab } from 'material-ui/Tabs';

import GalleryContainer from './containers/GalleryContainer'
import ModalContainer from './containers/ModalContainer'
import AsideContainer from './containers/AsideContainer'
import SettingsContainer from './containers/SettingsContainer'
import AudioContainer from './containers/AudioContainer'
import HighlightsContainer from './containers/HighlightsContainer'

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
            {/*========== MODAL CONTAINERS =========*/}
            <ModalContainer {...this.props} />
            <AsideContainer {...this.props} />
            <AudioContainer
              audio={this.props.book.audio}
              showAudio={this.props.settings.showAudio}
              toggleAudio={this.props.toggleAudio}
              openAudio={this.props.openAudio}
              closeAudio={this.props.closeAudio}
              darkMode={this.props.settings.darkMode}
            />
            {/*==========================================*/}
            {/*========== BEGIN SWIPEABLE VIEWS =========*/}
            {/*==========================================*/}
            <SwipeableViews
              index={view}
              onChangeIndex={this.handleChangeIndex}
              containerStyle={styles.slideContainer}
            >
              {/*========== SETTINGS PAGE =========*/}
              <div style={Object.assign({}, styles.slide, styles.slide0)}>
                <SettingsContainer
                  settings={this.props.settings}
                  toggleAudio={this.props.toggleAudio}
                  toggleHighlights={this.props.toggleHighlights}
                  toggleDarkMode={this.props.toggleDarkMode}
                  changeFontSize={this.props.changeFontSize}
                />
              </div>

             {/*========== BOOK PAGE =========*/}
              <div style={Object.assign({}, styles.slide, styles.slide1)}>
                
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

              {/*========== HIGHLIGHTS PAGE =========*/}
              <div style={Object.assign({}, styles.slide, styles.slide2)}>
                <HighlightsContainer highlights={this.props.highlights} openHighlight={this.props.openHighlight}/>
              </div>

              {/*========== ACTIVITIES PAGE =========*/}
              <div style={Object.assign({}, styles.slide, styles.slide3)}>
                <div>Activities - API call for notifications for items due</div>
                <div>Ancillary Links</div>
              </div>
            </SwipeableViews>

            {/*========== BOTTOM NAVIGATION MENU =========*/}
            <NavigationMenu 
              handleChange={this.handleChange}
              view={this.props.settings.view}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
