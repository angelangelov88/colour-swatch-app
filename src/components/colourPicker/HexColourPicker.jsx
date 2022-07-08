import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { HexColorInput, HexColorPicker } from 'react-colorful';
import './ColourPicker.css';
import { DuplicateIcon } from '@heroicons/react/outline';

function ColourPicker(props) {
  const {
    // children,
    colourValue,
    position,
  } = props;

  const [color, setColor] = useState(`${colourValue}`);
  const [showSuccess, setShowSuccess] = useState(false);

  function adjustColour(mainColor, amount) {
    // eslint-disable-next-line no-shadow
    return `#${mainColor.replace(/^#/, '').replace(/../g, (mainColor) => (`0${Math.min(255, Math.max(0, parseInt(mainColor, 16) + amount)).toString(16)}`).substr(-2))}`;
  }

  const borderColour = adjustColour(color, -50);

  function copyTextToClipboard() {
    navigator.clipboard.writeText(color);
    setShowSuccess(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setShowSuccess(false);
    }, 1000);
  }, [showSuccess]);

  const colourSquareContainerClasses = classNames(
    'w-32 h-9 p-2 flex items-center group rounded-lg cursor-pointer bg-gray-10 font-ibm text-sm relative',
    // 'focus:outline outline-4 outline-primary-30',
  );

  const colourSquareClasses = classNames(
    'w-5 h-5 mr-2 border rounded',
  );

  const containerClasses = classNames(
    'hidden group-hover:block absolute p-2 rounded-lg shadow-lg',
    `${position}`,
  );

  return (
    <div className={colourSquareContainerClasses}>

      <div className={colourSquareClasses} style={{ backgroundColor: `${color}`, borderColor: `${borderColour}` }} />
      <div className="uppercase">
        {color}
      </div>

      <div className={containerClasses}>
        <HexColorPicker
          color={color}
          onChange={setColor}
          className=" custom-pointers example"
        />
        <div className="flex justify-evenly items-center">
          <div className="font-medium">Hex:</div>
          <div className={colourSquareContainerClasses}>
            <div className="flex justify-evenly">
              <div className={colourSquareClasses} style={{ backgroundColor: `${color}`, borderColor: `${borderColour}` }} />
              <p>#</p>
              <HexColorInput
                color={color}
                onChange={setColor}
                className="w-16 bg-gray-10 -mt-[3px] uppercase focus:outline-none"
              />
            </div>
          </div>
          <div className="w-8 h-8 border rounded-lg shadow-sm p-1">
            <DuplicateIcon className="w-6 h-6 text-gray-80 " onClick={() => copyTextToClipboard()} />
            {showSuccess
                && <p className="absolute bottom-2 -right-12 bg-white shadow-lg rounded-lg p-2">Copied!</p>}
          </div>
        </div>
      </div>

    </div>

  );
}

ColourPicker.defaultProps = {
  // children: undefined,
  position: '-top-40 left-[120px]',
  colourValue: '#ffffff',
};

ColourPicker.propTypes = {
  // children: PropTypes.node,
  position: PropTypes.string,
  colourValue: PropTypes.string,
};

export default ColourPicker;
export { ColourPicker };
