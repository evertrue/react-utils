/** * @jsx React.DOM */
var Utils = Utils || {};

Utils.ShowHide = React.createClass({
  propTypes: {
    show: React.PropTypes.bool,
    hide: React.PropTypes.bool
  },

  render: function() {
    if (this.props.show || (this.props.hide === false)) {
      return <span className={this.props.className || ""}>
        {this.props.children}
      </span>
    } else {
      return null;
    }
  }
});
