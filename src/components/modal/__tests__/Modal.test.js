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

