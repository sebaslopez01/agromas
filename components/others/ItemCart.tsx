import pera from "@/public/pera.jpg";
import Image from "next/image";
import { useState } from "react";

interface ItemCartProps {
  productName: string;
  priceProduct: number;
  undPerProduct: string;
}

export default function ItemCart({
  productName,
  priceProduct,
  undPerProduct,
}: ItemCartProps) {
  const [count, setCount] = useState(1);

  return (
    <>
      <div className="w-[100%] h-[100px] md:h-[130px] lg:h-[150px] border-b border-gray-300 grid grid-cols-[45%_0%_20%_20%_15%] lg:grid-cols-[30%_25%_15%_15%_15%] justify-items-center items-center box-border">
        {/* Image and description */}
        <div className="w-[100%] h-[100%] flex justify-start items-center">
          {/* Image Container */}
          <div className="w-[30%] md:w-[30%] lg:w-[40%] h-[80%] lg:h-[100%] flex items-center justify-start">
            <Image
              className="w-[80%] h-[60%] md:w-[100%] md:h-[80%] lg:w-[100%] lg:h-[60%] xl:w-[100%] xl:h-[70%] object-cover rounded-lg"
              src={pera}
              alt="Perita dulce"
            />
          </div>

          {/* Description of the product Container */}
          <div className="h-full w-[70%] md:w-[70%] flex flex-col justify-center items-start text-xs md:text-sm font-semibold md:pl-5">
            <span>{productName}</span>
            <span className="text-gray-700">
              $ {priceProduct} {undPerProduct}
            </span>
          </div>
        </div>

        {/* Counter */}
        <div className="col-start-3 w-[60%] md:w-[70%] self-center flex justify-center items-center">
          <div className="flex h-[30px] justify-between items-center border border-gray-300">
            <button
              onClick={() => {
                if (count >= 2) setCount((c) => c - 1);
              }}
              className="flex items-center justify-center w-[30%] h-[100%] hover:bg-gray-300 text-lg md:text-2xl"
            >
              -
            </button>
            <input
              onChange={(e) => {
                const val = +e.target.value;
                if (!isNaN(val)) setCount(val);
              }}
              className="flex items-center justify-center h-full w-[30%] text-sm md:text-xl text-center focus:outline-none bg-[#ECECEA]"
              value={count}
              maxLength={2}
            />
            <button
              onClick={() => setCount((c) => c + 1)}
              className="flex items-center justify-center w-[30%] h-[100%] hover:bg-gray-300 text-lg md:text-2xl"
            >
              +
            </button>
          </div>
        </div>

        {/* Total */}
        <div className="col-start-4 self-center flex flex-col">
          <span className=" font-bold">$ {priceProduct * count}</span>
        </div>

        {/* Delete Button */}
        <button className="col-start-5 self-center flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-trash"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#AE270A "
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 7l16 0"></path>
            <path d="M10 11l0 6"></path>
            <path d="M14 11l0 6"></path>
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
          </svg>
        </button>
      </div>
    </>
  );
}