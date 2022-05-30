// import { ColourThemeSwatch } from "./components/ColourThemeSwatch";
import { IdentifierIcon } from "./components/IdentifierIcon";

function App() {
  return (
    <div className="App bg-gray-30">
      {/* <ColourThemeSwatch color="primary" /> */}
      <IdentifierIcon 
        color="purple"
        size="md"
        type="initials"
        statusIndicator={true}
        status={true}
        initials="DM"
      />
    </div>
  );
}

export default App;
