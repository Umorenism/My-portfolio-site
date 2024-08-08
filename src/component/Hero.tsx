// import pic from "../asset/portcover.webp";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <div className=" px-4 h-[500px] justify-center py-16 flex items-center mt-10">
      <div className="w-full py-16 flex gap-2 p-4 flex-col md:flex-row px-8 max-w-[1300px]">
        <div className="w-full  flex justify-center items-center">
          <div className="p-4 items-center flex flex-col justify-center text-slate-500">
            <h1 className="md:text-4xl text-blue-500 font-bold">
              <Typewriter
                options={{
                  strings: ["I'M", "WEB", "DEVELOPER"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="text-sm py-4 text-start md:w-[50%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              ab libero sunt, ea rem incidunt corrupti molestiae exercitationem{" "}
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                beatae pariatur, nemo eos aspernatur iste alias praesentium
                corrupti quidem eligendi quibusdam quasi distinctio,
                necessitatibus itaque accusantium minus temporibus? Impedit,
                nulla?
              </span>
              ex.
            </p>
            <button className="px-5 py-2 rounded-md bg-blue-700 text-white mt-4">
              Credential
            </button>
          </div>
        </div>
        {/* <div className="md:w-1/2 bg-purple-300 max-h-[500px] w-full ">
          <img
            src={pic}
            alt="Hero"
            className="w-full rounded-md object-cover"
          />
        </div> */}
      </div>
    </div>
  );
};
