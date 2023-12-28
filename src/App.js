import Home from "./components/Home";
import Room from "./components/Room";
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/room/:roomID" element={<Room/>} />
      </Routes>
    </div>
  );
}

export default App;
