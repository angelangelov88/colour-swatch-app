import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { XIcon } from '@heroicons/react/outline'
import { Button } from '../button/Button'
import { InfoText } from './InfoText'

const Modal = (props) => {
  let {
    children,
    className,
    title,
    infoTextColor,
    infoTextChildren,
  } = props

  const [open, setOpen] = useState(true)

  function closeModal() {
    setOpen(false)
  }

  function openModal() {
    setOpen(true)
  }

  const classes = classNames(
    "absolute top-[calc(100vh-90%)] w-[703px] h-[527px] font-ibm flex flex-col py-6 bg-white border border-gray-20 rounded-lg shadow-2xl",
    open ? "block" : "hidden",
    className
  )

  return (
    <div className="flex justify-center">
      <Button onClick={openModal} children="open" />
      <Button onClick={closeModal} children="close" />
      <div className={classes}>
        <div>
          <h1 className="text-3xl font-medium px-6">{title}</h1>
          <span onClick={closeModal}>
            <XIcon 
              className="absolute top-6 right-6 w-7 h-7 text-gray-50 hover:cursor-pointer" 
            />
          </span>
        </div>
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
          <Button 
            children="Continue"
            rounded="lg"
            tabIndex="0"
          />
        </div>
      </div>
    </div>

  )
}

Modal.defaultProps = {
  children: undefined,
  title: "Title",
  infoTextColor: "primary",
  infoTextChildren: "There are a few ways to get started with a new document in Legalesign. Start by telling us what you’d like to do:",
}

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  infoTextColor: PropTypes.oneOf([
    "primary",
    "green",
    "yellow",
    "red",
  ]),
  infoTextChildren: PropTypes.string,
}

export { Modal }
