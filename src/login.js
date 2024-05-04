import React from 'react';

function Login() {
  return (
    <main className="container-login flex items-center justify-center bg-black text-black p-10">
      <div className="w-96 bg-white rounded-3 h-auto shadow-lg p-8">
        <h1 className="text-3xl mb-6 font-bold text-center">Login</h1>
        <div className="mb-6">
          <label htmlFor="username" className="block text-sm font-bold mb-2">Username</label>
          <input type="text" id="username" className="w-full px-3 py-2 border rounded bg-gray-200 focus:outline-none focus:ring focus:border-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-bold mb-2">Password</label>
          <input type="password" id="password" className="w-full px-3 py-2 border rounded bg-gray-200 focus:outline-none focus:ring focus:border-blue-500" />
        </div>
        <div className="flex justify-center mb-6">
          <button className="w-40 px-4 py-2 bg-purple-500 text-white font-bold rounded hover:bg-purple-700 focus:outline-none focus:bg-purple-700">
            Login
          </button>
        </div>
        <div className="flex justify-center">
          <p>Don't have an account yet? <a href="/register" className="text-purple-500 hover:underline">Register here</a></p>
        </div>
      </div>
    </main>
  );
}

export default Login;
