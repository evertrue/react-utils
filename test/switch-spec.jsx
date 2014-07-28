/** * @jsx React.DOM */

describe("<Utils.Switch />", function(){

  it("outputs one child with matching 'when' case", function(){
    var instance = React.addons.TestUtils.renderIntoDocument(
      <Utils.Switch on="bannana">
        <div when="apple">Apple</div>
        <div when="bannana">Bannana</div>
      </Utils.Switch>
    );

    switchChild = React.addons.TestUtils.findRenderedDOMComponentWithTag(instance, "div");
    expect(switchChild.getDOMNode().innerHTML).toBe("Bannana");
  });

  it("outputs default child if no cases match", function(){
    var instance = React.addons.TestUtils.renderIntoDocument(
      <Utils.Switch on="strawberry">
        <div when="apple">Apple</div>
        <div when="bannana">Bannana</div>
        <div when="default">Other</div>
      </Utils.Switch>
    );

    switchChild = React.addons.TestUtils.findRenderedDOMComponentWithTag(instance, "div");
    expect(switchChild.getDOMNode().innerHTML).toBe("Other");
  });

});
