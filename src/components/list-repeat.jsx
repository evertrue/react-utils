/** * @jsx React.DOM */
var Utils = Utils || {};

Utils.ListRepeat = React.createClass({
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
        <li key={i+len}>
          {this.cloneChild(self.props.list[i])}
        </li>
      );
    }
    return output;
  },

  render: function() {
    return <ul className={"r-util--list " + (this.props.className || "")}>
      {this.repeatChildren()}
    </ul>
  }
});
