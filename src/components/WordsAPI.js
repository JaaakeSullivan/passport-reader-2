import React, { Component } from 'react'
import { AxiosProvider, Get } from 'react-axios'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://wordsapiv1.p.mashape.com/words/',
  timeout: 2000,
  headers: { 'X-Mashape-Key': 'yZPFHy2XLqmshfaf5FjvS2cgDODSp1cIEx3jsnYJHVyPyYWJ8b', 'Accept': 'application/json'}
});


class WordsAPI extends Component {

  render() {
    return (
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
    )
  }
}

export default WordsAPI;
