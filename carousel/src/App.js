import React, { useRef, useState } from "react";
import "./App.css";
const App = () => {
  const totalImages = 9; // Total number of images
  const imagesToShow = 3; // Number of images to show at a time

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < totalImages - imagesToShow) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  console.log("sdhbasd3", currentSlide);
  return (
    <div className="App">
      <div class="wrapper">
        {currentSlide !== 0 ? (
          <div className="carouselButtons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              onClick={handlePrev}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L6.41421 12L12.7071 18.2929C13.0976 18.6834 13.0976 19.3166 12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                fill="black"
              />
            </svg>
          </div>
        ) : null}
        <div className="carousel">
          {[...Array(imagesToShow)].map((_, index) => (
            <img
              key={index}
              src={`images/img-${currentSlide + index + 1}.jpg`}
              alt={`img-${currentSlide + index + 1}`}
              draggable="false"
              style={{
                width: "330px",
                height: "330px",
              }}
            />
          ))}
        </div>
        {currentSlide !== 6 ? (
          <div className="carouselButtons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              onClick={handleNext}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
                fill="black"
              />
            </svg>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default App;
