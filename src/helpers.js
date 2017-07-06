
// ========== ADD HIGHLIGHTS FROM STATE ========== //

export function addHighlights(el, start, end, color) {
  // ===== INSERT <span class = 'color'> at startId, startPos ===== //
  // if currentNode.wholeText.length ===

  // ===== INSERT </span> at end of startElement ===== //

  // find length of startElement


  // ===== INSERT <span class = 'color'> at startId, startPos ===== //

  // Check for children with wholeText.length



  // Check nodes for wholeText.length

  // Move to next node


  // ===== INSERT </span> at endPos ===== //


  console.log(el)
  // TODO: Add RegEx to filter out <!-- react-text: 32 --> and <!-- /react-text -->
  let elContent = el.innerHTML.replace(/<!--.\/*react-text:* \d* *-->/g, '');

  let spanOpen = "<span class =" + color + ">";
  let spanClose = "</span>";
  let elArray = elContent.split('');

  elArray.splice(start, 0, spanOpen)
  elArray.splice(end + 1, 0, spanClose)
  elContent = elArray.join('');
  console.log(elContent)
  el.innerHTML = elContent;
}

// ======================================================= //

// ========== COMPUTE POSITION OF SELECTED AREA ========== //

export function handleSelect(event) {
  //console.log(window.getSelection());
  // if (window.getSelection() && window.getSelection().anchorOffset != window.getSelection().focusOffset) { // All browsers except IE <9

  // ===== GET START AND END POSITIONS ===== //

    let parentNodeString = '.parentNode';
    let select = window.getSelection();
    //console.log(select);
    let selectText = select.toString();

    // if no id on selected element, look for id on parent
    // TODO: write a better loop for handling nested elements
    let startId;
    let endId;
    let startNode;
    let endNode;

    let selectBegin = select.anchorOffset;
    let selectEnd = select.focusOffset;
    let siblingArray = [];

    // ========== Find the start of the highlight ========== //

    // === FIND THE SIBLINGS === //
    function findTheSiblings(selection) {
      let originalNode = selection.anchorNode;
      let previousSiblings = [];
      let nextSiblings = [];

      function findPrevious(current) {
        let hasPrevious = current.previousSibling;
        if (hasPrevious) {
          previousSiblings.push(hasPrevious);
          findPrevious(hasPrevious)
        } else {

          return previousSiblings
        };
      }

      function findNext(current) {
        let hasNext = current.nextSibling;
        if (hasNext) {
          nextSiblings.push(hasNext);
          findNext(hasNext);
        } else return nextSiblings;
      }

      function getWholeTextLength(el){
        if (el.wholeText) {
          return el.wholeText.length
        } else if (el.childNodes.length > 0) {
          let children = el.childNodes[1];
          return children.wholeText.length;
        } else return 0;
      }

      findPrevious(originalNode);
      findNext(originalNode);

      //siblingArray = [...findPrevious(originalNode), ...findNext(originalNode)];
      // return siblingArray;
      console.log (previousSiblings);
      console.log (nextSiblings);
      let nodeMap = [...previousSiblings, originalNode, ...nextSiblings];
      let nodeMapLengths = nodeMap.map(getWholeTextLength);
      console.log (nodeMap);
      console.log(nodeMapLengths);
    }



    // ===== FIND THE PARENT ID ===== //

    function findTheParent(selection) {
      console.log(selection);
      let startLevel = 0;
      let startTagId = '';
      let startPos = select.anchorOffset;
      let endLevel = 0;
      let endTagId = '';
      let endPos = select.focusOffset;

      // === find the start === //

      function startLevelUp(current) {
        startLevel ++;
        let check = current.parentNode

        // === TODO: START HERE ON WEDNESDAY === //

        if (check.id) {
          startTagId = check.id;
        } else {
          startPos += current.length;
          startLevelUp(check)
        };
      }

      if (selection.anchorNode.id) {
        startTagId = select.anchorNode.id;
      } else startLevelUp(select.anchorNode);


      // === find the end === //

      function endLevelUp(current) {
        endLevel ++;
        let check = current.parentNode

        if (check.id) {
          endTagId = check.id;
        } else endLevelUp(check);
      }

      // check to see if selected element has an ID ... only images here
      if (selection.focusNode.id) {
        endTagId = select.focusNode.id;
      } else endLevelUp(select.focusNode);


      return ('*** ID: ' + startTagId + ' LEV: ' + startLevel + ' POS: ' + startPos
        + ' ==> ID: ' + endTagId + ' LEV: ' + endLevel + ' POS: ' + endPos + ' ***');

    }
    console.log(findTheParent(select));
    findTheSiblings(select);

    //
    //
    //   if (select.anchorNode.id){ //check for images
    //     startId = select.anchorNode.id;
    //     // TODO: behavior for images
    //   } else if (select.anchorNode.parentNode.id) {
    //     // actions normal <p> tag
    //   } else { // else it must be an inner element
    //     startNode = select.anchorNode.parentNode.parentNode;
    //     startId = select.anchorNode.parentNode.parentNode.id;
    // }
    //
    //
    //
    // if (select.anchorNode.id){ //check for images
    //   startId = select.anchorNode.id;
    //   // TODO: behavior for images
    // } else if (select.anchorNode.parentNode.id) { // normal <p> tag
    //
      // raw html for #p7
      // <p id="p7" class="s10 s14">
      //   <!-- react-text: 43 -->
      //   After that the woman said, “Pick up my
      //   <!-- /react-text -->
      //   <span class="c1">
      //     <!-- react-text: 45 -->
      //     pocketbook
      //     <!-- /react-text -->
      //   </span>
      //   <!-- react-text: 46 -->
      //   , boy, and give it here.”
      //   <!-- /react-text -->
      // </p>

    //
    //   startNode = select.anchorNode.parentNode;
    //   startId = select.anchorNode.parentNode.id;
    //
    //   //let nodeList = startNode.childNodes;
    //   let nodeList = Array.prototype.slice.call(startNode.childNodes);
    //
    //   //let nodeList = Object.keys(startNode.childNodes).map(function (key) { return startNode.childNodes[key]; });
    //
    //
    //   // let nodeListLengths = nodeList.map(function(node) {
    //   //   //return node;
    //   //   if (node.nodeName !== '#comment') {
    //   //     return (node.innerText.length) ? node.innerText.length : node.innerText.parentNodelenth;
    //   //   } else return 0;
    //   // });
    //
    //   //console.log(nodeListLengths);
    //
    //   // console.log(nodeList);
    //
    //
    // } else { // else it must be an inner element
    //   startNode = select.anchorNode.parentNode.parentNode;
    //   startId = select.anchorNode.parentNode.parentNode.id;
    //   // console.log(startNode)
    //   // TODO: Figure out how to traverse the childNodes
    // }


  //
  //   // // swap values if highlighted 'backwards'
  //   // if (selectBegin > selectEnd) {
  //   //   let temp = selectBegin;
  //   //   selectBegin = selectEnd;
  //   //   selectEnd = temp;
  //   // }
  //
  //   console.log(`"${selectText}" Start: ${startId} - ${selectBegin} End: ${endId} - ${selectEnd}` );
  //
  //   let noteContext = document.getElementById(startId)
  //   console.log(noteContext.innerText.length);
  //   //console.log(noteContext.innerText.length)
  //   //console.log(document.getElementsByTagName('body').length)

  // } else if (document.selection) { // IE <9 ... TODO: Get rid of this?
  //   console.log(document.selection.createRange().text);
  //   console.log(window.getSelection());
  // }
}
