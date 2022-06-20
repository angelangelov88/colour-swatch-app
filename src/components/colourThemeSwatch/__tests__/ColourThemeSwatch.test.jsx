import React from 'react';
import renderer from 'react-test-renderer';
import { ColourThemeSwatch } from '../ColourThemeSwatch';

it('should render with color gray', () => {
  const component = renderer.create(
    <ColourThemeSwatch color="gray" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with color primary', () => {
  const component = renderer.create(
    <ColourThemeSwatch color="primary" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with color purple', () => {
  const component = renderer.create(
    <ColourThemeSwatch color="purple" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with color blue', () => {
  const component = renderer.create(
    <ColourThemeSwatch color="blue" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with color lightblue', () => {
  const component = renderer.create(
    <ColourThemeSwatch color="lightblue" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with color cyan', () => {
  const component = renderer.create(
    <ColourThemeSwatch color="cyan" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with color teal', () => {
  const component = renderer.create(
    <ColourThemeSwatch color="teal" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with color green', () => {
  const component = renderer.create(
    <ColourThemeSwatch color="green" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with color yellow', () => {
  const component = renderer.create(
    <ColourThemeSwatch color="yellow" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with color red', () => {
  const component = renderer.create(
    <ColourThemeSwatch color="red" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with color void', () => {
  const component = renderer.create(
    <ColourThemeSwatch color="void" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
