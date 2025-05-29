import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LOGO from '../asset/csir-new-logo.jpg';
import LOGO2 from '../asset/CSIRNEIST_Jorhat.png';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      navigate('/');
    } else {
      alert('Please enter credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center px-4">
      {/* Logo Banner */}
      <div className="flex items-center space-x-4 mb-8">
        <img src={LOGO} alt="CSIR Logo" className="h-16 w-auto" />
        <h1 className="text-blue-900 font-extrabold text-3xl md:text-4xl tracking-wide text-center">
          CSIR-NEIST
        </h1>
        <img src={LOGO2} alt="NEIST Logo" className="h-14 w-auto" />
      </div>

      {/* Login Box */}
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md border-t-4 border-blue-800">
        <h2 className="text-center text-2xl font-semibold text-blue-800 mb-6">
          Citizen Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded-md font-semibold hover:bg-blue-900 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          © {new Date().getFullYear()} CSIR-NEIST. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
