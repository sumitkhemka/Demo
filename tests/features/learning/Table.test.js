import React from 'react';
import { shallow } from 'enzyme';
import { Table } from '../../../src/features/learning';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Table />);
  expect(renderedComponent.find('.learning-table').length).toBe(1);
});
