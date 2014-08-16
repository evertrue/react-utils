/** * @jsx React.DOM */
var Utils = Utils || {};

Utils.Table = React.createClass({
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
      return <thead> {this.headerColumns()} </thead>
    }
  },

  headerColumns: function() {
    return this.props.children.map(function(child){
      var headerKey = "header_" + child.props.header;
      return <th key={headerKey}>
        {child.props.header}
      </th>
    });
  },

  body: function() {
    return <tbody> {this.bodyRows()} </tbody>
  },

  bodyRows: function() {
    var self = this;
    return this.props.data.map(function(item, index){
      var rowKey = "row_" + item[self.props.keyProp];
      return <tr key={rowKey}>
        {self.bodyColumns(item, rowKey)}
      </tr>
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
    return <table className={"r-util--table " + (this.props.className || "")}>
      {this.header()}
      {this.body()}
    </table>
  }
});
