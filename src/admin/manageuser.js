import React from 'react';

function ManageUser() {
  return (
    <div>
      <header className="bg-black text-white">
        <h1 className="p-6 text-2xl">Theatron Dashboard</h1>
      </header>
      <main className="xl:flex">
        <nav className="w-full bg-slate-800 p-6 text-white xl:min-h-screen xl:w-64">
          <ul>
            <li className="md:text-md mb-5 text-sm lg:text-lg xl:text-lg">
              <a href="/manageuser">Manage User</a>
            </li>
            <li className="md:text-md mb-5 text-sm lg:text-lg xl:text-lg">
              <a href="/managemovie">Manage Movie</a>
            </li>
          </ul>
        </nav>
        <section className="p-6">
          <h2 className="mb-4 text-2xl font-bold">Manage Users</h2>
          <button className="mb-4 rounded-lg bg-yellow-300 p-3 hover:bg-yellow-400">
            Create New User
          </button>
          <table className="w-screen max-w-screen-xl table-auto border-collapse">
            <thead>
              <tr>
                <th className="bg-gray-200 px-4 py-2 text-center text-sm">User ID</th>
                <th className="bg-gray-200 px-4 py-2 text-center text-sm">User Name</th>
                <th className="bg-gray-200 px-4 py-2 text-center text-sm">Phone</th>
                <th className="bg-gray-200 px-4 py-2 text-center text-sm">Email</th>
                <th className="bg-gray-200 px-4 py-2 text-center text-sm">Created On</th>
                <th className="bg-gray-200 px-4 py-2 text-center text-sm">Manage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 text-center text-sm">001</td>
                <td className="border px-4 py-2 text-center text-sm">Josvian Salim</td>
                <td className="border px-4 py-2 text-center text-sm">08213456789</td>
                <td className="border px-4 py-2 text-center text-sm">josvian@yahoo.com</td>
                <td className="border px-4 py-2 text-center text-sm">2024-03-22 22:00:00</td>
                <td className="border px-4 py-2 text-center align-middle text-sm">
                  <button className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600">
                    Manage
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-center text-sm">001</td>
                <td className="border px-4 py-2 text-center text-sm">Josvian Salim</td>
                <td className="border px-4 py-2 text-center text-sm">08213456789</td>
                <td className="border px-4 py-2 text-center text-sm">josvian@yahoo.com</td>
                <td className="border px-4 py-2 text-center text-sm">2024-03-22 22:00:00</td>
                <td className="border px-4 py-2 text-center align-middle text-sm">
                  <button className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600">
                    Manage
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-center text-sm">001</td>
                <td className="border px-4 py-2 text-center text-sm">Josvian Salim</td>
                <td className="border px-4 py-2 text-center text-sm">08213456789</td>
                <td className="border px-4 py-2 text-center text-sm">josvian@yahoo.com</td>
                <td className="border px-4 py-2 text-center text-sm">2024-03-22 22:00:00</td>
                <td className="border px-4 py-2 text-center align-middle text-sm">
                  <button className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600">
                    Manage
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default ManageUser;
