// @flow weak

import React, { Component } from 'react';
import Radio from 'material-ui/Radio';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

const styles = {
  container: {
    // maxWidth: 400,
    // flexGrow: 1,
    // position: 'absolute',
    // bottom: '0',
    // width: '100vw',
    // maxWidth: '960px',
    // backgroundColor: 'white'
  },
  // backgroundColor: 'white',

};

class DotsMobileStepper extends Component {
  state = {
    selectedValue: undefined,
  };

  handleChange = event => {
    this.setState({ selectedValue: event.currentTarget.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Radio
          checked={this.props.position === 0}
          onChange={this.handleChange}
          value="a"
          name="radio button demo"
          aria-label="A"
        />
        <Radio
          checked={this.props.position === 1}
          onChange={this.handleChange}
          value="b"
          name="radio button demo"
          aria-label="B"
        />
        <Radio
          checked={this.props.position === 2}
          onChange={this.handleChange}
          value="c"
          name="radio button demo"
          aria-label="C"
        />
        <Radio
          checked={this.props.position === 3}
          onChange={this.handleChange}
          value="c"
          name="radio button demo"
          aria-label="C"
        />
        
      </div>
    );
  }
}

DotsMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DotsMobileStepper);








// // ========== BELOW IS THE ORIGINAL ========== //
//
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
// import MobileStepper from 'material-ui/MobileStepper';
//
// const styles = {
//   root: {
//     maxWidth: 400,
//     flexGrow: 1,
//   },
//   backgroundColor: 'white',
//   position: 'absolute',
//   bottom: '0',
//   width: '100vw',
//   maxWidth: '960px'
//
// };
//
// class DotsMobileStepper extends Component {
//   state = {
//     activeStep: 0,
//   };
//
//   handleNext = () => {
//     this.setState({
//       activeStep: this.state.activeStep + 1,
//     });
//   };
//
//   handleBack = () => {
//     this.setState({
//       activeStep: this.state.activeStep - 1,
//     });
//   };
//
//   render() {
//     const classes = this.props.classes;
//     return (
//       <MobileStepper
//         type="dots"
//         steps={4}
//         position="static"
//         activeStep={this.props.position}
//         disableBack={true}
//         disableNext={true}
//         style={styles}
//       />
//     );
//   }
// }
//
// DotsMobileStepper.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
//
// export default DotsMobileStepper;
