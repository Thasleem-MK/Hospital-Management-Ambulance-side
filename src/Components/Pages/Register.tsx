// import React, { useState } from "react";
// import {
//   Ambulance,
//   Phone,
//   Mail,
//   Lock,
//   MapPin,
//   MapPinHouse,
//   LucideAmbulance,
// } from "lucide-react";
// import OTPVerification from "../../Components/OtpVarification";
// const Register: React.FC = () => {
//   const [formData, setFormData] = useState({
//     address: "",
//     name: "",
//     vehicleType: "",
//     phone: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     latitude: "",
//     longitude: "",
//   });
//   const [showOTP, setShowOTP] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Here you would typically send the data to your backend
//     console.log("Form submitted:", formData);
//     // Simulate sending OTP
//     setShowOTP(true);
//   };

//   const handleOTPVerification = (otp: string) => {
//     // Here you would verify the OTP with your backend
//     console.log("OTP verified:", otp);
//     // If OTP is correct, proceed with registration
//     // Otherwise, show an error message
//   };

//   if (showOTP) {
//     return (
//       <OTPVerification
//         onVerify={handleOTPVerification}
//         email={formData.email}
//       />
//     );
//   }

//   return (
//     <div className="min-h-screen bg-green-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-xl shadow-md">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-green-800">
//             Register Your Ambulance
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div className="mb-2">
//               <label htmlFor="name" className="sr-only">
//                 Name
//               </label>
//               <div className="relative">
//                 <div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Ambulance className="h-5 w-5 text-green-500" />
//                 </div>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   required
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
//                   placeholder="Service Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="name" className="sr-only">
//                 Address
//               </label>
//               <div className="relative">
//                 <div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <MapPinHouse className="h-5 w-5 text-green-500" />
//                 </div>
//                 <input
//                   id="address"
//                   name="address"
//                   type="text"
//                   required
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
//                   placeholder="Address"
//                   value={formData.address}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="vehicleType" className="sr-only">
//                 Type of Vehicle
//               </label>
//               <div className="relative">
//                 <div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <LucideAmbulance className="h-5 w-5 text-green-500" />
//                 </div>
//                 <select
//                   id="vehicleType"
//                   name="vehicleType"
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
//                   value={formData.vehicleType}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select Type of Vehicle</option>
//                   <option value="basic">Basic Service</option>
//                   <option value="D-level">D-Level Service</option>
//                   <option value="E-type">E-Type Service</option>
//                 </select>
//               </div>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="phone" className="sr-only">
//                 Phone
//               </label>
//               <div className="relative">
//                 <div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Phone className="h-5 w-5 text-green-500" />
//                 </div>
//                 <input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   required
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
//                   placeholder="Phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="sr-only">
//                 Email address
//               </label>
//               <div className="relative">
//                 <div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="h-5 w-5 text-green-500" />
//                 </div>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
//                   placeholder="Email address"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="latitude" className="sr-only">
//                 Latitude
//               </label>
//               <div className="relative">
//                 <div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <MapPin className="h-5 w-5 text-green-500" />
//                 </div>
//                 <input
//                   id="latitude"
//                   name="latitude"
//                   type="text"
//                   required
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
//                   placeholder="Your latitude"
//                   value={formData.latitude}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="longitude" className="sr-only">
//                 Longitude
//               </label>
//               <div className="relative">
//                 <div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <MapPin className="h-5 w-5 text-green-500" />
//                 </div>
//                 <input
//                   id="longitude"
//                   name="longitude"
//                   type="longitude"
//                   required
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
//                   placeholder="Your longitude"
//                   value={formData.longitude}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-5 w-5 text-green-500" />
//                 </div>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="new-password"
//                   required
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="confirmPassword" className="sr-only">
//                 Confirm Password
//               </label>
//               <div className="relative">
//                 <div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-5 w-5 text-green-500" />
//                 </div>
//                 <input
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   type="password"
//                   autoComplete="new-password"
//                   required
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
//                   placeholder="Confirm Password"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//             >
//               Register and Send OTP
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from "react";
// import {
//   Ambulance,
//   Phone,
//   Mail,
//   MapPin,
//   MapPinHouse,
//   LucideAmbulance,
// } from "lucide-react";
// import OTPVerification from "../../Components//OtpVarification";

