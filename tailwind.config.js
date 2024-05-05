/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/Home.js",
    "./src/watchlist.js",
    "./src/register.js",
    "./src/login.js",
    "./src/moviedetail.js",
    "./src/js/gallery.js",
    "./src/js/movie-list.js",
    "./src/admin/manageuser.js",
    "./src/admin/managemovie.js",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#5B50E1",
      },
    },
  },
  plugins: [],
};
