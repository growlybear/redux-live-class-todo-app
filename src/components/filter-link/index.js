import React from 'react';

export default ({
  handler = e => console.log( 'no handler method defined' ),
  filter,
  children
}) => {
  return (
    <a href="#" onClick={e => {
      e.preventDefault();
      handler()
    }}>{ children }</a>
  );
}
