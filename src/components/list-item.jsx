/** * @jsx React.DOM */
var Utils = Utils || {};

Utils.ListItem = React.createClass({
  render: function() {
    return <span>
      {this.props[this.props.itemProp] || this.props.item}
    </span>
  }
});
