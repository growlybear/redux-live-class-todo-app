import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';

import FilterLink from './';

test( 'FilterLink', t => {
  t.plan( 1 );

  const wrapper = shallow( <FilterLink /> );
  const expected = true;
  const actual = wrapper.is( 'a' );

  t.ok( actual === expected, 'renders a link' );
});

