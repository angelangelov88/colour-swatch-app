import React from 'react';
import renderer from 'react-test-renderer';
import { Toggle } from '../Toggle';

it('should render with default', () => {
  const component = renderer.create(
    <Toggle />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with enabled', () => {
  const component = renderer.create(
    <Toggle enabled />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render not enabled', () => {
  const component = renderer.create(
    <Toggle enabled={false} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with label toggle', () => {
  const component = renderer.create(
    <Toggle label="toggle" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
