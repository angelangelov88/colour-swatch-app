import renderer from 'react-test-renderer'
import {AddRemoveIconComponent} from "../AddRemoveIconComponent"

it('should render a large size green remove icon', () => {
  const component = renderer.create(
  <AddRemoveIconComponent 
    icon="remove"
    color="green"
    iconSize="lg"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a small size red add icon', () => {
  const component = renderer.create(
  <AddRemoveIconComponent 
    icon="add"
    color="red"
    iconSize="sm"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a large size remove icon with gray color', () => {
  const component = renderer.create(
  <AddRemoveIconComponent 
    icon="remove"
    color="gray"
    iconSize="lg"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a small size primary color add icon', () => {
  const component = renderer.create(
  <AddRemoveIconComponent 
    icon="add"
    color="primary"
    iconSize="sm"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a large size teal color icon with default icon (which should be remove)', () => {
  const component = renderer.create(
  <AddRemoveIconComponent 
    color="teal"
    iconSize="lg"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});
