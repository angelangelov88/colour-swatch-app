import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { CheckCircleIcon, BanIcon } from '@heroicons/react/outline'
import { useState } from 'react'


const ColourThemeSwatch = (props) => {
  let {
    color,
    className
  } = props
  const [clicked, setClicked] = useState(false)

  const clickFunction = () => {
    console.log(`${color}`)

    setClicked(!clicked)
    console.log(clicked)
  }

  const classes = classNames(
    clicked && "text-white",

    "font-ibm flex items-center justify-center",

    !clicked && "hover:outline hover:outline-4",
    !clicked && "hover:shadow-[0_1px_3px_rgba(112,53,13,0.25)]",
    // "hover:shadow-[0_1px_2px_rgba(112,53,13,0.06)]",
    
    "group hover:cursor-pointer",
    
    !clicked && "active:shadow-[inset_0_0_4px_rgba(0,0,0,0.5)]",

    "w-6 h-6 m-2 rounded border border-solid",

    color === 'primary' && 'bg-primary-light text-primary-dark active:text-primary-90 border-primary-dark outline-primary-30',
    
    // color === 'gray' && 'bg-gray-60 text-gray-80 active:text-gray-90 border-gray-80 outline-gray-30',
    // color === 'purple' && 'bg-purple-60 text-purple-80 active:text-purple-90 border-purple-80 outline-purple-30',
    // color === 'blue' && 'bg-blue-60 text-blue-80 active:text-blue-90 border-blue-80 outline-blue-30',
    // color === 'lightblue' && 'bg-lightblue-60 text-lightblue-80 active:text-lightblue-90 border-lightblue-80 outline-lightblue-30',
    // color === 'cyan' && 'bg-cyan-60 text-cyan-80 active:text-cyan-90 border-cyan-80',
    // color === 'teal' && 'bg-teal-60 text-teal-80 active:text-teal-90 border-teal-80',
    // color === 'green' && 'bg-green-60 text-green-80  active:text-green-90 border-green-80 outline-green-30',
    // color === 'yellow' && 'bg-yellow-60 text-yellow-80 active:text-yellow-90 border-yellow-80 outline-yellow-30',
    // color === 'red' && 'bg-red-60 text-red-80 active:text-red-90 border-red-80 outline-red-30',
    
    color && `bg-${color}-60 text-${color}-80 active:text-${color}-90 border-${color}-80 outline-${color}-30`,
    
    
    color === 'void' && 'bg-white text-gray-60 active:text-primary-90 border-gray-80 outline-primary-30',

    

    className
    // variant === "primary" && "disabled:text-primary-10 text-white hover:bg-primary-blue active:bg-primary-dark disabled:bg-primary-30 bg-primary-light shadow disabled:border-primary-20 border-primary-dark",
  );


  return (
    <div>
      <p>{color}</p>
      <div
        className={classes} 
        onClick={clickFunction}
      >
      <span className={classNames(
        "group-hover:block",
        clicked ? "block text-white" : "hidden"
      )}>
      {color === 'void' ?
        <BanIcon className={classNames(
          "text-gray-60"
        )}/>

         : <CheckCircleIcon className={classNames(`w-5 h-5`)} />
        }
        
        
      </span>
      </div>
      <div>

      
        </div>

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
    "void",
  ]),
  
}

export { ColourThemeSwatch }
