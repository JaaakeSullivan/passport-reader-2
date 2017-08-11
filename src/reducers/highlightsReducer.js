import { sliceId } from '../helpers/selectHelpers';
import { getIndexOfId } from '../helpers/highlightsHelpers';

// we set state to an empty array to start off
function highlights(state=[], action) {
  //console.log("from book reducer: ", state, action)

  //console.log(action);


  switch (action.type) {
    case 'ADD_HIGHLIGHT':
      let sortedHighlights = [...state,
        {
          _id: action._id,
          startId: action.startId,
          endId: action.endId,
          startPos: action.startPos,
          endPos: action.endPos,
          betweenArray: action.betweenArray,
          color: action.color,
          selectedText: action.selectedText,
          time : action.time,
          note: 'This is my note'
        }
      ];

      // === SORT HIGHLIGHTS IN ASCENDING ORDER === //

      sortedHighlights.sort(function(a, b) {
        // console.log(a, b);
        if (b.startId && a.startId) {
          console.log('a', a, 'b', b)
          let aStartNum = a.startId.slice(3);
          let bStartNum = b.startId.slice(3);
          if (a.startId == b.startId) {
            return (a.startPos - b.startPos)
          } else {
            return (aStartNum - bStartNum)
          }
        }
      });
      //console.log('sortedHighlights',[...sortedHighlights]);
      return [
        ...sortedHighlights
      ];

    case 'UPDATE_COLOR':

      let index = state.getIndexOfHighlight(action._id);
      let highlightToUpdate = state[index];

      highlightToUpdate.color = action.color;
      state.splice(index, 1, highlightToUpdate);

      console.log(`Updated ${action._id} to ${action.color}`);

      return [
        ...state
      ];


    case 'DELETE_HIGHLIGHT':
      let deleted = [];
      for (let i=0; i<action.matchesToDelete.length; i++) {
        let match = action.matchesToDelete[i];
        let index = state.getIndexOfHighlight(match);
        console.log("deleting ", match, "from", state, "index ", index);
        let deletedHighlight = state.splice(index, 1);
        deleted.push(...deletedHighlight);
      }
      console.log("Deleted Highlights: ", deleted);
      console.log("Active Highlights: ", state)
      // TODO: save deleted highlights array
      return [
        ...state,
      ];
    default:
      return state;
  }

  return state;
}

export default highlights;
