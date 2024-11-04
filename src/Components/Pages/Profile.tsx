import React, { useState } from "react";
import {
  Ambulance,
  Phone,
  Mail,
  MapPin,
  Edit2,
  Save,
  LogOut,
  Trash2,
} from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";

interface ProfileData {
  _id?: string;
  serviceName: string;
  address: string;
  latitude: string;
  longitude: string;
  phone: string;
  email: string;
  vehicleType: string;
}

const ProfilePage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const {
    address,
    email,
    latitude,
    longitude,
    phone,
    serviceName,
    vehicleType,
  } = useSelector((state: RootState) => state.Ambulance);

  const [profileData, setProfileData] = useState<ProfileData>({
    serviceName: serviceName,
    address: address,
    latitude: latitude,
    longitude: longitude,
    phone: phone,
    email: email,
    vehicleType: vehicleType,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEditing) {
      setIsEditing(true);
      return;
    }
    setIsEditing(false);
    // Here you would typically send the updated data to your backend
    console.log("Profile updated:", profileData);
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logging out...");
  };

  const handleDelete = () => {
    // Implement account deletion logic here
    console.log("Deleting account...");
    setShowDeleteConfirm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg relative overflow-hidden">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-green-800">
            Your Profile
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            View and update your ambulance service details
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {Object.entries(profileData).map(([key, value]) => (
            <div key={key} className="rounded-md shadow-sm">
              <label
                htmlFor={key}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {key === "serviceName" && (
                    <Ambulance className="h-5 w-5 text-green-500" />
                  )}
                  {key === "address" && (
                    <MapPin className="h-5 w-5 text-green-500" />
                  )}
                  {key === "latitude" && (
                    <MapPin className="h-5 w-5 text-green-500" />
                  )}
                  {key === "longitude" && (
                    <MapPin className="h-5 w-5 text-green-500" />
                  )}
                  {key === "phone" && (
                    <Phone className="h-5 w-5 text-green-500" />
                  )}
                  {key === "email" && (
                    <Mail className="h-5 w-5 text-green-500" />
                  )}
                  {key === "vehicleType" && (
                    <Ambulance className="h-5 w-5 text-green-500" />
                  )}
                </div>
                {isEditing && key !== "email" ? (
                  key === "vehicleType" ? (
                    <select
                      id={key}
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                    >
                      <option value="Basic Service">Basic Service</option>
                      <option value="D-Level Service">D-Level Service</option>
                      <option value="E-Type Service">E-Type Service</option>
                    </select>
                  ) : (
                    <input
                      id={key}
                      name={key}
                      type={key === "phone" ? "tel" : "text"}
                      required
                      className="block w-full pl-10 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                      value={value}
                      onChange={handleChange}
                    />
                  )
                ) : (
                  <div className="block w-full pl-10 pr-3 py-2 text-base sm:text-sm rounded-md bg-gray-50">
                    {value}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div>
            {isEditing ? (
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
              >
                <Save className="h-5 w-5 mr-2" />
                Save Changes
              </button>
            ) : (
              <button
                type="submit"
                // onClick={() => {
                //   setIsEditing(true);
                // }}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
              >
                <Edit2 className="h-5 w-5 mr-2" />
                Edit Profile
              </button>
            )}
          </div>
        </form>
        <div className="flex justify-between mt-6">
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </button>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out"
          >
            <Trash2 className="h-5 w-5 mr-2" />
            Delete Account
          </button>
        </div>
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="bg-white p-8 rounded-md shadow-xl">
              <h3 className="text-xl font-bold mb-4">
                Confirm Account Deletion
              </h3>
              <p className="mb-6">
                Are you sure you want to delete your account? This action cannot
                be undone.
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
