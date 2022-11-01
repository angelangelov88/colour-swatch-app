/* eslint-disable */
import React from 'react';
import {
  InformationCircleIcon, DocumentIcon, BellIcon, InboxIcon, DotsHorizontalIcon, DotsVerticalIcon, DownloadIcon, ClipboardListIcon, PrinterIcon, ArrowsExpandIcon
} from '@heroicons/react/outline';
import { ColourThemeSwatch } from './components/colourThemeSwatch/ColourThemeSwatch';
import { IdentifierIcon } from './components/identifierIcon/IdentifierIcon';
import { IconTooltip } from './components/tooltip/IconTooltip';
import { Tooltip } from './components/tooltip/Tooltip';
import { Tag } from './components/tags/Tag';
import { AddTag } from './components/tags/AddTag';
import { Modal } from './components/modal/Modal';
import { Badge } from './components/badge/Badge';
import Button from './components/button/Button';
import Label from './components/label/Label';
import Toggle from './components/toggle/Toggle';
import ToggleEye from './components/toggleEye/ToggleEye';
import RgbaColourPicker from './components/colourPicker/RgbaColourPicker';
import HexColourPicker from './components/colourPicker/HexColourPicker';
import FormikForm from './components/formikForm/FormikForm';

function App() {
  return (
    // <div className="App md:m-40 m-10">
      <div className="App relative top-40 left-10">

      {/* <ColourThemeSwatch color="yellow" /> */}
      {/* <IdentifierIcon
        color="green"
        size="sm"
        type="icon"
        Icon={DocumentIcon}
        statusIndicator={true}
        status={true}
        initials="gJ"
    /> */}

      {/* <IconTooltip
        selected="click"
        Icon={InformationCircleIcon}
        pointerPosition="top"
        // arrowPosition="centre"
        // tooltipWidth="w-36"
      > */}
        {/* <h3 className="m-1 font-semibold">Info Header</h3>
        <p className="m-1 font-redhat">Please use this field to add additional information</p>
        <a href="https://test.com" className="m-1 text-blue-60 dark:text-blue-50">Link</a> */}
      {/* </IconTooltip> */}
      
      {/* <Tooltip
        // text={
        // <>
        //   <h3 className="m-1 font-semibold">Info Header</h3>
        //   <p className="m-1 font-redhat">Please use this field to add additional information</p>
        // </>
        // }
        text="Download a Copy"
      > */}
        {/* <p>Click here</p> */}
        {/* <DownloadIcon className="w-5 h-5" /> */}
      {/* </Tooltip> */}

      {/* <AddTag
        // children="Remove Tag"
        // size="lg"
      /> */}
      {/* <Tag
        children="Tag"
        size="lg"
        color="teal"
        dot={true}
        icon={true}
        iconType="add"
      /> */}

      {/* <Modal
        children="Hello there"
        title="New Document"
        infoTextColor="green"
        infoTextChildren={
          <p><span className="font-medium">Warning:</span> Warning text here</p>
        }
        btnText="Again"
        BtnIcon={InboxIcon}
        handleClick={() => {
          console.log("handled!")
        }}
      >
          <h3 className="m-1 font-semibold">Info Header</h3>
          <p className="m-1 font-redhat">Please use this field to add additional information Please use this field to add additional</p>
          <h3 className="m-1 font-semibold">Info Header</h3>
          <p className="m-1 font-redhat">Please use this field to add additional information Please use this field to add additional</p>

      </Modal>
 */}

      {/* <Badge
        children="1"
        className=""
        size="lg"
        color="teal"
        LeadingIcon={InboxIcon}
        TrailingIcon={BellIcon}
        rounded="full"
        iconOnly={false}
      />  */}

      {/* <ToggleEye /> */}

      
      {/* <RgbaColourPicker />     */}


      {/* <HexColourPicker
        // colourValue='#406024'
        // position="top-9 left-0"
      /> */}

      {/* <Button 
        children="Cancel"
        variant="delete"
        outline={true}
        disabled={true}
        tabIndex="0"
      /> */}

      <FormikForm />

    </div>
  );
}

export default App;
