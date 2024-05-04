import React from 'react';
import oppenheimer from './images/movie-poster/oppenheimer.jpg'

function MovieDetail() {
  return (
    <main className="">
      {/* Movie Preview Section Start */}
      <section id="movie-detail" className="bg-black pb-28 pt-32">
        <div className="container mx-auto lg:w-11/12">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-5 lg:w-5/12">
              <div className="mt-10 lg:right-0 lg:mt-9">
                <img
                  src={oppenheimer}
                  alt="oppenheimer poster"
                  className="mx-auto w-96"
                />
              </div>
            </div>
            <div className="w-full self-start px-5 lg:w-7/12">
              <h1 className="mt-10 text-2xl font-semibold text-white lg:text-5xl">
                Oppenheimer 2023
              </h1>
              <p className="lg-text:3xl my-7 font-sans text-xl font-semibold text-white">
                The story of American scientist J. Robert Oppenheimer and his
                role in the development of the atomic bomb.
              </p>
              <div className="text-sm lg:text-lg text-white">
                <hr className="text-white" />
                <div className="my-2">
                  <h3 className="mr-8 inline-block">Director</h3>
                  <p className="inline-block text-[#35A2F1]">Christoper Nolan</p>
                </div>
                <hr className="text-white" />
                <div className="my-2 flex">
                  <h3 className="mr-8 inline-block">Writers</h3>
                  <ul className="inline-block flex gap-2 text-[#35A2F1] *:inline-block">
                    <li>Christoper Nolan</li>
                    <li>• Kai Bird</li>
                    <li>• Martin Sherwin</li>
                  </ul>
                </div>
                <hr className="text-white" />
                <div className="my-2 flex">
                  <h3 className="mr-8 inline-block">Star</h3>
                  <ul className="inline-block flex gap-2 text-[#35A2F1] *:inline-block">
                    <li>Cillian Murphy</li>
                    <li>• Emily Blunt</li>
                    <li>• Matt Damon</li>
                  </ul>
                </div>
                <hr className="text-white mb-5" />
              </div>
              <a href='#' className='text-white gap-2 flex'>
                <h3>Watch Trailer</h3>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="relative inline-block w-4"
                  style={{ fill: 'white' }}
                >
                  <path d="M3 22v-20l18 10-18 10z" />
                </svg>
              </a>
            </div>
            <div className="w-full self-start px-5">
              <h1
                className="mt-10 border-b-[1px] pb-3 text-2xl font-semibold text-white lg:text-5xl"
              >
                Story Line
              </h1>
              <p className="mt-5 lg:text-2xl text-white">
                A dramatization of the life story of J. Robert Oppenheimer, the
                physicist who had a large hand in the development of the atomic
                bomb, thus helping end World War 2. We see his life from
                university days all the way to post-WW2, where his fame saw him
                embroiled in political machinations.
                <a href="#" className="">—grantss</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Movie Preview Section End */}
      {/* Movie List Section End*/}
    </main>
  );
}

export default MovieDetail;
