import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { HexColorInput, HexColorPicker } from 'react-colorful';
import './ColourPicker.css';
import { DuplicateIcon } from '@heroicons/react/outline';
// import { Tooltip } from '../tooltip/Tooltip';
// import { HexColourInput } from './HexColourInput';

function ColourPicker(props) {
  const {
    children,
  } = props;

  const [color, setColor] = useState('#ffffff');

  function adjustColour(mainColor, amount) {
    // eslint-disable-next-line no-shadow
    return `#${mainColor.replace(/^#/, '').replace(/../g, (mainColor) => (`0${Math.min(255, Math.max(0, parseInt(mainColor, 16) + amount)).toString(16)}`).substr(-2))}`;
  }

  const borderColour = adjustColour(color, -50);

  const colourSquareClasses = classNames(
    'w-5 h-5 mr-2',
    'border',
    'rounded',
  );

  const colourSquareContainerClasses = classNames(
    'w-32 h-9 p-2 flex items-center group rounded-lg cursor-pointer bg-gray-10',
    '',
  );

  return (
    <div className={colourSquareContainerClasses}>
      <div className={colourSquareClasses} style={{ backgroundColor: `${color}`, borderColor: `${borderColour}` }}>
        <div className="relative shadow-lg">
          <div className="block group-hover:block absolute -top-40 left-32 p-2 rounded-lg shadow-lg">
            <HexColorPicker color={color} onChange={setColor} className=" custom-pointers example" />
            <div className="flex justify-evenly items-center">
              <h1 className="text-sm font-ibm font-medium">Hex:</h1>
              <div className={colourSquareContainerClasses}>
                <div className="flex justify-evenly">
                  <div className={colourSquareClasses} style={{ backgroundColor: `${color}`, borderColor: `${borderColour}` }} />
                  <p>#</p>
                  <HexColorInput color={color} onChange={setColor} className="w-16 bg-gray-10 -mt-[3px] uppercase" />
                </div>
              </div>
              <DuplicateIcon className="w-5 h-5 text-gray-80" />
            </div>

          </div>
          {children}
        </div>
      </div>
      <div className="uppercase">
        {color}
      </div>
      <div />
    </div>

  );
}

ColourPicker.defaultProps = {
  children: undefined,
};

ColourPicker.propTypes = {
  children: PropTypes.node,
};

export default ColourPicker;
export { ColourPicker };
