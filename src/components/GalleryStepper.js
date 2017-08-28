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

class DotsMobileStepper extends Component {


  render() {
    let { length, position, previousImage, nextImage } = this.props
    const classes = this.props.classes;

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
}

DotsMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default DotsMobileStepper;
