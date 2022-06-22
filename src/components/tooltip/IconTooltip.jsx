import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function IconTooltip(props) {
  const {
    className,
    children,
    selected,
    Icon,
    pointerPosition,
    arrowPosition,
    tooltipWidth,
  } = props;

  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    if (selected === 'click') {
      setClicked(!clicked);
    }
  };

  const classes = classNames(
    'relative p-2 flex font-ibm text-gray-50 group',
    clicked && 'text-gray-70',
    selected === 'hover' && 'hover:text-gray-70',
    className,
  );

  const tooltipClasses = classNames(
    clicked ? 'flex' : 'hidden',
    selected === 'hover' && 'group-hover:flex',
    (tooltipWidth && (pointerPosition === 'left' || pointerPosition === 'right')) && `${tooltipWidth}`,
    'absolute flex-col justify-evenly items-center p-2 rounded-lg shadow-[2px_4px_17px_-5px_rgba(97,97,98)] dark:bg-gray-130 text-gray-80 dark:text-gray-10 text-sm text-center',
    'after:absolute after:content:none after:border-[10px] after:border-transparent',
    (pointerPosition === 'bottom' && arrowPosition === 'centre') && 'w-64 bottom-10 -left-[108px] -ml-0.5 ',
    (pointerPosition === 'bottom' && arrowPosition === 'left') && 'w-64 bottom-10 -left-[10px] ',
    (pointerPosition === 'bottom' && arrowPosition === 'right') && 'w-64 bottom-10 -left-52 -ml-0.5 ',
    pointerPosition === 'top' && 'w-64 top-10 -left-[105px] -ml-0.5 ',
    pointerPosition === 'left' && 'max-w-xl h-40 -top-[64px] left-10 ',
    pointerPosition === 'right' && 'max-w-xs h-40 -top-[62px] -left-[322px] -mt-0.5 ',
    className,
  );

  const svgClasses = classNames(
    'absolute',
    (pointerPosition === 'bottom' && arrowPosition === 'centre') && '-bottom-2 left-25',
    (pointerPosition === 'bottom' && arrowPosition === 'left') && '-bottom-2 left-3.5',
    (pointerPosition === 'bottom' && arrowPosition === 'right') && '-bottom-2 right-3.5',
    pointerPosition === 'top' && '-top-[8px] left-[111px]',
    pointerPosition === 'left' && 'bottom-[63px] -left-[9px]',
    pointerPosition === 'right' && 'bottom-[63px] -right-[9px]',
    className,
  );

  return (
    <div className={classes}>
      <Icon
        className="w-5 cursor-pointer"
        onClick={handleClick}
      />
      <div className={tooltipClasses}>
        <div>{children}</div>
        {pointerPosition === 'bottom'
        && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="9"
          viewBox="0 0 28 9"
          fill="white"
          className={svgClasses}
        >
          <path d="M11.1716 7.17158L6.82843 2.82843C5.01742 1.01742 2.56116 0 0 0H28C25.4388 0 22.9826 1.01741 21.1716 2.82842L16.8284 7.17157C15.2663 8.73367 12.7337 8.73367 11.1716 7.17158Z" fill="white" />
        </svg>
        )}
        {pointerPosition === 'top'
        && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="9"
            viewBox="0 0 29 9"
            fill="none"
            className={svgClasses}
          >
            <path d="M17.3284 1.17156L21.6716 5.51471C23.4826 7.32572 25.9388 8.34314 28.5 8.34314L0.5 8.34314C3.06116 8.34314 5.51741 7.32573 7.32842 5.51472L11.6716 1.17157C13.2337 -0.390531 15.7663 -0.390533 17.3284 1.17156Z" fill="white" />
          </svg>
        )}
        {pointerPosition === 'right'
        && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="29"
            viewBox="0 0 10 29"
            fill="none"
            className={svgClasses}
          >
            <path d="M8.00001 17.1716L3.65686 21.5147C1.84585 23.3257 0.82843 25.782 0.82843 28.3431L0.82843 0.34314C0.82843 2.9043 1.84584 5.36055 3.65685 7.17156L8 11.5147C9.5621 13.0768 9.5621 15.6095 8.00001 17.1716Z" fill="white" />
          </svg>
        )}
        {pointerPosition === 'left'
        && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="29"
            viewBox="0 0 10 29"
            fill="none"
            className={svgClasses}
          >
            <path d="M1.99999 11.5147L6.34314 7.17157C8.15415 5.36056 9.17157 2.9043 9.17157 0.34314L9.17157 28.3431C9.17157 25.782 8.15416 23.3257 6.34315 21.5147L2 17.1716C0.4379 15.6095 0.437897 13.0768 1.99999 11.5147Z" fill="white" />
          </svg>
        )}
      </div>
    </div>
  );
}

IconTooltip.defaultProps = {
  className: undefined,
  children: undefined,
  selected: 'hover',
  Icon: undefined,
  pointerPosition: 'bottom',
  arrowPosition: 'centre',
  tooltipWidth: undefined,
};

IconTooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  selected: PropTypes.oneOf(['hover', 'click']),
  Icon: PropTypes.elementType,
  pointerPosition: PropTypes.oneOf([
    'bottom',
    'top',
    'left',
    'right',
  ]),
  arrowPosition: PropTypes.oneOf([
    'centre',
    'left',
    'right',
  ]),
  tooltipWidth: PropTypes.string,
};

export default IconTooltip;
export { IconTooltip };
