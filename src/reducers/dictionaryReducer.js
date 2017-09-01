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
      return {
        ...state,
        isFetching: false,
        response: action.response,
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
