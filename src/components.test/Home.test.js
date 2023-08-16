import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

test('Snapshot test for Home component', () => {
  const component = renderer.create(<Home />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
