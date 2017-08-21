import React from 'react'
import Lightbox from 'react-images'
import ReactDOM from 'react-dom'
import Gallery from '../components/Gallery'

export default class ImageGalleryContainer extends React.Component {

  componentDidMount() {



    for (let i=0; i<this.props.book.images.length; i++) {
      // let image = this.props.book.images[i];
      // console.log(this.props.book.images)
      let THUMBNAIL_IMAGES = [...this.props.book.images[i]];
      console.log('THUMBNAIL_IMAGES', THUMBNAIL_IMAGES);
      ReactDOM.render(
        <div>
          <Gallery images={this.props.book.images[i]} showThumbnails/>

          {/*
          <Gallery images={THUMBNAIL_IMAGES.map(({ caption, src, thumbnail }) => ({
          			caption,
                src,
                thumbnail
          		}))} showThumbnails />
          */}

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
