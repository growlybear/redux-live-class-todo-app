export default ( todos = [], { type, ...payload } ) => {
  switch ( type ) {
    case 'ADD_TODO_ITEM':
      return [ ...todos, payload ];
    case 'REMOVE_TODO_ITEM':
      return todos.filter( t => t !== payload.todo );
    case 'TOGGLE_TODO_ITEM':
      return todos.map( t => {
        if (t.name !== payload.todo.name) {
          return t;
        }
        return {
          ...t,
          completed: !t.completed
        }
      })
    default:
      return todos;
  }
};

