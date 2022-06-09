import renderer from 'react-test-renderer'
import {ColourThemeSwatch} from "../ColourThemeSwatch"

it('should render with props color=red', () => {
  const component = renderer.create(
  <ColourThemeSwatch color="red" />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});

it('should render with props color=yellow', () => {
  const component = renderer.create(
  <ColourThemeSwatch color="yellow" />,
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})





