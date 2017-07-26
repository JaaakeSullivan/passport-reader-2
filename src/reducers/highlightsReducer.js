

// we set state to an empty array to start off
function highlights(state=[], action) {
  //console.log("from book reducer: ", state, action)
  let time = new Date();
  let timeStamp = Date.now();
  let id = `hl-${timeStamp}`;
  console.log(action);

  switch (action.type) {
    case 'ADD_HIGHLIGHT':
      
      console.log('state',[...state]);
      return [
        ...state,
        {
          _id: id,
          startId: action.startId,
          endId: action.endId,
          startPos: action.startPos,
          endPos: action.endPos,
          betweenArray: action.betweenArray,
          color: action.color,
          selectedText: action.selectedText,
          time : time,
          note: 'This is my note'
        }
      ];
    case 'DELETE_HIGHLIGHT':
      return [
        ...state,
        // {
        //   _id: 'al39al2'
        // }
      ];
    default:
      return state;
  }

  return state;
}

export default highlights;
