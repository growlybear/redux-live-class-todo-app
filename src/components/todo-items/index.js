import React from 'react';

import TodoItem from '../todo-item';

export default ({
  items = [],
  onRemove = e => console.log( 'no onRemove method defined' ),
  onToggle = e => console.log( 'no onToggle method defined' ),
}) => {
  const nodes = items.map( ( todo, i ) => (
    <li key={i}>
      <TodoItem {...todo}
        remove={() => onRemove( todo )}
        toggle={() => onToggle( todo )}
      />
    </li>
  ));

  return (
    <ul>
      { nodes }
    </ul>
  );
}

