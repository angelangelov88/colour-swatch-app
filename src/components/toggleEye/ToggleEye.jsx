import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

function ToggleEye(props) {
  const {
    children,
    className,
  } = props;

  const [active, setActive] = React.useState(true);
  const handleClick = () => setActive(!active);

  const classes = classNames(
    'flex justify-center items-center',
    'rounded-[10px] w-max',
    'bg-gray-20',
    'text-gray-30',
    className,
  );

  const eyeClasses = classNames(
    'w-8 h-8 m-1 p-1.5',
    active && 'bg-white rounded-lg text-gray-90',
    !active && '',
    '',
  );

  const eyeOffClasses = classNames(
    'w-8 h-8 m-1 p-1.5',
    active && '',
    !active && 'bg-white rounded-lg text-gray-90',
    '',
  );

  return (
    <div className={classes} onClick={handleClick} role="button" tabIndex={0} onKeyUp={handleClick}>
      <EyeIcon className={eyeClasses} />
      <EyeOffIcon className={eyeOffClasses} />
      {children}
    </div>
  );
}

ToggleEye.defaultProps = {
  className: undefined,
  children: undefined,
  // active: false,
};

ToggleEye.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  // active: PropTypes.bool,
};

export default ToggleEye;
export { ToggleEye };
