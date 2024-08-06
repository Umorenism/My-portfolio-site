import pic from "../asset/portcover.webp";

export const Hero = () => {
  return (
    <div className=" px-4 h-[500px] justify-center py-16 flex items-center mt-10">
      <div className="w-full py-16 flex gap-2 p-4 flex-col md:flex-row px-8 max-w-[1300px]">
        <div className="md:w-1/2  w-full  flex justify-center items-center">
          <div className="p-4 items-start flex flex-col justify-center text-slate-500">
            <h1 className="text-2xl">I'M a Web Developer</h1>
            <p className="text-sm py-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              ab libero sunt, ea rem incidunt corrupti molestiae exercitationem
              ex.
            </p>
            <button className="px-5 py-2 rounded-md bg-blue-700 text-white mt-4">
              Credential
            </button>
          </div>
        </div>
        <div className="md:w-1/2 bg-purple-300 max-h-[500px] w-full ">
          <img
            src={pic}
            alt="Hero"
            className="w-full rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};
