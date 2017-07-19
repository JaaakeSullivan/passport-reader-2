// imported all utilities into App.js

Array.prototype.removeBlanks = function() {
  return (this.filter(function(item) {
    return item !== "";
  }));
}
