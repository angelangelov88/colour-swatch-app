/* eslint-disable */
import React from 'react';
import {
  InformationCircleIcon, DocumentIcon, BellIcon, InboxIcon, DotsHorizontalIcon, DotsVerticalIcon,
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
import {UploadPictogram as UploadPictogramLight} from './components/pictograms/light/UploadPictogram';
import {UploadPictogram as UploadPictogramDark} from './components/pictograms/dark/UploadPictogram';
import {SustainableLightBulb as SustainableLightBulbLight} from './components/pictograms/light/SustainableLightBulb';
import {SustainableLightBulb as SustainableLightBulbDark} from './components/pictograms/dark/SustainableLightBulb';
import {CreateDocument as CreateDocumentLight} from './components/pictograms/light/CreateDocument';
import {CreateDocument as CreateDocumentDark} from './components/pictograms/dark/CreateDocument';
import {Email as EmailLight} from './components/pictograms/light/Email';
import {Email as EmailDark} from './components/pictograms/dark/Email';
import {Print as PrintLight} from './components/pictograms/light/Print';
import {Print as PrintDark} from './components/pictograms/dark/Print';
import {Sign as SignLight} from './components/pictograms/light/Sign';
import {Sign as SignDark} from './components/pictograms/dark/Sign';

function App() {
  return (
    <div className="App m-40">
      {/* <div className="App relative top-40 left-10"> */}

      <div className='flex flex-wrap justify-evenly m-5 p-5 bg-yellow-400'>
        <UploadPictogramLight 
          className="w-40 h-40" 
        />
        <SustainableLightBulbLight 
          className="w-40 h-40" 
        />
        <CreateDocumentLight
          className="w-40 h-40" 
        />
        <EmailLight
          className="w-40 h-40" 
        />
        <PrintLight
          className="w-40 h-40" 
        />
        <SignLight
          className="w-40 h-40" 
        />
      </div>

      <div className='flex flex-wrap justify-evenly m-5 p-5 bg-green-900'>
        <UploadPictogramDark 
          className="w-40 h-40" 
        />
        <SustainableLightBulbDark 
          className="w-40 h-40" 
        />
        <CreateDocumentDark
          className="w-40 h-40" 
        />
        <EmailDark
          className="w-40 h-40" 
        />
        <PrintDark
          className="w-40 h-40" 
        />
        <SignDark
          className="w-40 h-40" 
        />


      </div>






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
      >
        <h3 className="m-1 font-semibold">Info Header</h3>
        <p className="m-1 font-redhat">Please use this field to add additional information</p>
        <a href="https://test.com" className="m-1 text-blue-60 dark:text-blue-50">Link</a>

      </IconTooltip> */}

      {/* <Tooltip
        // text={
        // <>
        //   <h3 className="m-1 font-semibold">Info Header</h3>
        //   <p className="m-1 font-redhat">Please use this field to add additional information</p>
        // </>
        // }
        text="tooltip Please use this field to add additional informationPlease use this field to add additional informationPlease use this field to add additional informationPlease use this field to add additional informationPlease use this field to add additional information"
      >
        <p>Click here</p>
      </Tooltip> */}

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

    </div>
  );
}

export default App;