// const Register: React.FC = () => {
//   const [formData, setFormData] = useState({
//     address: "",
//     name: "",
//     vehicleType: "",
//     phone: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     latitude: "",
//     longitude: "",
//   });
//   const [showOTP, setShowOTP] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setShowOTP(true);
//   };

//   const handleOTPVerification = (otp: string) => {
//     console.log("OTP verified:", otp);
//     // Implement OTP verification logic here
//   };

//   if (showOTP) {
//     return (
//       <OTPVerification
//         onVerify={handleOTPVerification}
//         email={formData.email}
//       />
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
//       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-green-800">
//             Register Your Ambulance Service
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             Join our network of emergency responders
//           </p>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             {[
//               {
//                 name: "name",
//                 label: "Service Name",
//                 icon: Ambulance,
//                 type: "text",
//               },
//               {
//                 name: "address",
//                 label: "Address",
//                 icon: MapPinHouse,
//                 type: "text",
//               },
//               {
//                 name: "vehicleType",
//                 label: "Type of Vehicle",
//                 icon: LucideAmbulance,
//                 type: "select",
//               },
//               { name: "phone", label: "Phone", icon: Phone, type: "tel" },
//               {
//                 name: "email",
//                 label: "Email address",
//                 icon: Mail,
//                 type: "email",
//               },
//               {
//                 name: "latitude",
//                 label: "Latitude",
//                 icon: MapPin,
//                 type: "text",
//               },
//               {
//                 name: "longitude",
//                 label: "Longitude",
//                 icon: MapPin,
//                 type: "text",
//               },
//             ].map((field) => (
//               <div key={field.name} className="mb-4">
//                 <label
//                   htmlFor={field.name}
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   {field.label}
//                 </label>
//                 <div className="relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <field.icon className="h-5 w-5 text-green-500" />
//                   </div>
//                   {field.type === "select" ? (
//                     <select
//                       id={field.name}
//                       name={field.name}
//                       className="block w-full pl-10 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
//                       value={formData[field.name as keyof typeof formData]}
//                       onChange={handleChange}
//                     >
//                       <option value="">Select Type of Vehicle</option>
//                       <option value="basic">Basic Service</option>
//                       <option value="D-level">D-Level Service</option>
//                       <option value="E-type">E-Type Service</option>
//                     </select>
//                   ) : (
//                     <input
//                       id={field.name}
//                       name={field.name}
//                       type={field.type}
//                       required
//                       className="block w-full pl-10 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
//                       placeholder={field.label}
//                       value={formData[field.name as keyof typeof formData]}
//                       onChange={handleChange}
//                     />
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
//             >
//               Register and Send OTP
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { Ambulance, Phone, Mail, MapPin } from "lucide-react";
import OTPVerification from "../OtpVarification";

const AmbulanceServiceForm: React.FC = () => {
  const [formData, setFormData] = useState({
    serviceName: "",
    address: "",
    latitude: "",
    longitude: "",
    phone: "",
    email: "",
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    setOTP(randomNumber.toString());
    setShowOTP(true);
  };

  const handleOTPVerification = (value: string) => {
    if (value === otp) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
      setShowOTP(false);
      console.log("Form submitted:", formData);
      setFormData({
        address: "",
        email: "",
        latitude: "",
        longitude: "",
        phone: "",
        serviceName: "",
        vehicleType: "",
      });
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
        <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="w-full h-full text-green-200"
          >
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10z" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32 transform -translate-x-8 translate-y-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="w-full h-full text-green-200"
          >
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10z" />
          </svg>
        </div>
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
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="flex mb-4">
              <input
                id="latitude"
                name="latitude"
                type="text"
                required
                className="block w-full pl-10 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                placeholder="Latitude"
                value={formData.latitude}
                onChange={handleChange}
              />
              <input
                id="longitude"
                name="longitude"
                type="text"
                required
                className="block w-full pl-10 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                placeholder="Longitude"
                value={formData.longitude}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
              <label
                htmlFor="vehicleType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Vehicle Type
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Ambulance className="h-5 w-5 text-green-500" />
                </div>
                <select
                  id="vehicleType"
                  name="vehicleType"
                  required
                  className="block w-full pl-10 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                  value={formData.vehicleType}
                  onChange={handleChange}
                >
                  <option value="">Select Vehicle Type</option>
                  <option value="basic">Basic Life Support</option>
                  <option value="advanced">Advanced Life Support</option>
                  <option value="critical">Critical Care</option>
                  <option value="neonatal">Neonatal</option>
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
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
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
