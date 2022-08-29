import "./App.css";
import Navbar from "./componenets/Navbar";
import Textform from "./componenets/Textform";
import About from "./componenets/About";
import Alert from "./componenets/Alert";
import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({ msg: message, type: type });
  };
  setTimeout(() => {
    setalert(null);
  }, 2000);
  const tooglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showalert(" Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert(" Light mode has been enabled", "success ");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="textutilis"
          about="about us"
          mode={mode}
          tooglemode={tooglemode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
          <Route exact path="/" element={ <Textform
                showalert={showalert}
                heading="Enter the text to analyze"
                mode={mode}
              />} />
        <Route exact path="about/" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;


