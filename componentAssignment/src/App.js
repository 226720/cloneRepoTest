import "./App.css";
import Welcome from "./class-comp/Welcome";

import ParentComponent from "./funct-comp/ParentComponent";

function App() {
  return (
    <div classname="App">
      <Welcome />
      <ParentComponent />
    </div>
  );
}

export default App;
