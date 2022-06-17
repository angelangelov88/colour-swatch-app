import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Tooltip = (props) => {
  let {
    className,
    children,
    text,
  } = props

  const [x, setX] = React.useState(0)
  const [y, setY] = React.useState(0)

  const HandleTooltipPosition = (e) => {
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
    "hidden absolute w-fit max-w-xs flex-col justify-evenly items-center rounded-lg shadow-[2px_4px_17px_-5px_rgba(97,97,98)] p-2 bg-white dark:bg-gray-130 text-gray-80 dark:text-gray-10 text-sm text-center",
    "group-hover:flex",
    className
  )

  return (
    <div 
      className={classes}
      onMouseMove={HandleTooltipPosition}
    >
      <div className="cursor-pointer w-max">{children}</div>
      <div className={tooltipClasses} style={{left:`${x}px`,top:`${y}px`}}>{text}</div>
    </div>
  )
}

Tooltip.defaultProps = {
  children: undefined,
  text: "Click here"
}

Tooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  text: PropTypes.node,
}

export { Tooltip }
