import React, { useEffect, useRef } from 'react';
import Gallery from "./js/gallery";
import MovieList from './js/movie-list'
import kungfupanda4 from './images/movie-poster/kungfupanda4.jpg';
import dune from './images/movie-poster/dune2.jpg';
import demonslayer from './images/movie-poster/demonslayer.jpg';

function Home() {
  return (
    <main>
      {/* Movie Preview Section Start */}
      <section id="movie-preview" className="bg-black pb-28 pt-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/3 flex justify-center">
              <Gallery/>
            </div>
            {/* Upnext */}
            <div className="w-full self-start px-4 lg:w-2/3">
              <h1
                className="ml-10 text-base font-bold text-primary md:text-xl lg:text-2xl"
              >
                Up Next
              </h1>
              <div className="flex flex-wrap">
                {/* Movie 1 */}
                <div className="w-full bg-slate-800 px-4 pt-6">
                  <div className="mb-10 lg:flex">
                    {/* Gambar */}
                    <img
                      src={kungfupanda4}
                      alt="Kung fu panda 4"
                      className="lg:w-1/6"
                    />
                    {/* Konten Teks */}
                    <div className="bg-slate-800 px-6 py-8">
                      <div className="my-4 flex items-center justify-start">
                        <span className="flex items-center">
                          <svg
                            width="48"
                            height="48"
                            fill="currentColor"
                            className="bi bi-play-circle text-white hover:text-primary"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                            />
                            <path
                              d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"
                            />
                          </svg>
                          <p className="text-xl font-semibold text-white">1:34</p>
                        </span>
                      </div>
                      <div>
                        <h3>
                                                     <p className="mb-3 text-xl font-semibold text-white">
                              Kung Fu Panda 4 adalah film animasi komedi bela diri
                              Amerika Serikat tahun 2024 yang diproduseri oleh
                              DreamWorks Animation dan didistribusikan oleh
                              Universal Pictures. Film ini ialah seri keempat
                              dalam waralaba Kung Fu Panda sekaligus sekuel dari
                              Kung Fu Panda 3.
                            </p>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Movie 2 */}
                <div className="w-full bg-slate-800 px-4">
                  <div className="mb-10 lg:flex">
                    {/* Gambar */}
                    <img
                      src={dune}
                      alt="dune-2"
                      className="lg:w-1/6"
                    />
                    {/* Konten Teks */}
                    <div className="bg-slate-800 px-6 py-8">
                      <div className="my-4 flex items-center justify-start">
                        <span className="flex items-center">
                          <svg
                            width="48"
                            height="48"
                            fill="currentColor"
                            className="bi bi-play-circle text-white hover:text-primary"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                            />
                            <path
                              d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"
                            />
                          </svg>
                          <p className="text-xl font-semibold text-white">2:46</p>
                        </span>
                      </div>
                      <div>
                        <h3>
                          <p className="mb-3 text-xl font-semibold text-white">
                            Dune: Part Two adalah sebuah film fiksi ilmiah epos
                            Amerika tahun 2024 disutradarai oleh Denis
                            Villeneuve, yang ikut menulis skenario bersama Jon
                            Spaihts.
                          </p>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Movie 3 */}
                <div className="w-full bg-slate-800 px-4">
                  <div className="mb-10 lg:flex">
                    {/* Gambar */}
                    <img
                      src={demonslayer}
                      alt="Demon Slayer"
                      className="lg:w-1/6"
                    />
                    {/* Konten Teks */}
                    <div className="bg-slate-800 px-6 py-8">
                      <div className="my-4 flex items-center justify-start">
                        <span className="flex items-center">
                          <svg
                            width="48"
                            height="48"
                            fill="currentColor"
                            className="bi bi-play-circle text-white hover:text-primary"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                            />
                            <path
                              d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"
                            />
                          </svg>
                          <p className="text-xl font-semibold text-white">1:57</p>
                        </span>
                      </div>
                      <div>
                        <h3>
                          <p className="mb-3 text-xl font-semibold text-white">
                            Tanjiro Kamado, bergabung dengan Inosuke Hashibira,
                            seorang anak laki-laki yang dibesarkan oleh babi
                            hutan yang memakai kepala babi hutan, dan Zenitsu
                            Agatsuma, seorang anak laki-laki ketakutan yang
                            mengeluarkan kekuatan sejatinya ketika dia tidur, di
                            dalam Kereta Infinity dalam misi baru dengan seorang
                            Pilar Api, Kyojuro Rengoku , Untuk mengalahkan iblis
                            yang telah menyiksa orang-orang dan membunuh
                            pembunuh iblis yang menentangnya!
                          </p>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      {/* Movie Preview Section End */}

      {/* Movie List Section Start*/}
      <section id="movie-list" className="bg-black pb-32 pt-36">
        <div className="container">
          <div id="movielist-container" className="flex flex-wrap">
            <MovieList/>
          </div>
        </div>
      </section>
      {/* Movie List Section End*/}
    </main>
  );
}

export default Home;