import React, { useState } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
// import './ColourPicker.css';

function HexColourInput() {
  const [color, setColor] = useState('#fff');

  return (
    <div>
      <HexColorPicker color={color} onChange={setColor} />
      <p>
        HEX:
        <span><HexColorInput color={color} onChange={setColor} /></span>
      </p>
    </div>

  );
}

export default HexColourInput;
export { HexColourInput };
