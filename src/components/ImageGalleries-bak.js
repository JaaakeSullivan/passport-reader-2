import React from 'react'
import Lightbox from 'react-images'
import ReactDOM from 'react-dom'



// "<object id="gallery-0" class="s3" type="application/x-ibooks+widget" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore et dolore magna aliqua." data-widget-type="gallery" data-geometry="affineGeometry(393,487,1,0,0,1,0,0)" data-fullscreen-only="no" data-expanded-only="no" data-autoplay="no" data-content-layout="top-bottom" data-background-enabled="yes" data-corner-radius="3.000" data-content-padding="0.000" data-gallery-show-thumbs="yes" data-gallery-share-caption="no" data-stage-corner-radius="0.00000" data-stage-geometry="affineGeometry(393,295,1,0,0,1,0,0)"><figure>
//
// <figure data-widget-object-type="gallery-item" data-thumbnail-src="assets/images/09_01_01_01b-thumb.png" data-gallery-item-fullscreen-crop-rect="0 66 1517 1139"><img id="maskedmedia-0" data-widget-object-type="gallery-fullscreen" src="assets/images/09_01_01_01b.jpg" alt=""/><figcaption id="textShape-20" data-widget-object-type="caption"><p id="textShape-20-p0" class="s16">Jim, 1930.  William H. Johnson. ​<br/>Smithsonian American Art Museum, Washington, DC.</p></figcaption></figure>
//
// <figure data-widget-object-type="gallery-item" data-thumbnail-src="assets/images/09_01_01_03-thumb.png" data-gallery-item-fullscreen-crop-rect="0 0 1380 1036"><img id="maskedmedia-1" data-widget-object-type="gallery-fullscreen" src="assets/images/09_01_01_03.jpg" alt=""/><figcaption id="textShape-21" data-widget-object-type="caption"><p id="textShape-21-p0" class="s16">Elvis Presley​<br/>The song &#x201C;Blue Suede Shoes&#x201D; topped the charts in 1956 and was covered by Elvis Presley. The song had been written and recorded by Presley&#x2019;s friend, Carl Perkins, in 1955. Perkins got the idea to write a song about blue suede shoes from fellow musician Johnny Cash.  </p></figcaption></figure>
//
// </figure></object>"


let imageArray = [0, 1]

class Gallery extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
     currentImage: 0,
     lightboxIsOpen: true
   };

  }

  openLightbox = (index, event) => {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}

  closeLightbox = () => {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}

  gotoPrevious = () => {
    console.log('Previous Image')
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}

  gotoNext = () => {
    console.log('Next Image')
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}

  gotoImage = (index) => {
		this.setState({
			currentImage: index,
		});
	}



  render() {
    return (
      <Lightbox
        //images={...this.props.imageSet}
        images={[
          {src: "assets/images/09_01_01_01b.jpg", caption: "see, tole youd so"},
          {src: "assets/images/09_01_01_03.jpg", caption: "daleialsdgk"}
        ]}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
      />
    );
  }
}



export default class ImageGalleries extends React.Component {

  componentDidMount() {

    for (let i=0; i<imageArray.length; i++) {
      let image = this.props.book.images[i];
      console.log(this.props.book.images)
      ReactDOM.render(
        <div>
          <Gallery imageSet={this.props.book.images[i]}/>
          <h1>Insert Image Gallery {i}</h1>
        </div>,
        document.getElementById(`image-gallery-${i}`)
      );
    }
  }

  render() {
    return null
  }
}
