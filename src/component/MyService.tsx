import { FaCss3, FaFigma, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";

export const MyService = () => {
  return (
    <div className="mt-4 min-h-[200px] justify-center flex items-center  text-white ">
      <div className="w-full py-16 flex gap-2 p-4 flex-col  px-8 max-w-[1300px] justify-center text-center">
        <h1 className="text-center font-bold text-3xl text-blue-600">
          What i can do
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 w-full mt-4 gap-4">
          <div className=" shadow-2xl rounded-md flex items-center justify-center py-2 text-blue-500 flex-col mt-4">
            <FaHtml5 size={50} />
            <p className="mt-2">HTML</p>
          </div>
          <div className=" shadow-2xl rounded-md flex items-center justify-center py-2 text-red-500 flex-col">
            <FaCss3 size={50} />
            <p className="mt-2">Css</p>
          </div>
          <div className=" shadow-2xl rounded-md flex items-center justify-center py-2 text-blue-500 flex-col">
            <FaReact size={50} />
            <p className="mt-2">Reactjs</p>
          </div>
          <div className=" shadow-2xl rounded-md flex items-center justify-center py-2 text-blue-500 flex-col">
            <FaNodeJs size={50} />
            <p className="mt-2">Nodejs</p>
          </div>
          <div className=" shadow-2xl rounded-md flex items-center justify-center py-2 text-blue-500 flex-col">
            <FaFigma size={50} />
            <p className="mt-2">UI UX</p>
          </div>
          <div className=" shadow-2xl rounded-md flex items-center justify-center py-2 text-blue-500">
            <FaHtml5 size={50} />
            <p className="mt-2">HTML</p>
          </div>
          <div className=" shadow-2xl rounded-md flex items-center justify-center py-2 text-blue-500">
            <FaHtml5 size={50} />
            <p className="mt-2">HTML</p>
          </div>
          <div className=" shadow-2xl rounded-md flex items-center justify-center py-2 text-blue-500">
            <FaHtml5 size={50} />
            <p className="mt-2">HTML</p>
          </div>
          <div className=" shadow-2xl rounded-md flex items-center justify-center py-2 text-blue-500">
            <FaHtml5 size={50} />
            <p className="mt-2">HTML</p>
          </div>
          <div className=" shadow-2xl rounded-md flex items-center justify-center py-2 text-blue-500">
            <FaHtml5 size={50} />
            <p className="mt-2">HTML</p>
          </div>
          <div className=" shadow-2xl rounded-md flex items-center justify-center py-2 text-blue-500">
            <FaHtml5 size={50} />
            <p className="mt-2">HTML</p>
          </div>
          <div className=" shadow-2xl rounded-md flex items-center justify-center py-2 text-blue-500">
            <FaHtml5 size={50} />
            <p className="mt-2">HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
};
