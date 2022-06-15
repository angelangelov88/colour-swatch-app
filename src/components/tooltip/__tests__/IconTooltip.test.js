import renderer from 'react-test-renderer'
import {IconTooltip} from "../IconTooltip"
import { BanIcon, BellIcon, DocumentIcon, InboxIcon, InformationCircleIcon } from '@heroicons/react/outline'

it('should render with info icon, text and pointerPosition default/bottom', () => {
  const component = renderer.create(
  <IconTooltip 
    Icon={InformationCircleIcon}
    children="Tooltip Text"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});

it('should render with info icon, pointerPosition top of the icon and the text in children', () => {
  const component = renderer.create(
  <IconTooltip 
    Icon={InformationCircleIcon}
    pointerPosition="top"
    children="Tooltip Text"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('should render with info icon and long text', () => {
  const component = renderer.create(
  <IconTooltip 
    Icon={InformationCircleIcon}
    children='Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information '
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render on click and with info icon', () => {
  const component = renderer.create(
  <IconTooltip 
    selected="click"
    Icon={InformationCircleIcon}
    children="Tooltip text"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with hover, info icon and text on the right of the tooltip(left pointerPosition)', () => {
  const component = renderer.create(
    <IconTooltip 
      selected="hover"
      Icon={InformationCircleIcon}
      pointerPosition="left"
    >
      <h3 className="m-1 font-semibold">Info Header</h3>
      <p className="m-1 font-redhat">Please use this field to add additional information Please use this field to add additional information </p>
      <a href="https://test.com" className="m-1 text-blue-60 dark:text-blue-50">Link</a>
    </IconTooltip>
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with hover, Inbox icon, text and position bottom of the tooltip', () => {
  const component = renderer.create(
  <IconTooltip 
    selected="hover"
    Icon={InboxIcon}
    children="Tooltip Text"
    pointerPosition="top"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with hover, document icon, text as html and pointerPosition bottom', () => {
  const component = renderer.create(
  <IconTooltip 
    selected="hover"
    Icon={DocumentIcon}
    pointerPosition="bottom"
  >
    <h1>Title</h1>
    <p>This is a paragraph</p>
    <a href="#">Link to nowhere</a>
  </IconTooltip>
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with hover, document icon, text as html and pointerPosition bottom with arrow position right', () => {
  const component = renderer.create(
  <IconTooltip 
    selected="hover"
    Icon={DocumentIcon}
    pointerPosition="bottom"
    arrowPosition="right"
  >
    <h1>Title</h1>
    <p>This is a paragraph</p>
    <a href="#">Link to nowhere</a>
  </IconTooltip>
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with click, inbox icon and html on the left', () => {
  const component = renderer.create(
  <IconTooltip 
    selected="click"
    Icon={InboxIcon}
    pointerPosition="right"
  >
    <h1>Title</h1>
    <p>This is the content</p>
    <p>This is the content</p>
    <p>This is the content</p>
    <a href="#">Link supposed to be here</a>
  </IconTooltip>
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with hover(default), info icon and text on the top', () => {
  const component = renderer.create(
  <IconTooltip 
    Icon={InformationCircleIcon}
    children="Tooltip Text"
    pointerPosition="bottom"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with hover, document icon and text on top with right arrow', () => {
  const component = renderer.create(
  <IconTooltip 
    selected="hover"
    Icon={DocumentIcon}
    children="Tooltip Text"
    pointerPosition="bottom"
    arrowPosition="right"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with hover, bell icon and text on top with left arrow', () => {
  const component = renderer.create(
  <IconTooltip 
    selected="hover"
    Icon={BellIcon}
    children="Tooltip Text"
    pointerPosition="bottom"
    arrowPosition="left"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with click, bell icon and text with html on top with left arrow', () => {
  const component = renderer.create(
  <IconTooltip 
    selected="click"
    Icon={BellIcon}
    pointerPosition="bottom"
    arrowPosition="left"
  >
    <h3 className="m-1 font-semibold">Info Header</h3>
    <p className="m-1 font-redhat">Please use this field to add additional information Please use this field to add additional information </p>
    <a href="https://test.com" className="m-1 text-blue-60 dark:text-blue-50">Link</a>
  </IconTooltip>
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})



