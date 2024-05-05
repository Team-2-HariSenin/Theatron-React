import React from "react";

function ManageMovie() {
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
              <h2 className="mb-4 text-2xl font-bold">Manage Movies</h2>
              <button className="mb-4 rounded-lg bg-yellow-300 p-3 hover:bg-yellow-400">
                Create New Genre
              </button>
              <table className="w-screen max-w-screen-xl table-auto border-collapse">
                <thead>
                  <tr>
                    <th className="bg-gray-200 px-4 py-2 text-center text-sm">Genre</th>
                    <th className="bg-gray-200 px-4 py-2 text-center text-sm">Movie Count</th>
                    <th className="bg-gray-200 px-4 py-2 text-center text-sm">Status</th>
                    <th className="bg-gray-200 px-4 py-2 text-center text-sm">Manage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 text-center align-middle text-sm">
                      <a href="managemoviedetail.html">
                        <button className="rounded bg-yellow-300 px-4 py-2 font-bold hover:bg-yellow-400">
                          Horror
                        </button>
                      </a>
                    </td>
                    <td className="border px-4 py-2 text-center text-sm">1</td>
                    <td className="border px-4 py-2 text-center text-sm">Active</td>
                    <td className="border px-4 py-2 text-center align-middle text-sm">
                      <button className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600">
                        Manage
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center align-middle text-sm">
                      <button className="rounded bg-yellow-300 px-4 py-2 font-bold hover:bg-yellow-400">
                        Action
                      </button>
                    </td>
                    <td className="border px-4 py-2 text-center text-sm">0</td>
                    <td className="border px-4 py-2 text-center text-sm">Active</td>
                    <td className="border px-4 py-2 text-center align-middle text-sm">
                      <button className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600">
                        Manage
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center align-middle text-sm">
                      <button className="rounded bg-yellow-300 px-4 py-2 font-bold hover:bg-yellow-400">
                        Comedy
                      </button>
                    </td>
                    <td className="border px-4 py-2 text-center text-sm">0</td>
                    <td className="border px-4 py-2 text-center text-sm">Active</td>
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

export default ManageMovie;