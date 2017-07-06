import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { AxiosProvider, Get } from 'react-axios';
import axios from 'axios';
import Book from './Book';
import MyModal from './MyModal';
import { openModal, closeModal } from '../actions/actionCreators';

import { addHighlights, handleSelect } from '../helpers/helpers';

//import { Popover } from 'react-bootstrap';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 2000,
  headers: { 'X-Custom-Header': 'foobar' }
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

  render() {
    return (
      <div className="Main" onClick={handleSelect}>
        <div className="Main-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button>Open Modal</button>
        <button>Close Modal</button>
        <div><h3>showModal: {this.props.modal.showModal.toString()} </h3></div>

        {/*
        <MyModal
          openModal={this.openModal}
          modalContent={this.state.highlighted}
          modalIsOpen={this.state.modalIsOpen}
          afterOpenModal={this.afterOpenModal}
          closeModal={this.closeModal}
        />
        */}


        <Book content={this.props.book.original}/>


        {/*
        <AxiosProvider instance={axiosInstance}>
          <Get url="/OPS/content1.xhtml">
            {(error, response, isLoading) => {
              return response;
            }}
          </Get>
        </AxiosProvider>
        */}

      </div>
    );
  }
}

export default Main;
