/** * @jsx React.DOM */
var Utils = Utils || {};

Utils.ListItem = React.createClass({displayName: 'ListItem',
  render: function() {
    return React.DOM.span(null, 
      this.props[this.props.itemProp] || this.props.item
    )
  }
});

/** * @jsx React.DOM */
var Utils = Utils || {};

Utils.ListRepeat = React.createClass({displayName: 'ListRepeat',
  propTypes: {
    list: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.object
    ]),
    itemProp: React.PropTypes.string,
    children: React.PropTypes.component
  },

  cloneChild: function(item) {
    var child = this.props.children,
        propsToClone = {itemProp: this.props.itemProp};

    propsToClone[this.props.itemProp || "item"] = item;
    return React.addons.cloneWithProps(child, propsToClone);
  },

  repeatChildren: function() {
    var self = this,
        len = self.props.list.length,
        output = [];

    for (var i=0; i<len; i++) {
      output.push(
        React.DOM.li({key: i+len}, 
          this.cloneChild(self.props.list[i])
        )
      );
    }
    return output;
  },

  render: function() {
    return React.DOM.ul({className: "r-util--list " + (this.props.className || "")}, 
      this.repeatChildren()
    )
  }
});

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
