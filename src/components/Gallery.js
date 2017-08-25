import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const galleryStyles = {
	display: 'flex',
	justifyContent: 'space-around'
}

function Gallery(props) {
	const { classes, images, galleryIndex, openGallery } = props;
	console.log('images', images)

	const renderGallery = images.map((image, imageIndex) =>
			<div className="gallery" key={imageIndex}>
				<Button onClick={(e) => openGallery(galleryIndex, imageIndex)}>
					<img src={image.thumbnail} className="gallery-thumbnail" alt="" />
				</Button>
			</div>
	);

	return (
		<MuiThemeProvider>
			<div style={galleryStyles}>{renderGallery}</div>
		</MuiThemeProvider>
	)
}

Gallery.propTypes = {
	classes: PropTypes.object.isRequired,
	images: PropTypes.array,
	openGallery: PropTypes.func,
	closeGallery: PropTypes.func,
	nextImage: PropTypes.func,
	previousImage: PropTypes.func,
};

export default Gallery;
