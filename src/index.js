//import react libs
import React from 'react';
import ReactDom from 'react-dom';

// create a functional component
const App = () => {
  var buttonText = 'React hello world';
  return ( <
    div style = {
      {
        border: '1px solid red'
      }
    }
    className = "react" > {
      buttonText
    } < /div>
  )
}

//show component on screen
ReactDom.render( < App / > ,
  document.querySelector('#root')
);
