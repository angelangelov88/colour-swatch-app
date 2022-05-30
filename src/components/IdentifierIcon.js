import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { DocumentIcon } from '@heroicons/react/outline'

const IdentifierIcon = (props) => {
  let {
    color,
    className,
    size,
    type,
    statusIndicator,
    status,
    initials
  } = props

  const classes = classNames(
    "font-ibm flex items-center justify-center rounded-full hover:cursor-pointer text-white uppercase relative",
    size === "xs" && "w-8 h-8 text-xs", 
    size === "sm" && "w-9 h-9 text-base",
    size === "md" && "w-10 h-10 text-lg",
    size === "lg" && "w-11 h-11 text-xl",
    color === "gray" && "bg-gray-60",
    color === "primary" && "bg-primary-50",
    color === "purple" && "bg-purple-50",
    color === "blue" && "bg-blue-50",
    color === "lightblue" && "bg-lightblue-60",
    color === "cyan" && "bg-cyan-60",
    color === "teal" && "bg-teal-60",
    color === "green" && "bg-green-60",
    color === "yellow" && "bg-yellow-60",
    color === "red" && "bg-red-50",

    className
  )

  const dotClasses = classNames(
    "absolute bottom-0 right-0 rounded-full",
    "shadow-[0_0_0_2px_rgb(255,255,255)]",
    (size === "xs" || size === "sm") ? "w-2 h-2" : "w-2.5 h-2.5",
    !statusIndicator && "hidden",
    status ? "bg-green-50" : "bg-gray-30"
  )

  const iconClasses = classNames(
    size === "xs" && "w-4",
    size === "sm" && "w-5",
    size === "md" && "w-5",
    size === "lg" && "w-6",
  )

  return (  
    <div className={classes}>
      <span className="">
        {
          type === "initials" ? 
          <p className="">{initials}</p> :
          <DocumentIcon className={iconClasses} />
        }
        <p className={dotClasses}></p>
      </span>
    </div>
  )
}

IdentifierIcon.defaultProps = {
  color: "primary",
  size: "lg",
  type: "initials",
  statusIndicator: true,
  status: true
}

IdentifierIcon.propTypes = {
  className: PropTypes.string,
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
    "void",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  type: PropTypes.oneOf(["initials", "icon"]),
  statusIndicator: PropTypes.bool,
  status: PropTypes.bool,
  initials: PropTypes.string
}

export { IdentifierIcon }