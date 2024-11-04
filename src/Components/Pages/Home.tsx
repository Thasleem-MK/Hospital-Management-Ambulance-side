import { Award, Heart, Zap, Shield } from "lucide-react";
import DriverInstructions from "../DriverInstruction";
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
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
  );
};

export default HomePage;
