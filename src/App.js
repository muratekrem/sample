import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Homepage from "./Homepage";
import Profile from "./Profile";
import Apage from "./Apage";
import Bpage from "./Bpage";
import Cpage from "./Cpage";
import Dpage from "./Dpage";

function App() {

  return (
    <div style={styles.container}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/login" element={<Login />} />          
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/apage" element={<Apage />} />
            <Route path="/bpage" element={<Bpage />} /> 
            <Route path="/cpage" element={<Cpage />} />
            <Route path="/dpage" element={<Dpage />} /> 
          </Routes>
        </div>
      </Router>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
  },
};

export default App;