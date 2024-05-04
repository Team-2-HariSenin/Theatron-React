import React from 'react';
import dune2 from '../images/movie-poster/dune2.jpg';
import gentlemen from '../images/movie-poster/gentlemen.jpg';
import poorthings from '../images/movie-poster/poorthings.jpg';
import damsel from '../images/movie-poster/damsel.jpg';
import shogun from '../images/movie-poster/shogun.jpg';
import oppenheimer from '../images/movie-poster/oppenheimer.jpg';
import challengers from '../images/movie-poster/challengers.jpg';
import godzillakong from '../images/movie-poster/godzillakong.png';
import demonslayer from '../images/movie-poster/demonslayer.jpg';
import kungfupanda4 from '../images/movie-poster/kungfupanda4.jpg';

const movies = [
  { title: "Dune 2", poster: dune2, rating: "8.8" },
  { title: "The Gentleman", poster: gentlemen, rating: "8.3" },
  { title: "Poor Things", poster: poorthings, rating: "8.0" },
  { title: "Damsel", poster: damsel, rating: "6.1" },
  { title: "Shogun", poster: shogun, rating: "9.2" },
  { title: "Oppenheimer", poster: oppenheimer, rating: "8.3" },
  { title: "Challengers", poster: challengers, rating: "7.8" },
  { title: "Godzilla - Kong", poster: godzillakong, rating: "7.6" },
  { title: "Demon Slayer", poster: demonslayer, rating: "8.6" },
  { title: "Kungfu Panda 4", poster: kungfupanda4, rating: "6.5" },
];

function MovieList() {
  return (
    <div id="movielist-container" className="flex flex-wrap justify-center">
      {movies.map((movie, index) => (
        <div key={index} className="mb-12 w-full px-4 md:w-1/3 lg:w-1/5">
          <div className="aspect-w-2 aspect-h-3">
            <div className="w-full h-full overflow-hidden">
              <img
                src={movie.poster}
                alt={movie.title}
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
          <div className="bg-slate-800 px-6 py-8">
            <h3>
              <a
                href="#"
                target="_blank"
                className="mb-3 block text-xl font-semibold text-white hover:text-primary overflow-x-auto"
              >
                {movie.title}
              </a>
            </h3>
            <div className="my-4 flex items-center justify-end">
              <svg
                width="16"
                height="16"
                fill="#FFD700"
                className="bi bi-star"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"
                />
              </svg>
              <span className="ml-1 text-white">{movie.rating}</span>
            </div>
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="w-full rounded-full bg-primary px-4 py-2 text-center text-sm font-medium text-white"
              >
                + Watchlist
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
