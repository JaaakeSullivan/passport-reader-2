// import { sliceId } from '../helpers/selectHelpers';
// import { getIndexOfId } from '../helpers/highlightsHelpers';

import lightBlue from 'material-ui/colors/lightBlue';
import lightGreen from 'material-ui/colors/lightGreen';
import pink from 'material-ui/colors/pink';
import purple from 'material-ui/colors/purple';
import yellow from 'material-ui/colors/yellow';

// we set state to an empty array to start off
function highlights(state=[], action) {
  //console.log("from book reducer: ", state, action)

  //console.log(action);

  state.getIndexOfHighlight = function(id) {
    for (let i=0; i<this.length; i++) {
      let idInHighlight = this[i]._id
      console.log("idInHighLight", idInHighlight, " id ", id)
      if (id === idInHighlight) {
        return i;
      }
    }
    return -1;
  }

  state.getHighlight = function(id) {
    for (let i=0; i<this.length; i++) {
      let idInHighlight = this[i]._id
      if (id === idInHighlight) {
        return this[i];
      }
    }
    return -1;
  }

  let colorCode;

  switch(action.color) {
    case 'blue': colorCode = lightBlue['A200']; break;
    case 'pink': colorCode = pink['A200']; break;
    case 'yellow': colorCode = yellow['500']; break;
    case 'green': colorCode = lightGreen['A700']; break;
    case 'purple': colorCode = purple['A200']; break;
    default: break;
  }

  let colorHighlight;

  switch(action.color) {
    case 'blue': colorHighlight = '#B3E5FC'; break;
    case 'pink': colorHighlight = '#FF80AB'; break;
    case 'yellow': colorHighlight = '#F4FF81'; break;
    case 'green': colorHighlight = '#CCFF90'; break;
    case 'purple': colorHighlight = '#EA80FC'; break;
    default: break;
  }

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
          colorCode: colorCode,
          colorHighlight: colorHighlight,
          selectedText: action.selectedText,
          time : action.time,
          note: ''
        }
      ];

      // === SORT HIGHLIGHTS IN ASCENDING ORDER === //

      sortedHighlights.sort(function(a, b) {
        // console.log(a, b);
        if (b.startId && a.startId) {
          console.log('a', a, 'b', b)
          let aStartNum = a.startId.slice(3);
          let bStartNum = b.startId.slice(3);
          if (a.startId === b.startId) {
            return (a.startPos - b.startPos)
          } else {
            return (aStartNum - bStartNum)
          }
        } else return null;
      });
      //console.log('sortedHighlights',[...sortedHighlights]);
      return [
        ...sortedHighlights
      ];

    case 'UPDATE_COLOR':

      let index = state.getIndexOfHighlight(action._id);
      let highlightToUpdate = state[index];

      highlightToUpdate.color = action.color;
      highlightToUpdate.colorCode = colorCode;
      highlightToUpdate.colorHighlight = colorHighlight;

      state.splice(index, 1, highlightToUpdate);

      console.log(`Updated ${action._id} to ${action.color}`);

      return [
        ...state
      ];

    case 'UPDATE_NOTE':

      let highlight = state.getHighlight(action._id)
      let noteIndex = state.getIndexOfHighlight(action._id)
      highlight.note = action.note;
      state.splice(noteIndex, 1, highlight);
      //console.log('updating note', highlight);
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
}

export default highlights;
