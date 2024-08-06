import pic from "../asset/IMG-20240801-WA0015.jpg";
import pic2 from "../asset/house4.png";
import pic3 from "../asset/portcover.webp";
import pic4 from "../asset/bus2.png.png";

export const Myworks = () => {
  return (
    <div className="mt-4 py-16 flex justify-center items-center text-white">
      <div className="w-full py-16 px-8 max-w-[1300px] flex flex-col items-center text-center gap-2">
        <div className="flex flex-col items-center">
          <h1 className="text-center font-bold text-blue-700 text-3xl">
            My Works
          </h1>
          <div className="h-1 md:w-[13%] w-full rounded-full mt-2 bg-slate-500"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 w-full mt-4 gap-4">
          <div className="shadow-2xl rounded-md py-4 transform transition duration-300 hover:scale-105">
            <div className="aspect-video m-3">
              <img src={pic4} alt="Book Ride" className="p-2" />
            </div>
            <div className="mt-10">
              <h1 className="text-blue-800 text-2xl">Book Ride</h1>
              <p className="text-start ml-2 text-slate-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Praesentium, ad!
              </p>
              <a href="/" className="text-blue-700 text-start">
                Click here
              </a>
            </div>
          </div>
          <div className="shadow-lg rounded-md py-4 transform transition duration-300 hover:scale-105">
            <div className="aspect-video m-3">
              <img src={pic} alt="Crypto App" className="p-2" />
            </div>
            <div className="mt-10">
              <h1 className="text-blue-800 text-2xl">Crypto App</h1>
              <p className="text-start ml-2 text-slate-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Praesentium, ad!
              </p>
              <a href="/" className="text-blue-700 text-start">
                Click here
              </a>
            </div>
          </div>
          <div className="shadow-lg rounded-md py-4 transform transition duration-300 hover:scale-105">
            <div className="aspect-video m-3">
              <img src={pic2} alt="Real-Estate" className="p-2" />
            </div>
            <div className="mt-10">
              <h1 className="text-blue-800 text-2xl">Real-Estate</h1>
              <p className="text-start ml-3 text-slate-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Praesentium, ad!
              </p>
              <a href="/" className="text-blue-700 text-start">
                Click here
              </a>
            </div>
          </div>
          <div className="shadow-lg rounded-md py-4 transform transition duration-300 hover:scale-105">
            <div className="aspect-video m-3">
              <img src={pic3} alt="My Portfolio" className="p-2" />
            </div>
            <div className="mt-10">
              <h1 className="text-blue-800 text-2xl">My Portfolio</h1>
              <p className="text-start ml-2 text-slate-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Praesentium, ad!
              </p>
              <a href="/" className="text-blue-700 text-start">
                Click here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
