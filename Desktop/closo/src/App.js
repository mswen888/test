import logo from './logo.svg';
import './App.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";

import './index.css'

function App() {
  return (
    <div class="max-w-6xl mx-auto p-4 pt-6">
      <h2 class="-top-8 pb-4 text-lg font-bold ml-5 sm:ml-0">
        This is the title
      </h2>
      <div className="App">
        <Splide
          options={{
            type: "slide",
            rewind: "false",
            perPage: 3,
            perMove: 3,
            gap: "1rem",
            pagination: false,
          }}
          renderControls={() => (
            <div className="absolute flex w-4 h-4 space-x-6 splide__arrows -top-8 right-12 invisible sm:visible">
              <div className="splide__arrow-prev" role="button">
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
              </div>
              <div className="splide__arrow--next" role="button">
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
              </div>
            </div>
          )}
        >
          <SplideSlide>
            <div class="bg-red-300">one</div>
          </SplideSlide>
          <SplideSlide>
            <div class="bg-red-300">two</div>
          </SplideSlide>
          <SplideSlide>
            <div class="bg-red-300">three</div>
          </SplideSlide>
          <SplideSlide>
            <div class="bg-red-300">four</div>
          </SplideSlide>
          <SplideSlide>
            <div class="bg-red-300">five</div>
          </SplideSlide>
          <SplideSlide>
            <div class="bg-red-300">six</div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default App;
