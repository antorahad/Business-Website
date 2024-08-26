import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";
const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <>
      <div className="bg-gradient-to-r from-sky-200 to-indigo-500 w-full px-5 py-3 flex items-center justify-between">
        <div>
          <Link to={'/'}><img src={logo} alt="logo"></img></Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-5">
            <li className="hover:text-white duration-300 delay-150 ease-in-out"><Link to={'/'}>Home</Link></li>
            <li className="hover:text-white duration-300 delay-150 ease-in-out"><Link to={'/about'}>About Us</Link></li>
            <li className="hover:text-white duration-300 delay-150 ease-in-out"><Link to={'/management'}>Management</Link></li>
            <li className="hover:text-white duration-300 delay-150 ease-in-out"><Link to={'/services'}>Our Services</Link></li>
            <li className="hover:text-white duration-300 delay-150 ease-in-out"><Link to={'/study'}>Study Abroad</Link></li>
            <li className="hover:text-white duration-300 delay-150 ease-in-out"><Link to={'/contact'}>Contact</Link></li>
          </ul>
        </div>
        <div className="flex lg:hidden">
          <button onClick={handleToggle} className="border-none outline-none">{toggle ? <IoMdClose size={30} /> : <IoIosMenu size={30} />}</button>
          {
            toggle &&
            <ul className="flex flex-col items-center gap-4 bg-gradient-to-r from-sky-200 to-indigo-500 w-full p-5 z-50 absolute top-[70px] left-0">
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/about'}>About Us</Link></li>
              <li><Link to={'/management'}>Management</Link></li>
              <li><Link to={'/services'}>Our Services</Link></li>
              <li><Link to={'/study'}>Study Abroad</Link></li>
              <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;
