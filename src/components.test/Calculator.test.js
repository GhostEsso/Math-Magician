import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

test('Snapshot test for Calculator component', () => {
  const component = renderer.create(<Calculator />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
