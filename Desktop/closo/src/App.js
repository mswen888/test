import logo from "./logo.svg";
import "./App.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import React, { useState } from 'react';
import "./index.css";

function ManualCarousel() {
  return (
    <div className="App">
      <Splide
        options={{
          type: "slide",
          rewind: "false",
          perPage: 3,
          perMove: 3,
          gap: "1rem",
          pagination: false,
          padding: "5rem",
        }}
        renderControls={() => (
          <div className="absolute flex w-4 h-4 space-x-6 splide__arrows -top-8 right-12 invisible sm:visible">
            <div className="splide__arrow-prev" role="button">
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
            <div className="splide__arrow--next" role="button">
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
      >
        <SplideSlide>
          <div className="bg-red-300">one</div>
        </SplideSlide>
        <SplideSlide>
          <div className="bg-red-300">two</div>
        </SplideSlide>
        <SplideSlide>
          <div className="bg-red-300">three</div>
        </SplideSlide>
        <SplideSlide>
          <div className="bg-red-300">four</div>
        </SplideSlide>
        <SplideSlide>
          <div className="bg-red-300">five</div>
        </SplideSlide>
        <SplideSlide>
          <div className="bg-red-300">six</div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

function App() {
  const [marginLeft, setMarginLeft] = useState(0);
  const [paddingLeft, setPaddingLeft] = useState(0);

  const retrieveMargin = (elm) => {
    if (elm != null) {
      let styles = window.getComputedStyle(elm);
      let ml = styles.getPropertyValue("margin-left");
      setMarginLeft(Number.parseInt(ml.replace("px", "")));

      let pl = styles.getPropertyValue("padding-left");
      setPaddingLeft(Number.parseInt(pl.replace("px", "")));
    }
  }

  console.log(paddingLeft+marginLeft);

  return (
    <div className="max-w-6xl mx-auto p-4 pt-6" ref={retrieveMargin}>
      <h2 className=" px-4 s-top-8 pb-4 text-lg font-bold ml-5 sm:ml-0">
        This is the title
      </h2>

      <ManualCarousel />
    </div>
  );
}

export default App;
