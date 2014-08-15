/** * @jsx React.DOM */

describe("<Utils.ListRepeat />", function(){

  var MockComponent = React.createClass({displayName: 'MockComponent',
    render: function() {
      return React.DOM.a({href: this.props.item.link}, " ", this.props.item.label, " ")
    }
  });

  it("repeats single child in output for each list item", function(){
    var groceries = ["eggs", "milk", "bannanas", "cheese"];
    var instance = React.addons.TestUtils.renderIntoDocument(
      Utils.ListRepeat({list: groceries}, 
        Utils.ListItem(null)
      )
    );
    content = React.addons.TestUtils.scryRenderedDOMComponentsWithTag(instance, "span")
    expect(content[2].getDOMNode().innerHTML).toBe("bannanas")
  });

  it("repeats any component for a list of objects", function(){
    var links = [
      {link: "http://google.com", label: "Google"},
      {link: "http://yahoo.com", label: "Yahoo"}
    ];
    var instance = React.addons.TestUtils.renderIntoDocument(
      Utils.ListRepeat({list: links, itemProp: "item"}, 
        MockComponent(null)
      )
    );
    content = React.addons.TestUtils.scryRenderedDOMComponentsWithTag(instance, "a")
    expect(content[1].getDOMNode().text.trim()).toBe("Yahoo")
  });

});
