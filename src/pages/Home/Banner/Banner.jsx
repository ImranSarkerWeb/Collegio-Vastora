const Banner = () => {
  return (
    <div className="hero min-h-screen mt-28">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1577036057060-d318e280b0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
          className="md:max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Admission Ongoing!</h1>
          <p className="py-6">
            Admission to a university is a significant milestone in a students
            academic journey, offering a world of possibilities for personal and
            intellectual growth. The process typically involves submitting a
            comprehensive application that includes academic records,
            extracurricular activities, and a personal statement. Universities
            have their own specific admission requirements, which may encompass
            standardized test scores and letters of recommendation. The
            competition for admission can be fierce, as universities seek
            students who not only excel academically but also contribute to the
            vibrant campus community. Once admitted, students embark on a
            transformative experience, immersing themselves in diverse academic
            disciplines, engaging in research opportunities, and participating
            in a wide range of extracurricular activities.
          </p>
          <button className="btn btn-success">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
