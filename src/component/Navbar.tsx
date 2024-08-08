import { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { NewContact } from "./NewContact";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };
  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="sticky top-0 w-full z-10 bg-gray-950  text-white">
      <div className="flex justify-between m-auto max-w-[1300px] items-center h-16 md:h-20 lg:h-24">
        <Link
          to="/"
          className="flex mr-4 items-center text-blue-600 text-xl md:text-2xl lg:text-3xl p-2"
        >
          Umoren
        </Link>

        <div className="hidden md:flex">
          <ul className="flex gap-6 md:gap-10 lg:gap-14 text-lg md:text-xl lg:text-2xl transition duration-200 cursor-pointer">
            <Link to="/home">
              <li className="hover:text-blue-500">Home</li>
            </Link>
            <Link to="/about">
              <li className="hover:text-blue-500">About</li>
            </Link>
            <Link to="/works">
              <li className="hover:text-blue-500">My Works</li>
            </Link>
            <Link to="/services">
              <li className="hover:text-blue-500">Services</li>
            </Link>
            <Link to="/testionials">
              <li className="hover:text-blue-500">Testionials</li>
            </Link>

            <Link to="/contact">
              <li className="hover:text-blue-500 underline text-orange-500">
                Contact
              </li>
            </Link>
          </ul>
        </div>

        <div className="gap-4 flex">
          <div className="hidden md:flex">
            <button
              onClick={openForm}
              className="bg-gray-800 p-2 rounded-lg text-white font-bold hover:bg-gray-700"
            >
              View Credientials
            </button>
          </div>

          {/* {open form} */}
          {showForm && <NewContact closeForm={closeForm} />}

          <div className="md:hidden flex items-center p-2">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={25} onClick={handleChange} />
            )}
          </div>
        </div>

        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } md:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-xl  md:text-2xl text-center pt-8 pb-4 gap-8 w-full h-screen transition-transform duration-300`}
        >
          <ul className=" mt-10">
            <Link to="/home">
              <li className="hover:text-blue-500 mb-4">Home</li>
            </Link>
            <Link to="/about">
              <li className="hover:text-blue-500  mb-4">About</li>
            </Link>
            <Link to="/works">
              <li className="hover:text-blue-500  mb-4">My Works</li>
            </Link>
            <Link to="/services">
              <li className="hover:text-blue-500  mb-4">Services</li>
            </Link>
            <Link to="/testionials">
              <li className="hover:text-blue-500  mb-4">Testionials</li>
            </Link>

            <Link to="/contact">
              <li className="hover:text-blue-500 underline text-orange-500  mb-4">
                Contact me
              </li>
            </Link>
          </ul>
          <div className="md:hidden">
            <button
              onClick={openForm}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition ease-out duration-300"
            >
              View Credientials
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
