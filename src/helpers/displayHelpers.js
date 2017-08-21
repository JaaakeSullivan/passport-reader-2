export function buildDisplayContent(originalContent){

  // ========================================= //
  // ***** BUILD ARRAY OF ASIDE ELEMENTS ***** //
  // ========================================= //

  let regExAsideBlock = /<aside (.*)<\/aside>/g; // use for separating asides from main content
  let regExAsideElements = /(<aside .*?<\/aside>)/g; // use for splitting asideString into asideArray
  let regExImageGallery = /<object id="gallery.*?\/object>/g // use for getting image gallery sections
  let regExImageGallerySingle = /<object id="gallery.*?\/object>/ // use for getting image gallery sections
  let regExImageThumbnail = /data-thumbnail-src.*?=".*?"/g // use for getting array of thumbnail image src
  let regExImageFullSize = / src.*?=".*?"/g // use for getting array of full size image src
  let regExFigCaption = /<figcaption .*?"caption">.*?<\/figcaption>/g //use for getting image captions

  // ===== CREATE STRING OF ASIDE ELEMENTS ===== //
  let asideString = originalContent.match(regExAsideBlock).join('');

  // ===== CREATE ARRAY OF GALLERY OBJECTS ===== //
  let galleryArray = originalContent.match(regExImageGallery);
  // console.log('galleryArray', galleryArray);
  let imageArray = [];
  for (let j=0; j<galleryArray.length; j++) {
    let currentGallery=galleryArray[j];
    let thumbnailArray = currentGallery.match(regExImageThumbnail);
    let fullSizeArray = currentGallery.match(regExImageFullSize);
    let captionArray = currentGallery.match(regExFigCaption);
    imageArray[j] = [];

    for (let k=0; k<thumbnailArray.length; k++) {
      imageArray[j][k] = {
        thumbnail: thumbnailArray[k].slice(20, -1),
        src: fullSizeArray[k].slice(6, -1),
        caption: captionArray[k].replace(/<figcaption .*?"caption">/, '').replace('</figcaption>', '')
      }
    }
  }


  // ===== SPLIT ASIDE ELEMENTS INTO ARRAY, REMOVE SPACES ===== //
  let asideArray = asideString.split(regExAsideElements).filter(function(item) {
    return item !== "";
  });

  // ===== REMOVE ASIDE ELEMENTS FROM MAIN CONTENT ===== //
  let bookDisplayString = originalContent.replace(regExAsideBlock, '')

  // ===== REPLACE IMAGE GALLERY ELEMENTS WITH GALLERY ID ===== //
  for (let i=0; i<imageArray.length; i++) {
    bookDisplayString = bookDisplayString.replace(regExImageGallerySingle, `<div id="image-gallery-${i}"></div>`);
  }

  // ================================================== //
  // ***** SPLIT BOOK INTO ARRAY & ADD CUSTOM IDS ***** //
  // ================================================== //
  let bookArray = bookDisplayString.split(/(<.*?>{1})/g).filter(function(item) {
    return item !== "";
  });

  function isBody(el) {
    return el === '<body>';
  }

  let bodyIndex = bookArray.findIndex(isBody);

  let bookDisplay = []; // EMPTY ARRAY TO PUSH PROCESSED ELEMENTS TO
  let prId = 0; // INITIAL PR-# ID

  // ===== REFINE BOOK ARRAY WITH CUSTOM PROPERTIES ===== //
  for (var i = 0; i < bookArray.length; i++) {
    if (i > bodyIndex && bookArray[i][0] !== '<')
    { // ===== add <span id="*"> to all text elements ===== //
      bookDisplay.push(`<span id="pr-${prId}">${bookArray[i]}</span>`);
      prId++;
    }
    else if (bookArray[i][1] === 'a' && bookArray[i][2] === ' ')
    { // ===== change 'href' to 'id' on all links ===== //
      let tempATag = bookArray[i].replace('href', 'id').replace('epub:type="noteref"', '');
      // === for aside popover links, add class "aside-tag" === //
      if (tempATag.includes('popup')) {
        let splitATagArray = tempATag.split('');
        //console.log(splitATagArray);
        splitATagArray.splice(3, 0, 'class="aside-tag"');
        let newTempATag = splitATagArray.join('');
        bookDisplay.push(newTempATag);
      }
      else bookDisplay.push(tempATag);
    }
    // else if ()
    // { // ===== check for image tags -- add id -- add to imageArray ===== //
    //
    // }
    else
    { // ===== DEFAULT - for standard tag elements ===== //
      bookDisplay.push(bookArray[i]);
    }
  }
  return { bookDisplayString, asideArray, imageArray, bookDisplay }
}
