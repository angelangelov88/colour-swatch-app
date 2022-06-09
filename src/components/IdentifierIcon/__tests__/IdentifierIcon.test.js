import renderer from 'react-test-renderer'
import {IdentifierIcon} from "../IdentifierIcon"
import { DocumentIcon } from '@heroicons/react/outline'

it('should render with props color=red and Document icon', () => {
  const component = renderer.create(
  <IdentifierIcon 
    color="red" 
    type="icon"
    Icon={DocumentIcon}
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});

it('should render with props color="purple" size="lg" type="initials" statusIndicator={true} status={true} initials="gJ"', () => {
  const component = renderer.create(
  <IdentifierIcon 
    color="purple"
    size="lg"
    type="initials"
    statusIndicator={true}
    status={true}
    initials="gJ" 
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('should render with props color="blue" size="sm" type="icon" Icon={DocumentIcon} statusIndicator={true} status={true}', () => {
  const component = renderer.create(
  <IdentifierIcon 
    color="blue"
    size="sm"
    type="icon"
    Icon={DocumentIcon}
    statusIndicator={true}
    status={true}
    initials="gJ" 
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with props type="initials" statusIndicator={false} initials="AH"', () => {
  const component = renderer.create(
  <IdentifierIcon 
    type="initials"
    statusIndicator={false}
    status={true}
    initials="AH"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with props type="icon" Icon={DocumentIcon} statusIndicator={true} status={false}', () => {
  const component = renderer.create(
  <IdentifierIcon 
    type="icon"
    Icon={DocumentIcon}
    statusIndicator={true}
    status={false}
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with props type="icon" Icon={DocumentIcon} no status', () => {
  const component = renderer.create(
  <IdentifierIcon 
    type="icon"
    Icon={DocumentIcon}
    statusIndicator={false}
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with initals RR, default color, small size, and status offline/gray/false', () => {
  const component = renderer.create(
  <IdentifierIcon 
    size="sm"
    type="initials"
    statusIndicator={true}
    status={false}
    initials="RR"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with yellow color, document icon and online status displayed', () => {
  const component = renderer.create(
  <IdentifierIcon 
    color="yellow"
    type="icon"
    Icon={DocumentIcon}
    statusIndicator={true}
    status={true}
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with small size, initials AF, status shown but offline and purple color', () => {
  const component = renderer.create(
  <IdentifierIcon 
    color="purple"
    size="sm"
    type="initials"
    statusIndicator={true}
    status={false}
    initials="af"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with red color, document icon and no status shown', () => {
  const component = renderer.create(
  <IdentifierIcon 
    color="red"
    type="icon"
    Icon={DocumentIcon}
    statusIndicator={false}
    status={false}
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with default values - primary color, lg, initials, status online but have initials rt instead of the default', () => {
  const component = renderer.create(
  <IdentifierIcon 
    initials="Rt"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})



