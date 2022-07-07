import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { RgbaColorPicker } from 'react-colorful';
import './ColourPicker.css';
// import { Tooltip } from '../tooltip/Tooltip';

function ColourPicker(props) {
  const {
    children,
  } = props;

  const [color, setColor] = useState({
    r: 193, g: 255, b: 25, a: 1,
  });
  // console.log(color);
  // const chosenColour = JSON.stringify(color);
  const chosenColour = Object.keys(color).map((k) => color[k]).join(',');
  // console.log(`rgba(${chosenColour})`);

  const rgba2hex = (rgba) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`;

  const classes = classNames(
    'w-10 h-10 ',
    'border border-black',
    'rounded-lg',
    // `bg-[rgba(${chosenColour})]`,
    // 'bg-[rgba(180,78,78,1)]',
  );

  return (
    <div className="flex group">
      <div className={classes} style={{ backgroundColor: `rgba(${chosenColour})` }}>
        <div className="relative shadow-lg">
          <div className="hidden group-hover:block absolute -top-16 left-52 p-2 border border-black rounded-lg shadow-inner shadow-blue-400">
            <RgbaColorPicker color={color} onChange={setColor} className=" custom-pointers example" />
            <div className="flex items-center">
              rgba(
              {chosenColour}
              )
            </div>

            {/* <HexColorInput color={color} onChange={setColor} /> */}

          </div>
          {children}
        </div>

      </div>
      <div>
        <div>
          <h2>
            RGBA: rgba(
            <span>{chosenColour}</span>
            )
          </h2>

        </div>
        <div>
          HEX:
          {rgba2hex(`rgba(${chosenColour})`)}

        </div>
      </div>
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
