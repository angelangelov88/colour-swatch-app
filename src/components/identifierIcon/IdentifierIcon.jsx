import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Identifier(props) {
  const {
    className,
    color,
    size,
    type,
    Icon,
    statusIndicator,
    status,
    initials,
  } = props;

  const classes = classNames(
    'flex items-center justify-center relative rounded-full font-ibm text-white uppercase',
    size === 'xs' && 'w-8 h-8 text-xs',
    size === 'sm' && 'w-9 h-9 text-base',
    size === 'md' && 'w-10 h-10 text-lg',
    size === 'lg' && 'w-11 h-11 text-xl',
    color === 'gray' && 'bg-gray-60',
    color === 'primary' && 'bg-primary-50',
    color === 'purple' && 'bg-purple-50',
    color === 'blue' && 'bg-blue-50',
    color === 'lightblue' && 'bg-lightblue-60',
    color === 'cyan' && 'bg-cyan-60',
    color === 'teal' && 'bg-teal-60',
    color === 'green' && 'bg-green-60',
    color === 'yellow' && 'bg-yellow-60',
    color === 'red' && 'bg-red-50',
    className,
  );

  const dotClasses = classNames(
    'absolute bottom-0 right-0 rounded-full ',
    'outline-2 outline outline-white',
    (size === 'xs' || size === 'sm') ? 'w-2 h-2' : 'w-2.5 h-2.5',
    !statusIndicator && 'hidden',
    status ? 'bg-green-50' : 'bg-gray-30',
  );

  return (
    <div className={classes}>
      { type === 'initials' && <span>{initials}</span>}
      { Icon && <Icon className="w-full p-2" />}
      <div className={dotClasses} />
    </div>
  );
}

Identifier.defaultProps = {
  className: undefined,
  color: 'primary',
  size: 'lg',
  type: 'initials',
  Icon: undefined,
  statusIndicator: true,
  status: true,
  initials: undefined,
};

Identifier.propTypes = {
  className: PropTypes.string,
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
    'void',
  ]),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  type: PropTypes.oneOf(['initials', 'icon']),
  Icon: PropTypes.elementType,
  statusIndicator: PropTypes.bool,
  status: PropTypes.bool,
  initials: PropTypes.string,
};

export default Identifier;
export { Identifier };
