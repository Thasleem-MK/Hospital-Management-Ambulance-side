import React, { useState } from "react";
import { Ambulance, Phone, Mail, MapPin, Lock, Navigation } from "lucide-react";
import OTPVerification from "../OtpVarification";
import { Link } from "react-router-dom";
import { ApiClient } from "../Axios";

const AmbulanceServiceForm: React.FC = () => {
  const [formData, setFormData] = useState({
    serviceName: "",
    address: "",
    latitude: "",
    longitude: "",
    phone: "",
    email: "",
    password: "",
    vehicleType: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [showOtp, setShowOTP] = useState(false);
  const [otp, setOTP] = useState("123456");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    setOTP(randomNumber.toString());

    await ApiClient.post("/api/email", {
      from: "hostahelthcare@gmail.com",
      to: formData.email,
      subject: "OTP VERIFICATION",
      text: `Otp for Hosta registration is ${randomNumber}`,
    })
      .then(() => {
        setShowOTP(true);
      })
      .catch((err) => console.log(err));
  };

  const handleOTPVerification = async (value: string) => {
    if (value === otp) {
      console.log(value, otp);
      await ApiClient.post("/api/ambulance/register", { ...formData })
        .then((result) => {
          console.log(result);
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 2000);
          setShowOTP(false);
          setFormData({
            address: "",
            email: "",
            latitude: "",
            longitude: "",
            phone: "",
            password: "",
            serviceName: "",
            vehicleType: "",
          });
        })
        .catch((err) => alert(err?.respose?.data?.message));
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prevData) => ({
            ...prevData,
            latitude: position.coords.latitude.toFixed(6),
            longitude: position.coords.longitude.toFixed(6),
          }));
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to retrieve your location. Please enter manually.");
        }
      );
    } else {
      alert(
        "Geolocation is not supported by your browser. Please enter location manually."
      );
    }
  };

  if (showOtp) {
    return (
      <OTPVerification
        onVerify={handleOTPVerification}
        email={formData.email}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg relative overflow-hidden">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-green-800">
            Ambulance Service Registration
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Join our network of emergency responders
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-5">
              <label
                htmlFor="serviceName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Service Name
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Ambulance className="h-5 w-5 text-green-500" />
                </div>
                <input
                  id="serviceName"
                  name="serviceName"
                  type="text"
                  required
                  className="block w-full pl-10 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                  placeholder="Your Ambulance Service Name"
                  value={formData.serviceName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Address
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-green-500" />
                </div>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  className="block w-full pl-10 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                  placeholder="Service Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Location
              </label>
              <div className="flex space-x-2">
                <div className="flex-1">
                  <input
                    id="latitude"
                    name="latitude"
                    type="text"
                    required
                    className="block w-full pl-3 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                    placeholder="Latitude"
                    value={formData.latitude}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-1">
                  <input
                    id="longitude"
                    name="longitude"
                    type="text"
                    required
                    className="block w-full pl-3 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                    placeholder="Longitude"
                    value={formData.longitude}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="button"
                  onClick={getCurrentLocation}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <Navigation className="h-5 w-5 mr-1" />
                  Get Location
                </button>
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-green-500" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="block w-full pl-10 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                  placeholder="Contact Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-green-500" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full pl-10 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-green-500" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full pl-10 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="vehicleType"
                className="block text-sm font-medium text-gray-700 mb-3 mt-2"
              >
                Vehicle Type
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
                <select
                  id="vehicleType"
                  name="vehicleType"
                  required
                  className="block w-full pl-10 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                  value={formData.vehicleType}
                  onChange={handleChange}
                >
                  <option value="">Select Type of Vehicle</option>
                  <option value="basic">Basic Service</option>
                  <option value="D-level">D-Level Service</option>
                  <option value="E-type">E-Type Service</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
            >
              Register Ambulance Service
            </button>
          </div>
        </form>
        <div className="mt-2 text-center">
          <p className="text-sm text-green-700">
            Have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-green-600 hover:text-green-500"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 border border-green-600">
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <div className="text-2xl font-bold text-green-600 mb-4">
              Registration Successful!
            </div>
            <p className="text-gray-600">
              Thank you for registering your ambulance service.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AmbulanceServiceForm;
