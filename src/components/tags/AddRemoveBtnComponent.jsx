import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { PlusIcon, XIcon } from '@heroicons/react/outline'

const AddRemoveBtnComponent = (props) => {
  let {
    className,
    icon,
    color,
    iconSize
  } = props

const classes = classNames(
  "font-ibm flex items-center justify-center rounded-xl hover:cursor-pointer",

  icon === "none" && "hidden",
  iconSize === "sm" ? "w-4 h-4 p-0.5" : "w-5 h-5 p-1",
  color === "primary" && "text-primary-60 hover:text-primary-80 hover:bg-primary-30 active:text-primary-10 active:bg-primary-50",
  color === "gray" && "text-gray-60 hover:text-gray-80 hover:bg-gray-30 active:text-gray-10 active:bg-gray-50",
  color === "purple" && "text-purple-60 hover:text-purple-80 hover:bg-purple-30 active:text-purple-10 active:bg-purple-50",
  color === "blue" && "text-blue-60 hover:text-blue-80 hover:bg-blue-30 active:text-blue-10 active:bg-blue-50",
  color === "lightblue" && "text-lightblue-60 hover:text-lightblue-80 hover:bg-lightblue-30 active:text-lightblue-10 active:bg-lightblue-50",
  color === "cyan" && "text-cyan-60 hover:text-cyan-80 hover:bg-cyan-30 active:text-cyan-10 active:bg-cyan-50",
  color === "teal" && "text-teal-60 hover:text-teal-80 hover:bg-teal-30 active:text-teal-10 active:bg-teal-50",
  color === "green" && "text-green-60 hover:text-green-80 hover:bg-green-30 active:text-green-10 active:bg-green-50",
  color === "yellow" && "text-yellow-60 hover:text-yellow-80 hover:bg-yellow-30 active:text-yellow-10 active:bg-yellow-50",
  color === "red" && "text-red-60 hover:text-red-80 hover:bg-red-30 active:text-red-10 active:bg-red-50",

  className
);

  return (
    <div className={classes}>
    {icon === "plus" ? 
      <PlusIcon />
    :
      <XIcon />
    }
    </div>
  )
}

AddRemoveBtnComponent.defaultProps = {
  icon: "x",
  color: "gray",
  iconSize:"lg"
}

AddRemoveBtnComponent.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(["plus","x","none"]),
  color: PropTypes.oneOf([
    "gray",
    "primary",
    "purple",
    "blue",
    "lightblue",
    "cyan",
    "teal",
    "green",
    "yellow",
    "red",
  ]),
  iconSize: PropTypes.oneOf(["sm", "lg"]),

}

export { AddRemoveBtnComponent }
