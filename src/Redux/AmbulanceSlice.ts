import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const Ambulance = createSlice({
  name: "Ambulance",
  initialState: {
    address: "",
    email: "",
    latitude: "",
    longitude: "",
    phone: "",
    password: "",
    serviceName: "",
    vehicleType: "",
    _id: "",
  },
  reducers: {
    setAmbulance: (state, action: PayloadAction<any>) => {
      return { ...state, ...action.payload };
    },
  },
});
export const { setAmbulance } = Ambulance.actions;
export default Ambulance.reducer;
