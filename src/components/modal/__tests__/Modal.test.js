import React from 'react';
import renderer from 'react-test-renderer';
import Modal from '../Modal';

it('should render with all default settings', () => {
  const component = renderer.create(
    <Modal />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with children just as text and the rest default', () => {
  const component = renderer.create(
    <Modal>Hello there</Modal>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with red colour', () => {
  const component = renderer.create(
    <Modal
      color="red"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with yellow colour', () => {
  const component = renderer.create(
    <Modal
      color="yellow"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with primary colour', () => {
  const component = renderer.create(
    <Modal
      color="primary"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with green colour', () => {
  const component = renderer.create(
    <Modal
      color="green"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with info text and heading in it saying: Test which is bold and warning text here', () => {
  const component = renderer.create(
    <Modal
      text={(
        <p>
          <span className="font-medium">Test:</span>
          {' '}
          Warning text here
        </p>
    )}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with text Warning! which is font-weight 500 and no more text', () => {
  const component = renderer.create(
    <Modal
      text={
        <p><span className="font-medium">Warning:</span></p>
    }
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with text as a string', () => {
  const component = renderer.create(
    <Modal
      text="This is just some text"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with title Open your app', () => {
  const component = renderer.create(
    <Modal
      title="Open your app"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with open prop set to showDialog and onClose to handleClose', () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((initialState) => [initialState, setState]);
  const [showDialog, setShowDialog] = React.useState(false);
  const handleClose = () => setShowDialog(false);
  const component = renderer.create(
    <Modal
      open={showDialog}
      onClose={handleClose}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render with SubmitButton prop set as a plain button and onClick function handleConfirm', () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((initialState) => [initialState, setState]);
  const [showDialog, setShowDialog] = React.useState(false);
  const handleConfirm = () => { alert(123); setShowDialog(false); };
  const component = renderer.create(
    <Modal
      SubmitButton={() => <button onClick={handleConfirm}>button</button>}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
