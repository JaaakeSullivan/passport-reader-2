function asideDisplay (state=[], action) {
  // console.log('action', action);
  // console.log("modal reducer has been triggered!");
  switch (action.type) {
    case 'OPEN_ASIDE':
      let popupId = action.id.match(/\d+/g).join();

      return {
        ...state,
        showAside: true,
        asideText: popupId 
      };
    case 'CLOSE_ASIDE':
      return {
        ...state,
        showAside: false,
        // asideText: '', // clearing this too quick, causes glitch on close
      };
    default:
      return state;
  }
  //console.log(state, action)
  return state;
}

export default asideDisplay;
