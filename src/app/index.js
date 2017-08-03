//imports was using es6 instead using require statement per tutorials instructions
let React = require('react');
let ReactDOM = require('react-dom');

//Creat Component

// function Hello() {
//   return <h1>Hello</h1>;
// }
//
// ReactDOM.render(
//   <Hello />,
//   document.getElementById('intro-wrapper')
// );
// //put component into HTML page
// //ReactDOM.render(reactElement, domContainerNode)
//
// //Components accept arbitrary inputs called props and return react elements describing what should appear on the screen.
//
// //REVIEW: component below is same component but written using an ES6 class
// class Welcome extends React.Component {
//   render() {
//     return <h1>Welcome</h1>;
//   }
// }
//
// ReactDOM.render(
//   <Welcome />,
//   document.getElementById('intro-wrapper2')
// );//wrapper will only contain one element and is overwritten by last render method?
// //Always start component names with a capitol letter
// //companents can refer to other companents in their output
//
// function Creepin(props) {
//   return <h1>Hello, {props.name}</h1>;
//   }
//
//   function App() {
//     return (
//       <div>
//         <Creepin name='Bob' />
//         <Creepin name='Phil' />
//         <Creepin name='Bill' />
//       </div>
//     );
//   }
//
//   ReactDOM.render(
//     <App />,
//     document.getElementById('intro-wrapper3')
//   );
//Typically new React apps have a single App component at the very top

//Extracting components - Dividing components into small components
//You could change the rendered output based on events for one div.

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state ={name: {character.name}};
    this.nextCharacter = {character.name} += 1;
    this.lastCharacter = {character.name} -= 1;
  }
  componentDidMount() {
    $getJSON('./data/character.json', (json) => {
      this.setState({character: json});
    });
  }
  // componentWillUnmount(){
  //
  // }
  // function App() {
  //   return (
  //     <div>
  //       <Creepin name='Bob' />
  //       <Creepin name='Phil' />
  //       <Creepin name='Bill' />
  //     </div>
  //   );
  // }
  //
  render() {
    return (
      <div>
        <div>{this.character.name}</div>
        <input type='button' value='PASS' onClick={this.nextCharacter} />
        <input type='button' value='RETURN' onClick={this.lastCharacter} />
      </div>
    );
  }
}

ReactDOM.render(
  <Character />
  document.getElementById('character-change')
);
