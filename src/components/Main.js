import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { AxiosProvider, Get } from 'react-axios';
import axios from 'axios';
import Book from './Book';
import MyNewModal from './MyNewModal';
// import { openModal, closeModal } from '../actions/actionCreators';


import { addHighlights, handleSelect } from '../helpers/helpers';

//import { Popover } from 'react-bootstrap';

const axiosInstance = axios.create({
  baseURL: 'https://wordsapiv1.p.mashape.com/words/',
  timeout: 2000,
  headers: { 'X-Mashape-Key': 'yZPFHy2XLqmshfaf5FjvS2cgDODSp1cIEx3jsnYJHVyPyYWJ8b', 'Accept': 'application/json'}
});

class Main extends Component {

  componentDidMount() {
    // var content = '';
    //
    // // TODO: Wait to update data! ... currently sending a blank string
    // axios.get("http://localhost:3000/OPS/content1.xhtml").then(response => {
    //   content = response.data;
    //   this.updateContent(content)
    // });

  }

  componentDidUpdate() {
    // let el = document.getElementById('p5');
    // addHighlights(el, 51, 88, 'orange');
  }

  updateContent(newContent) {
    // this.setState({content: newContent});
  }

  // add back into App ... onClick={handleSelect}

  render() {
    return (
      <div className="Main" onClick={handleSelect,this.props.openModal}>
        <div className="Main-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MyNewModal {...this.props}/>


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
                console.log(response);
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

        <Book content={this.props.book.original}/>

      </div>
    );
  }
}

export default Main;
