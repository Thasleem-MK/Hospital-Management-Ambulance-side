import React, { useState } from "react";
import { Award, Heart, Zap, Shield, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import DriverInstructions from "../DriverInstruction";

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-green-600">Hosta</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/login"
                className="text-gray-500 hover:text-green-600 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Sign In
              </Link>
              <Link
                to="/registration"
                className="text-gray-500 hover:text-green-600 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Sign Up
              </Link>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/signin"
                className="text-gray-500 hover:text-green-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="text-gray-500 hover:text-green-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
            Welcome, Heroes of the Ambulance Service
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Your Impact is Immeasurable
            </h2>
            <p className="text-gray-600 mb-4">
              Every day, you rise to the challenge of saving lives and providing
              critical care when it matters most. Your dedication, skill, and
              compassion make a profound difference in our community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center space-x-3 bg-green-100 rounded-lg p-4">
                <Award className="h-8 w-8 text-green-600" />
                <span className="text-green-800 font-semibold">
                  Excellence in Service
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-green-100 rounded-lg p-4">
                <Heart className="h-8 w-8 text-green-600" />
                <span className="text-green-800 font-semibold">
                  Compassion in Action
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-green-100 rounded-lg p-4">
                <Zap className="h-8 w-8 text-green-600" />
                <span className="text-green-800 font-semibold">
                  Swift Response
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-green-100 rounded-lg p-4">
                <Shield className="h-8 w-8 text-green-600" />
                <span className="text-green-800 font-semibold">
                  Community Guardians
                </span>
              </div>
            </div>
          </div>

          <DriverInstructions />
        </div>
      </div>
    </div>
  );
};

export default HomePage;