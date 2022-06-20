import React from 'react';
import renderer from 'react-test-renderer';
import {
  DocumentIcon, InboxIcon, BellIcon,
} from '@heroicons/react/outline';
import Badge from '../Badge';

it('should render with children 1', () => {
  const component = renderer.create(
    <Badge />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with children 1', () => {
  const component = renderer.create(
    <Badge>1</Badge>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with children 12', () => {
  const component = renderer.create(
    <Badge>12</Badge>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with size small', () => {
  const component = renderer.create(
    <Badge
      size="sm"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with size large', () => {
  const component = renderer.create(
    <Badge
      size="lg"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with colour gray', () => {
  const component = renderer.create(
    <Badge
      color="gray"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with colour primary', () => {
  const component = renderer.create(
    <Badge
      color="primary"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with colour purple', () => {
  const component = renderer.create(
    <Badge
      color="purple"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with colour blue', () => {
  const component = renderer.create(
    <Badge
      color="blue"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with colour lightblue', () => {
  const component = renderer.create(
    <Badge
      color="lightblue"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with colour cyan', () => {
  const component = renderer.create(
    <Badge
      color="cyan"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with colour teal', () => {
  const component = renderer.create(
    <Badge
      color="teal"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with colour grene', () => {
  const component = renderer.create(
    <Badge
      color="green"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with colour yellow', () => {
  const component = renderer.create(
    <Badge
      color="yellow"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with colour red', () => {
  const component = renderer.create(
    <Badge
      color="red"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with a leading icon DocumentIcon', () => {
  const component = renderer.create(
    <Badge
      LeadingIcon={() => <DocumentIcon />}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with leading icon InboxIcon', () => {
  const component = renderer.create(
    <Badge
      LeadingIcon={() => <InboxIcon />}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with trailing icon BellIcon', () => {
  const component = renderer.create(
    <Badge
      TrailingIcon={() => <BellIcon />}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with trailing icon DocumentIcon', () => {
  const component = renderer.create(
    <Badge
      TrailingIcon={() => <DocumentIcon />}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with rounded none', () => {
  const component = renderer.create(
    <Badge
      rounded="none"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with rounded sm', () => {
  const component = renderer.create(
    <Badge
      rounded="sm"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with rounded full', () => {
  const component = renderer.create(
    <Badge
      rounded="full"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with iconOnly', () => {
  const component = renderer.create(
    <Badge
      iconOnly
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with iconOnly false', () => {
  const component = renderer.create(
    <Badge
      iconOnly={false}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
