import renderer from 'react-test-renderer'
import {Modal} from "../Modal"
import { BellIcon } from '@heroicons/react/outline'


it('should render with all default settings', () => {
  const component = renderer.create(
  <Modal />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with children as text', () => {
  const component = renderer.create(
    <Modal 
      children="Hello there"
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with children as html', () => {
  const component = renderer.create(
  <Modal 
    children={
      <div>
        <h1>This is a children title</h1>
        <p>This is a children paragraph</p>
        <p>This is the text in the children element</p>
      </div>
    }
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with title', () => {
  const component = renderer.create(
  <Modal 
    title="This is a title"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with text in children"', () => {
  const component = renderer.create(
  <Modal 
    infoTextChildren="This is the text in the children element"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with text in children"', () => {
  const component = renderer.create(
  <Modal 
    infoTextChildren={
      <p><span className="font-medium">Test:</span> Warning text here</p> 
    }
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render in primary"', () => {
  const component = renderer.create(
  <Modal 
    color="primary"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render in green"', () => {
  const component = renderer.create(
  <Modal 
    color="green"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render in yellow"', () => {
  const component = renderer.create(
  <Modal 
    color="yellow"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render in red"', () => {
  const component = renderer.create(
  <Modal 
    color="red"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with btnText Again"', () => {
  const component = renderer.create(
  <Modal 
    btnText="Again"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with BtnIcon bell"', () => {
  const component = renderer.create(
  <Modal 
    BtnIcon={BellIcon}
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with function for the button which displays handled! in console"', () => {
  const component = renderer.create(
  <Modal 
    handleClick={() => {}}
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});
