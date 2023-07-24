import { useEffect } from "react";
import {
  FaBookOpen,
  FaCalendarAlt,
  FaChevronRight,
  FaFutbol,
  FaGraduationCap,
} from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  const {
    college_name,
    college_image,
    admission_dates,
    events,
    research_history,
    sports,
    admission_process,
    sports_category,
  } = data;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="mt-28">
      <div className="card md:card-side bg-base-100 shadow-xl">
        <figure className="md:w-1/2">
          <img src={college_image} alt={college_name} />
        </figure>
        <div className="card-body md:w-1/2">
          <h2 className="card-title">Admission Process:</h2>
          <p>{admission_process}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-info">Apply Now</button>
          </div>
        </div>
      </div>

      <div className="my-16">
        <div className="my-10">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <FaCalendarAlt className="mr-2 text-blue-500 text-500" />
            <span className="border-b-2 border-blue-500 pb-1">
              Admission Dates
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
          <h2 className="text-lg font-semibold mb-2 flex items-center">
            <FaGraduationCap className="mr-2 text-green-500" />
            Events:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {events.map((event, idx) => (
              <div key={idx} className="border border-green-600 p-2 rounded-lg">
                <p className="font-semibold">{event.name}</p>
                <p className="text-xs text-gray-600">Openings: {event.date}</p>
                <p className="text-sm mt-2">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-lg font-semibold mb-2 flex items-center">
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
          <h2 className="text-lg font-semibold mb-2 flex items-center">
            <FaFutbol className="mr-2 text-red-500" />
            Sports
          </h2>
          <h2 className="text-md underline font-semibold mb-2 flex items-center">
            Category
          </h2>
          <p>{sports_category}</p>
          <div className="mt-10 flex gap-9 md:gap-48 ">
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
      </div>
    </section>
  );
};

export default Details;
