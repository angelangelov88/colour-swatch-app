import renderer from 'react-test-renderer'
import {Tag} from "../Tag"

it('should render a large size tag with dot, red colour, icon(remove) and children as text', () => {
  const component = renderer.create(
  <Tag 
    children="Tag"
    size="lg"
    color="red"
    dot={true}
    icon={true}
    iconType="remove"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a large size green tag with icon(add) and dot', () => {
  const component = renderer.create(
  <Tag 
    children="Tag"
    size="lg"
    color="green"
    dot={true}
    icon={true}
    iconType="add"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a small size teal tag with dot, icon(remove) and children as text', () => {
  const component = renderer.create(
  <Tag 
    children="Tag"
    size="sm"
    color="teal"
    dot={true}
    icon={true}
    iconType="remove"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a large size yellow tag with dot and children as text', () => {
  const component = renderer.create(
  <Tag 
    children="Tag"
    size="lg"
    color="yellow"
    dot={true}
    icon={false}
    iconType="remove"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a large size cyan tag with icon(remove) and children as text', () => {
  const component = renderer.create(
  <Tag 
    children="Tag"
    size="lg"
    color="cyan"
    dot={false}
    icon={true}
    iconType="remove"
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
    color="cyan"
    dot={false}
    icon={false}
    iconType="remove"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a large size blue tag with icon(add) and children as text', () => {
  const component = renderer.create(
  <Tag 
    children="Tag"
    size="lg"
    color="blue"
    dot={false}
    icon={true}
    iconType="add"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a large size tag with dot, lightblue colour, icon(remove) and text that states - Add me', () => {
  const component = renderer.create(
  <Tag 
    children="Add me"
    size="lg"
    color="lightblue"
    dot={true}
    icon={true}
    iconType="remove"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a small size tag with primary colour, dot and text', () => {
  const component = renderer.create(
  <Tag 
    children="Add me"
    size="sm"
    color="primary"
    dot={true}
    icon={false}
    iconType="remove"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a small size purple tag with text that states - Add me', () => {
  const component = renderer.create(
  <Tag 
    children="Add me"
    size="sm"
    color="purple"
    dot={false}
    icon={false}
    iconType="remove"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render a large size purple tag with dot and text added as div', () => {
  const component = renderer.create(
  <Tag 
    children=""
    size="lg"
    color="purple"
    dot={true}
    icon={false}
    iconType="remove"
  >Add Tag</Tag>,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


