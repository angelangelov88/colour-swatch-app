import renderer from 'react-test-renderer'
import { Badge } from "../Badge";
import { DocumentIcon, InboxIcon, BellIcon, InformationCircleIcon } from '@heroicons/react/outline'

it('should render with children 1', () => {
  const component = renderer.create(
    <Badge />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with children 1', () => {
  const component = renderer.create(
    <Badge 
      children="1"
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with children 12', () => {
  const component = renderer.create(
    <Badge 
      children="12"
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with size small', () => {
  const component = renderer.create(
    <Badge 
      size="sm"
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with size large', () => {
  const component = renderer.create(
    <Badge 
      size="lg"
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with colour gray', () => {
  const component = renderer.create(
    <Badge 
      color="gray"
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with colour primary', () => {
  const component = renderer.create(
    <Badge 
      color="primary"
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with colour purple', () => {
  const component = renderer.create(
    <Badge 
      color="purple"
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with colour blue', () => {
  const component = renderer.create(
    <Badge 
      color="blue"
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with colour lightblue', () => {
  const component = renderer.create(
    <Badge 
      color="lightblue"
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with colour cyan', () => {
  const component = renderer.create(
    <Badge 
      color="cyan"
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with colour teal', () => {
  const component = renderer.create(
    <Badge 
      color="teal"
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with colour grene', () => {
  const component = renderer.create(
    <Badge 
      color="green"
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with colour yellow', () => {
  const component = renderer.create(
    <Badge 
      color="yellow"
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with colour red', () => {
  const component = renderer.create(
    <Badge 
      color="red"
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with a leading icon DocumentIcon', () => {
  const component = renderer.create(
    <Badge 
      LeadingIcon={DocumentIcon}
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with leading icon InboxIcon', () => {
  const component = renderer.create(
    <Badge 
      LeadingIcon={InboxIcon}
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with trailing icon BellIcon', () => {
  const component = renderer.create(
    <Badge 
      TrailingIcon={BellIcon}
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with trailing icon DocumentIcon', () => {
  const component = renderer.create(
    <Badge 
      TrailingIcon={DocumentIcon}
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with rounded none', () => {
  const component = renderer.create(
    <Badge 
      rounded="none"
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with rounded sm', () => {
  const component = renderer.create(
    <Badge 
      rounded="sm"
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with rounded full', () => {
  const component = renderer.create(
    <Badge 
      rounded="full"
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with iconOnly', () => {
  const component = renderer.create(
    <Badge 
      iconOnly={true}
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with iconOnly false', () => {
  const component = renderer.create(
    <Badge 
      iconOnly={false}
  />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});
