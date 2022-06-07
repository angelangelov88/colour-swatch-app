import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { AddRemoveBtnComponent } from './AddRemoveBtnComponent'

const Tag = (props) => {
  let {
    children,
    className,
    size,
    color,
    dot,
    iconType,
    iconSize
  } = props

  const classes = classNames(
    "font-ibm inline-flex items-center font-medium rounded-full",
    size === "sm" && "px-2 py-0.5 text-xs",
    size === "lg" && "px-3 py-1 text-sm",
    color === "primary" && "bg-primary-20 text-primary-90",
    color === "gray" && "bg-gray-20 text-gray-90",
    color === "purple" && "bg-purple-20 text-purple-90",
    color === "blue" && "bg-blue-20 text-blue-90",
    color === "lightblue" && "bg-lightblue-20 text-lightblue-90",
    color === "cyan" && "bg-cyan-20 text-cyan-90",
    color === "teal" && "bg-teal-20 text-teal-90",
    color === "green" && "bg-green-20 text-green-90",
    color === "yellow" && "bg-yellow-20 text-yellow-90",
    color === "red" && "bg-red-20 text-red-90",
    
    className
  );

  const dotClasses = classNames(
    "w-1.5 h-1.5 mr-2 rounded-lg",
    color === "primary" && "bg-primary-60",
    color === "gray" && "bg-gray-60",
    color === "purple" && "bg-purple-60",
    color === "blue" && "bg-blue-60",
    color === "lightblue" && "bg-lightblue-60",
    color === "cyan" && "bg-cyan-60",
    color === "teal" && "bg-teal-60",
    color === "green" && "bg-green-60",
    color === "yellow" && "bg-yellow-60",
    color === "red" && "bg-red-60",
    dot === true ? "block" : "hidden",
    className
  )

  return (
    <div className={classes}>
      <span className={dotClasses}></span>
        <span className="mr-1">{children}</span>
        <AddRemoveBtnComponent 
          color={color}
          icon={iconType}
          iconSize={iconSize}
        />
      </div>
  )
}

Tag.defaultProps = {
  children: "Tag",
  size: "lg",
  color: 'primary',
  dot: true,
  iconType: "x",
  iconSize: "lg"
}

Tag.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"]),
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
  dot: PropTypes.bool,
  iconType: PropTypes.oneOf(["plus","x","none"]),
  iconSize: PropTypes.oneOf(["sm", "lg"]),
  // removeButton: PropTypes.bool, // @todo
  // outline: PropTypes.bool, // @todo
  // mode: PropTypes.oneOf(['light', 'dark']), // @todo
  // removeAdd: PropTypes.oneOf(["remove", "add"]), // @todo
  // iconOnly: PropTypes.bool, // @todo
}

export { Tag }