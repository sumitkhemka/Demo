import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/learning/DefaultPage';

describe('learning/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      learning: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.learning-default-page').length
    ).toBe(1);
  });
});
