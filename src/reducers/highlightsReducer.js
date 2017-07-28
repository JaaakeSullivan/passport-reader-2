import { sliceId } from '../helpers/selectHelpers';

// we set state to an empty array to start off
function highlights(state=[], action) {
  //console.log("from book reducer: ", state, action)
  let time = new Date();
  let timeStamp = Date.now();
  let id = `hl-${timeStamp}`;
  //console.log(action);

  let sortedHighlights = [...state,
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

  // === SORT HIGHLIGHTS IN ASCENDING ORDER === //
  // sortedHighlights.sort(function(a, b) {
  //   return (a.startPos - b.startPos)
  // });
  //console.log(sortedHighlights.length);

  sortedHighlights.sort(function(a, b) {
    // console.log(a, b);
    if (b.startId) {
      // console.log('a', a.startId, 'b', b.startId)
      let aStartNum = sliceId(a.startId);
      let bStartNum = sliceId(b.startId);
      if (a.startId == b.startId) {
        return (a.startPos - b.startPos)
      } else {
        return (aStartNum - bStartNum)
      }
    }
  });

  switch (action.type) {
    case 'ADD_HIGHLIGHT':
      //console.log('sortedHighlights',[...sortedHighlights]);
      return [
        ...sortedHighlights
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
