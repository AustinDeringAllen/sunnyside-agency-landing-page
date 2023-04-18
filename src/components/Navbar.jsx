import { useState } from "react";

const Navbar = () => {
  return (
    <>
      <Mobile />
      <Desktop />
    </>
  );
};

const Mobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src="/images/icon-hamburger.svg"
        alt=""
        className="block md:hidden"
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <nav
          className="absolute inset-x-6 top-24 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="absolute -top-[25px] right-0 w-0 h-0 border-b-[25px] border-l-[25px] border-white border-l-transparent"></div>
          <ul className="flex flex-col items-center gap-10 py-12 bg-white text-grayish-blue text-lg">
            <li>
              <a className="cursor-pointer">About</a>
            </li>
            <li>
              <a className="cursor-pointer">Services</a>
            </li>
            <li>
              <a className="cursor-pointer">Projects</a>
            </li>
            <li>
              <a className="cursor-pointer uppercase font-serif font-bold bg-sunny-yellow text-very-dark-desaturated-blue py-4 px-6 rounded-full">
                contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

const Desktop = () => {
  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-6 text-white">
          <li className="cursor-pointer">
            <a>About</a>
          </li>
          <li className="cursor-pointer">
            <a>Services</a>
          </li>
          <li className="cursor-pointer">
            <a>Projects</a>
          </li>
          <li className="cursor-pointer uppercase text-black py-3 px-6 font-serif bg-white rounded-full hover:bg-opacity-25 hover:text-white">
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
