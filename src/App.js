import { ColourThemeSwatch } from "./components/ColourThemeSwatch/ColourThemeSwatch";
import { IdentifierIcon } from "./components/IdentifierIcon/IdentifierIcon";
import { Tooltip } from "./components/Tooltip/Tooltip";
import { BanIconComponent } from "./components/BanIconComponent/BanIconComponent";
import { InformationCircleIcon } from '@heroicons/react/outline'
import { DocumentIcon } from '@heroicons/react/outline'
import { Tag } from "./components/tags/Tag";
import { AddRemoveIconComponent } from "./components/tags/AddRemoveIconComponent";
import { AddTag } from "./components/tags/AddTag";


function App() {
  return (
    <div className="App m-32">
      {/* <ColourThemeSwatch color="yellow" /> */}
      {/* <IdentifierIcon 
        color="purple"
        size="lg"
        type="icon"
        Icon={DocumentIcon}
        statusIndicator={true}
        status={true}
        initials="gJ"  
    /> */}
      {/* <Tooltip
        // selected="click"
        Icon={InformationCircleIcon}
        // clickOnText="Click here"
        tooltipPosition="top"
        arrowPosition="centre"
      >
        <h3 className="m-1 font-semibold">Info Header</h3>
        <p className="m-1 font-redhat">Please use this field to add additional information</p>
        <a href="https://test.com" className="m-1 text-blue-60 dark:text-blue-50">Link</a>
      </Tooltip> */}
      {/* <Tag 
        children="Tag"
        size="lg"
        dot={true}
        icon={true}
        iconType="remove"
        iconOnly={false}
      /> */}
      {/* <AddRemoveIconComponent 
        icon="add"
        color="teal"
        iconSize="sm"
      /> */}
      {/* <AddTag 
        // children="Remove Tag"
        // size="lg"
        // iconType="remove"
      /> */}


    </div>
  );
}

export default App;
