'use strict';

console.log('Hello, React');

// Hello app JSX
var template = React.createElement(
  'h1',
  { id: 'hello' },
  'Yes'
);
var appRoute = document.getElementById('app');

ReactDOM.render(template, appRoute);
