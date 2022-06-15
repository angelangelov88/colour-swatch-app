import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Tooltip = (props) => {
  let {
    className,
    children,
    hoverText,
  } = props

  const [x, setX] = React.useState()
  const [y, setY] = React.useState()

  const tooltipHoverFunction = (e) => {
    let x = e.clientX
    let y = e.clientY
    setX(x-300)
    setY(y-140)  
  }
  
  const classes = classNames(
    "relative pt-2 font-ibm text-gray-50 group",
    "hover:text-gray-70",
    className
  )

  const tooltipClasses = classNames(
    "hidden absolute w-fit max-w-xs flex-col justify-evenly items-center rounded-lg shadow-lg p-2 bg-white dark:bg-gray-130 text-gray-80 dark:text-gray-10 text-sm text-center",
    "group-hover:flex",
    className
  )

  return (
    <div 
      className={classes}
      onMouseMove={tooltipHoverFunction}
    >
      <div className="cursor-pointer w-max">{hoverText}</div>
      <div className={tooltipClasses} style={{left:`${x}px`,top:`${y}px`}}>{children}</div>
    </div>
  )
}

Tooltip.defaultProps = {
  children: undefined,
  hoverText: "Click here"
}

Tooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  hoverText: PropTypes.string,
}

export { Tooltip }
