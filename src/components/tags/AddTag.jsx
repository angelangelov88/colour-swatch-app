import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { AddRemoveIconComponent } from './AddRemoveIconComponent'

const AddTag = (props) => {
  let {
    children,
    className,
    size,
    iconType,
  } = props

  const classes = classNames(
    "font-ibm inline-flex items-center w-max pr-2 font-medium rounded-full text-gray-90 border-4 border-transparent group", 
    "hover:cursor-pointer hover:text-primary-light", 
    "active:bg-primary-10 active:cursor-default", 
    "focus:outline focus:outline-4 focus:outline-primary-10",
    size === "sm" && "h-5 text-xs",
    size === "lg" && "h-6 text-sm",
    className
  )

  return (
    <div className={classes} tabIndex={0}>
      <AddRemoveIconComponent 
        icon={iconType}
        iconSize={size}
        className="text-gray-60 group-hover:text-primary-light"
      />
      <span>{children}</span>
    </div>
  )
}

AddTag.defaultProps = {
  children: "Add Tag",
  size: "lg",
  iconType: "add",
}

AddTag.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"]),
  iconType: PropTypes.oneOf(["add","remove"]),
}

export { AddTag }