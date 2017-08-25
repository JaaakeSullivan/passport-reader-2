// reducer takes in two things
// 1) what happened and 2) a copy of the current state
// then return copy of updated state

// we set state to an empty array to start off
// const defaultVis = {
//   showAudio: false,
//   showHighlights: true,
//   showNotes: false
// }


function settings(state=[], action) {
  switch (action.type) {
    case 'TOGGLE_AUDIO':
      return {
        ...state,
        showAudio: !state.showAudio
      };
    case 'TOGGLE_HIGHLIGHTS':
      return {
        ...state,
        showHighlights: !state.showHighlights
      };
    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        darkMode: !state.darkMode
      };
    case 'CHANGE_FONT_SIZE':
      return {
        ...state,
        fontSize: action.value
      };
    case 'CHANGE_VIEW':
      return {
        ...state,
        view: action.view
      }
    default:
      return state;
  }

  // return state;
}

export default settings;
