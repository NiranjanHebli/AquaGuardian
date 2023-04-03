import "./App.css";
import AboutUs from "./components/About Us/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar title="AquaGuardian" />
        <Routes>
           <Route exact path="/" element={<Home/>}/>
          <Route  path="/aboutus" element={<AboutUs/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
