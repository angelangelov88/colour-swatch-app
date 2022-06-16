import renderer from 'react-test-renderer'
import {IdentifierIcon} from "../IdentifierIcon"
import { DocumentIcon } from '@heroicons/react/outline'

it('should render with default props', () => {
  const component = renderer.create(
    <IdentifierIcon />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with color gray', () => {
  const component = renderer.create(
    <IdentifierIcon 
      color="gray" 
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with color primary', () => {
  const component = renderer.create(
    <IdentifierIcon 
      color="primary" 
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with color purple', () => {
  const component = renderer.create(
    <IdentifierIcon 
      color="purple" 
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with color blue', () => {
  const component = renderer.create(
    <IdentifierIcon 
      color="blue" 
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with color lightblue', () => {
  const component = renderer.create(
    <IdentifierIcon 
      color="lightblue" 
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with color cyan', () => {
  const component = renderer.create(
    <IdentifierIcon 
      color="cyan" 
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with color teal', () => {
  const component = renderer.create(
    <IdentifierIcon 
      color="teal" 
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with color green', () => {
  const component = renderer.create(
    <IdentifierIcon 
      color="green" 
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with color yellow', () => {
  const component = renderer.create(
    <IdentifierIcon 
      color="yellow" 
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with color red', () => {
  const component = renderer.create(
    <IdentifierIcon 
      color="red" 
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with size xs', () => {
  const component = renderer.create(
    <IdentifierIcon 
      size="xs"
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('should render with size sm', () => {
  const component = renderer.create(
    <IdentifierIcon 
      size="sm"
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with size md', () => {
  const component = renderer.create(
    <IdentifierIcon 
      size="md"
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with size lg', () => {
  const component = renderer.create(
    <IdentifierIcon 
      size="lg"
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with type icon and DocumentIcon', () => {
  const component = renderer.create(
    <IdentifierIcon 
      type="icon"
      Icon={DocumentIcon}
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with type initials', () => {
  const component = renderer.create(
    <IdentifierIcon 
      type="initials"
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with status indicator', () => {
  const component = renderer.create(
    <IdentifierIcon 
      statusIndicator={true}
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render without status indicator', () => {
  const component = renderer.create(
    <IdentifierIcon 
      statusIndicator={false}
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with status true', () => {
  const component = renderer.create(
    <IdentifierIcon 
      status={true}
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with status false', () => {
  const component = renderer.create(
    <IdentifierIcon 
      status={false}
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with initials DA', () => {
  const component = renderer.create(
    <IdentifierIcon 
      initials="DA"
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with initials PH', () => {
  const component = renderer.create(
    <IdentifierIcon 
      initials="PH"
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})



