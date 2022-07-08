import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { HexColorInput, RgbaColorPicker } from 'react-colorful';
import './ColourPicker.css';
// import { Tooltip } from '../tooltip/Tooltip';
// import { HexColourInput } from './HexColourInput';

function ColourPicker(props) {
  const {
    children,
  } = props;

  const [color, setColor] = useState({
    r: 193, g: 255, b: 25, a: 1,
  });
  // const [hexColour, setHexColour] = useState('');

  // console.log(color);
  // const chosenColour = JSON.stringify(color);
  const chosenColour = Object.keys(color).map((k) => color[k]).join(',');
  // console.log(`rgba(${chosenColour})`);

  const rgba2hex = (rgba) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`;

  const hexColour = rgba2hex(`rgba(${chosenColour})`).toUpperCase();
  // console.log(hexColour);
  function adjustColour(mainColor, amount) {
    // eslint-disable-next-line no-shadow
    return `#${mainColor.replace(/^#/, '').replace(/../g, (mainColor) => (`0${Math.min(255, Math.max(0, parseInt(mainColor, 16) + amount)).toString(16)}`).substr(-2))}`;
  }

  const borderColour = adjustColour(rgba2hex(`rgba(${chosenColour})`), -50);

  // console.log(adjustColour(rgba2hex(`rgba(${chosenColour})`), 50));

  const colourSquareClasses = classNames(
    'w-5 h-5 mr-2',
    'border',
    'rounded',
  );

  return (
    <div className="w-32 h-9 p-2 flex items-center group rounded-lg cursor-pointer bg-gray-10 ">
      <div className={colourSquareClasses} style={{ backgroundColor: `rgba(${chosenColour})`, borderColor: `${borderColour}` }}>
        <div className="relative shadow-lg">
          <div className="block group-hover:block absolute -top-40 left-36 p-2 rounded-lg shadow-lg">
            <RgbaColorPicker color={color} onChange={setColor} className=" custom-pointers example" />
            <div className="">
              rgba(
              {chosenColour}
              )
              <br />
              HEX:
              {hexColour}
              {/* {(rgba2hex(`rgba(${chosenColour})`).toUpperCase())} */}
            </div>
            {/* <HexColourInput /> */}
            <div>
              HEX: #
              {/* @todo the component does not allow input because the color value is rgba not hex */}
              <span><HexColorInput color={hexColour} onChange={setColor} /></span>
            </div>

          </div>
          {children}
        </div>
      </div>
      <div>
        {/* <div>
          rgba(
          {chosenColour}
          )
        </div> */}
        <div>
          {hexColour}
          {/* {(rgba2hex(`rgba(${chosenColour})`).toUpperCase())} */}

        </div>
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
