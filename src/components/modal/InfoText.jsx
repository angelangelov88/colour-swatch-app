import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const InfoText = (props) => {
  let {
    children,
    className,
    color,
  } = props

  const classes = classNames(
    "my-6 py-5 px-6 text-sm",
    color === "primary" && "text-primary-100 bg-primary-10 border-l-8 border-l-primary-60",
    color === "green" && "text-green-100 bg-green-10 border-l-8 border-l-green-60",
    color === "yellow" && "text-yellow-100 bg-yellow-10 border-l-8 border-l-yellow-60",
    color === "red" && "text-red-100 bg-red-10 border-l-8 border-l-red-60",
    className
  )

  return (
    <div className={classes}>{ children }</div>
  )
}

InfoText.defaultProps = {
  children: "There are a few ways to get started with a new document in Legalesign. Start by telling us what you’d like to do:",
  color: "primary"
}

InfoText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf([
    "primary",
    "green",
    "yellow",
    "red",
  ]),
}

export { InfoText }
