function galleryDisplay (state=[], action) {
  // console.log('action', action);
  // console.log("modal reducer has been triggered!");
  switch (action.type) {
    case 'OPEN_GALLERY':
      return {
        ...state,
        showGallery: true,
        galleryIndex: action.galleryIndex,
        imageIndex: action.imageIndex
      };

    case 'CLOSE_GALLERY':
      return {
        ...state,
        showGallery: false,
      };

    case 'NEXT_IMAGE':
      return {
        ...state,
        imageIndex: state.imageIndex + 1,
      };

    case 'PREVIOUS_IMAGE':
      return {
        ...state,
        imageIndex: state.imageIndex - 1,
      };

    default:
      return state;
  }
  // console.log(state, action)
  // return state;
}

export default galleryDisplay;
