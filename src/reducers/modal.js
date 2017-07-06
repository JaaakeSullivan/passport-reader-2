// reducer takes in two things
// 1) what happened and 2) a copy of the current state
// then return copy of updated state

// we set state to an empty array to start off


function modal (state=[], action) {
  //console.log("modal reducer has been triggered!");
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        showModal: true,
        modalContent: 'modal content!!!'
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        showModal: false,
        modalContent: ''
      };
    default:
      return state;
  }
  //console.log(state, action)
  return state;
}

export default modal;

// do I need one for open and close?
// or do I toggle
// will I update content on open? ... yes
