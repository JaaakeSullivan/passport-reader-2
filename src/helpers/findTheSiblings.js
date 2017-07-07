// === FIND THE SIBLINGS === //
function findTheSiblings(selection) {

  let originalNode = selection.anchorNode;
  let previousSiblings = [];
  let nextSiblings = [];
  let beforeCount = 0;

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

  findPrevious(originalNode);
  findNext(originalNode);

  //siblingArray = [...findPrevious(originalNode), ...findNext(originalNode)];
  // return siblingArray;

  let nodeMap = [...previousSiblings, originalNode, ...nextSiblings];

  //console.log (nodeMap);
  //console.log(nodeMapLengths);


  // let previousTotalLength = previousSiblingsLength.reduce(function(sum, value) {
  //   return sum + value;
  // });
  // return (previousTotalLength)

  return ({previousSiblings: previousSiblings, originalNode: originalNode, nextSiblings: nextSiblings, nodeMap: nodeMap});
}
