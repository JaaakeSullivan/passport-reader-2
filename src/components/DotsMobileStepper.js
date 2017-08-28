// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';

const styles = {
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  backgroundColor: 'white',
  position: 'absolute',
  bottom: '0',
  width: '100vw',
  maxWidth: '960px'

};

class DotsMobileStepper extends Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  render() {
    const classes = this.props.classes;
    return (
      <MobileStepper
        type="dots"
        steps={4}
        position="static"
        activeStep={this.state.activeStep}
        onBack={this.handleBack}
        onNext={this.handleNext}
        disableBack={true}
        disableNext={true}
        style={styles}
      />
    );
  }
}

DotsMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default DotsMobileStepper;
