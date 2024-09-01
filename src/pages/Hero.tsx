import pic from "../asset/umoren.png.jpg";

const Hero = () => {
  return (
    <section className="bg-gray-950 text-white min-h-screen flex flex-col justify-center items-center text-center p-4">
      <img
        src={pic}
        alt="Your Name"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 md:mb-8 shadow-lg"
      />
      <h1 className="text-3xl md:text-3xl lg:text-6xl f font-serif mb-4 ">
        Hi, I'm <span className="text-blue-500">UMOREN VICTOR</span>
      </h1>
      <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8">
        A passionate Frontend Developer
        <br />
        Specializing in creating amazing user experiences
        <br />
        Let's build something great together!
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-lg transition duration-300"
        >
          Contact Me
        </a>
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-full text-lg transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
