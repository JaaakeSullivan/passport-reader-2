function dictionary (state=[], action) {
  // console.log('action', action);
  // console.log("modal reducer has been triggered!");
  switch (action.type) {
    case 'FETCH_DEFINITION':
      return {
        ...state,
      };

    case 'FETCH_DEFINITION_FAIL':
      return {
        ...state,
        error: 'Aw, shucks!',
      };

    case 'FETCH_DEFINITION_SUCCESS':
      return {
        ...state,
        definitionIndex: state.definitionIndex + 1,
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
