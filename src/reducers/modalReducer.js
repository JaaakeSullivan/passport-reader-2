// reducer takes in two things
// 1) what happened and 2) a copy of the current state
// then return copy of updated state

// we set state to an empty array to start off


function modal (state=[], action) {
  // console.log('action', action);
  // console.log("modal reducer has been triggered!");
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        showModal: true,
        selectedText: action.selectedText,
        startId: action.idAndPosition.startId,
        endId: action.idAndPosition.endId,
        startPos: action.idAndPosition.startPos,
        endPos: action.idAndPosition.endPos,
        betweenArray: action.betweenArray,
        highlightSelected: action.highlightSelected,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        showModal: false,
        selectedText: '',
        startId: '',
        endId: '',
        startPos: '',
        endPos: '',
        betweenArray: '',
        highlightSelected: {
          value: false,
          toDelete: false,
          matches: []
        }
      };
    case 'OPEN_HIGHLIGHT':
      // console.log('openHighlight State', [...state])
      return {
        ...state,
        showModal: true,
        selectedText: action.highlightClicked.selectedText,
        startId: action.highlightClicked.startId,
        startPos: action.highlightClicked.startPos,
        endId: action.highlightClicked.endId,
        endPos: action.highlightClicked.endPos,
        betweenArray: action.highlightClicked.betweenArray,
        highlightSelected: {
          value: true,
          toDelete: false,
          matches: [action.highlightClicked._id]
        }
      };
    case 'WORDS_API':
      return {
        ...state,
        words: action.selectedText,
      };

    default:
      return state;
  }
  //console.log(state, action)
}

export default modal;

// do I need one for open and close?
// or do I toggle
// will I update content on open? ... yes
