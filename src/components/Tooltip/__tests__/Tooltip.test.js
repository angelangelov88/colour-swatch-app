import renderer from 'react-test-renderer'
import {Tooltip} from "../Tooltip"

it('should render with text to hover over and long html, ', () => {
  const component = renderer.create(
    <Tooltip 
      hoverText="Click here"
    >
      <h3 className="m-1 font-semibold">Info Header</h3>
      <p className="m-1 font-redhat">Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information </p>
      <a href="https://test.com" className="m-1 text-blue-60 dark:text-blue-50">Link</a>
    </Tooltip>  
    );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with text to hover over and little text as children, ', () => {
  const component = renderer.create(
    <Tooltip 
      hoverText="Click for tooltip"
    >
      <h3 className="m-1 font-semibold">Info Header</h3>
      <p className="m-1 font-redhat">Please use this field to add additional information Please use this field to add additional information </p>
      <a href="https://test.com" className="m-1 text-blue-60 dark:text-blue-50">Link</a>       
    </Tooltip>  
    );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with text to hover over and text as children in html, ', () => {
  const component = renderer.create(
    <Tooltip 
      hoverText="Click for tooltip"
    >
      <p className="m-1 font-redhat">Please use this field to add additional information </p>
    </Tooltip>    
    );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});


it('should render with text to hover over and text as children prop, ', () => {
  const component = renderer.create(
    <Tooltip 
      hoverText="Click for tooltip"
      children="Please use this field to add additional information"
    />    
    );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});

it('should render with long text as text on hover and long text as children, ', () => {
  const component = renderer.create(
    <Tooltip 
      hoverText="Please use this field to add additional information"
      children="Please use this field to add additional information Please use this field to add additional information Please use this field to add additional informationPlease use this field to add additional informationPlease use this field to add additional informationPlease use this field to add additional informationPlease use this field to add additional information Please use this field to add additional informationPlease use this field to add additional informationPlease use this field to add additional informationPlease use this field to add additional information"
    />    
    );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});

