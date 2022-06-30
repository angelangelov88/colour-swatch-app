import React from 'react';
import renderer from 'react-test-renderer';
import {
  EyeIcon, EyeOffIcon,
} from '@heroicons/react/outline';
import ToggleEye from '../ToggleEye';

it('should render with children 1', () => {
  const component = renderer.create(
    <ToggleEye>
      <EyeIcon />
      <EyeOffIcon />
    </ToggleEye>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
