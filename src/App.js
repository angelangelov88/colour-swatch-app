import { ColourThemeSwatch } from "./components/ColourThemeSwatch";
import { IdentifierIcon } from "./components/IdentifierIcon";
import { Tooltip } from "./components/Tooltip";
import { InformationCircleIcon } from '@heroicons/react/outline'
import { DocumentIcon } from '@heroicons/react/outline'
import { Tag } from "./components/tags/Tag";
import { AddRemoveBtnComponent } from "./components/tags/AddRemoveIconComponent";
import { AddTag } from "./components/tags/AddTag";


function App() {
  return (
    <div className="App m-32 mt-52">
      {/* <ColourThemeSwatch color="primary" /> */}
      {/* <IdentifierIcon 
        color="purple"
        size="lg"
        type="initials"
        Icon={DocumentIcon}
        statusIndicator={true}
        status={true}
        initials="gJ"
      /> */}
      {/* <Tooltip
        // selected="click"
        Icon={InformationCircleIcon}
        // clickOnText="Click here"
        tooltipPosition="bottom"
        arrowPosition="centre"
      >
        <h3 className="m-1 font-semibold">Info Header</h3>
        <p className="m-1 font-redhat">Please use this field to add additional information</p>
        <a href="https://test.com" className="m-1 text-blue-60 dark:text-blue-50">Link</a>
      </Tooltip> */}
      {/* <Tag 
        children="Tag"
        size="lg"
        color="yellow"
        dot={true}
        icon={true}
        iconType="remove"
        iconOnly={false}
      /> */}
      {/* <AddRemoveBtnComponent 
        icon="x"
        color="green"
        iconSize="lg"
      /> */}
      <AddTag 
        // children="Remove Tag"
        // size="lg"
        // iconType="add"
      />
    </div>
  );
}

export default App;
