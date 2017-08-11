import React, {Component} from 'react'

class ModalDevelInfo extends Component {
  render() {
    return (
      <div>
        <div>
          Starts at postion: {this.props.modal.startPos} of #{this.props.modal.startId}.
        </div>
        <div>
          And ends at position: {this.props.modal.endPos} #{this.props.modal.endId}.
        </div>
        <div>
          The elements between are: {this.props.modal.betweenArray.toString()}
        </div>
        <div>
          HighlightSelected: {this.props.modal.highlightSelected.value.toString()}
        </div>
        <div>
          ToDelete: {this.props.modal.highlightSelected.value.toString()}
        </div>
        <div>
          Matches: {this.props.modal.highlightSelected.matches.toString()}
        </div>
      </div>
    )
  }
}

export default ModalDevelInfo;
