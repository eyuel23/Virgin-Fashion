import cart from "../images/cart.svg";
import Image from "next/image";
export default function Navigation() {
  return (
    <div>
      <nav className=" flex">
        <h1>Virgin</h1>
        <ul>
          <li>
            <Image
              src={cart}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </li>
          <li></li>
          <li>
            <img />
          </li>
        </ul>
      </nav>
    </div>
  );
}
