import React, { Component } from 'react'
import logo from './logo.svg'
import './styles/App.css'
import { AxiosProvider, Get } from 'react-axios'
import axios from 'axios'
import BookContainer from '../containers/BookContainer'
import ModalContainer from '../containers/ModalContainer'
import AsideContainer from '../containers/AsideContainer'
import UndockedDrawer from './UndockedDrawer'
import { MuiThemeProvider } from 'material-ui/styles'
import ImageGalleryContainer from '../containers/ImageGalleryContainer'


//import { addHighlights, getSelectedText, getIdAndPosition, getBetweenArray } from '../helpers/helpers';

//import { Popover } from 'react-bootstrap';

const axiosInstance = axios.create({
  baseURL: 'https://wordsapiv1.p.mashape.com/words/',
  timeout: 2000,
  headers: { 'X-Mashape-Key': 'yZPFHy2XLqmshfaf5FjvS2cgDODSp1cIEx3jsnYJHVyPyYWJ8b', 'Accept': 'application/json'}
});

class Main extends Component {

  render() {
    return (

      <MuiThemeProvider>
      <div className="Main" >

        <ImageGalleryContainer {...this.props}/>
        <ModalContainer {...this.props} />

        <AsideContainer {...this.props} />
        <UndockedDrawer />

        <div><h3>showModal: {this.props.modal.showModal.toString()} </h3></div>

        <AxiosProvider instance={axiosInstance}>
          <Get url="bump">
            {(error, response, isLoading) => {
              if(error) {
                return (<div>Something bad happened: {error.message}</div>)
              }
              else if(isLoading) {
                return (<div>Loading...</div>)
              }
              else if(response !== null) {
                //console.log(response);
                return (
                  <div>
                    <div>{response.data.word}</div>
                    <div>{response.data.results[0].definition}</div>
                  </div>
                )
              }
              return (<div>Default message before request is made.</div>)
            }}
          </Get>
        </AxiosProvider>

        <BookContainer {...this.props} />

      </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
