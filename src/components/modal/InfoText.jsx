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
    "my-6 py-5 px-6 text-sm font-medium",
    color === "primary" && "text-primary-100 bg-primary-10 shadow-[inset_6px_0px_0px_#4456F6]",
    color === "green" && "text-green-100 bg-green-10 shadow-[inset_6px_0px_0px_#46DBAA]",
    color === "yellow" && "text-yellow-100 bg-yellow-10 shadow-[inset_6px_0px_0px_#F0B618]",
    color === "red" && "text-red-100 bg-red-10 shadow-[inset_6px_0px_0px_#F64A44]",
    className
  )

  return (
    <div className={classes}>
      <p>{ children }</p>
    </div>
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
