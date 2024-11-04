import { Route, Routes } from "react-router-dom";
import Registration from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";
import Profile from "./Components/Pages/Profile";
import HomePage from "./Components/Pages/Home";
import ForgotPassword from "./Components/Pages/ForgotPassword";
import { useEffect } from "react";
import { ApiClient } from "./Components/Axios";
import { useDispatch } from "react-redux";
import { setAmbulance } from "./Redux/AmbulanceSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      await ApiClient.get("/api/ambulance", {
        withCredentials: true,
      })
        .then((result) => {
          console.log(result.data.data);
          dispatch(setAmbulance(result.data.data));
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
