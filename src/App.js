// import { ColourThemeSwatch } from "./components/ColourThemeSwatch";
import { IdentifierIcon } from "./components/IdentifierIcon";
import { Tooltip } from "./components/Tooltip";
import { InformationCircleIcon } from '@heroicons/react/outline'
import { DocumentIcon } from '@heroicons/react/outline'
import { Tag } from "./components/tags/Tag";
import { AddRemoveBtnComponent } from "./components/tags/AddRemoveBtnComponent";
import { AddTag } from "./components/tags/AddTag";


function App() {
  return (
    <div className="App m-32">
      {/* <ColourThemeSwatch color="primary" /> */}
      {/* <IdentifierIcon 
        color="purple"
        size="lg"
        type="icon"
        Icon={DocumentIcon}
        statusIndicator={true}
        status={true}
        initials="DM"
      /> */}
      {/* <Tooltip
        theme="light"
        selected="click"
        elementToClick="icon"
        Icon={InformationCircleIcon}
        clickOnText="Please click here"
        infoHeader="Info Header"
        infoText="Info Text"
        link="https://test.com"
        tooltipPosition="bottom"
        arrowPosition="centre"
      /> */}
      <Tag 
        // children="Tag"
        // size="lg"
        // dot={true}
        // color="purple"
        iconType="plus"
        // iconSize="lg" //not in use currently but an option for future
      />
      <AddRemoveBtnComponent 
        icon="x"
        color="yellow"
        iconSize="lg"
      />
      <AddTag 
        // children="Add Tag"
        // size="lg"
        iconType="plus"
        // iconSize="lg" //not in use currently but an option for future
      />
    </div>
  );
}

export default App;
