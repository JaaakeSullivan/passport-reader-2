import React, { Component } from 'react'
import { AxiosProvider, Get } from 'react-axios'
import axios from 'axios'
import Button from 'material-ui/Button'
import config from '../config.js'

const appId = '067c7ef4'
const appKey = '85c78e7942c28000e4c9ea4087f501da'

const axiosInstance = axios.create({
  baseURL: 'https://od-api.oxforddictionaries.com/api/v1',
  timeout: 2000,
  headers: { 'app_id': config.oxfordAppId, 'app_key': config.oxfordAppKey}
});

function Dictionary(props) {
  return (
    <div>
      {/*<div>{config.oxfordAppId}</div>
      <div>{config.oxfordAppKey}</div>*/}
      <AxiosProvider instance={axiosInstance}>
        <Get url={`entries/en/${props.word}`}>
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

export default Dictionary;