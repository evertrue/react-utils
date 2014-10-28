/** * @jsx React.DOM */

describe("<Utils.Switch />", function(){

  it("outputs one child with matching 'when' case", function(){
    var instance = React.addons.TestUtils.renderIntoDocument(
      Utils.Switch({on: "bannana"}, 
        React.DOM.div({when: "apple"}, "Apple"), 
        React.DOM.div({when: "bannana"}, "Bannana")
      )
    );

    switchChild = React.addons.TestUtils.findRenderedDOMComponentWithTag(instance, "div");
    expect(switchChild.getDOMNode().innerHTML).toBe("Bannana");
  });

  it("outputs default child if no cases match", function(){
    var instance = React.addons.TestUtils.renderIntoDocument(
      Utils.Switch({on: "strawberry"}, 
        React.DOM.div({when: "apple"}, "Apple"), 
        React.DOM.div({when: "bannana"}, "Bannana"), 
        React.DOM.div({when: "default"}, "Other")
      )
    );

    switchChild = React.addons.TestUtils.findRenderedDOMComponentWithTag(instance, "div");
    expect(switchChild.getDOMNode().innerHTML).toBe("Other");
  });

  it("works with boolean values", function(){
    var hello = undefined;
    var instance = React.addons.TestUtils.renderIntoDocument(
      Utils.Switch({on: !!hello}, 
        React.DOM.div({when: false}, "False"), 
        React.DOM.div({when: true}, "True")
      )
    );

    switchChild = React.addons.TestUtils.findRenderedDOMComponentWithTag(instance, "div");
    expect(switchChild.getDOMNode().innerHTML).toBe("False");
  });

});
