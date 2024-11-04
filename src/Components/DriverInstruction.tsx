import React from "react";
import {
  CheckCircle,
  AlertTriangle,
  Clock,
  Headphones,
  Clipboard,
  Shield,
} from "lucide-react";

const DriverInstructions: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">
        Important Instructions for Ambulance Drivers
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-green-800">
              Pre-Shift Checklist
            </h3>
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Inspect vehicle thoroughly</li>
            <li>Check all medical equipment</li>
            <li>Ensure adequate fuel</li>
            <li>Verify communication devices</li>
          </ul>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mr-2" />
            <h3 className="text-lg font-semibold text-yellow-800">
              Emergency Protocols
            </h3>
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Prioritize scene safety</li>
            <li>Assess patient condition quickly</li>
            <li>Communicate clearly with dispatch</li>
            <li>Follow proper lifting techniques</li>
          </ul>
        </div>
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Clock className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-blue-800">
              Response Time Guidelines
            </h3>
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Aim for 8-minute response in urban areas</li>
            <li>15-minute target for rural locations</li>
            <li>Update dispatch if delays occur</li>
            <li>Use sirens judiciously in residential areas</li>
          </ul>
        </div>
        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Headphones className="h-6 w-6 text-purple-600 mr-2" />
            <h3 className="text-lg font-semibold text-purple-800">
              Communication Best Practices
            </h3>
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Maintain clear radio communication</li>
            <li>Use standard medical terminology</li>
            <li>Confirm understanding of instructions</li>
            <li>Report patient status changes promptly</li>
          </ul>
        </div>
        <div className="bg-red-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Clipboard className="h-6 w-6 text-red-600 mr-2" />
            <h3 className="text-lg font-semibold text-red-800">
              Documentation Requirements
            </h3>
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Complete patient care reports accurately</li>
            <li>Record all treatments administered</li>
            <li>Note any unusual circumstances</li>
            <li>Submit reports before end of shift</li>
          </ul>
        </div>
        <div className="bg-indigo-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Shield className="h-6 w-6 text-indigo-600 mr-2" />
            <h3 className="text-lg font-semibold text-indigo-800">
              Safety Reminders
            </h3>
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Always wear appropriate PPE</li>
            <li>Follow traffic laws when possible</li>
            <li>Secure all equipment during transport</li>
            <li>Report any safety concerns immediately</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DriverInstructions;