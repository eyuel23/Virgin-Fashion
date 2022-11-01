import cart from "../images/cart.svg";
import heart from "../images/heart.svg";
import Image from "next/image";
export default function Navigation() {
  return (
    <div>
      <nav className="flex justify-between text-white px-[2rem] py-[1rem]">
        <h1 className="text-[40px] font-didot">Virgin</h1>
        <ul className="flex items-center">
          <li className="bg-black mr-[1rem]">
            <Image src={cart} />
          </li>
          <li calssName="border-solid"></li>
          <li>
            <Image src={heart} />
          </li>
        </ul>
      </nav>
    </div>
  );
}
