import { ColourThemeSwatch } from "./components/ColourThemeSwatch";
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
        type="initials"
        Icon={DocumentIcon}
        statusIndicator={true}
        status={true}
        initials="gJ"
      /> */}
      {/* <Tooltip
        // theme="dark"
        selected="click"
        // elementToClick="icon"
        Icon={InformationCircleIcon}
        clickOnText="jmjjkjk"
        infoHeader="Info Heghghghghadger"
        infoText="Info Texghghghghght"
        link="https://test.com"
        tooltipPosition="bottom"
        arrowPosition="centre"
      /> */}
      <Tag 
        children="Tag"
        size="sm"
        dot={true}
        color="green"
        iconType="plus"
        iconSize="sm"
      /> 
      {/* <AddRemoveBtnComponent 
        icon="x"
        color="green"
        iconSize="lg"
      /> */}
      <AddTag 
        // children="Add Tag"
        size="sm"
        iconType="plus"
        iconSize="lg"
      />
    </div>
  );
}

export default App;
