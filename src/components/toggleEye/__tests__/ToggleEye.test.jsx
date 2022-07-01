import React from 'react';
import renderer from 'react-test-renderer';
import { ToggleEye } from '../toggleEye';

it('should render with no props', () => {
  const component = renderer.create(
    <ToggleEye />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with disabled state', () => {
  const component = renderer.create(
    <ToggleEye disabled />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with red as bg colour', () => {
  const component = renderer.create(
    <ToggleEye className="bg-red-80" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
