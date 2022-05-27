import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { CheckCircleIcon } from '@heroicons/react/outline'
import { useState } from 'react'

const ColourThemeSwatch = (props) => {
  let {
    color,
    className
  } = props

//I used useState hook here to add different styles to the element based on its state
  const [clicked, setClicked] = useState(false)

//This is the function that sets the state
  const clickFunction = () => {setClicked(!clicked)}

//These are the styles for the buttons and I used the state to add some extra styling
  const classes = classNames(
    "font-ibm flex items-center justify-center w-6 h-6 m-2 rounded border border-solid group hover:cursor-pointer",
    clicked && "text-white",
    !clicked && "hover:outline hover:outline-4",
    !clicked && "active:shadow-[inset_0_0_4px_rgba(0,0,0,0.5)]",
    !clicked && "hover:shadow-[0_1px_3px_rgba(112,53,13,0.25)]",
//I should have added this shadow too but could not find a way to add 2 shadows at the same time
    // "hover:shadow-[0_1px_2px_rgba(112,53,13,0.06)]",

//I added primary as a separate colour as it has different colour shade names compared to the rest
    color === 'primary' && 'bg-primary-light text-primary-dark active:text-primary-90 border-primary-dark outline-primary-30',
    
//These are the dynamic colours rules which get their colour from the parent element color props
    color && `bg-${color}-60 text-${color}-80 active:text-${color}-90 border-${color}-80 outline-${color}-30`, 

    className
  );

  return (
    <div >
      <p className='w-16'>{color}</p>
      <div
        className={classes} 
        onClick={clickFunction}
      >
        <span className={classNames(
          "group-hover:block",
          clicked ? "block text-white" : "hidden"
        )}>
          <CheckCircleIcon className="w-5 h-5" />   
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
    "void",
  ]),

}

export { ColourThemeSwatch }
