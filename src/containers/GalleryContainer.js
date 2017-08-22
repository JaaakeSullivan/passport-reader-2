import React from 'react'
// import Lightbox from 'react-images'
import ReactDOM from 'react-dom'
import Gallery from '../components/Gallery'

export default class GalleryContainer extends React.Component {

  componentDidMount() {

    for (let i=0; i<this.props.gallerySet.length; i++) {
      ReactDOM.render(
        <div>
          <Gallery images={this.props.gallerySet[i]} showThumbnails key={i}/>
        </div>,
        document.getElementById(`image-gallery-${i}`)
      );
    }
  }

  render() {
    return null
  }
}
