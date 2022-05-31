// import { ColourThemeSwatch } from "./components/ColourThemeSwatch";
import { IdentifierIcon } from "./components/IdentifierIcon";
import { Tooltip } from "./components/Tooltip";

function App() {
  return (
    <div className="App m-32">
      {/* <ColourThemeSwatch color="primary" /> */}
      {/* <IdentifierIcon 
        color="purple"
        size="xs"
        type="initials"
        statusIndicator={true}
        status={true}
        initials="DM"
      /> */}
      <Tooltip
        theme="dark"
        selected="click"
        infoHeader="Info Header"
        infoText="Info Text"
        link="https://test.com"
        pointerPosition="bottom"
        arrowPosition="centre"
      />
    </div>
  );
}

export default App;
