import { useEffect, useState } from "react";
import Flicking from "@egjs/react-flicking";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import "@egjs/react-flicking/dist/flicking.css";

const Reviews = () => {
  const [panels, setPanels] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setPanels(data));
  }, []);

  return (
    <div className="py-10">
      <div className=" mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold  mb-6">
          User Reviews
        </h2>
        <div className="rounded-lg shadow-lg p-6 bg-white">
          <Flicking className="flicking" gap={20} auto={5000}>
            {panels.map((review, index) => (
              <div
                key={index}
                className="flicking-panel mx-2 max-w-lg p-6 border border-gray-300 rounded-lg shadow-md bg-gradient-to-r from-blue-50 to-white"
              >
                <FaQuoteLeft className="text-2xl inline text-gray-400 mr-2" />
                <p className="text-lg inline text-center font-semibold mb-4">
                  {review.review}{" "}
                </p>
                <FaQuoteRight className="text-2xl inline  text-gray-400" />

                <div className="flex items-center mt-9 justify-center space-x-3">
                  <img
                    src={review.img}
                    alt="Reviewer's photo"
                    className="w-16 h-16 rounded-full border-4 border-blue-300"
                  />
                  <div>
                    <p className="text-lg font-semibold">
                      {review.reviewer_name}
                    </p>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`h-5 w-5 ${
                            i < review.ratings
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Flicking>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
