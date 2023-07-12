import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex items-center justify-between py-6 xl:px-48 sm:px-16 px-6 relative">
      <img src={logo} alt="HooBank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden gap-[56px]">
        {navLinks.map((nav, index) => (
          <li key={nav.id}>
            <a
              href={`#${nav.id}`}
              className={`${
                index == 0 ? "text-white" : "text-white/[0.7]"
              }  text-[16px]`}
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className={`sm:hidden flex`}>
        <img
          src={toggle ? close : menu}
          alt="Menu"
          className={`w-5 h-5 object-contain`}
          onClick={() => setToggle(!toggle)}
        />

        <ul
          className={`${
            toggle ? "flex" : "hidden"
          } list-none absolute right-0 top-20 min-w-[200px] z-10 bg-black-gradient p-4 rounded-xl flex-col gap-8`}
        >
          {navLinks.map((nav, index) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className={`${
                  index == 0 ? "text-white" : "text-white/[0.7]"
                }  text-[16px]`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
