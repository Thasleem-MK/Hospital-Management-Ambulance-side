import { Route, Routes } from "react-router-dom";
import AmbulanceRegistration from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Home";
import Settings from "./Components/Pages/Settings";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<AmbulanceRegistration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
