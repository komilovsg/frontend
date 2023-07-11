import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decProduct, incProduct, removeProduct } from "../Reduser/basket";
import { AiFillDelete } from "react-icons/ai"
import { Link } from "react-router-dom";

const Trash = () => {
  const basket = useSelector(({ basket }) => basket.basket);
  const dispatch = useDispatch();
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let count = 0;
    basket.forEach((elem) => {
      count += elem.quantity;
    });
    setTotalItems(count);
  }, [basket]);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    basket.forEach((elem) => {
      const productPrice = parseFloat(elem.product.price);
      totalPrice += elem.quantity * (isNaN(productPrice) ? 0 : productPrice);
    });
    return totalPrice.toFixed(2);
  };

  return (
    <div className="w-[100%] h-[100vh] m-auto bg-[#403C3B] py-10">
      <div className="h-[100vh] m-auto w-[95%] items-center pt-20">
        <div className="flex gap-1 justify-center items-end">
          <h1 className="text-white text-2xl font-semibold border-l-2 border-green-900 px-2">КОРЗИНА</h1>
          <h2 className="text-green-400">(в корзине: {totalItems} товаров)</h2>
        </div>
        {basket.map((elem) => (
          <div
            key={elem.product.id}
            className="p-4 text-brown-50 rounded-lg my-4 shadow-md w-[80%] m-auto"
          >

            <div className="p-2 lg:w-[100%] md:w-1/2 w-full">
              <div className="h-full lg:flex lg:justify-center lg:items-center md:flex-grow md:justify-center md:items-center p-4 rounded-lg">
                <img
                  alt="team"
                  className="mx-auto rounded-lg w-48 h-48 object-cover object-center"
                  src={elem.product.img}
                />
                <div className="flex-grow">
                <div className="w-full flex flex-col justify-center px-5">
                  <h1 className="title-font font-medium text-xl text-center">
                    {elem.product.nameFood}
                  </h1>
                  <p className="mb-3 text-center">{elem.product.about}</p>
                </div>
                <div className="flex  justify-around items-center ">
                  <div className="flex gap-3 items-center">
                    <button
                      onClick={() => dispatch(incProduct(elem.product.id))}
                      className="text-white bg-green-400 rounded-full w-10 h-10"
                    >
                      <p className=" pb-1">+</p>
                    </button>
                    <span className="text-xl">{elem.quantity}</span>
                    <button
                      onClick={() => dispatch(decProduct(elem.product.id))}
                      className="text-white bg-green-400 rounded-full w-10 h-10"
                    >
                      <p className=" pb-1">-</p>
                    </button>
                  </div>
                  <div>{elem.product.price}</div>
                  <div>
                    <span
                      onClick={() => dispatch(removeProduct(elem.product.id))}
                      className="cursor-pointer"
                    >
                      <AiFillDelete className="text-red-400 w-8 h-11" />
                    </span>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          className="pt-4"
        >
          <div className="flex flex-col justify-center items-center w-1/2 md:w-1/3 rounded-lg shadow-md py-5 m-auto">
            <p className="text-white text-sm md:text-base text-center">
              Общая сумма: {calculateTotalPrice()} сомони.
            </p>
            <Link to="/order">
              <button className="bg-green-400 p-2 mt-4 rounded-lg active:scale-95 transition-all text-white text-sm md:text-base">
                Оформить заказ
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trash;
