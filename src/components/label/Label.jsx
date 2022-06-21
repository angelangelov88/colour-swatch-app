import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Label(props) {
  const {
    children,
    size,
    variant,
    className,
  } = props;

  const classes = classNames(
    'font-ibm inline-flex items-center text-xs leading-4 font-medium',
    size === 'sm' && 'px-1 py-0.5 text-xs',
    size === 'lg' && 'px-1.5 py-1 text-sm',
    variant === 'outline' && 'border-2 border-secondary-300',
    className,
  );

  return (
    <span className={classes}>
      {children}
    </span>
  );
}

Label.defaultProps = {
  children: undefined,
  size: 'lg',
  variant: 'fill',
  className: undefined,
};

Label.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['sm', 'lg']),
  variant: PropTypes.oneOf(['fill', 'outline']),
  className: PropTypes.string,
};

export default Label;
export { Label };
