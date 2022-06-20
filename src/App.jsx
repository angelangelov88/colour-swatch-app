import React from 'react';
// import {
//   InformationCircleIcon, DocumentIcon, BellIcon, InboxIcon,
// } from '@heroicons/react/outline';
import { ColourThemeSwatch } from './components/colourThemeSwatch/ColourThemeSwatch';
// import { IdentifierIcon } from './components/identifierIcon/IdentifierIcon';
// import { IconTooltip } from './components/tooltip/IconTooltip';
// import { Tooltip } from './components/tooltip/Tooltip';
// import { BanIconComponent } from './components/banIconComponent/BanIconComponent';
// import { Tag } from './components/tags/Tag';
// import { AddTag } from './components/tags/AddTag';
// import { Modal } from './components/modal/Modal';
// import { Badge } from './components/badge/Badge';

function App() {
  return (
    <div className="App m-40">
      <ColourThemeSwatch color="yellow" />
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
        pointerPosition="left"
        arrowPosition="centre"
      >
        <h3 className="m-1 font-semibold">Info Header</h3>
        <p className="m-1 font-redhat">Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information Please use this field to add additional information</p>
        <a href="https://test.com" className="m-1 text-blue-60 dark:text-blue-50">Link</a>

      </IconTooltip>  */}

      {/* <Tooltip
        text={
        <>
          <h3 className="m-1 font-semibold">Info Header</h3>
          <p className="m-1 font-redhat">Please use this field to add additional information Please use this field to add additional</p>
        </>
        }
        // text="tooltadd addit"
      >
        Click here
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
        // children="1"
        // className=""
        // size="lg"
        // color="teal"
        // LeadingIcon={InboxIcon}
        // TrailingIcon={BellIcon}
        // rounded="full"
        // iconOnly={false}
      />  */}

    </div>
  );
}

export default App;
