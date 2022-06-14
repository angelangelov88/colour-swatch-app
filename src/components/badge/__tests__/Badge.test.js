import renderer from 'react-test-renderer'
import { Badge } from "../Badge";
import { DocumentIcon, InboxIcon, BellIcon, InformationCircleIcon } from '@heroicons/react/outline'

it('should render with text 1, large size, blue colour, 2 icons(InboxIcon and BellIcon), fully rounded', () => {
  const component = renderer.create(
    <Badge 
      children="1"
      size="lg"
      color="blue"
      LeadingIcon={InboxIcon}
      TrailingIcon={BellIcon}
      rounded="full"
      iconOnly={false}
  />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with text 12, large size, red colour, 1 icon(InformationCircleIcon) as leading icon and be fully rounded', () => {
  const component = renderer.create(
    <Badge 
      children="12"
      size="lg"
      color="red"
      LeadingIcon={InformationCircleIcon}
      rounded="full"
      iconOnly={false}
  />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with no text, small size, green colour, 1 icon(DocumentIcon), fully rounded', () => {
  const component = renderer.create(
    <Badge 
      children=""
      size="sm"
      color="green"
      TrailingIcon={DocumentIcon}
      rounded="full"
      iconOnly={true}
  />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with large size, blue colour, icon only and fully rounded', () => {
  const component = renderer.create(
    <Badge 
      children="1"
      size="lg"
      color="blue"
      LeadingIcon={InboxIcon}
      rounded="full"
      iconOnly={true}
  />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with small size, cyan colour, 2 icons(DocumentIcon and InboxIcon) and not rounded', () => {
  const component = renderer.create(
    <Badge 
      children="1"
      size="sm"
      color="cyan"
      LeadingIcon={DocumentIcon}
      TrailingIcon={InboxIcon}
      rounded="none"
      iconOnly={false}
  />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with text - Legal, small size, gray colour, 2 icons(InboxIcon and BellIcon) and not rounded', () => {
  const component = renderer.create(
    <Badge 
      children="Legal"
      size="sm"
      color="gray"
      LeadingIcon={InboxIcon}
      TrailingIcon={BellIcon}
      rounded="none"
      iconOnly={false}
  />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with large size, blue colour, 2 icons(InboxIcon and BellIcon), sm rounded', () => {
  const component = renderer.create(
    <Badge 
      children="1"
      size="lg"
      color="blue"
      LeadingIcon={InboxIcon}
      TrailingIcon={BellIcon}
      rounded="sm"
      iconOnly={false}
  />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with large size, yellow colour, 1 trailing icon(BellIcon), sm rounded', () => {
  const component = renderer.create(
    <Badge 
      children="1"
      size="lg"
      color="yellow"
      TrailingIcon={BellIcon}
      rounded="sm"
      iconOnly={false}
  />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with large size, purple colour, 2 icons(InboxIcon and BellIcon) and not rounded', () => {
  const component = renderer.create(
    <Badge 
      children="1"
      size="lg"
      color="purple"
      LeadingIcon={InboxIcon}
      TrailingIcon={BellIcon}
      rounded="none"
      iconOnly={false}
  />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with blue colour and one icon only (trailing one) and fully rounded', () => {
  const component = renderer.create(
    <Badge 
      children="1"
      size="lg"
      color="blue"
      TrailingIcon={BellIcon}
      rounded="full"
      iconOnly={true}
  />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with small size, red colour, 1 icon(InboxIcon as leading) and sm rounded', () => {
  const component = renderer.create(
    <Badge 
      children="1"
      size="sm"
      color="red"
      LeadingIcon={InboxIcon}
      rounded="sm"
      iconOnly={false}
  />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with small size, primary colour, 1 icon(DocumentIcon as trailing) and not rounded', () => {
  const component = renderer.create(
    <Badge 
      children="1"
      size="sm"
      color="primary"
      LeadingIcon={InboxIcon}
      TrailingIcon={DocumentIcon}
      rounded="none"
      iconOnly={false}
  />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});
