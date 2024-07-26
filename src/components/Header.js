import { useState } from "react";
import Button from "./Button";

function Header() {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const handleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  return (
    <nav className="flex items-center justify-between py-8 px-8 sm:px-16 md:px-32">
      <h2 className="font-black text-3xl text-white">GD.</h2>
      <svg
        className="sm:hidden w-10 h-10"
        onClick={() => handleSideNav()}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        // class="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 9h16.5m-16.5 6.75h16.5"
        />
      </svg>

      <ul className="hidden poppins font-bold text-white sm:flex items-center justify-center gap-8  md:gap-16">
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Our Work</li>
        <li>
          <Button name="Enroll Now" colour={false}></Button>
        </li>
      </ul>

      <aside
        className={`${
          sideNavOpen ? "block" : "hidden"
        } bg-black text-white fixed top-0 right-0 w-80 h-screen flex flex-col items-center justify-center z-[999]`}
      >
        <svg
          className="fixed top-12 right-12 w-10 h-10"
          onClick={() => handleSideNav()}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          //   class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
        <ul className="flex flex-col items-center justify-center gap-8 my-auto">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Our Work</li>
          <li>
            <Button name="Enroll Now" colour="#DA722C"></Button>
          </li>
        </ul>
      </aside>
    </nav>
  );
}

export default Header;
