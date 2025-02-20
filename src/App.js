import "./App.css";
import { Navbar } from "./Navbar";
import { Blocks } from "./components/Blocks";

function App() {
  return (
    <div className=" w-screen h-screen">
      <div>
        <div className="justify-center items-center text-center">
          <Navbar />
        </div>
        <div className="flex h-screen">
          <Blocks />
        </div>
        <div className="footer"> LALLAALALLA </div>
      </div>
    </div>
  );
}

export default App;
