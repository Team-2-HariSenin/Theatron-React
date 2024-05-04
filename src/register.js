import React from 'react';

function Register() {
  return (
    <main className="container-register flex items-center justify-center bg-black text-black py-10">
      <div className="w-96 bg-white rounded-3 h-auto shadow-lg p-8">
        <h1 className="text-3xl mb-6 font-bold text-center">Create New Account</h1>
        <div className="mb-6">
          <label htmlFor="username" className="block text-sm font-bold mb-2">Username</label>
          <input type="text" id="username" className="w-full px-3 py-2 border rounded bg-gray-200 focus:outline-none focus:ring focus:border-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 border rounded bg-gray-200 focus:outline-none focus:ring focus:border-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-bold mb-2">Phone</label>
          <input type="tel" id="phone" className="w-full px-3 py-2 border rounded bg-gray-200 focus:outline-none focus:ring focus:border-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-bold mb-2">Password</label>
          <input type="password" id="password" className="w-full px-3 py-2 border rounded bg-gray-200 focus:outline-none focus:ring focus:border-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-bold mb-2">Confirm Password</label>
          <input type="password" id="confirmPassword" className="w-full px-3 py-2 border rounded bg-gray-200 focus:outline-none focus:ring focus:border-blue-500" />
        </div>
        <div className="flex justify-center mb-6">
          <button className="w-40 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
            Register
          </button>
        </div>
        <div className="flex justify-center">
          <p>Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log in here</a></p>
        </div>
      </div>
    </main>
  );
}

export default Register;
