// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';

const styles = {
  root: {
    //maxWidth: 400,
    flexGrow: 1,
  },
};

function GalleryStepper(props) {
  let { length, position, previousImage, nextImage } = props
  const classes = props.classes;

  return (
    <MobileStepper
      type="dots"
      steps={length}
      position="static"
      activeStep={position}
      onBack={previousImage}
      onNext={nextImage}
      disableBack={position === 0}
      disableNext={position === length-1}
      style={styles}
    />
  );
}

GalleryStepper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default GalleryStepper;
