const Papers = () => {
  const researchTopics = [
    "Artificial Intelligence in Healthcare",
    "Sustainable Energy Solutions",
    "Climate Change Mitigation",
    "Digital Transformation in Education",
    "Blockchain Applications",
    "Urban Planning and Smart Cities",
    "Biotechnology Advancements",
    "Impact of Social Media on Society",
    "Data Privacy and Security",
    "Renewable Energy Innovations",
    "Machine Learning Algorithms",
    "Agricultural Sustainability",
    "Space Exploration Technologies",
    "Virtual Reality in Training",
    "Neuroscience and Brain Studies",
    "E-Commerce Trends",
    "Robotics in Manufacturing",
    "Environmental Conservation Strategies",
    "Internet of Things (IoT) Applications",
    "Healthcare Technology Innovations",
  ];

  return (
    <div className="my-20">
      {" "}
      <h1 className="text-4xl mb-10 font-semibold text-center">
        Some research papers
      </h1>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {researchTopics.map((topic, idx) => (
          <p className="btn btn-md text-center overflow-hidden" key={idx}>
            {topic}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Papers;
