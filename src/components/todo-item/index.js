import React from 'react';

export default ({
  remove = e => console.log( 'no remove method defined' ),
  toggle = e => console.log( 'no toggle method defined' ),
  name,
  completed
}) => {
  return (
    <span>
      <span className={ completed ? 'complete' : 'incomplete'} onClick={toggle}>
        {name}
      </span>
      <a href="#" onClick={remove}>X</a>
    </span>
  );
}

