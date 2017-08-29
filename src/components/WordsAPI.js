import React, { Component } from 'react'
import { AxiosProvider, Get } from 'react-axios'
import axios from 'axios'
import Button from 'material-ui/Button'

const axiosInstance = axios.create({
  baseURL: 'https://wordsapiv1.p.mashape.com/words/',
  timeout: 2000,
  headers: { 'X-Mashape-Key': 'yZPFHy2XLqmshfaf5FjvS2cgDODSp1cIEx3jsnYJHVyPyYWJ8b', 'Accept': 'application/json'}
});

function WordsAPI(props) {
  return (
    <div>
      <AxiosProvider instance={axiosInstance}>
        <Get url={props.word}>
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
                  <div>{response.data.results[0].definition}</div>
                </div>
              )
            }
            return (<div>Default message before request is made.</div>)
          }}
        </Get>
      </AxiosProvider>
    </div>
  )

}

export default WordsAPI;