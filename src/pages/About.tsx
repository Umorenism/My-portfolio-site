import pic from "../asset/dev.webp";

const About = () => {
  return (
    <section className="bg-gray-950 text-white min-h-screen flex flex-col justify-center items-center p-5">
      {/* Title Section */}
      <h1 className="text-4xl font-bold mb-8 text-center md:text-5xl md:mb-12">
        About Me
      </h1>

      {/* Content Section */}
      <div className="bg-transparent w-full flex flex-col md:flex-row mt-4 text-white rounded-lg overflow-hidden max-w-5xl mx-auto">
        {/* Left-side image */}
        <div className="md:w-[40%] h-64 md:h-auto flex-shrink-0 flex justify-center items-center p-4">
          <div className="shadow-white shadow-lg  w-full h-full">
            <img
              src={pic}
              alt="About Me"
              className="w-full rounded-md h-full object-cover"
            />
          </div>
        </div>

        {/* Right-side text */}
        <div className="md:w-[60%] p-6 flex flex-col justify-center space-y-4">
          {/* <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Umoren Victor
          </h2> */}
          <p className="text-base md:text-lg leading-relaxed">
            I am a passionate frontend developer with a love for creating
            beautiful and functional user interfaces. With 2 years of experience
            in React and Tailwind CSS, I aim to build seamless and responsive
            web applications.
          </p>

          {/* Skill Progress */}
          <div className="flex flex-col gap-4">
            {[
              { skill: "HTML", percentage: "90%", color: "bg-blue-600" },
              { skill: "CSS", percentage: "85%", color: "bg-green-600" },
              { skill: "React", percentage: "85%", color: "bg-green-600" },
              { skill: "Node", percentage: "50%", color: "bg-green-600" },
            ].map(({ skill, percentage, color }) => (
              <div key={skill} className="flex flex-col">
                <div className="flex items-center justify-between text-sm font-medium">
                  <span>{skill}</span>
                  <span>{percentage}</span>
                </div>
                <div className="relative w-full bg-gray-300 rounded-full h-2.5">
                  <div
                    className={`absolute top-0 left-0 h-full ${color} rounded-full`}
                    style={{ width: percentage }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-4">
            <div>
              <h1 className="text-purple-600 font-bold text-lg">2+</h1>
              <p>Years Experience</p>
            </div>
            <div>
              <h1 className="text-purple-600 font-bold text-lg">5+</h1>
              <p>Completed Project</p>
            </div>
            <div>
              <h1 className="text-purple-600 font-bold text-lg">6+</h1>
              <p>Happy Client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
