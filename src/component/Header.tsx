const Header = () => {
  return (
    <div className="bg-slate-950 h-20 fixed top-0  px-4 left-0 right-0 flex justify-between items-center w-full">
      <div className="flex justify-between items-center w-full p-4 text-white">
        <h1>Umoren</h1>
        <ul className="flex gap-10">
          <li>Home</li>
          <li>About me</li>
          <li>Service </li>
          <li>Project</li>
          <li>Contact</li>
        </ul>

        <button
          type="button"
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-2 p-2 text-white font-semibold rounded-md"
        >
          Contact me
        </button>
      </div>
    </div>
  );
};

export default Header;
