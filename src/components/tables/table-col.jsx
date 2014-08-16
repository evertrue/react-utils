/** * @jsx React.DOM */
var Utils = Utils || {};

Utils.TableCol = React.createClass({
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
    return <td> {this.content()} </td>
  }
});
