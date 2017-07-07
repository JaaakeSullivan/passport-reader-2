//How to find the Absolute Position -- given an element and number
absolutesStartPos = 0;
currentNode = selectedElement
1)  absolutesStartPos = anchorOffset;
2)  absolutesStartPos += currentNode.previousSiblingsLength
3)  if parentNode.id === 'p#' >> return absolutesStartPos;
    else, currentNode = parentNode >> return to step 2)


<p>Here is some text.
  <span>
    More text.
    <span>
      And more.
    </span>
    shit will be messy!   //
  </span>
  ok                      //Look for children
</p>

Look for children
