import Image from "next/image";
import React from "react";
import men from "../images/men.jpg";
import women from "../images/women.jpeg";
import hair from "../images/hair.jpg";
import glasses from "../images/GLASSES.jpg";
export default function CatagoriesPage() {
  return (
    <section className="pt-10 h-[100rem] relative bg-catagory">
      <div className="text-center inline-block flex justify-center mt-[7rem]">
        <h1 className="text-7xl font-didot underline-offset-4 leading-10 decoration-1  ">
          <span className="underline">CATAGORIES</span>
          <br />
          <span className="text-lg leading-[0.06em]">
            PICK WHAT YOUR HEART <br /> DESIRES
          </span>
        </h1>
      </div>
      <div className="flex justify-around text-chocolate">
        <div className="relative w-[45%]">
          <div className="flex flex-col items-center absolute left-[10%] hover:z-10  hover:scale-110">
            <Image
              src={hair}
              alt="hair"
              width={300}
              height={340}
              className="drop-shadow-image pb-5 hover:drop-shadow-light"
            />
            <h1 className="text-5xl font-didot">HAIR</h1>
          </div>
          <div className="flex flex-col items-center absolute left-[40%] top-[26rem] hover:z-10  hover:scale-110">
            <Image
              src={men}
              alt="men"
              width={300}
              height={340}
              className="drop-shadow-image pb-5 hover:drop-shadow-light"
            />
            <h1 className="text-5xl font-didot"> MEN</h1>
          </div>
        </div>
        <div className="relative w-[45%]">
          <div className="flex flex-col items-center absolute right-[10%] hover:z-10  hover:scale-110">
            <Image
              src={women}
              alt="women"
              width={300}
              height={340}
              className="drop-shadow-image pb-5 hover:drop-shadow-light"
            />
            <h1 className="text-5xl font-didot">WOMEN</h1>
          </div>
          <div className="flex flex-col items-center absolute right-[45%] top-[30rem] hover:z-10 hover:scale-110">
            <Image
              src={glasses}
              alt="glasses"
              width={300}
              height={340}
              className="drop-shadow-image pb-5 hover:drop-shadow-light"
            />
            <h1 className="text-5xl font-didot">ACCESSORIES</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
