import React from 'react';

import TodoItem from '../todo-item';

export default ({
  items = [],
  visibilityFilter = '',
  onRemove = e => console.log( 'no onRemove method defined' ),
  onToggle = e => console.log( 'no onToggle method defined' ),
}) => {
  const setVisibleTodos = (todos, filter) => {
    switch ( filter ) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_ACTIVE':
        return todos.filter( t => !t.completed );
      case 'SHOW_COMPLETED':
        return todos.filter( t => t.completed );
    }
  }
  // FIXME this doesn't feel like the right place to filter items,
  //       also, setVisibleTodos(items, visibilityFilter) returns undefined
  //       so can't be mapped over
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

