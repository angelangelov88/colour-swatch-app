import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

function ToggleEye(props) {
  const {
    children,
    className,
    disabled,
  } = props;

  const [active, setActive] = React.useState(true);
  const handleClick = () => {
    if (!disabled) {
      setActive(!active);
    }
  };

  const classes = classNames(
    'flex justify-center items-center group',
    'rounded-[10px] w-max h-9',
    'bg-gray-20 hover:bg-primary-10',
    'text-gray-30',
    'focus:outline focus:outline-4 focus:outline-primary-30 focus:bg-primary-10',
    disabled && 'hover:cursor-default hover:bg-gray-20 focus:bg-gray-20',
    className,
  );

  const eyeClasses = classNames(
    'w-8 h-8 m-0.5 p-1.5',
    '',
    active && 'bg-white rounded-lg text-gray-90',
    active && 'group-hover:shadow-[0_1px_2px_rgba(0,0,0,0.6)] group-hover:shadow-[0_1px_3px_rgba(0,0,0,0.1)]',
    active && 'group-focus:shadow-[0_1px_2px_rgba(0,0,0,0.6)] group-focus:shadow-[0_1px_3px_rgba(0,0,0,0.1)]',
    (active && disabled) && 'text-gray-40 bg-gray-10 group-hover:shadow-none group-focus:shadow-none',
    (!active && disabled) && 'group-hover:text-gray-30 group-focus:text-gray-40',
    !active && 'group-hover:text-primary-light',
    !active && 'group-focus:text-primary-light',
    '',
  );

  const eyeOffClasses = classNames(
    'w-8 h-8 m-0.5 p-1.5',
    active && 'group-hover:text-primary-light',
    active && 'group-focus:text-primary-light',
    (active && disabled) && 'group-hover:text-gray-30 group-focus:text-gray-40',
    !active && 'bg-white rounded-lg text-gray-90',
    !active && 'group-hover:shadow-[0_1px_2px_rgba(0,0,0,0.6)] group-hover:shadow-[0_1px_3px_rgba(0,0,0,0.1)]',
    !active && 'group-focus:shadow-[0_1px_2px_rgba(0,0,0,0.6)] group-focus:shadow-[0_1px_3px_rgba(0,0,0,0.1)]',
    (!active && disabled) && 'text-gray-40 bg-gray-10 group-hover:shadow-none group-focus:shadow-none',

  );

  return (
    <div className={classes} onClick={handleClick} role="button" tabIndex={0} onKeyUp={handleClick} disabled>
      <EyeIcon className={eyeClasses} />
      <EyeOffIcon className={eyeOffClasses} />
      {children}
    </div>
  );
}

ToggleEye.defaultProps = {
  className: undefined,
  children: undefined,
  disabled: false,
};

ToggleEye.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  disabled: PropTypes.bool,
};

export default ToggleEye;
export { ToggleEye };
