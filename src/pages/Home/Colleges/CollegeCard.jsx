/* eslint-disable react/prop-types */

const CollegeCard = ({ college }) => {
  const {
    college_name,
    college_image,
    admission_dates,
    events,
    research_history,
    sports,
  } = college;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={college_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{college_name}</h2>
        <p>
          Please note that these are fictional examples and the data is intended
          for illustrative purposes only. The actual information for each
          college would vary based on its unique attributes and offerings.
        </p>
        <h2 className="text-md font-semibold"> Admission Dates:</h2>
        <div className="flex justify-between">
          <div>
            <h3 className="badge badge-info">Fall</h3>
            <p>Start Date: {admission_dates.fall.start_date}</p>
            <p>End Date {admission_dates.fall.end_date}</p>
          </div>
          <div>
            <h3 className="badge badge-info">Spring</h3>
            <p>Start Date: {admission_dates.spring.start_date}</p>
            <p>End Date: {admission_dates.spring.end_date}</p>
          </div>
        </div>

        <h2 className="text-md font-semibold">Events:</h2>
        <div className="grid grid-cols-2 gap-2">
          {events.slice(0, 2).map((event, idx) => (
            <div key={idx} className="border border-green-600 p-1">
              <p>Name: {event.name}</p>
              <p>Openings: {event.date}</p>
              <p>Description: {event.description.slice(0, 20)}...</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-md font-semibold">Research History:</h2>
          <h3>Total Publications: {research_history.total_publications}</h3>
          <p>Major Breakthrougs:</p>
          {research_history.major_breakthroughs.map((major, idx) => (
            <li key={idx}>{major}</li>
          ))}
        </div>

        <h2 className="text-md font-semibold">Sports</h2>
        <div className="flex justify-around">
          <div>
            <h3>Teams:</h3>
            {sports.teams.map((team, idx) => (
              <li key={idx}>{team}</li>
            ))}
          </div>
          <div>
            <h3>Facilities:</h3>
            {sports.facilities.map((fls, idx) => (
              <li key={idx}>{fls}</li>
            ))}
          </div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-xs">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
