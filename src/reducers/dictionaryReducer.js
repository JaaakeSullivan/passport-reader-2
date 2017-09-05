function dictionary (state=[], action) {
  // console.log('action', action);
  // console.log("modal reducer has been triggered!");
  switch (action.type) {

    case 'REQUEST_DEFINITION':
      console.log('request', action)

      return {
        ...state,
        isFetching: true,
        error: '',
        word: action.word
      };

    case 'RECEIVE_DEFINITION':
      console.log('receive', action)
      let { response } = action;
      let mwResponse = [];
      for (let i=0; i<response.length; i++) {

        // define our mwResponse array of objects
        mwResponse[i] = {
          root: '',
          partOfSpeech: '',
          pronounciation: '',
          definitions: []
        }

        console.log('mwResponse', mwResponse)

        // add derivative
        mwResponse[i].root = (response[i].$.id) ;

        // add part of speech
        if (response[i].fl) {
          mwResponse[i].partOfSpeech = (response[i].fl[0] ? response[i].fl[0] : '');
        } else mwResponse[i].partOfSpeech = mwResponse[i-1].partOfSpeech

        // add definitions
        if (response[i].def) 
        for (let j=0; j<response[i].def[0].dt.length; j++) {
          let element = response[i].def[0].dt[j];
          if (typeof(element) === 'string') {
            mwResponse[i].definitions.push(element);
          } 
        }
      }

          // else if (typeof(element) === 'object' && (element._ !== ':' && element._ !== ': ')) {
          //   mwResponse[i].definitions.push(element._);
          // } else if (typeof(element) === 'object' && (element._ === ':' || element._ === ': ') & element.sx) {
          //   mwResponse[i].definitions[j] = element.sx;
          // } else mwResponse[i].definitions[j] = 'no definition';

      return {
        ...state,
        isFetching: false,
        isReadyToDisplay: false,
        mwResponse: mwResponse,
        word: action.word,
        error: '',
        wordIndex: 0,
        definitionIndex: 0,
      };    
      
    case 'FETCH_DEFINITION_FAIL':
      return {
        ...state,
        isFetching: false,
        error: 'action.error',
      };

    case 'NEXT_WORD':
      return {
        ...state,
        wordIndex: state.wordIndex + 1,
      };

    case 'PREVIOUS_WORD':
      return {
        ...state,
        wordIndex: state.wordIndex - 1,
      };

    case 'NEXT_DEFINITION':
      return {
        ...state,
        definitionIndex: state.definitionIndex + 1,
      };

    case 'PREVIOUS_DEFINITION':
      return {
        ...state,
        definitionIndex: state.definitionIndex - 1,
      };

    default:
      return state;
  }
  
}

export default dictionary;
