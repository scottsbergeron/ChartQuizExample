import React from "react";
import Radium from "radium";

const Cockpit = (props) => {
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  };

  if (props.showPersons) {
    style.backgroundColor = 'red';
    style[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black'
    };
  }

  const pClassName = ['bold'];
  if (props.personLength <= 1) {
    pClassName.push('red');
  }

  return (
    <div>
      <p className={pClassName.join(' ')}>This is really working</p>
      <button
        style={style}
        onClick={props.btnClicked}>Click Here
      </button>
    </div>
  );
};

export default Radium(Cockpit);
