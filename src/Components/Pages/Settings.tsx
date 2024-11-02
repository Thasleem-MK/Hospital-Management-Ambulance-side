import React, { useState } from "react";
import { User } from "lucide-react";
import Navigation from "../../Components/Navigation";

const Settings: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    vehicleNumber: "AMB-1234",
    vehicleType: "Basic Life Support",
    phone: "123-456-7890",
    email: "john@example.com",
    location: "City Hospital",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the updated data to your backend
    console.log("Updated data:", formData);
  };

  const handleDelete = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      // Here you would send a request to delete the account
      console.log("Account deleted");
    }
  };

  return (
    <div className="min-h-screen bg-green-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-green-800 mb-8">
          Account Settings
        </h1>

        <div className="bg-white rounded-xl shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm  border-gray-300 rounded-md"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Similar input fields for vehicleNumber, vehicleType, phone, email, and location */}
            {/* ... */}

            <div className="flex justify-between">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Update Information
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
