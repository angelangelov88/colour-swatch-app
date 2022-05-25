import { ColourThemeSwatch } from "./components/ColourThemeSwatch";

function App() {
  return (
    <div className="App">
      <div>
        <ColourThemeSwatch 
        color="blue" 
        className="p-6" 
       />


        <ColourThemeSwatch 
          color="purple"
          className="p-6"
    
        />
        <ColourThemeSwatch 
          color="primary"
          className="p-6"
        />
        <ColourThemeSwatch 
          color="red"
          className="p-6"
        />
        <ColourThemeSwatch 
          color="green"
          className="p-6"
        />
        <ColourThemeSwatch 
          color="yellow"
          className="p-6"
        />
      </div>
    </div>
  );
}

export default App;
