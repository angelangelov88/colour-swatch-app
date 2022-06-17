import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const IconTooltip = (props) => {
  let {
    className,
    children,
    selected,
    Icon,
    pointerPosition,
    arrowPosition
  } = props

  const [clicked, setClicked] = React.useState(false)

  const handleClick = () => {
    if (selected === 'click') {
      setClicked(!clicked)
    }
  }

  const classes = classNames(
    "relative p-2 flex font-ibm text-gray-50 group",
    clicked && "text-gray-70",
    selected === "hover" && "hover:text-gray-70",
    className
  )

  const tooltipClasses = classNames(
    clicked ? "flex" : "hidden",
    selected === "hover" && "group-hover:flex",
    "absolute flex-col justify-evenly items-center p-2 rounded-lg shadow-[2px_4px_17px_-5px_rgba(97,97,98)] dark:bg-gray-130 text-gray-80 dark:text-gray-10 text-sm text-center",
    "after:absolute after:content:none after:border-[10px] after:border-transparent",
    (pointerPosition === "bottom" && arrowPosition === "centre") && "w-64 bottom-10 -left-[108px] -ml-0.5 after:left-[46%] after:-bottom-[8px] after:border-b-0 after:border-t-white dark:after:border-t-gray-130",
    (pointerPosition === "bottom" && arrowPosition === "left") && "w-64 bottom-10 -left-[10px] after:left-[7%] after:-bottom-[8px] after:border-b-0 after:border-t-white dark:after:border-t-gray-130",
    (pointerPosition === "bottom" && arrowPosition === "right") && "w-64 bottom-10 -left-52 -ml-0.5 after:right-[7%] after:-bottom-[8px] after:border-b-0 after:border-t-white dark:after:border-t-gray-130",
    pointerPosition === "top" && "w-64 top-10 -left-[105px] -ml-0.5 after:left-[45%] after:-top-4 after:border-b-white after:border-t-8 dark:after:border-b-gray-130",
    pointerPosition === "left" && "max-w-xl h-40 -top-[64px] left-10 after:-left-[18px] after:bottom-[43%] after:border-r-white after:border-t-10 after:border-l-8 dark:after:border-r-gray-130",
    pointerPosition === "right" && "max-w-xl h-40 -top-[62px] -left-[682px] -mt-0.5 after:-right-5 after:bottom-[44%] after:border-b-8 after:border-l-white dark:after:border-l-gray-130",
    className
  )


  return (
    <div className={classes}>
      <Icon
        className="w-5 cursor-pointer"
        onClick={handleClick}
      />
      <div className={tooltipClasses}>{children}</div>
    </div>
  )
}

IconTooltip.defaultProps = {
  children: undefined,
  selected: "hover",
  pointerPosition: "bottom",
  arrowPosition: "centre"
}

IconTooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  selected: PropTypes.oneOf(["hover", "click"]),
  Icon: PropTypes.object,
  pointerPosition: PropTypes.oneOf([
    "bottom",
    "top",
    "left",
    "right",
  ]),
  arrowPosition: PropTypes.oneOf([
    "centre",
    "left",
    "right",
  ]),
}

export { IconTooltip }
