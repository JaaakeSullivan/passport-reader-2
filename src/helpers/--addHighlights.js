export function addHighlights(startElement, startPos, endElement, endPos, color) {
  var htmlRegEx = /(<|>)/g;
  let selectedArray = startElement.innerHTML.split(htmlRegEx);
  let processedArray = [];

  for (var i = 0; i < selectedArray.length; i++) {
    let temp = '';
    if (selectedArray[i] === '<') {
      temp = selectedArray[i] + selectedArray[i+1] + selectedArray[i+2]
      processedArray.push(temp);
      i = i + 2;
    } else if (selectedArray[i] !== '') {
      temp = selectedArray[i];
      processedArray.push(temp);
    }
  }

  // === attempt to add fake spans === //

  let posMarker = 0;

  for (var i = 0; i < processedArray.length; i++) {
    let currentElement = processedArray[i];
    if (currentElement[0] !== '<') {
      if (startPos - posMarker < currentElement.length) {
        let stringSplit = currentElement.split('');
        stringSplit.splice(startPos - posMarker, 0, '<span class="red">')
        stringSplit.push('</span>');
        let stringJoin = stringSplit.join('');
        //console.log(stringJoin);
        processedArray.splice(i, 1, stringJoin);
        break;
      } else posMarker += currentElement.length
    }
  }

  //console.log('selectedArray', selectedArray);
  console.log('processedArray', processedArray);
}

  // =====

  // ===== INSERT <span class = 'color'> at startId, startPos ===== //

  // if highlight.length > text.length

  // ===== INSERT </span> at end of startElement ===== //

  // ===== INSERT <span class = 'color'> at nextElement pos 0 ===== //

  // ===== INSERT </span> at end of nextElement ===== //


  // if currentNode.wholeText.length ===


  // find length of startElement

  //


  // ===== INSERT <span class = 'color'> at startId, startPos ===== //

  // Check for children with wholeText.length



  // Check nodes for wholeText.length

  // Move to next node


  // ===== INSERT </span> at endPos ===== //
