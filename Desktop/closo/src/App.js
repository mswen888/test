import React, { useState } from "react";
import "./App.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import "./index.css";

function App() {
  const perPage = 3;
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-4 pt-6">
      <h2 className="-top-8 pb-4 text-lg font-bold ml-5 sm:ml-0">
        This is the title
      </h2>
      <div className="App">
        <Splide
          options={{
            type: "slide",
            rewind: "false",
            perPage: perPage,
            perMove: 3,
            gap: "1rem",
            pagination: false,
          }}
          renderControls={() => (
            <div className="absolute flex w-4 h-4 space-x-6 splide__arrows -top-8 right-12 invisible sm:visible">
              <div
                className={`splide__arrow-prev ${
                  isFirst ? "text-red-500" : ""
                }`}
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 17l-5-5m0 0l5-5m-5 5h12"
                  />
                </svg>
              </div>
              <div
                className={`splide__arrow--next ${
                  isLast ? "text-red-500" : ""
                }`}
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>
          )}
          onMoved={(splide, newIndex) => {
            setIsLast(newIndex >= splide.length - perPage);
            setIsFirst(newIndex === 0);
          }}
        >
          <SplideSlide>
            <img
              src="https://www.istockphoto.com/resources/images/PhotoFTLP/1035146258.jpg"
              alt="test image"
            />
            <div className="bg-red-300">one</div>
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.istockphoto.com/resources/images/PhotoFTLP/1035146258.jpg"
              alt="test image"
            />
            <div className="bg-red-300">
              two two longer test two two two two two two very long test
            </div>
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.istockphoto.com/resources/images/PhotoFTLP/1035146258.jpg"
              alt="test image"
            />
            <div className="bg-red-300">three</div>
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.istockphoto.com/resources/images/PhotoFTLP/1035146258.jpg"
              alt="test image"
            />
            <div className="bg-red-300">four</div>
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.istockphoto.com/resources/images/PhotoFTLP/1035146258.jpg"
              alt="test image"
            />
            <div className="bg-red-300">five</div>
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.istockphoto.com/resources/images/PhotoFTLP/1035146258.jpg"
              alt="test image"
            />
            <div className="bg-red-300">six</div>
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.istockphoto.com/resources/images/PhotoFTLP/1035146258.jpg"
              alt="test image"
            />
            <div className="bg-red-300">seven</div>
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.istockphoto.com/resources/images/PhotoFTLP/1035146258.jpg"
              alt="test image"
            />
            <div className="bg-red-300">eight</div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default App;
