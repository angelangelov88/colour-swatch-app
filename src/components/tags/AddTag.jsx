import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { AddRemoveBtnComponent } from './AddRemoveBtnComponent'

const AddTag = (props) => {
  let {
    children,
    className,
    size,
    iconType,
    iconSize
  } = props

  const classes = classNames(
    "font-ibm inline-flex items-center font-medium w-20 rounded-full text-gray-90 hover:cursor-pointer hover:text-primary-light active:bg-primary-10 active:cursor-default",
    size === "sm" && "px-2 py-0.5 text-xs",
    size === "lg" && "py-1 text-sm",
    
    className
  );

  return (
    <div className={classes}>
      <AddRemoveBtnComponent 
        icon={iconType}
        iconSize={iconSize}
      />
      <span>{children}</span>
    </div>
  )
}

AddTag.defaultProps = {
  children: "Add Tag",
  size: "lg",
  iconType: "x",
  iconSize: "lg"
}

AddTag.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"]),
  iconType: PropTypes.oneOf(["plus","x","none"]),
  iconSize: PropTypes.oneOf(["sm", "lg"]),
}

export { AddTag }