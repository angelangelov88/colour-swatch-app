import renderer from 'react-test-renderer'
import {AddTag} from "../AddTag"

it('should render the tag with its default settings - children: "Add Tag", size: "lg", iconType: "add"', () => {
  const component = renderer.create(
  <AddTag />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});

it('should render the tag with text - This is a tag', () => {
  const component = renderer.create(
  <AddTag 
    children="This is a tag"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});

it('should render a large tag with icon remove', () => {
  const component = renderer.create(
  <AddTag 
    size="lg"
    iconType="remove"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});

it('should render a small tag with text Remove Tag', () => {
  const component = renderer.create(
  <AddTag 
    children="Remove Tag"
    size="sm"
    iconType="remove"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});

it('should render a large tag with remove icon', () => {
  const component = renderer.create(
  <AddTag 
    iconType="remove"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a large tag with remove icon', () => {
  const component = renderer.create(
  <AddTag 
    size="lg"
    iconType="remove"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a small tag with text - New tag', () => {
  const component = renderer.create(
  <AddTag 
    children="New Tag"
    size="sm"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});