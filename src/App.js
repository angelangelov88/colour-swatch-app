// import { ColourThemeSwatch } from "./components/ColourThemeSwatch";
import { IdentifierIcon } from "./components/IdentifierIcon";
import { Tooltip } from "./components/Tooltip";
import { InformationCircleIcon } from '@heroicons/react/outline'
import { DocumentIcon } from '@heroicons/react/outline'


function App() {
  return (
    <div className="App m-32">
      {/* <ColourThemeSwatch color="primary" /> */}
      {/* <IdentifierIcon 
        color="purple"
        size="xs"
        type="icon"
        Icon={DocumentIcon}
        statusIndicator={true}
        status={true}
        initials="DM"
      /> */}
      <Tooltip
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
      />
    </div>
  );
}

export default App;
