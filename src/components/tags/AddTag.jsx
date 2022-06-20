import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { PlusIcon } from '@heroicons/react/outline';

function AddTag(props) {
  const {
    children,
    className,
    size,
  } = props;

  const classes = classNames(
    'font-ibm inline-flex items-center w-max pr-2 font-medium rounded-full text-gray-90 border-4 border-transparent group',
    'hover:cursor-pointer hover:text-primary-light',
    'active:bg-primary-10 active:cursor-default',
    'focus:outline focus:outline-4 focus:outline-primary-30',
    size === 'sm' && 'h-5 text-xs',
    size === 'lg' && 'h-6 text-sm',
    className,
  );

  const iconClasses = classNames(
    'font-ibm flex items-center justify-center rounded-xl text-gray-60',
    'group-hover:text-primary-light hover:cursor-pointer',
    size === 'sm' ? 'w-4 h-4 p-0.5' : 'w-5 h-5 p-1',
    className,
  );

  return (
    <div className={classes} tabIndex={0}>
      <div className={iconClasses}>
        <PlusIcon />
      </div>
      <span>{children}</span>
    </div>
  );
}

AddTag.defaultProps = {
  children: 'Add Tag',
  size: 'lg',
};

AddTag.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
};

export { AddTag };
