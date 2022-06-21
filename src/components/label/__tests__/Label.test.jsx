import React from 'react';
import renderer from 'react-test-renderer';
import { Label } from '../Label';

it('should render with default', () => {
  const component = renderer.create(
    <Label />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with default', () => {
  const component = renderer.create(
    <Label>Label2</Label>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with default', () => {
  const component = renderer.create(
    <Label size="lg" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with default', () => {
  const component = renderer.create(
    <Label size="sm" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with default', () => {
  const component = renderer.create(
    <Label variant="fill" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with default', () => {
  const component = renderer.create(
    <Label variant="outline" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with default', () => {
  const component = renderer.create(
    <Label className="text-red-50" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
