import React from "react";
import logo from "../../assets/LOGO.png";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { MdWhatsapp } from "react-icons/md";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className=" text-white flex justify-center items-center body-font bg-[#403C3B]">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <div className="flex flex-col title-font font-medium items-center md:flex-row md:justify-start justify-center text-gray-900">
            <button className="p-4 mb-5 md:mb-0 rounded-full border-[0.5px] md:border-2 border-green-600 text-green-500 active:scale-95 transition-all hover:shadow-md hover:shadow-green-800" onClick={handleScrollToTop}>
              <FaArrowUp />
            </button>
            <span className="ml-3 text-xl flex flex-col cursor-pointer">
              <img src={logo} className="w-[150px]" alt="logo" />
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            <p className="text-xs text-center">
              © ООО СК «АПШЕРОН» <br /> Все права защищены. 2010-2020{" "}
            </p>
          </p>
          <div className="flex gap-2 justify-center items-center mt-3">
              <GrFacebookOption className="w-4 h-4 md:w-5 md:h-5 hover:text-blue-600 hover:scale-110 transition-all cursor-pointer" />
              <MdWhatsapp className="w-4 h-4 md:w-5 md:h-5 hover:text-green-500 hover:scale-110 transition-all cursor-pointer" />
              <BsYoutube className="w-4 h-4 md:w-5 md:h-5 hover:text-red-600 hover:scale-110 transition-all cursor-pointer" />
              <BsInstagram className="w-4 h-4 md:w-5 md:h-5 hover:text-pink-400 hover:scale-110 transition-all cursor-pointer" />
            </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10">
              <li>
                <a href="a" className="hover:text-green-400">
                  О ресторане
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10">
              <li>
                <Link to="Conditions">
                  <a href="stock" className="hover:text-green-400">
                    Условия доставки
                  </a>
                </Link>
              </li>
              <li>
                <a href="a" className="hover:text-green-400">
                  Карта сайта
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10">
              <li>
                <a href="a" className="hover:text-green-400">
                  Возврат товара
                </a>
              </li>
              <li>
                <Link to="Stock">
                  <a href="stock" className="hover:text-green-400">
                    Акция
                  </a>
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10">
              <li>
                <a href="a" className="hover:text-green-400">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="a" className="hover:text-green-400">
                  Ползовательское соглашение
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
