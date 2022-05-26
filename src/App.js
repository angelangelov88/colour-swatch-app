import { BanIconComponent } from "./components/BanIconComponent";
import { ColourThemeSwatch } from "./components/ColourThemeSwatch";

function App() {
  return (
    <div className="App">
      <div>
        <ColourThemeSwatch 
        color="blue" 
        className="" 
       />


        <ColourThemeSwatch 
          color="purple"
          className=""
    
        />
        <ColourThemeSwatch 
          color="primary"
          className=""
        />
        <ColourThemeSwatch 
          color="lightblue"
          className=""
        />
        <ColourThemeSwatch 
          color="cyan"
          className=""
        />
        <ColourThemeSwatch 
          color="teal"
          className=""
        />
        <ColourThemeSwatch 
          color="green"
          className=""
        />
        <ColourThemeSwatch 
          color="yellow"
          className=""
        />
        <ColourThemeSwatch 
          color="red"
          className=""
        />
        <ColourThemeSwatch 
          color="gray"
          className=""
        />
        {/* <ColourThemeSwatch 
          color="void"
          className=
          "text-gray-60"
        /> */}
        <BanIconComponent 
          color="void"
          className="text-gray-60"
        />
      </div>
    </div>
  );
}

export default App;
