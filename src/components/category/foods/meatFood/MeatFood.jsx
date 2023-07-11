import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { addProduct } from "../../../../Reduser/basket";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function MeatFood({ meatFood }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-white  border-2 p-4 rounded-xl bg-gray-800 m-3">
        <img
          src={meatFood.img}
          className="w-[100%] h-[30vh] rounded-lg"
          alt=""
        />
        <div className="flex justify-between items-center py-2">
          <h3 className="text-2xl font-bold">{meatFood.nameFood}</h3>
          <p>{meatFood.weight}</p>
        </div>
        <div className="h-[10vh]">
          <p>{meatFood.about}</p>
        </div>
        <div className="flex justify-between items-center py-2">
          <h2 className="text-3xl font-bold">{meatFood.price}</h2>
          <button
            onClick={() => dispatch(addProduct(meatFood))}
            className="bg-green-400 text-white  rounded-lg flex gap-2 items-center p-2 hover:shadow-md hover:shadow-green-800 cursor-pointer active:scale-95 transition-all"
          >
            В корзину <TiShoppingCart />
          </button>
        </div>
      </div>
    </>
  );
}