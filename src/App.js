import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';
import Main from './Main';
import './helpers/utilityHelpers'

function mapStateToProps(state) {

  state.highlights.getHighlight = function(id) {
    for (let i=0; i<this.length; i++) {
      let idInHighlight = this[i]._id
      if (id === idInHighlight) {
        return this[i];
      }
    }
    return -1;
  }

  return {
    book: state.book,
    dictionary: state.dictionary,
    highlights: state.highlights,
    modal: state.modal,
    asideDisplay: state.asideDisplay,
    galleryDisplay: state.galleryDisplay,
    settings: state.settings,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
