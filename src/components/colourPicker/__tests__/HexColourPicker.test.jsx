import React from 'react';
import renderer from 'react-test-renderer';
import HexColourPicker from '../HexColourPicker';

it('should render with defaults', () => {
  const component = renderer.create(
    <HexColourPicker />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with initial color set to #406024', () => {
  const component = renderer.create(
    <HexColourPicker
      colourValue="#406024"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with specified position', () => {
  const component = renderer.create(
    <HexColourPicker
      position="top-9 left-0"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
