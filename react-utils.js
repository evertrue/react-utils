/** * @jsx React.DOM */
var Utils = Utils || {};

Utils.ShowHide = React.createClass({displayName: 'ShowHide',
  propTypes: {
    show: React.PropTypes.bool,
    hide: React.PropTypes.bool
  },

  render: function() {
    if (this.props.show || (this.props.hide === false)) {
      return React.DOM.span({className: this.props.className || ""}, 
        this.props.children
      )
    } else {
      return null;
    }
  }
});

/** * @jsx React.DOM */

var Utils = Utils || {};

Utils.Switch = React.createClass({displayName: 'Switch',
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
    return React.DOM.span({className: "r-util--switch " + (this.props.className || "")}, 
      this.renderChildren()
    )
  }
});
