import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Badge = (props) => {
  let {
    children,
    className,
    size,
    color,
    LeadingIcon,
    TrailingIcon,
    saturation,
    rounded,
    leadingIcon,
    trailingIcon,
    iconOnly
  } = props

  const classes = classNames(
    "w-20 h-10 flex justify-center items-center rounded-lg",
    color === "gray" && "bg-gray-60",
    color === "primary" && "bg-primary-60",
    color === "purple" && "bg-purple-60",
    color === "blue" && "bg-blue-60",
    color === "lightblue" && "bg-lightblue-60",
    color === "cyan" && "bg-cyan-60",
    color === "teal" && "bg-teal-60",
    color === "green" && "bg-green-60",
    color === "yellow" && "bg-yellow-60",
    color === "red" && "bg-red-60",
    className
  )

  return (
    <div className={classes}>
      <LeadingIcon className="w-8 h-8 text-white" />
      <div className=" text-white">{children}</div>
      <TrailingIcon className="w-8 h-8 text-white" />
    </div>
  )
}

Badge.defaultProps = {
  children: undefined,
  size: "lg",
  color: "primary",
  saturation: true,
  rounded: "full",
  leadingIcon: true,
  trailingIcon: true,
  iconOnly: false
}

Badge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(["sm","lg",]),
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
  LeadingIcon: PropTypes.object,
  TrailingIcon: PropTypes.object,
  saturation: PropTypes.bool,
  rounded: PropTypes.oneOf(["none","sm","full",]),
  leadingIcon: PropTypes.bool,
  trailingIcon: PropTypes.bool,
  iconOnly: PropTypes.bool
}

export { Badge }
