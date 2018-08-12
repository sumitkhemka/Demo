import React from 'react';
import { shallow } from 'enzyme';
import { TreeFilter } from '../../../src/features/learning';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<TreeFilter />);
  expect(renderedComponent.find('.learning-tree-filter').length).toBe(1);
});
