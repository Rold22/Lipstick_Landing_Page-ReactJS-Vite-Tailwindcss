import React from 'react'
import { Link } from 'react-scroll';
import { IoMdMenu } from "react-icons/io";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    to:"home"
  },
  {
    id: 2,
    name: "About",
    to:"about",
  },
  {
    id: 3,
    name: "Product",
    to:"product",
  },
  {
    id: 4,
    name: "Contact",
    to:"contact",
  },
];

const Nav = () => {
  return (
    <div className='gradient1 relative z-[999] text-white bg-black'>
      <div className='container py-2 md:py-0'>
        <div className='flex justify-between items-center'>
          <div className="flex items-center gap-3 ml-[10rem] sm-max:ml-[1rem]">
            <p className="text-3xl">
              Loream<span className="font-bold"> LIPSTICK</span>
            </p>
            <div className='md:hidden  sm-max:visible'>
              <IoMdMenu className='size-8 ml-[10rem]'/>
            </div>
          </div>
          <nav className=' hidden md:block'>
            <ul className='flex items-center gap-8'>
             {NavLinks.map(({ id, name, to }) => {
                return (
                  <li key={id} className="py-4 ">
                    <Link
                      to={to}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      className="text-xl font-semibold hover:text-primary py-1 hover:border-b-2 hover:border-secondary transition-colors duration-500 cursor-pointer"
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Nav