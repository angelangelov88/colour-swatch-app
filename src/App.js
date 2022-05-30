import { ColourThemeSwatch } from "./components/ColourThemeSwatch";
import { IdentifierIcon } from "./components/IdentifierIcon";

function App() {
  return (
    <div className="App">
      {/* <ColourThemeSwatch color="primary" /> */}
      <IdentifierIcon 
        color="yellow"
        size="lg"
        type="initials"
        statusIndicator={true}
        status={true}
        initials="ll"
      />
    </div>
  );
}

export default App;
