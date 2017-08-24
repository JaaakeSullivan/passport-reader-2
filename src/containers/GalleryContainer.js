import React from 'react'
// import Lightbox from 'react-images'
import ReactDOM from 'react-dom'
import Gallery from '../components/Gallery'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import Button from 'material-ui/Button';
import renderHTML from 'react-render-html';
import ChevronRight from 'material-ui-icons/ChevronRight'
import ChevronLeft from 'material-ui-icons/ChevronLeft'


const modalStyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'white'
}

const imageStyle = {
  //width: '100%',
  maxHeight: '65vh'
}

const buttonStyle = {
  width: '20px',
  backgroundColor: 'red',
  padding: '0'
}

export default class GalleryContainer extends React.Component {

  componentDidMount() {

    for (let i=0; i<this.props.images.length; i++) {
      ReactDOM.render(
        <div>
          <h2>GALLERY {i} GOES HERE</h2>
          <Gallery
            images={this.props.images[i]}
            galleryIndex={i}
            openGallery={this.props.openGallery}
            closeGallery={this.props.closeGallery}
            nextImage={this.props.nextImage}
            previousImage={this.props.previousImage}
          />
        </div>,
        document.getElementById(`image-gallery-${i}`)
      );
    }
  }

  render() {
    const { galleryDisplay, images, nextImage, previousImage } = this.props;

    // const actionButtons =
    //   <div>
    //     <Button onClick={previousImage}>PREVIOUS</Button>
    //     <Button onClick={nextImage}>NEXT</Button>
    //   </div>;

    let imageSrc=images[galleryDisplay.galleryIndex][galleryDisplay.imageIndex].src;
    let imageCaption=images[galleryDisplay.galleryIndex][galleryDisplay.imageIndex].caption;

    return (
      <Dialog open={galleryDisplay.showGallery} onRequestClose={this.props.closeGallery} >
        {/*
        <DialogTitle>
        </DialogTitle>
        */}
        <DialogContent style={modalStyle}>
          {galleryDisplay.imageIndex > 0
            ? <Button onClick={previousImage} style={buttonStyle}><ChevronLeft /></Button>
            : <div style={buttonStyle}></div>
          }
          <img src={imageSrc} alt='' style={imageStyle}/>
          {galleryDisplay.imageIndex < images[galleryDisplay.galleryIndex].length-1
            ? <Button onClick={nextImage} style={buttonStyle}><ChevronRight /></Button>
            : <div style={buttonStyle}></div>
          }
          <DialogContentText>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{justifyContent: 'center'}}>
          {renderHTML(imageCaption)}
        </DialogActions>
        <DialogActions>
        </DialogActions>
      </Dialog>
    )
  }
}
