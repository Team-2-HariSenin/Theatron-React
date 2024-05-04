import React from 'react';

import oppenheimer from './images/movie-poster/oppenheimer.jpg';
import dune from './images/movie-poster/dune2.jpg';
import demonslayer from './images/movie-poster/demonslayer.jpg';
import challengers from './images/movie-poster/challengers.jpg';
import godzillakong from './images/movie-poster/godzillakong.png';

function Watchlist() {
  return (
    <main>
      <section id="watchlist" className="bg-black pb-28 pt-32">
        {/* Movie 1 */}
        <div className="container">
          <div className="flex flex-col items-center m-10 pb-5 border-b border-gray-300 lg:w-full sm:flex-row">
            <img
              src={godzillakong}
              alt="Movie1"
              className="w-32 h-auto mb-4 sm:mb-0 sm:mr-4"
            />
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Godzilla - Kong</h2>
              <div className="flex items-center mb-2">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-yellow-500"
                >
                  <path d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z" />
                </svg>
                <div className="ml-2">
                  <p className="text-white">8.5</p>
                </div>
              </div>
              <p className="mb-2 text-white max-w-xl text-left">
                Sebuah pertarungan epic dalam sinematik Monsterverse antara Godzilla dan Kong. Pertarungan Godzilla vs.
                Kong membuat umat manusia harus bertahan dengan berbagai cara. Salah satu adalah memusnahkan kedua
                raksasa tersebut. Siapa yang akan menang?
              </p>
            </div>
          </div>
        </div>

        {/* Movie 2 */}
        <div className="container">
          <div className="flex flex-col items-center m-10 pb-5 border-b border-gray-300 lg:w-full sm:flex-row">
            <img
              src={dune}
              alt="Movie1"
              className="w-32 h-auto mb-4 sm:mb-0 sm:mr-4"
            />
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Dune 2</h2>
              <div className="flex items-center mb-2">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-yellow-500"
                >
                  <path d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z" />
                </svg>
                <div className="ml-2">
                  <p className="text-white">7.8</p>
                </div>
              </div>
              <p className="mb-2 text-white max-w-xl text-left">
                Film kedua akan meneruskan petualangan Paul Atreides (Timothee Chalamet) di Planet Arrakis. Ia akan
                bersatu dengan Chani (Zendaya) dan suku Fremen untuk membalaskan dendam atas kehancuran keluarganya.
              </p>
            </div>
          </div>
        </div>

        {/* Movie 3 */}
        <div className="container">
          <div className="flex flex-col items-center m-10 pb-5 border-b border-gray-300 lg:w-full sm:flex-row">
            <img
              src={oppenheimer}
              alt="Movie1"
              className="w-32 h-auto mb-4 sm:mb-0 sm:mr-4"
            />
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Oppenheimer</h2>
              <div className="flex items-center mb-2">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-yellow-500"
                >
                  <path d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z" />
                </svg>
                <div className="ml-2">
                  <p className="text-white">9.2</p>
                </div>
              </div>
              <p className="mb-2 text-white max-w-xl text-left">
                Oppenheimer merupakan film biopik yang mengisahkan perjalanan J. Robert Oppenheimer, fisikawan
                teoretis di balik penciptaan bom atom pertama dalam sejarah. Film itu menampilkan kisah Oppenheimer
                bersama ilmuwan lain yang terlibat dalam Proyek Manhattan.
              </p>
            </div>
          </div>
        </div>

        {/* Movie 4 */}
        <div className="container">
          <div className="flex flex-col items-center m-10 pb-5 border-b border-gray-300 lg:w-full sm:flex-row">
            <img
              src={demonslayer}
              alt="Movie1"
              className="w-32 h-auto mb-4 sm:mb-0 sm:mr-4"
            />
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Demon Slayer</h2>
              <div className="flex items-center mb-2">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-yellow-500"
                >
                  <path d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z" />
                </svg>
                <div className="ml-2">
                  <p className="text-white">8.2</p>
                </div>
              </div>
              <p className="mb-2 text-white max-w-xl text-left">
                Cerita dimulai dengan Tanjiro Kamado, seorang anak laki-laki yang keluarganya dibantai oleh iblis. Dia
                bergabung dengan Korps Pembunuh Iblis dengan tujuan mengubah adik perempuannya, Nezuko, kembali menjadi
                manusia setelah dia berubah menjadi iblis.
              </p>
            </div>
          </div>
        </div>

        {/* Movie 5 */}
        <div className="container">
          <div className="flex flex-col items-center m-10 pb-5 border-b border-gray-300 lg:w-full sm:flex-row">
            <img
              src={challengers}
              alt="Movie1"
              className="w-32 h-auto mb-4 sm:mb-0 sm:mr-4"
            />
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Challengers</h2>
              <div className="flex items-center mb-2">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-yellow-500"
                >
                  <path d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z" />
                </svg>
                <div className="ml-2">
                  <p className="text-white">7.5</p>
                </div>
              </div>
              <p className="mb-2 text-white max-w-xl text-left">
                Challengers mengisahkan tentang seorang juara Grand Slam tenis yang harus berhadapan dengan mantan
                kekasih istrinya yang juga mantan sahabatnya di sebuah turnamen challenger.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Watchlist;
