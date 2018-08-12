import React from 'react';
import { shallow } from 'enzyme';
import { LighteningCounter } from '../../../src/features/learning';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<LighteningCounter />);
  expect(renderedComponent.find('.learning-lightening-counter').length).toBe(1);
});
