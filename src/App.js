import { BanIconComponent } from "./components/BanIconComponent";
import { ColourThemeSwatch } from "./components/ColourThemeSwatch";

function App() {
  return (
    <div className="App flex">
      <ColourThemeSwatch color="primary" />
      <ColourThemeSwatch color="purple" />
      <ColourThemeSwatch color="blue"  />
      <ColourThemeSwatch color="lightblue" />
      <ColourThemeSwatch color="cyan" />
      <ColourThemeSwatch color="teal" />
      <ColourThemeSwatch color="green" />
      <ColourThemeSwatch color="yellow" />
      <ColourThemeSwatch color="red" />
      <ColourThemeSwatch color="gray" />
      <ColourThemeSwatch color="void" />
      {/* <BanIconComponent color="void" /> */}
    </div>
  );
}

export default App;
