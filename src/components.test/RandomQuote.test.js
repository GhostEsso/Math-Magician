import React from 'react';
import renderer from 'react-test-renderer';
import RandomQuote from '../components/RandomQuote';

test('Snapshot test for RandomQuote component', () => {
  const component = renderer.create(<RandomQuote />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
