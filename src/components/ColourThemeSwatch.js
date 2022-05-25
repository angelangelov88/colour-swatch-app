import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { CheckCircleIcon } from '@heroicons/react/outline'


const ColourThemeSwatch = (props) => {
  let {
    color,
    className
  } = props

  const clickFunction = () => {
    console.log('clicked ' + `${color}`)
    
  }

  const classes = classNames(
    "font-ibm flex items-center justify-center",

    "hover:outline hover:outline-8 hover:cursor-pointer",
    "group",

    
    // "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light",

    "w-6 h-6 m-2 rounded-lg border border-solid",

    color === 'primary' && 'bg-primary-blue text-primary-90 border-primary-dark outline-primary-30',

    color === 'gray' && 'bg-gray-60 text-gray-90 border-primary-dark outline-gray-30',
    color === 'purple' && 'bg-purple-60 text-purple-90 border-purple-80 outline-purple-30',
    color === 'blue' && 'bg-blue-60 text-blue-90 border-blue-80 outline-blue-30',
    color === 'lightblue' && 'bg-lightblue-60 text-lightblue-90 border-lightblue-80 outline-lightblue-30',
    color === 'cyan' && 'bg-cyan-60 text-cyan-90 border-cyan-80',
    color === 'teal' && 'bg-teal-60 text-teal-90 border-teal-80',
    color === 'green' && 'bg-green-60 text-green-90 border-green-80 outline-green-30',
    color === 'yellow' && 'bg-yellow-60 text-yellow-90 border-yellow-80 outline-yellow-30',
    color === 'red' && 'bg-red-60 text-red-90 border-red-80 outline-red-30 ',
    // color && `bg-${color}-60 text-${color}-80 border-${color}-80 outline-${color}-30`,

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
      <span>
        <CheckCircleIcon className={classNames(`hidden w-10 h-10 group-hover:block text-${color}-80`)} />
      </span>
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
  ]),
  
}

export { ColourThemeSwatch }
