import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.js';
// import { element } from 'prop-types';

// ReactDOM.render(<App />,element, document.getElementById('root'));
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }
// function getGreeting(user) {
//   if (!user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }
// const user = {
//   firstName: 'Pham',
//   lastName: 'Tung'
// };
// const element = (
//   <h1>
//     {getGreeting(user)}
//   </h1>
// );
// const title = response.potentiallyMaliciousInput;
// This is safe:
// const element = <h1>{title}</h1>;
// const element = <div tabIndex="0"></div>;



// const element = (
//   <h1 className="greeting">
//     Hello, world!
//     </h1>
// );


// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);


// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" id="me" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );


// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }
function formatDate(props) {
  return <h1>{props.date}</h1>;
}
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}


ReactDOM.render(
  <Comment />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
