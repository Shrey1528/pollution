import { Effects } from "./components/Effects";
import { Focus } from "./components/Focus";
import { Home } from "./components/Home";
import { Introduction } from "./components/Introduction";
import { Mission } from "./components/Mission";
import { Navbar } from "./components/Navbar";
import { Step } from "./components/Step";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Introduction />
      <Effects />
      <Focus />
      <Mission />
      <Step />
    </div>
  );
}

export default App;
