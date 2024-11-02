import React from "react";
import { Home, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav className="bg-green-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white text-lg font-bold">
                AmbulanceConnect
              </span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/home"
                className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <Home className="h-5 w-5 mr-1" />
                Home
              </Link>
              <Link
                to="/settings"
                className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <Settings className="h-5 w-5 mr-1" />
                Settings
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <LogOut className="h-5 w-5 mr-1" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
