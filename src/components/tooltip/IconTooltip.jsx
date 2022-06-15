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

    let charCount = 0
    const charCountFunction = () => {
      for (let i=0; i<children.length; i++) {
        charCount += (children[i].props.children.length)
      }
    }
    charCountFunction()

  const classes = classNames(
    "relative p-2 flex font-ibm text-gray-50 group",
    "border-rose-500 border border-solid",
    clicked && "text-gray-70",
    selected === "hover" && "hover:text-gray-70",
    className
  )

  const tooltipClasses = classNames(
    clicked ? "flex" : "hidden",
    selected === "hover" && "group-hover:flex",
    "absolute w-64 flex-col justify-evenly items-center p-2 rounded-lg shadow-lg bg-white dark:bg-gray-130 text-gray-80 dark:text-gray-10 text-sm text-center",
    "after:absolute after:content:none after:border-[10px] after:border-transparent",
    (pointerPosition === "bottom" && arrowPosition === "centre") && "bottom-10 -left-[108px] -ml-0.5 after:left-[46%] after:-bottom-[8px] after:border-b-0 after:border-t-white dark:after:border-t-gray-130",
    (pointerPosition === "bottom" && arrowPosition === "left") && "bottom-10 -left-[10px] after:left-[7%] after:-bottom-[8px] after:border-b-0 after:border-t-white dark:after:border-t-gray-130",
    (pointerPosition === "bottom" && arrowPosition === "right") && "bottom-10 -right-2 -ml-0.5 after:right-[7%] after:-bottom-[8px] after:border-b-0 after:border-t-white dark:after:border-t-gray-130",
    pointerPosition === "top" && "top-10 -left-[105px] -ml-0.5 after:left-[45%] after:-top-4 after:border-b-white after:border-t-8 dark:after:border-b-gray-130",
    pointerPosition === "left" && "max-w-2xl h-40 -top-[64px] left-10 after:-left-4 after:bottom-[43%] after:border-r-white after:border-t-10 after:border-l-8 dark:after:border-r-gray-130",
    ((pointerPosition === "left" || "right") && charCount > 190) && "w-auto",
    pointerPosition === "right" && "-top-[72px] -left-[260px] -mt-0.5 after:-right-5 after:bottom-[44%] after:border-b-8 after:border-l-white dark:after:border-l-gray-130",
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
