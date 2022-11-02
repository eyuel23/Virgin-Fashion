import cart from "../images/cart.svg";
import heart from "../images/heart.svg";
import Image from "next/image";
export default function Navigation() {
  return (
    <div className="border-b-2  border-secondary">
      <nav className="flex justify-between text-white px-[2rem] py-[.7rem]">
        <p className="text-[40px] text-secondary font-didot">Virgin</p>
        <ul className="flex items-center gap-[.7rem]">
          <li className="bg-black">
            <Image src={cart} alt="cart" />
          </li>
          <div className="h-[1.7rem] border-r-2  border-white"></div>
          <li>
            <Image src={heart} alt="heart" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
