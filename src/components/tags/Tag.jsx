import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { PlusIcon, XIcon } from '@heroicons/react/outline';

function Tag(props) {
  const {
    children,
    className,
    size,
    color,
    dot,
    iconType,
  } = props;

  const classes = classNames(
    'w-fit font-ibm inline-flex items-center min-w-max font-medium leading-4 rounded-full pl-2',
    size === 'sm' && 'h-5 py-0.5 pr-0.5 text-xs',
    size === 'lg' && 'h-6 py-1 pr-1 text-sm',
    color === 'primary' && 'bg-primary-20 text-primary-90',
    color === 'gray' && 'bg-gray-20 text-gray-90',
    color === 'purple' && 'bg-purple-20 text-purple-90',
    color === 'blue' && 'bg-blue-20 text-blue-90',
    color === 'lightblue' && 'bg-lightblue-20 text-lightblue-90',
    color === 'cyan' && 'bg-cyan-20 text-cyan-90',
    color === 'teal' && 'bg-teal-20 text-teal-90',
    color === 'green' && 'bg-green-20 text-green-90',
    color === 'yellow' && 'bg-yellow-20 text-yellow-90',
    color === 'red' && 'bg-red-20 text-red-90',
    !iconType && 'pr-1.5',
    className,
  );

  const dotClasses = classNames(
    'w-1.5 h-1.5 mr-1.5 rounded-lg',
    color === 'primary' && 'bg-primary-60',
    color === 'gray' && 'bg-gray-60',
    color === 'purple' && 'bg-purple-60',
    color === 'blue' && 'bg-blue-60',
    color === 'lightblue' && 'bg-lightblue-60',
    color === 'cyan' && 'bg-cyan-60',
    color === 'teal' && 'bg-teal-60',
    color === 'green' && 'bg-green-60',
    color === 'yellow' && 'bg-yellow-60',
    color === 'red' && 'bg-red-60',
    dot === true ? 'block' : 'hidden',
    className,
  );

  const iconClasses = classNames(
    'font-ibm flex items-center justify-center rounded-xl hover:cursor-pointer',
    size === 'sm' ? 'w-4 h-4 p-0.5' : 'w-5 h-5 p-1',
    color === 'primary' && 'text-primary-60 hover:text-primary-80 hover:bg-primary-30 active:text-primary-10 active:bg-primary-50',
    color === 'gray' && 'text-gray-60 hover:text-gray-80 hover:bg-gray-30 active:text-gray-10 active:bg-gray-50',
    color === 'purple' && 'text-purple-60 hover:text-purple-80 hover:bg-purple-30 active:text-purple-10 active:bg-purple-50',
    color === 'blue' && 'text-blue-60 hover:text-blue-80 hover:bg-blue-30 active:text-blue-10 active:bg-blue-50',
    color === 'lightblue' && 'text-lightblue-60 hover:text-lightblue-80 hover:bg-lightblue-30 active:text-lightblue-10 active:bg-lightblue-50',
    color === 'cyan' && 'text-cyan-60 hover:text-cyan-80 hover:bg-cyan-30 active:text-cyan-10 active:bg-cyan-50',
    color === 'teal' && 'text-teal-60 hover:text-teal-80 hover:bg-teal-30 active:text-teal-10 active:bg-teal-50',
    color === 'green' && 'text-green-60 hover:text-green-80 hover:bg-green-30 active:text-green-10 active:bg-green-50',
    color === 'yellow' && 'text-yellow-60 hover:text-yellow-80 hover:bg-yellow-30 active:text-yellow-10 active:bg-yellow-50',
    color === 'red' && 'text-red-60 hover:text-red-80 hover:bg-red-30 active:text-red-10 active:bg-red-50',
    className,
  );

  return (
    <div className={classes}>
      <span className={dotClasses} />
      <span className="mr-0.5">{children}</span>
      {iconType
        && (
        <div className={iconClasses}>
          {iconType === 'add'
            ? <PlusIcon />
            : <XIcon />}
        </div>
        )}
    </div>
  );
}

Tag.defaultProps = {
  children: undefined,
  className: undefined,
  size: 'lg',
  color: 'primary',
  dot: false,
  iconType: undefined,
};

Tag.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
  color: PropTypes.oneOf([
    'gray',
    'primary',
    'purple',
    'blue',
    'lightblue',
    'cyan',
    'teal',
    'green',
    'yellow',
    'red',
  ]),
  dot: PropTypes.bool,
  iconType: PropTypes.oneOf(['add', 'remove']),
};

export default Tag;
export { Tag };
