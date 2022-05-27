import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { CheckCircleIcon, BanIcon } from '@heroicons/react/outline'
import { useState } from 'react'

const BanIconComponent = (props) => {
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
    clicked && "text-gray-80",
    !clicked && "hover:outline hover:outline-4 hover:shadow-sm hover:text-gray-70 active:shadow-[inset_0_0_4px_rgba(0,0,0,0.5)] active:border-gray-80 active:text-gray-90",   

    color === 'void' && 'bg-white text-gray-60  border-gray-60 outline-primary-30',

    className
  );

  return (
    <div>
      <p>{color}</p>
      <div
        className={classes} 
        onClick={clickFunction}
      >
        <span className="w-5 h5">
          {color === 'void' && !clicked ? <BanIcon /> : <CheckCircleIcon />}
        </span>
      </div>
    </div>
  )
}

BanIconComponent.defaultProps = {
  color: "primary",
}

BanIconComponent.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "void",
  ]),
  
}

export { BanIconComponent }
