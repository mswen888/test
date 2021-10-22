import logo from "./logo.svg";
import "./App.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import "./index.css";

function ManualCarousel({ offset })
{
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
          padding: `${offset}rem`,
          breakpoints: {
            640: {
              type: 'loop',
              perMove: 1,
              padding: '2rem',
              perPage: 1,
            }
          },
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

function App()
{
  const screenSize = useRef(null);
  const elementRef = useRef(null);

  const [marginLeft, setMarginLeft] = useState(0);
  const [paddingLeft, setPaddingLeft] = useState(0);
  const [loaded, setLoaded] = useState(false)

  // const retrieveMargin = (elm) => {
  //   if (elm != null) {
  //     let styles = window.getComputedStyle(elm);
  //     let ml = styles.getPropertyValue("margin-left");
  //     setMarginLeft(Number.parseInt(ml.replace("px", "")));

  //     let pl = styles.getPropertyValue("padding-left");
  //     setPaddingLeft(Number.parseInt(pl.replace("px", "")));
  //   }
  // }
  const retrieveMargin = (firstTime) =>
  {
    const styles = window.getComputedStyle(elementRef.current);
    const ml = styles.getPropertyValue("margin-left");
    let pl = styles.getPropertyValue("padding-left");
    setPaddingLeft(Number.parseInt(pl.replace("px", "")));
    setMarginLeft(Number.parseInt(ml.replace("px", "")));
    if (firstTime) setLoaded(true)
  };

  const windowOnResizeListenerHandler = () =>
  {
    window.addEventListener("resize", () =>
    {
      retrieveMargin();
    });
    return () =>
    {
      window.removeEventListener("resize", () =>
      {
        retrieveMargin();
      });
    };
  }

  useLayoutEffect(() =>
  {
    windowOnResizeListenerHandler()
  }, []);

  useEffect(() =>
  {
    retrieveMargin(true)
  }, [])

  const offset = (paddingLeft + marginLeft) / 16;

  console.log("OFFSET", offset);

  return (
    <div className={`${loaded ? 'opacity-100' : 'opacity-0'} p-4 pt-6`}>
      <h2
        className='max-w-6xl mx-auto px-4 s-top-8 pb-4 text-lg font-bold'
        ref={elementRef}
      >
        This is the title
      </h2>

      <ManualCarousel offset={offset} />
    </div>
  );
}

export default App;
