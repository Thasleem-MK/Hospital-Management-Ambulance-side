import React, { useState } from "react";
import { MapPin, AlertCircle } from "lucide-react";
import Navigation from "../../Components/Navigation";

const Home: React.FC = () => {
  const [status, setStatus] = useState<"available" | "busy">("available");
  const [currentLocation, setCurrentLocation] = useState("City Hospital");
  const emergencyRequests = [
    { id: 1, location: "123 Main St", time: "10:30 AM", status: "Pending" },
    { id: 2, location: "456 Elm St", time: "11:45 AM", status: "En Route" },
  ];

  const toggleStatus = () => {
    setStatus(status === "available" ? "busy" : "available");
  };

  const updateLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentLocation(e.target.value);
  };

  return (
    <div className="min-h-screen bg-green-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-green-800 mb-8">
          Ambulance Dashboard
        </h1>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            Current Status
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className={`h-4 w-4 rounded-full ${
                  status === "available" ? "bg-green-500" : "bg-red-500"
                } mr-2`}
              ></div>
              <span className="font-medium">
                {status === "available" ? "Available" : "Busy"}
              </span>
            </div>
            <button
              onClick={toggleStatus}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Toggle Status
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            Current Location
          </h2>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-green-500 mr-2" />
            <input
              type="text"
              value={currentLocation}
              onChange={updateLocation}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Update your location"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            Emergency Requests
          </h2>
          {emergencyRequests.map((request) => (
            <div
              key={request.id}
              className="flex items-center justify-between border-b pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0"
            >
              <div className="flex items-center">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                <div>
                  <p className="font-medium">{request.location}</p>
                  <p className="text-sm text-gray-500">{request.time}</p>
                </div>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  request.status === "Pending"
                    ? "bg-yellow-200 text-yellow-800"
                    : "bg-blue-200 text-blue-800"
                }`}
              >
                {request.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
