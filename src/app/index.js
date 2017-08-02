//imports was using es6 instead using require statement per tutorials instructions
let React = require('react');
let ReactDOM = require('react-dom');

//Creat Component

function Hello() {
  return <h1>Hello</h1>;
}

ReactDOM.render(
  <Hello />,
  document.getElementById('intro-wrapper')
);
//put component into HTML page
//ReactDOM.render(reactElement, domContainerNode)
