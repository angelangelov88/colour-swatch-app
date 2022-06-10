import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'


const Button = (props) => {
  let {
    children,
    variant,
    size,
    rounded,
    tabIndex,
    type,
    disabled,
    onClick,
    className,
    ariaLabel
  } = props

  const classes = classNames(
    "font-ibm inline-flex items-center font-medium capitalize whitespace-nowrap justify-center border",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light",
    variant === "primary" && "disabled:text-primary-10 text-white hover:bg-primary-blue active:bg-primary-dark disabled:bg-primary-30 bg-primary-light shadow disabled:border-primary-20 border-primary-dark",
    variant === "secondary" && "disabled:text-gray-50 active:text-gray-120 text-gray-90 hover:bg-gray-10 active:bg-gray-20 disabled:bg-gray-10 bg-white shadow border-gray-50",
    variant === "tertiary" && "disabled:text-primary-20 text-primary-light hover:bg-primary-10 active:bg-primary-20 disabled:bg-white bg-white disabled:border-primary-20 border-primary-10",
    size === 'base' && ``,
    size === 'sm' && `text-sm py-2 px-4`,
    size === 'md' && `text-lg py-2.5 px-5`,
    size === 'lg' && `text-xl py-3 px-6`,
    size === 'icon' && `p-2`,
    rounded === 'none' && `rounded-none`,
    rounded === 'sm' && `rounded-sm`,
    rounded === 'md' && `rounded-md`,
    rounded === 'lg' && `rounded-lg`,
    rounded === 'full' && `rounded-full p-2`,
    disabled && "disabled:cursor-default",
    className
  );

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      className={classes}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  children: undefined,
  variant: "primary",
  size: "sm",
  rounded: "full",
  type: "button",
  disabled: false,
  tabIndex: undefined,
  onClick: undefined,
  className: undefined,
  ariaLabel: undefined
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  size: PropTypes.oneOf(["base", "sm", "md", "lg", "icon"]), // @todo base
  rounded: PropTypes.oneOf(["none", "sm", "md", "lg", "full"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  tabIndex: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  ariaLabel: PropTypes.string
}

export { Button }
