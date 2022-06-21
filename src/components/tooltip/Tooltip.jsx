import React from 'react';
import PropTypes from 'prop-types';
import * as Tooltip from '@radix-ui/react-tooltip';

function TooltipComponent(props) {
  const {
    children,
    text,
  } = props;

  return (
    <div className="relative pt-2 font-ibm text-gray-50 hover:text-gray-70">
      <Tooltip.Root delayDuration={0} className="w-max">
        <Tooltip.Trigger>
          <div>{children}</div>
        </Tooltip.Trigger>
        <Tooltip.Content
          sideOffset={5}
          className="absolute w-max max-w-xs flex-col justify-evenly items-center rounded-lg shadow-[2px_4px_17px_-5px_rgba(97,97,98)] p-2 bg-white dark:bg-gray-130 text-gray-80 dark:text-gray-10 text-sm text-center"
        >
          {text}
        </Tooltip.Content>
      </Tooltip.Root>
    </div>

  );
}

TooltipComponent.defaultProps = {
  children: undefined,
  text: 'Click here',
};

TooltipComponent.propTypes = {
  children: PropTypes.node,
  text: PropTypes.node,
};

export default TooltipComponent;
export { TooltipComponent };
