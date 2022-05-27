// option 1
// const h2Element = React.createElement('h2', null, 'Hello Welcome to Adv-Fullstack programming')
// const element = React.createElement("div", {
//   title: 'Outer DIV'
// }, h2Element);

// option 2
const element = (
  <div className="Outer DIV">
    <h2> Hello Welcome to Adv - Fullstack programming </h2>
  </div>
);

ReactDOM.render(element, document.getElementById('container'));
