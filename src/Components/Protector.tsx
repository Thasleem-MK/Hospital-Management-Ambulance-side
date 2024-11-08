import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { Navigate } from "react-router-dom";

export const HomeProtector = ({ children }: { children: any }) => {
  const { _id } = useSelector((state: RootState) => state.Ambulance);
  return <div>{_id === "" ? children : <Navigate to="/profile" />}</div>;
};

export const Protector = ({ children }: { children: any }) => {
  const token = localStorage.getItem("accessToken");
  return <div>{token ? children : <Navigate to="/login" />}</div>;
};
