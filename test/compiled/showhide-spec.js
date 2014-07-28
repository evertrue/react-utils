/** * @jsx React.DOM */

describe("<Utils.ShowHide />", function(){

  it("displays child content when props.show is truthy", function(){
    var instance = React.addons.TestUtils.renderIntoDocument(
      Utils.ShowHide({show: true}, "Show Me")
    );

    content = React.addons.TestUtils.findRenderedDOMComponentWithTag(instance, "span");
    expect(content.getDOMNode().innerHTML).toBe("Show Me")
  });

  it("displays NO content when props.show is falsy", function(){
    var instance = React.addons.TestUtils.renderIntoDocument(
      Utils.ShowHide({show: false}, "Do Not Show Me")
    );
    expect(instance.getDOMNode()).toBeFalsy()
  });

  it("displays child content when props.hide is falsy", function(){
    var instance = React.addons.TestUtils.renderIntoDocument(
      Utils.ShowHide({hide: false}, "Show Me")
    );
    content = React.addons.TestUtils.findRenderedDOMComponentWithTag(instance, "span");
    expect(content.getDOMNode().innerHTML).toBe("Show Me")
  });

  it("displays NO content when props.hide is truthy", function(){
    var instance = React.addons.TestUtils.renderIntoDocument(
      Utils.ShowHide({hide: true}, "Do Not Show Me")
    );
    expect(instance.getDOMNode()).toBeFalsy()
  });

});
