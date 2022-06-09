import renderer from 'react-test-renderer'
import {Tooltip} from "../Tooltip"
import { InformationCircleIcon } from '@heroicons/react/outline'

it('should render with info icon', () => {
  const component = renderer.create(
  <Tooltip 
    Icon={InformationCircleIcon}
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});

it('should render with info icon and under the icon', () => {
  const component = renderer.create(
  <Tooltip 
    Icon={InformationCircleIcon}
    tooltipPosition="top"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('should render with text instead of icon', () => {
  const component = renderer.create(
  <Tooltip 
    clickOnText="Click here"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render on click and with icon', () => {
  const component = renderer.create(
  <Tooltip 
    selected="click"
    Icon={InformationCircleIcon}
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should render with hover and text', () => {
  const component = renderer.create(
  <Tooltip 
    selected="hover"
    clickOnText="Click here"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})



