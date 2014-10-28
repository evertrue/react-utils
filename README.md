# React-Utils

A collection of unstyled [React JS](http://facebook.github.io/react/) utility components, that make common coding tasks cleaner and easier to write. Inspired by default Angualr directives like `ng-repeat` and `ng-show`.

Requires React 0.11 or higher

## Usage

Use the follow JSX in the `render` function of any react component.

#### Utils.ShowHide
```js
  <Utils.ShowHide show={true}> 
    Show This Content 
  </Utils.ShowHide>
```

#### Utils.Switch
```js
  <Utils.Switch on="strawberry">
    <div when="apple">Apple</div>
    <div when="bannana">Bannana</div>
    <div when="default">Other</div>
  </Utils.Switch>
```

#### Utils.ListRepeat
```js
  var links = [
    {link: "http://google.com", label: "Google"},
    {link: "http://yahoo.com", label: "Yahoo"}
  ];

  <Utils.ListRepeat list={links} itemProp="item">
    <MockComponent />
  </Utils.ListRepeat>
```


### Contributing

* Clone the repository and run `npm install`
* Run `grunt` to concat and compile all files into `react-utils.js`
* Run `grunt test` to build and run tests for all components


### Authors

* [Julie Reitter](http://github.com/julieReitter)
