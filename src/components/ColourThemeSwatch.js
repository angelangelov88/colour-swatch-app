import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { CheckCircleIcon, BanIcon } from "@heroicons/react/outline"

const ColourThemeSwatch = (props) => {
  const { color, className } = props
  const [ clicked, setClicked ] = React.useState(false)
  const handleClick = () => setClicked(!clicked)

  const classes = classNames(
    "flex items-center justify-center w-6 h-6 rounded border group hover:cursor-pointer",
    !clicked && "hover:outline hover:outline-4",
    !clicked && "active:shadow-[inset_0_0_4px_rgba(0,0,0,0.5)]",
    !clicked && "hover:shadow-[0_1px_3px_rgba(112,53,13,0.25)]",
    color === "gray" && "bg-gray-60 text-gray-80 active:text-gray-90 border-gray-80 outline-gray-30",
    color === "primary" && "bg-primary-60 text-primary-80 active:text-primary-90 border-primary-80 outline-primary-30",
    color === "purple" && "bg-purple-60 text-purple-80 active:text-purple-90 border-purple-80 outline-purple-30",
    color === "blue" && "bg-blue-60 text-blue-80 active:text-blue-90 border-blue-80 outline-blue-30",
    color === "lightblue" && "bg-lightblue-60 text-lightblue-80 active:text-lightblue-90 border-lightblue-80 outline-lightblue-30",
    color === "cyan" && "bg-cyan-60 text-cyan-80 active:text-cyan-90 border-cyan-80 outline-cyan-30",
    color === "teal" && "bg-teal-60 text-teal-80 active:text-teal-90 border-teal-80 outline-teal-30",
    color === "green" && "bg-green-60 text-green-80 active:text-green-90 border-green-80 outline-green-30",
    color === "yellow" && "bg-yellow-60 text-yellow-80 active:text-yellow-90 border-yellow-80 outline-yellow-30",
    color === "red" && "bg-red-60 text-red-80 active:text-red-90 border-red-80 outline-red-30",
    color === "void" && "bg-white text-gray-60  border-gray-60 outline-primary-30 active:border-gray-80 active:text-gray-90",
    color === "void" && !clicked && "hover:text-gray-70",
    className
  );

  return (
    <div
    className={classes} 
    onClick={handleClick}
    >
    {color === "void" 
      ?
      <span className="w-5 h5">
        {color === 'void' && !clicked ? <BanIcon /> : <CheckCircleIcon />}
      </span>
      :
      <span className={classNames(
        "group-hover:block",
        clicked ? "block text-white" : "hidden"
      )}>
        <CheckCircleIcon className="w-5 h-5" />
      </span>
    }
    </div>
  )
}

ColourThemeSwatch.defaultProps = {
  color: "primary",
}

ColourThemeSwatch.propTypes = {
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
    "void"
  ]),

}

export { ColourThemeSwatch }