// imported all utilities into App.js

Array.prototype.removeBlanks = function() {
  return (this.filter(function(item) {
    return item !== "";
  }));
}

Array.prototype.getIndexOfHighlight = function(id) {

  for (let i=0; i<this.length; i++) {
    let idInHighlight = this[i]._id
    console.log("idInHighLight", idInHighlight, " id ", id)
    if (id === idInHighlight) {
      return i;
    }
  }
  return -1;
}

Array.prototype.getHighlight = function(id) {
  for (let i=0; i<this.length; i++) {
    let idInHighlight = this[i]._id
    if (id === idInHighlight) {
      return this[i];
    }
  }
  return -1;
}
