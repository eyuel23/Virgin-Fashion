import Navigation from "./Navigation";

export default function Hero() {
  return (
    <div className="bg-primary h-screen flex flex-col justify-between">
      <Navigation />
      <div className="">
        <h1 className="text-secondary text-[3.5rem] text-center font-bigCasion leading-[77px] ">
          <span className="text-[1.1rem] leading-[.3rem]">
            You are beautiful
          </span>
          <br />
          JUST CARE <br /> ABOUT <br />
          YOUR OWN <br /> HAIR
        </h1>
      </div>
      <button
        type="button"
        class="text-secondary self-center p-[1rem] text-center rotate-90 hover:translate-y-[-3px] bg-transparent hover:shadow-bright mb-[1rem]"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 "
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}
