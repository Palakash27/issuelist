// option 1
// const h2Element = React.createElement('h2', null, 'Hello Welcome to Adv-Fullstack programming')
// const element = React.createElement("div", {
//   title: 'Outer DIV'
// }, h2Element);
// option 2
const element = /*#__PURE__*/React.createElement("div", {
  className: "Outer DIV"
}, /*#__PURE__*/React.createElement("h2", null, " Hello Welcome to Adv - Fullstack programming "));
ReactDOM.render(element, document.getElementById('container'));