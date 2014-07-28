/** * @jsx React.DOM */

var Utils = Utils || {};

Utils.Switch = React.createClass({
  propTypes: {
    on: React.PropTypes.any.isRequired
  },

  renderChildren: function() {
    var self = this,
        len = this.props.children.length,
        displayChild;

    for (var i=0; i<len; ++i) {
      var kid = self.props.children[i];
      if (kid.props.when == self.props.on) {
        displayChild = kid;
      } else if (kid.props.when == "default") {
        displayChild = kid;
      }
    }

    if (displayChild) {
      return displayChild;
    }
  },

  render: function() {
    return <span className={"r-util--switch " + (this.props.className || "")}>
      {this.renderChildren()}
    </span>
  }
});
