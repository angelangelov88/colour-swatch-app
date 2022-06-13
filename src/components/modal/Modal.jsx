import React from 'react'
import PropTypes from 'prop-types'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { XIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { Button } from '../button/Button'
import { InfoText } from './InfoText'

const Modal = (props) => {
  let {
    children,
    title,
    infoTextColor,
    infoTextChildren,
  } = props

  const [open, setOpen] = useState(false)

  function closeModal() {
    setOpen(false)
  }

  function openModal() {
    setOpen(true)
  }

  return (
    <>
      <div onClick={openModal}>Open Modal</div>
      <Transition appear show={open} as={Fragment}>
        <Dialog className="flex justify-center" open={open} onClose={closeModal}>
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
          <Dialog.Panel className="absolute top-[calc(100vh-90%)] w-[703px] h-[527px] font-ibm flex flex-col py-6 bg-white border border-gray-20 rounded-lg shadow-2xl">
            <Dialog.Title>
              <p className="text-3xl font-medium px-6">{title}</p>
              <span onClick={closeModal}>
                <XIcon 
                  className="absolute top-6 right-6 w-7 h-7 text-gray-50 hover:cursor-pointer" 
                />
              </span>
            </Dialog.Title>
            <InfoText 
              color={infoTextColor} 
              children={infoTextChildren}
            />
            <div className="h-[20rem] mb-6">
              {children}
            </div>
            <div className="flex justify-end pr-6">
              <Button 
                children="Cancel"
                className="mr-6"
                variant="secondary"
                rounded="lg"
                tabIndex="0"
                onClick={closeModal}
              />
              <Button rounded="lg" tabIndex="0">
                <p>Continue</p>
                <ChevronRightIcon className="w-5 h-5 ml-1 -mr-2" />
              </Button>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </>
  )
}

Modal.defaultProps = {
  children: undefined,
  title: "Title",
  infoTextColor: "primary",
  infoTextChildren: "There are a few ways to get started with a new document in Legalesign. Start by telling us what you’d like to do:",
}

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  infoTextColor: PropTypes.oneOf([
    "primary",
    "green",
    "yellow",
    "red",
  ]),
  infoTextChildren: PropTypes.node,
}

export { Modal }
