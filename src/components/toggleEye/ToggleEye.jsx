import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

function ToggleEye(props) {
  const {
    className,
    disabled,
  } = props;

  const [active, setActive] = React.useState(true);
  const handleClick = () => {
    if (!disabled) {
      setActive(!active);
    }
  };

  const enterKeyPress = (e) => {
    if (e.key === 'Enter' || e.code === 'Space') {
      handleClick();
    }
  };

  const classes = classNames(
    'flex justify-center items-center group p-0.5 rounded-[10px] w-max text-gray-30 bg-gray-20',
    'hover:bg-primary-10',
    'focus:outline focus:outline-4 focus:outline-primary-30 focus:bg-primary-10',
    disabled && 'hover:cursor-default hover:bg-gray-20 focus:bg-gray-20',
    className,
  );

  const eyeClasses = classNames(
    'w-8 h-8 p-1.5',
    active && 'bg-white rounded-lg text-gray-90 shadow-sm',
    active && 'group-hover:shadow-sm',
    active && 'group-focus:shadow',
    (active && disabled) && 'text-gray-40 bg-gray-10 group-hover:shadow-none group-focus:shadow-none',
    (!active && disabled) && 'group-hover:text-gray-30 group-focus:text-gray-40',
    !active && 'group-hover:text-primary-light group-focus:text-primary-light',
  );

  const eyeOffClasses = classNames(
    'w-8 h-8  p-1.5',
    active && 'group-hover:text-primary-light',
    active && 'group-focus:text-primary-light',
    !active && 'bg-white rounded-lg text-gray-90 shadow-sm',
    !active && 'group-hover:shadow',
    !active && 'group-focus:shadow',
    (active && disabled) && 'group-hover:text-gray-30 group-focus:text-gray-40',
    (!active && disabled) && 'text-gray-40 bg-gray-10 group-hover:shadow-none group-focus:shadow-none',
  );

  return (
    <div className={classes} onClick={handleClick} role="button" tabIndex={0} onKeyDown={enterKeyPress}>
      <EyeIcon className={eyeClasses} />
      <EyeOffIcon className={eyeOffClasses} />
    </div>
  );
}

ToggleEye.defaultProps = {
  className: undefined,
  disabled: false,
};

ToggleEye.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default ToggleEye;
export { ToggleEye };
