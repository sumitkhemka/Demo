import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../../../src/features/learning';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Button />);
  expect(renderedComponent.find('.learning-button').length).toBe(1);
});
