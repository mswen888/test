import React from 'react'

import Carousel from './Carousel';
import { Splide, SplideSlide } from "@splidejs/react-splide";

function App() {
  const createSlides = [1, 2, 3, 4, 5, 6];
  
  return (
    <div className="splide__slider relative">
      <div class="splide__slider relative">
        <h1 class="text-3xl font-sans mb-4">Carousel card tiitle</h1>
        <div class="splide__arrows absolute z-20 top-4 left-full transform -translate-x-3">
          <button class="splide__arrow splide__arrow--prev bg-blue-700 text-white rounded-none transform -translate-x-28 -translate-y-1/2 rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
          </button>
          <button class="splide__arrow splide__arrow--next bg-blue-700 text-white rounded-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>

      <Splide
        // renderControls={() => (
        //   <div className="splide__arrows">
        //     <div className="splide__arrow--prev float-right" role="button">
        //       <h1>prev</h1>
        //     </div>
        //     <div className="splide__arrow--next float-right" role="button">
        //       <h1>next</h1>
        //     </div>
        //   </div>
        // )}
        options={{
          type: "loop",
          rewind: true,
          perPage: 3,
          perMove: 3,
          lazyLoad: "nearby",
          gap: "1rem",
          pagination: false,
          breakpoints: {
            768: {
              perPage: 2,
              perMove: 2,
            },
            480: {
              perPage: 1,
              perMove: 1,
            },
          },
        }}
        onMoved={(splide, newIndex) => {
          console.log("moved", newIndex);
        }}
      >
        {createSlides.map((slide) => (
          <SplideSlide key={slide.src}>
            <div>
              <p>hello{slide}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default App;
