import React from 'react';
import { connect } from 'react-redux';

import showAll from '../../store/actions/show-all';
import showActive from '../../store/actions/show-active';
import showCompleted from '../../store/actions/show-completed';

import FilterLink from '../filter-link';

export class FilterList extends React.Component {
  constructor ( props ) {
    super( props )
  }

  render () {
    const {
      onShowAll = e => e,
      onShowActive = e => e,
      onShowCompleted = e => e,
      visibilityFilter = ''
    } = this.props;

    return (
      <ul>
        <li><FilterLink handler={onShowAll}>All</FilterLink></li>
        <li><FilterLink handler={onShowActive}>Active</FilterLink></li>
        <li><FilterLink handler={onShowCompleted}>Completed</FilterLink></li>
      </ul>
    );
  }
}

export const mapStateToProps = ({ todos, visibilityFilter }) => ({
  todos,
  visibilityFilter,
});

export const mapDispatchToProps = dispatch => ({
  onShowAll: () => dispatch( showAll() ),
  onShowActive: () => dispatch( showActive() ),
  onShowCompleted: () => dispatch( showCompleted() ),
});

export default connect( mapStateToProps, mapDispatchToProps )( FilterList );

