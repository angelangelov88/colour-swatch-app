import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Tooltip = (props) => {
  let {
    className,
    children,
    selected,
    Icon,
    clickOnText,
    tooltipPosition,
    arrowPosition
  } = props

  const [clicked, setClicked] = React.useState(false)

  const handleClick = () => {
    if (selected === 'click') {
      setClicked(!clicked)
    }
  }

  const classes = classNames(
    "relative font-ibm w-fit pt-2 text-gray-50 group",
    clicked && "text-gray-70",
    selected === "hover" && "hover:text-gray-70",
    className
  )

  const tooltipClasses = classNames(
    clicked ? "flex" : "hidden",
    selected === "hover" && "group-hover:flex",
    "bg-white dark:bg-gray-130 text-gray-80 dark:text-gray-10 text-sm text-center p-2",
    "absolute min-w-[112px] min-h-[112px] flex-col justify-evenly items-center rounded-lg shadow-lg",
    "after:absolute after:content:none after:border-[10px] after:border-transparent",
    (tooltipPosition === "bottom" && arrowPosition === "centre") && "bottom-8 -left-11 -ml-0.5 after:left-[40.5%] after:-bottom-[8px] after:border-b-0 after:border-t-white dark:after:border-t-gray-130",
    (tooltipPosition === "bottom" && arrowPosition === "left") && "bottom-8 -left-2 after:left-[7%] after:-bottom-[8px] after:border-b-0 after:border-t-white dark:after:border-t-gray-130",
    (tooltipPosition === "bottom" && arrowPosition === "right") && "bottom-8 -right-2 -ml-0.5 after:right-[7%] after:-bottom-[8px] after:border-b-0 after:border-t-white dark:after:border-t-gray-130",
    tooltipPosition === "top" && "top-8 -left-11 -ml-0.5 after:left-[41%] after:-top-4 after:border-b-white after:border-t-8 dark:after:border-b-gray-130",
    tooltipPosition === "left" && "-top-12 left-8 after:-left-4 after:bottom-[40%] after:border-r-white after:border-t-10 after:border-l-8 dark:after:border-r-gray-130",
    tooltipPosition === "right" && "-top-11 right-8 -mt-0.5 after:-right-5 after:bottom-[43%] after:border-b-8 after:border-l-white dark:after:border-l-gray-130",
    className
  )

  return (
    <div className={classes}>
      {Icon &&
        <Icon
          className="w-5 cursor-pointer"
          onClick={handleClick}
        />
      }
      {clickOnText &&
        <div
          className="cursor-pointer w-max"
          onClick={handleClick}
        >
          {clickOnText}
        </div>
      }
      <div className={tooltipClasses}>{children}</div>
    </div>
  )
}

Tooltip.defaultProps = {
  children: undefined,
  selected: "hover",
  tooltipPosition: "bottom",
  arrowPosition: "centre"
}

Tooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  selected: PropTypes.oneOf(["hover", "click"]),
  Icon: PropTypes.object,
  clickOnText: PropTypes.string,
  tooltipPosition: PropTypes.oneOf([
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

export { Tooltip }
