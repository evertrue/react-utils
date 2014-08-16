/** * @jsx React.DOM */

var friends = [
   {name: "Julie", dob: "5/12/90", phone: "999-888-7777"},
   {name: "Jordan", dob: "3/14/87", phone: "555-555-555"},
   {name: "Jax", dob: "5/12/90", phone: "123-123-1234"}
];

// func = (item) -> format(item.dob)

// <Table data={friends}>
//    <TableCol property="name" header="Friend's Name" />
//    <TableCol property={func} header="Birthday" />
// </Table>


// TableCol Props
//    property: renderable or string
//    header: renderable or string


describe("<Utils.Table />", function(){

  it("repeats rows for list items", function(){
    var instance = React.addons.TestUtils.renderIntoDocument(
      <Utils.Table data={friends} keyProp="name">
        <Utils.TableCol property="name"/>
        <Utils.TableCol property="dob"/>
      </Utils.Table>
    );

    var content = React.addons.TestUtils.scryRenderedDOMComponentsWithTag(instance, "tr");
    expect(content.length).toBe(friends.length);
  });

  it("creates headers from children component props", function(){
    var instance = React.addons.TestUtils.renderIntoDocument(
      <Utils.Table data={friends} keyProp="name">
        <Utils.TableCol property="name" header="Name" />
        <Utils.TableCol property="dob" header="Birthday" />
      </Utils.Table>
    );

    var header = React.addons.TestUtils.findRenderedDOMComponentWithTag(instance, "thead"),
        headerColumn = React.addons.TestUtils.scryRenderedDOMComponentsWithTag(instance, "th");
    expect(header).toBeDefined();
    expect(headerColumn[0].getDOMNode().innerHTML).toBe("Name");
  });
});
