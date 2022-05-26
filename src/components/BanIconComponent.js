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

  const [clicked, setClicked] = useState(false)

  const clickFunction = () => {
    console.log(`${color}`)

    setClicked(!clicked)
    console.log(clicked)
  }

  const classes = classNames(
    clicked && "text-gray-80",

    "font-ibm flex items-center justify-center",

    !clicked && "hover:outline hover:outline-4 hover:shadow-sm",
    "group hover:cursor-pointer",
    
    !clicked && "active:shadow-[inset_0_0_4px_rgba(0,0,0,0.5)]",

    "w-6 h-6 m-2 rounded border border-solid",    
    
    color === 'void' && 'bg-white text-gray-60 active:text-gray-90 border-gray-80 outline-primary-30',

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
      <div>

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
