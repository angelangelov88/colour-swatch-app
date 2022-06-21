import React from 'react';
import renderer from 'react-test-renderer';
import {
  DocumentIcon,
} from '@heroicons/react/outline';
import { Button } from '../Button';

it('should render with default', () => {
  const component = renderer.create(
    <Button />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with children Text', () => {
  const component = renderer.create(
    <Button>Text</Button>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with children DocumentIcon', () => {
  const component = renderer.create(
    <Button><DocumentIcon className="w-5 h-5" /></Button>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with outline', () => {
  const component = renderer.create(
    <Button
      outline
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render without outline', () => {
  const component = renderer.create(
    <Button
      outline={false}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with variant primary', () => {
  const component = renderer.create(
    <Button
      variant="primary"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with variant secondary', () => {
  const component = renderer.create(
    <Button
      variant="secondary"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with variant tertiary', () => {
  const component = renderer.create(
    <Button
      variant="tertiary"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with size base', () => {
  const component = renderer.create(
    <Button
      size="base"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with size sm', () => {
  const component = renderer.create(
    <Button
      size="sm"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with size md', () => {
  const component = renderer.create(
    <Button
      size="md"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with size lg', () => {
  const component = renderer.create(
    <Button
      size="lg"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with size icon', () => {
  const component = renderer.create(
    <Button
      size="icon"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with rounded none', () => {
  const component = renderer.create(
    <Button
      rounded="none"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with rounded sm', () => {
  const component = renderer.create(
    <Button
      rounded="sm"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with rounded md', () => {
  const component = renderer.create(
    <Button
      rounded="md"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with rounded lg', () => {
  const component = renderer.create(
    <Button
      rounded="lg"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with rounded full', () => {
  const component = renderer.create(
    <Button
      rounded="full"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with type button', () => {
  const component = renderer.create(
    <Button
      type="button"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with type submit', () => {
  const component = renderer.create(
    <Button
      type="submit"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with type reset', () => {
  const component = renderer.create(
    <Button
      type="reset"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with disabled true', () => {
  const component = renderer.create(
    <Button
      disabled
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with disabled false', () => {
  const component = renderer.create(
    <Button
      disabled={false}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with tabIndex 0', () => {
  const component = renderer.create(
    <Button
      tabIndex="0"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with disabled false', () => {
  const component = renderer.create(
    <Button
      onClick={() => {}}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with className which makes the colour of the text red', () => {
  const component = renderer.create(
    <Button
      className="text-red-50"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with arialabel', () => {
  const component = renderer.create(
    <Button
      ariaLabel="this is a button"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
