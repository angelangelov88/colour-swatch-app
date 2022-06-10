import renderer from 'react-test-renderer'
import {Modal} from "../Modal"

it('should render with children just as text and the rest default', () => {
  const component = renderer.create(
  <Modal 
    children="Hello there"
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with red info text and title "My new title"', () => {
  const component = renderer.create(
  <Modal 
    title="My new title"
    infoTextColor="red"
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with green info text and heading in it saying: Test', () => {
  const component = renderer.create(
  <Modal 
    infoTextColor="yellow"
    infoTextChildren={
      <p><span className="font-medium">Test:</span> Warning text here</p> 
    }
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with red color and text Warning! which is font-weight 500 and no more text', () => {
  const component = renderer.create(
  <Modal 
    infoTextColor="red"
    infoTextChildren={
      <p><span className="font-medium">Warning:</span></p> 
    }
  />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with all default settings', () => {
  const component = renderer.create(
  <Modal />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with yellow color and title "Open your app"', () => {
  const component = renderer.create(
  <Modal 
    title="Open your app"
    infoTextColor="yellow"
    />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


