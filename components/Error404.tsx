import React from "react";

const Error404 = () => (
  <div>
    <meta charSet="utf-8" />
    <title>Error 404 Page</title>
    <meta name="description" content />
    <meta name="keywords" content />
    <meta name="robots" content="index, follow" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1.0"
    />

      <div className="overlay" />
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 flex flex-col justify-center items-center text-center lg:mt-[161px]">
        <div className="max-w-[565px] mb-[50px]">
          <img
            className="h-full w-full object-cover"
            src="./assets/images/404.png"
            alt="404 image"
          />
        </div>
        <h1 className="font-extrabold font-poppins text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 mb-7">
          Whoops! That page doesn’t exist.
        </h1>
        <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 text-gray-500 mb-[70px]">
          The page you requested could not be found
        </h4>
        <button type="button">
          {" "}
          <a
            className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] flex-row-reverse"
            href="/"
          >
            <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-poppins font-semibold">
              Back to Homepage
            </span>
            <i>
              {" "}
              <img
                className="mr-4 rotate-180 filter-white w-[12px] group-hover:filter-black"
                src="./assets/images/icons/icon-right.svg"
                alt="arrow right icon"
              />
            </i>
          </a>
        </button>
      </div>
      <div
        className="bg fixed bottom-28 rounded-full grid place-items-center opacity-0 invisible transition-all duration-300 right-[20px] z-[9999] w-[48px] h-[48px]"
        id="backToTop"
      >
        <a
          className="rounded-full bg-green-900 grid place-items-center w-[48px] h-[48px]"
          href="#top"
        >
          <img src="./assets/images/icons/icon-up.svg" alt="to top icon" />
        </a>
      </div>
   

  </div>
);

export default Error404;
