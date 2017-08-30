const handleHighlight = (props, color) => {
  let time = new Date();
  let timeStamp = Date.now();
  let id = `hl-${timeStamp}`;

  // USER UPDATES AN EXISTING HIGHLIGHT COLOR
  if (props.modal.highlightSelected.value && !props.modal.highlightSelected.toDelete) {
    props.updateColor(
      props.modal.highlightSelected.matches[0],
      color
    ).then(props.highlightContent())

  // USER DELETES OVERLAPPING HIGHLIGHTS AND ADDS NEW HIGHLIGHT
  } else if (props.modal.highlightSelected.value && props.modal.highlightSelected.toDelete) {

    props.deleteHighlight(props.modal.highlightSelected.matches)

    props.addHighlight(
      id,
      props.modal.startId,
      props.modal.endId,
      props.modal.startPos,
      props.modal.endPos,
      props.modal.betweenArray,
      color,
      props.modal.selectedText,
      time,
      props.modal.note
    )

    .then(props.openHighlight(
      {
        showModal: true,
        selectedText: props.modal.selectedText,
        startId: props.modal.startId,
        startPos: props.modal.startPos,
        endId: props.modal.endId,
        endPos: props.modal.endPos,
        betweenArray: props.modal.betweenArray,
        _id: id
      }
    ))
    .then(props.highlightContent())

  // USER CREATES A NEW NON-OVERLAPPING HIGHLIGHT
  } else {
    props.addHighlight(
      id,
      props.modal.startId,
      props.modal.endId,
      props.modal.startPos,
      props.modal.endPos,
      props.modal.betweenArray,
      color,
      props.modal.selectedText,
      time,
      props.modal.note
    )
    .then(props.openHighlight(
      {
        showModal: true,
        selectedText: props.modal.selectedText,
        startId: props.modal.startId,
        startPos: props.modal.startPos,
        endId: props.modal.endId,
        endPos: props.modal.endPos,
        betweenArray: props.modal.betweenArray,
        _id: id
      }
    ))
    .then(props.highlightContent())
  }
};

export default handleHighlight