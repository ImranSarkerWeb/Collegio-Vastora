/* eslint-disable react/prop-types */
import {
  FaCalendarAlt,
  FaGraduationCap,
  FaFutbol,
  FaBookOpen,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
  const {
    _id,
    college_name,
    college_image,
    admission_dates,
    events,
    research_history,
    sports,
  } = college;

  return (
    <div className="card card-compact md:w-80 lg:w-96 bg-base-100 shadow-lg rounded-xl overflow-hidden mb-10">
      <figure>
        <img
          src={college_image}
          alt={college_name}
          className="w-full h-40 object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-2xl font-semibold mb-2">
          {college_name}
        </h2>
        <p className="text-gray-600 text-sm mb-2">
          Please note that these are fictional examples and the data is intended
          for illustrative purposes only. The actual information for each
          college would vary based on its unique attributes and offerings.
        </p>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <FaCalendarAlt className="mr-2 text-blue-500 text-500" />
            <span className="border-b-2 border-blue-500 pb-1">
              Admission Dates
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-purple-200 to-purple-300 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Fall Semester</h3>
              <div className="flex items-center mb-2">
                <span className="text-blue-500 mr-1">
                  <FaChevronRight />
                </span>
                <p className="text-gray-600 text-sm">
                  Start: {admission_dates.fall.start_date}
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-1">
                  <FaChevronRight />
                </span>
                <p className="text-gray-600 text-sm">
                  End: {admission_dates.fall.end_date}
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-amber-200 to-amber-300 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Spring Semester</h3>
              <div className="flex items-center mb-2">
                <span className="text-blue-500 mr-1">
                  <FaChevronRight />
                </span>
                <p className="text-gray-600 text-sm">
                  Start: {admission_dates.spring.start_date}
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-1">
                  <FaChevronRight />
                </span>
                <p className="text-gray-600 text-sm">
                  End: {admission_dates.spring.end_date}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-md font-semibold mb-2 flex items-center">
            <FaGraduationCap className="mr-2 text-green-500" />
            Events:
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {events.slice(0, 2).map((event, idx) => (
              <div key={idx} className="border border-green-600 p-2 rounded-lg">
                <p className="font-semibold">{event.name}</p>
                <p className="text-xs text-gray-600">Openings: {event.date}</p>
                <p className="text-sm mt-2">
                  {event.description.slice(0, 30)}...
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-md font-semibold mb-2 flex items-center">
            <FaBookOpen className="mr-2 text-purple-500" />
            Research History:
          </h2>
          <h3 className="mb-2">
            Total Publications: {research_history.total_publications}
          </h3>
          <p>Major Breakthroughs:</p>
          <ul className="list-disc pl-6">
            {research_history.major_breakthroughs.map((major, idx) => (
              <li key={idx}>{major}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-md font-semibold mb-2 flex items-center">
            <FaFutbol className="mr-2 text-red-500" />
            Sports
          </h2>
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold">Teams:</h3>
              <ul className="list-disc pl-6">
                {sports.teams.map((team, idx) => (
                  <li key={idx}>{team}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Facilities:</h3>
              <ul className="list-disc pl-6">
                {sports.facilities.map((fls, idx) => (
                  <li key={idx}>{fls}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="card-actions justify-end">
          <Link to={`/college-details/${_id}`} className="btn btn-xs">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
