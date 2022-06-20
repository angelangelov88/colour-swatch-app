import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

// import { Button } from 'le-component-library';
import { Button } from '../button/Button';

function Modal(props) {
  const {
    className,
    children,
    open,
    onClose,
    title,
    color,
    text,
    SubmitButton,
  } = props;

  const classes = classNames(
    'mb-6 py-5 px-6 text-sm',
    color === 'primary' && 'text-primary-100 bg-primary-10 border-l-8 border-l-primary-60',
    color === 'green' && 'text-green-100 bg-green-10 border-l-8 border-l-green-60',
    color === 'yellow' && 'text-yellow-100 bg-yellow-10 border-l-8 border-l-yellow-60',
    color === 'red' && 'text-red-100 bg-red-10 border-l-8 border-l-red-60',
    className,
  );

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog className="flex justify-center" open={open} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <Dialog.Panel className="absolute top-[calc(100vh-90%)] w-10/12 md:max-h-[60%] max-h-full max-w-2xl overflow-auto font-ibm flex flex-col py-6 bg-white border border-gray-20 rounded-lg shadow-2xl">
          <Dialog.Title className="min-h-[60px]">
            <p className="text-3xl font-medium px-6">{title}</p>
            <button type="button" onClick={onClose}>
              <XIcon
                className="absolute top-6 right-6 w-7 h-7 rounded-sm text-gray-50 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light"
                tabIndex={0}
              />
            </button>
          </Dialog.Title>
          <div className={classes}>{text}</div>
          <div className="pb-6 border-b border-gray-20">
            {children}
          </div>
          <div className="flex justify-end pr-6 pt-6 ">
            <Button
              className="mr-6"
              variant="secondary"
              rounded="lg"
              onClick={onClose}
            >
              Cancel
            </Button>
            {SubmitButton && <SubmitButton />}
          </div>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
}

Modal.defaultProps = {
  className: undefined,
  children: undefined,
  onClose: undefined,
  title: undefined,
  text: undefined,
  SubmitButton: undefined,
  open: false,
  color: 'primary',
};

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'green',
    'yellow',
    'red',
  ]),
  text: PropTypes.node,
  SubmitButton: PropTypes.func,
};

export default Modal;
export { Modal };