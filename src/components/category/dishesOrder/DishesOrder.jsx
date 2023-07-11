import React from "react";
import { BiMap } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { MdWhatsapp } from "react-icons/md";
import Foto from "../../../assets/map.png";
import { Link } from "react-router-dom";

export default function DishesOrder() {
  return (
    <section className="text-white body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.8795538890554!2d37.2307812!3d55.760594499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b544e29bbf51a7%3A0x5b793e443cf18727!2z0K3QutGB0L_QtdGA0LjQvNC10L3RgtCw0LvRjNC90LDRjyDRg9C7LiwgMTAsINCY0LvRjNC40L3RgdC60L7QtSwg0JzQvtGB0LrQvtCy0YHQutCw0Y8g0L7QsdC7Liwg0KDQvtGB0YHQuNGPLCAxNDM0MjE!5e0!3m2!1sru!2s!4v1688591049762!5m2!1sru!2s"
          style={{ width: "100%", height: "100%", border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade;output=dark"
        />
      </div>
      <div className="container px-5 py-24 mx-auto flex bg-[#403C3B]">
        <div className="w-[60%] md:w-[40%] h-[100%] bg-[#403C3B] rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-white text-center md:text-start text-lg mb-1 font-medium title-font">
            Контакты
          </h2>
          <hr />
          <div className="w-[100%] container mx-auto">
            <div className="flex flex-col md:flex-row py-5 justify-start items-start gap-1 text-sm text-center md:text-start">
              <BiMap className="text-green-400 text-center ml-12 md:ml-0 w-14 md:w-14 h-10" />
              <div>
                <p className="text-white text-xs md:text-sm">Наш адрес:</p>
                <h4 className="text-white text-xs md:text-sm">
                  МО, городской округ Красногорск, село Ильинкое,
                  Экспериментальная улица, 10
                </h4>
              </div>
            </div>
            <div className="flex flex-col md:flex-row sm:ml-0 ml-4 md:ml-0 py-5 md:justify-start justify-center items-start gap-2 text-sm text-center md:text-start">
              <HiOutlineMail className="text-green-400 ml-11 md:ml-0 w-9 md:w-9 h-10 text-center" />
              <div>
                <p className="text-white text-xs md:text-sm">Наша почта:</p>
                <h4 className="text-white text-xs md:text-sm">
                  panorama@gmail.com
                </h4>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 py-2">
              <Link to="OrderTable">
                <button className="bg-green-400 rounded-lg p-2 text-white hover:bg-white hover:text-green-400 md:text-sm text-[10px] active:scale-95 transition-all">
                  ЗАБРОНИРОВАТЬ СТОЛИК
                </button>
              </Link>
              <div className="text-xs">
                <h1 className="font-bold text-white text-xs text-center md:text-start md:text-sm">
                  +7 (917) 510-57-59
                </h1>
                <p className="text-white text-xs text-center md:text-start md:text-sm">
                  Звоните или оставляйте заявку
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <h3 className="text-sm">Мы в соц. сетях:</h3>
            <div className="flex gap-2">
              <GrFacebookOption className="w-5 h-5 md:w-6 md:h-6 hover:text-blue-600 hover:scale-110 transition-all cursor-pointer" />
              <MdWhatsapp className="w-5 h-5 md:w-6 md:h-6 hover:text-green-500 hover:scale-110 transition-all cursor-pointer" />
              <BsYoutube className="w-5 h-5 md:w-6 md:h-6 hover:text-red-600 hover:scale-110 transition-all cursor-pointer" />
              <BsInstagram className="w-5 h-5 md:w-6 md:h-6 hover:text-pink-400 hover:scale-110 transition-all cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
