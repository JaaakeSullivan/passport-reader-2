// reducer takes in two things
// 1) what happened and 2) a copy of the current state
// then return copy of updated state

// we set state to an empty array to start off

function highlights(state=[], action, event) {
  //console.log("from my highlights reducer: ", state, action)

  switch (action.type) {
    case 'SAVE_HIGHLIGHT':
      return [
        ...state,
        {
          elId: 'p11',
          start: 77,
          end: 99,
          color: 'red',
          time : '1995-12-17T03:24:00',
          content: 'everything but the kitchen sink',
          note: 'This is my note'
        }
      ];
    case 'DELETE_HIGHLIGHT':
      return [
        ...state,
        {
          _id: 'al39al2'
        }
      ];
    default:
      return state;
  }
  //console.log(state, action)

  return state;
}

export default highlights;
