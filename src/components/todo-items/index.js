import React from 'react';

import TodoItem from '../todo-item';

export default ({
  items = [],
  filter = 'SHOW_ALL',
  onRemove = e => console.log( 'no onRemove method defined' ),
  onToggle = e => console.log( 'no onToggle method defined' ),
}) => {
  const getVisibleTodos = (todos, filter) => {
    switch ( filter ) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_ACTIVE':
        return todos.filter( t => !t.completed );
      case 'SHOW_COMPLETED':
        return todos.filter( t => t.completed );
      default:
        return todos;
    }
  }

  const nodes = getVisibleTodos(items, filter).map( ( todo, i ) => (
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

