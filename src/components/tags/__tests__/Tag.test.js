import renderer from 'react-test-renderer'
import {Tag} from "../Tag"

it('should render a large size tag with dot, icon(remove) and children as text', () => {
  const component = renderer.create(
  <Tag 
    children="Tag"
    size="lg"
    dot={true}
    icon={true}
    iconType="remove"
    iconOnly={false}
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a large size tag with icon(add) only', () => {
  const component = renderer.create(
  <Tag 
    children="Tag"
    size="lg"
    dot={true}
    icon={true}
    iconType="add"
    iconOnly={true}
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a small size tag with dot, icon(remove) and children as text', () => {
  const component = renderer.create(
  <Tag 
    children="Tag"
    size="sm"
    dot={true}
    icon={true}
    iconType="remove"
    iconOnly={false}
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a large size tag with dot and children as text', () => {
  const component = renderer.create(
  <Tag 
    children="Tag"
    size="lg"
    dot={true}
    icon={false}
    iconType="remove"
    iconOnly={false}
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a large size tag with icon(remove) and children as text', () => {
  const component = renderer.create(
  <Tag 
    children="Tag"
    size="lg"
    dot={false}
    icon={true}
    iconType="remove"
    iconOnly={false}
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a small size tag with children as text only (no icon or dot)', () => {
  const component = renderer.create(
  <Tag 
    children="Tag"
    size="sm"
    dot={false}
    icon={false}
    iconType="remove"
    iconOnly={false}
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a large size tag with icon(add) and children as text', () => {
  const component = renderer.create(
  <Tag 
    children="Tag"
    size="lg"
    dot={false}
    icon={true}
    iconType="add"
    iconOnly={false}
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a large size tag with dot, icon(remove) and text that states - Add me', () => {
  const component = renderer.create(
  <Tag 
    children="Add me"
    size="lg"
    dot={true}
    icon={true}
    iconType="remove"
    iconOnly={false}
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a small size tag with dot and text', () => {
  const component = renderer.create(
  <Tag 
    children="Add me"
    size="sm"
    dot={true}
    icon={false}
    iconType="remove"
    iconOnly={false}
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a small size tag with text that states - Add me', () => {
  const component = renderer.create(
  <Tag 
    children="Add me"
    size="sm"
    dot={false}
    icon={false}
    iconType="remove"
    iconOnly={false}
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a large size tag with dot and text added as div', () => {
  const component = renderer.create(
  <Tag 
    children=""
    size="lg"
    dot={true}
    icon={false}
    iconType="remove"
    iconOnly={false}
  >Add Tag</Tag>,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


