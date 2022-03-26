import { Routes, Route } from "react-router-dom";
import { Dashboard, Signin, Signup, Verify, Reset, Navbar } from "./components/_index";


function App() {
  return (

    <div style={{ minWidth: "600px" }}>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/verify/:token" element={<Verify />} />
        <Route path="/reset/:token" element={<Reset />} />

        <Route path="/" element={<Dashboard />} />

      </Routes>

    </div>
  );
}

export default App;
