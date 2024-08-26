import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-sky-200 to-indigo-500 w-full px-5 py-3">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-0">
          <div className="flex flex-col items-center gap-3">
            <Link to={'/'}><img src={logo} alt="logo"></img></Link>
            <p className="max-w-sm text-sm text-center leading-relaxed">We are an international student recruitment company based in Bangladesh, operating successfully since 2012.</p>
          </div>
          <div>
            <p className="text-white font-medium text-lg mb-2">Quick Links</p>
            <ul className="flex flex-col items-center gap-2 text-sm">
              <li className="hover:text-white duration-300 delay-150 ease-in-out"><Link to={'/'}>About</Link></li>
              <li className="hover:text-white duration-300 delay-150 ease-in-out"><Link to={'/'}>Management</Link></li>
              <li className="hover:text-white duration-300 delay-150 ease-in-out"><Link to={'/'}>Services</Link></li>
              <li className="hover:text-white duration-300 delay-150 ease-in-out"><Link to={'/'}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-medium text-lg mb-2 text-center">Dhaka Office</p>
            <p className="text-sm text-center leading-relaxed">Doreen Vincita Complex, Ground Floor, Rupnagar Main Road <br />
              Mirpur, Dhaka 1216, Bangladesh <br />
              Phone: +880 1776088202, +880 1716547808 <br />
              Email: diakoniaedu@gmail.com
            </p>
          </div>
          <div>
            <p className="text-white font-medium text-lg mb-2 text-center">German Office</p>
            <p className="text-sm text-center leading-relaxed">Moltkestrasse 50,Bonn 53173
              Germany <br />
              Phone: +49(0)15118521833 <br />
              Fax: +49(228)30894998 <br />
              Email: info@diakoniaedu.com
            </p>
          </div>
          <div>
            <p className="text-white font-medium text-lg mb-2 text-center">Follow Us</p>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/diakonia.edu">
                <img src={facebook} alt="Facebook" className="w-5"/>
              </a>
              <a href="#">
                <img src={linkedin} alt="Facebook" className="w-5"/>
              </a>
              <a href="#">
                <img src={twitter} alt="Facebook" className="w-5"/>
              </a>
            </div>
          </div>
          <hr />
        </div>
        <hr className="my-3" />
        <p className="text-xs text-center text-white">Copyright © 2024, all rights reserved to Diakonia</p>
      </div>
    </>
  );
};

export default Footer;