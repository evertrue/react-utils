(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.returnExportsGlobal = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    factory();
  }
}(this, function () {

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

/** * @jsx React.DOM */
var Utils = Utils || {};

Utils.TableCol = React.createClass({displayName: 'TableCol',
  propTypes: {
    data: React.PropTypes.any,
    property: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.func
    ]),
    children: React.PropTypes.any
  },

  content: function() {
    if (typeof this.props.property === "function") {
      return this.props.property()
    } else {
      return this.props.property
    }
  },

  render: function() {
    return React.DOM.td(null, " ", this.content(), " ")
  }
});

/** * @jsx React.DOM */
var Utils = Utils || {};

Utils.Table = React.createClass({displayName: 'Table',
  propTypes: {
    data: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.object
    ]),
    keyProp: React.PropTypes.string.isRequired,
    children: React.PropTypes.any
  },

  header: function() {
    var columns = this.props.children;
    if (columns[0] && columns[0].props.header) {
      return React.DOM.thead(null, " ", this.headerColumns(), " ")
    }
  },

  headerColumns: function() {
    return this.props.children.map(function(child){
      var headerKey = "header_" + child.props.header;
      return React.DOM.th({key: headerKey}, 
        child.props.header
      )
    });
  },

  body: function() {
    return React.DOM.tbody(null, " ", this.bodyRows(), " ")
  },

  bodyRows: function() {
    var self = this;
    return this.props.data.map(function(item, index){
      var rowKey = "row_" + item[self.props.keyProp];
      return React.DOM.tr({key: rowKey}, 
        self.bodyColumns(item, rowKey)
      )
    });
  },

  bodyColumns: function(item, rowKey) {
    var self = this;
    return this.props.children.map(function(child, index){
      var cellKey = "column_" + (child.props.header || index)  + "_" + rowKey;
      return React.addons.cloneWithProps(child, {data: item, key: cellKey});
    });
  },

  render: function() {
    return React.DOM.table({className: "r-util--table " + (this.props.className || "")}, 
      this.header(), 
      this.body()
    )
  }
});



}));
