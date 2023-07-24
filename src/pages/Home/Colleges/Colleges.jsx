import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("https://collegio-vistora-server.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);
  const location = window.location.pathname;

  return (
    <section className="my-20">
      <div>
        {location === "/" ? (
          <h1 className="text-center text-7xl font-bold mb-10">
            Our Top Colleges
          </h1>
        ) : (
          <div className="mt-28"></div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {colleges && location === "/"
          ? colleges
              .slice(1, 4)
              .map((college) => (
                <CollegeCard college={college} key={college._id}></CollegeCard>
              ))
          : colleges.map((college) => (
              <CollegeCard college={college} key={college._id}></CollegeCard>
            ))}
      </div>
    </section>
  );
};

export default Colleges;
