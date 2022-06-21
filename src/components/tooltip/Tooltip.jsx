import React from 'react';
import PropTypes from 'prop-types';
import * as TooltipUi from '@radix-ui/react-tooltip';

function Tooltip(props) {
  const {
    children,
    text,
  } = props;

  return (
    <div className="relative pt-2 font-ibm text-gray-50 hover:text-gray-70">
      <TooltipUi.Root delayDuration={0} className="w-max">
        <TooltipUi.Trigger>
          <div>{children}</div>
        </TooltipUi.Trigger>
        <TooltipUi.Content
          sideOffset={5}
          className="absolute w-max max-w-xs flex-col justify-evenly items-center rounded-lg shadow-[2px_4px_17px_-5px_rgba(97,97,98)] p-2 bg-white dark:bg-gray-130 text-gray-80 dark:text-gray-10 text-sm text-center"
        >
          {text}
        </TooltipUi.Content>
      </TooltipUi.Root>
    </div>

  );
}

Tooltip.defaultProps = {
  children: undefined,
  text: 'Click here',
};

Tooltip.propTypes = {
  children: PropTypes.node,
  text: PropTypes.node,
};

export default Tooltip;
export { Tooltip };
