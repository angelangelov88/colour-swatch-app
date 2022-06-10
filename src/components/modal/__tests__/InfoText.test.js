import renderer from 'react-test-renderer'
import {InfoText} from "../InfoText"

it('should render the element with red text and red background plus the text stated in children', () => {
  const component = renderer.create(
    <InfoText 
    color="red"
    children="This is a test"
  />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render the element in yellow with no text', () => {
  const component = renderer.create(
    <InfoText 
    color="yellow"
    children=""
  />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render the element in green with heading with bold text and text', () => {
  const component = renderer.create(
    <InfoText 
    color="green"
    children={  
      <p><span className="font-medium">Warning:</span> Warning text here</p> 
    }
  />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render the element with default (primary) colour and text', () => {
  const component = renderer.create(
    <InfoText 
    children="This is a test"
  />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render the element with red plus the html stated in children', () => {
  const component = renderer.create(
    <InfoText 
    color="red"
    children={
      <p><span className="font-medium">Warning:</span> Warning text here</p> 
    }
    />
);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});