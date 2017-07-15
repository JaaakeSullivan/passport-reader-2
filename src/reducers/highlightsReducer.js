// reducer takes in two things
// 1) what happened and 2) a copy of the current state
// then return copy of updated state
// import { bookString } from '../data/bookString';

// we set state to an empty array to start off
function highlights(state=[], action) {
  //console.log("from book reducer: ", state, action)
  let time = new Date();

  switch (action.type) {
    case 'ADD_HIGHLIGHT':
      return [
        ...state,
        {
          _id: 'unique123',
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
        {
          _id: 'al39al2'
        }
      ];
    default:
      return state;
  }

  return state;
}

export default highlights;
