import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { InformationCircleIcon } from '@heroicons/react/outline'
import { useState } from 'react'

const Tooltip = (props) => {
  let {
    className,
    theme,
    selected,
    elementToClick,
    Icon,
    clickOnText,
    infoHeader,
    infoText,
    link,
    tooltipPosition,
    arrowPosition
  } = props


  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    if (selected === 'click') {
      setClicked(!clicked)
    }
  }

  const classes = classNames(
    "relative font-ibm w-fit text-gray-50 group",
    clicked && "text-gray-70",
    selected === "hover" && "hover:text-gray-70", 
    className
  )

  const tooltipClasses = classNames(
    clicked ? "flex" : "hidden",
    selected === "hover" && "group-hover:flex",
    theme === "light" ? "bg-white text-gray-80" : "bg-black text-white",
    "absolute w-28 h-28 flex-col justify-evenly items-center rounded-lg text-sm shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] after:absolute after:content:none after:border-[10px] after:border-transparent",

    (tooltipPosition === "bottom" && arrowPosition === "centre") && "bottom-8 -left-11 -ml-0.5 after:left-[40.5%] after:-bottom-[8px] after:border-b-0 after:border-t-[white]",
    
    (tooltipPosition === "bottom" && arrowPosition === "centre" && theme === "dark") && "after:border-t-[black]",

    (tooltipPosition === "bottom" && arrowPosition === "left") && "bottom-8 -left-2 after:left-[7%] after:-bottom-[8px] after:border-b-0 after:border-t-[white]",

    (tooltipPosition === "bottom" && arrowPosition === "left" && theme === "dark") && "after:border-t-[black]",

    (tooltipPosition === "bottom" && arrowPosition === "right") && "bottom-8 -right-2 -ml-0.5 after:right-[7%] after:-bottom-[8px] after:border-b-0 after:border-t-[white]",

    (tooltipPosition === "bottom" && arrowPosition === "right" && theme === "dark") && "after:border-t-[black]",

    tooltipPosition === "top" && "top-8 -left-11 -ml-0.5 after:left-[41%] after:-top-4 after:border-b-[white] after:border-t-8",
    
    (tooltipPosition === "top" && theme === "dark") && "after:!border-b-[black]",
    
    tooltipPosition === "left" && "-top-12 left-8 after:-left-4 after:bottom-[40%] after:border-r-[white] after:border-t-10 after:border-l-8",

    (tooltipPosition === "left" && theme === "dark") && "after:border-r-[black] ",

    tooltipPosition === "right" && "-top-11 right-8 -mt-0.5 after:-right-5 after:bottom-[43%] after:border-b-8 after:border-l-[white]",

    (tooltipPosition === "right" && theme === "dark") && "after:border-l-[black] ",

    className
  )

  return ( 
    <div className={classes}>
      {elementToClick === "icon" ?
        <Icon 
          className="w-5 cursor-pointer"
          onClick={handleClick}
        />
        : 
        <div
          className="cursor-pointer"
          onClick={handleClick}
        >
          {clickOnText}
        </div>
      }
      <div className={tooltipClasses}>
        <h3 className="font-semibold">{infoHeader}</h3>
        <p>{infoText}</p>
        <a href={link} className="text-blue-60">Link</a>
      </div>
    </div>
  )
}

Tooltip.defaultProps = {
  theme: "light",
  selected: "hover",
  elementToClick: "icon",
  Icon: {InformationCircleIcon},
  clickOnText: "Please click here",
  infoHeader: "Info Header",
  infoText: "Info Text",
  link: "https://legalesign.com",
  tooltipPosition: "bottom",
  arrowPosition: "centre"
}

Tooltip.propTypes = {
  className: PropTypes.string,
  theme:PropTypes.oneOf([
    "dark",
    "light"
  ]),
  selected: PropTypes.oneOf([
    "hover",
    "click",
  ]),
  elementToClick: PropTypes.oneOf([
    "icon",
    "div"
  ]),
  Icon: PropTypes.object,
  clickOnText: PropTypes.string,
  infoHeader: PropTypes.string,
  infoText: PropTypes.string,
  link: PropTypes.string,
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
