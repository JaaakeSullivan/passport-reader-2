// reducer takes in two things
// 1) what happened and 2) a copy of the current state
// then return copy of updated state

// we set state to an empty array to start off
const defaultVis = {
  showAudio: false,
  showHighlights: true,
  showNotes: false
}


function visibility(state=[], action) {
  switch (action.type) {
    case 'TOGGLE_AUDIO':
      return {
        ...state,
        showAudio: true,
      };
    case 'TOGGLE_HIGHLIGHTS':
      return {
        ...state,
        showHighlights: true
      };
    case 'TOGGLE_NOTES':
      return {
        ...state,
        showNotes: true
      };
    default:
      return state;
  }

  return state;
}

export default visibility;
