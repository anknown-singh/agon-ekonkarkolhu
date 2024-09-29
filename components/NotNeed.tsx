import React from "react";

const NotNeed = () => (
  <div>
    <meta charSet="utf-8" />
    <title>Home Page</title>
    <meta name="description" content />
    <meta name="keywords" content />
    <meta name="robots" content="NotNeed, follow" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1.0"
    />


    <div className="wrapper mx-auto text-gray-900 font-normal max-w-[1320px]">
      <a name="top"> </a>
      <div className="absolute top-0 left-0 w-screen h-full bg-opacity-80 hidden video-iframe bg-[#0b0b0b] z-[999999]">
        <div className="mx-auto video w-1/2">
          <div className="flex justify-end">
            <button
              className="text-white close-video text-[20px]"
              type="button"
              title="Close (Esc)"
            >
              x
            </button>
          </div>
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/oRI37cOPBQQ"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="allowfullscreen"
          />
        </div>
      </div>
      <div className="overlay" />
      <div className="full-width bg-green-900 relative">
        <img
          className="absolute right-0 opacity-30 top-[-150px]"
          src="./assets/images/icons/pattern-2.svg"
          alt
        />
        <img
          className="absolute opacity-30 bottom-[-90px] left-[-15px]"
          src="./assets/images/icons/pattern-1.svg"
          alt
        />
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 pt-[90px] pb-[111px]">
          <div className="text-center text-white mb-[56px]">
            <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-white mb-5 md:mb-[30px] max-w-[725px]">
              Choose The Best Plan That’s For You
            </h2>
            <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p>
          </div>
          <div className="flex items-center justify-center gap-[10px] mb-[54px] text-white">
            <p className="text-text">Bill Monthly</p>
            <div className="flex items-center justify-center">
              <label
                className="flex items-center cursor-pointer"
                htmlFor="billSwitch"
              >
                <div className="relative">
                  <input
                    className="sr-only peer"
                    id="billSwitch"
                    type="checkbox"
                    name
                  />
                  <div className="block rounded-full w-[65px] h-[30px] bg-white" />
                  <div className="dot absolute left-1 top-1 rounded-full transition h-[21px] w-[21px] bg-gray-900" />
                </div>
              </label>
            </div>
            <p className="text-text">Bill Annually</p>
          </div>
          <div className="package">
            <div className="grid mx-auto gap-[44px] md:grid-cols-2 lg:grid-cols-3 max-w-[970px]">
              <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] bill-monthly">
                <div>
                  <div className="mb-[21px]">
                    <span className="text-heading-3 font-bold font-chivo">
                      $35
                    </span>
                    <span className="text-sm font-bold text-gray-400 ml-[2px]">
                      /month
                    </span>
                  </div>
                  <h5 className="text-heading-5 font-chivo font-bold mb-[9px]">
                    Standard
                  </h5>
                  <p className="text-sm font-bold text-gray-400 mb-[43px]">
                    All the basics for businesses that are just getting started.
                  </p>
                  <div className="w-full bg-gray-300 h-[1px] mb-[21px]" />
                  <ul className="mb-[76px]">
                    <li className="flex items-center gap-[10px] mb-[17px]">
                      <img
                        className="tick-icon"
                        src="./assets/images/icons/icon-tick.svg"
                        alt="icon"
                      />
                      <img
                        className="hidden tick-icon-active"
                        src="./assets/images/icons/icon-tick-orange.svg"
                        alt="icon"
                      />
                      <span className="text-md text-gray-500">
                        Unlimited updates
                      </span>
                    </li>
                    <li className="flex items-center gap-[10px] mb-[17px]">
                      <img
                        className="tick-icon"
                        src="./assets/images/icons/icon-tick.svg"
                        alt="icon"
                      />
                      <img
                        className="hidden tick-icon-active"
                        src="./assets/images/icons/icon-tick-orange.svg"
                        alt="icon"
                      />
                      <span className="text-md text-gray-500">
                        Custom permissions
                      </span>
                    </li>
                    <li className="flex items-center gap-[10px] mb-[17px]">
                      <img
                        src="./assets/images/icons/icon-close.svg"
                        alt="icon"
                      />
                      <span className="text-md text-gray-500">
                        Custom designs & features
                      </span>
                    </li>
                  </ul>
                </div>
                <button type="button">
                  {" "}
                  <a
                    className="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                    href="#"
                  >
                    <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                      Get Started
                    </span>
                    <i>
                      {" "}
                      <img
                        className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                        src="./assets/images/icons/icon-right.svg"
                        alt="arrow right icon"
                      />
                    </i>
                  </a>
                </button>
              </div>
              <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white bill-monthly flex flex-col justify-between p-[35px]">
                <div>
                  <div className="mb-[21px]">
                    <span className="text-heading-3 font-bold font-chivo">
                      $89
                    </span>
                    <span className="text-sm font-bold text-gray-400 ml-[2px]">
                      /month
                    </span>
                  </div>
                  <h5 className="text-heading-5 font-chivo font-bold mb-[9px]">
                    Essentials
                  </h5>
                  <p className="text-sm font-bold text-gray-400 mb-[43px]">
                    All the basics for businesses that are just getting started.
                  </p>
                  <div className="w-full bg-gray-300 h-[1px] mb-[21px]" />
                  <ul className="mb-[76px]">
                    <li className="flex items-center gap-[10px] mb-[17px]">
                      <img
                        src="./assets/images/icons/icon-tick.svg"
                        alt="icon"
                      />
                      <span className="text-md text-gray-500">
                        Unlimited updates
                      </span>
                    </li>
                    <li className="flex items-center gap-[10px] mb-[17px]">
                      <img
                        src="./assets/images/icons/icon-tick.svg"
                        alt="icon"
                      />
                      <span className="text-md text-gray-500">
                        Custom permissions
                      </span>
                    </li>
                    <li className="flex items-center gap-[10px] mb-[17px]">
                      <img
                        src="./assets/images/icons/icon-close.svg"
                        alt="icon"
                      />
                      <span className="text-md text-gray-500">
                        Custom designs & features
                      </span>
                    </li>
                    <li className="flex items-center gap-[10px] mb-[17px]">
                      <img
                        src="./assets/images/icons/icon-close.svg"
                        alt="icon"
                      />
                      <span className="text-md text-gray-500">
                        Custom designs & features
                      </span>
                    </li>
                  </ul>
                </div>
                <button type="button">
                  {" "}
                  <a
                    className="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                    href="#"
                  >
                    <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                      Get Started
                    </span>
                    <i>
                      {" "}
                      <img
                        className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                        src="./assets/images/icons/icon-right.svg"
                        alt="arrow right icon"
                      />
                    </i>
                  </a>
                </button>
              </div>
              <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] col-span-1 bill-monthly md:col-span-2 lg:col-span-1">
                <div>
                  <div className="mb-[21px]">
                    <span className="text-heading-3 font-bold font-chivo">
                      $125
                    </span>
                    <span className="text-sm font-bold text-gray-400 ml-[2px]">
                      /month
                    </span>
                  </div>
                  <h5 className="text-heading-5 font-chivo font-bold mb-[9px]">
                    Premium
                  </h5>
                  <p className="text-sm font-bold text-gray-400 mb-[43px]">
                    Avanced features for pros who need more customization.
                  </p>
                  <div className="w-full bg-gray-300 h-[1px] mb-[21px]" />
                  <ul className="mb-[76px]">
                    <li className="flex items-center gap-[10px] mb-[17px]">
                      <img
                        className="tick-icon"
                        src="./assets/images/icons/icon-tick.svg"
                        alt="icon"
                      />
                      <img
                        className="hidden tick-icon-active"
                        src="./assets/images/icons/icon-tick-orange.svg"
                        alt="icon"
                      />
                      <span className="text-md text-gray-500">
                        Unlimited updates
                      </span>
                    </li>
                    <li className="flex items-center gap-[10px] mb-[17px]">
                      <img
                        className="tick-icon"
                        src="./assets/images/icons/icon-tick.svg"
                        alt="icon"
                      />
                      <img
                        className="hidden tick-icon-active"
                        src="./assets/images/icons/icon-tick-orange.svg"
                        alt="icon"
                      />
                      <span className="text-md text-gray-500">
                        Custom permissions
                      </span>
                    </li>
                    <li className="flex items-center gap-[10px] mb-[17px]">
                      <img
                        src="./assets/images/icons/icon-close.svg"
                        alt="icon"
                      />
                      <span className="text-md text-gray-500">
                        Custom designs & features
                      </span>
                    </li>
                  </ul>
                </div>
                <button type="button">
                  {" "}
                  <a
                    className="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                    href="#"
                  >
                    <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                      Get Started
                    </span>
                    <i>
                      {" "}
                      <img
                        className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                        src="./assets/images/icons/icon-right.svg"
                        alt="arrow right icon"
                      />
                    </i>
                  </a>
                </button>
              </div>
              <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] bill-annually">
                <div>
                  <div className="mb-[21px]">
                    <span className="text-heading-3 font-bold font-chivo">
                      $420
                    </span>
                    <span className="text-sm font-bold text-gray-400 ml-[2px]">
                      /year
                    </span>
                  </div>
                  <h5 className="text-heading-5 font-chivo font-bold mb-[9px]">
                    Standard
                  </h5>
                  <p className="text-sm font-bold text-gray-400 mb-[43px]">
                    All the basics for businesses that are just getting started.
                  </p>
                  <div className="w-full bg-gray-300 h-[1px] mb-[21px]" />
                  <ul className="mb-[76px]">
                    <li className="flex items-center gap-[10px] mb-[17px]">
                      <img
                        className="tick-icon"
                        src="./assets/images/icons/icon-tick.svg"
                        alt="icon"
                      />
                      <img
                        className="hidden tick-icon-active"
                        src="./assets/images/icons/icon-tick-orange.svg"
                        alt="icon"
                      />
                      <span className="text-md text-gray-500">
                        Unlimited updates
                      </span>
                    </li>
                    <li className="flex items-center gap-[10px] mb-[17px]">
                      <img
                        className="tick-icon"
                        src="./assets/images/icons/icon-tick.svg"
                        alt="icon"
                      />
                      <img
                        className="hidden tick-icon-active"
                        src="./assets/images/icons/icon-tick-orange.svg"
                        alt="icon"
                      />
                      <span className="text-md text-gray-500">
                        Custom permissions
                      </span>
                    </li>
                    <li className="flex items-center gap-[10px] mb-[17px]">
                      <img
                        src="./assets/images/icons/icon-close.svg"
                        alt="icon"
                      />
                      <span className="text-md text-gray-500">
                        Custom designs & features
                      </span>
                    </li>
                  </ul>
                </div>
                <button type="button">
                  {" "}
                  <a
                    className="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                    href="#"
                  >
                    <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                      Get Started
                    </span>
                    <i>
                      {" "}
                      <img
                        className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                        src="./assets/images/icons/icon-right.svg"
                        alt="arrow right icon"
                      />
                    </i>
                  </a>
                </button>
              </div>
              <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white bill-annually flex flex-col justify-between p-[35px]">
                <div>
                  <div className="mb-[21px]">
                    <span className="text-heading-3 font-bold font-chivo">
                      $1068
                    </span>
                    <span className="text-sm font-bold text-gray-400 ml-[2px]">
                      /year
                    </span>
                  </div>
                  <h5 className="text-heading-5 font-chivo font-bold mb-[9px]">
                    Essentials
                  </h5>
                  <p className="text-sm font-bold text-gray-400 mb-[43px]">
                    All the basics for businesses that are just getting started.
                  </p>
                  <div className="w-full bg-gray-300 h-[1px] mb-[21px]" />
                  <ul className="mb-[76px]">
                    <li className="flex items-center gap-[10px] mb-[17px]">
                      <img
                        src="./assets/images/icons/icon-tick.svg"
                        alt="icon"
                      />
                      <span className="text-md text-gray-500">
                        Unlimited updates
                      </span>
                    </li>
                    <li className="flex items-center gap-[10px] mb-[17px]">
                      <img
                        src="./assets/images/icons/icon-tick.svg"
                        alt="icon"
                      />
                      <span className="text-md text-gray-500">
                        Custom permissions
                      </span>
                    </li>
                    <li className="flex items-center gap-[10px] mb-[17px]">
                      <img
                        src="./assets/images/icons/icon-close.svg"
                        alt="icon"
                      />
                      <span className="text-md text-gray-500">
                        Custom designs & features
                      </span>
                    </li>
                    <li className="flex items-center gap-[10px] mb-[17px]">
                      <img
                        src="./assets/images/icons/icon-close.svg"
                        alt="icon"
                      />
                      <span className="text-md text-gray-500">
                        Custom designs & features
                      </span>
                    </li>
                  </ul>
                </div>
                <button type="button">
                  {" "}
                  <a
                    className="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                    href="#"
                  >
                    <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                      Get Started
                    </span>
                    <i>
                      {" "}
                      <img
                        className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                        src="./assets/images/icons/icon-right.svg"
                        alt="arrow right icon"
                      />
                    </i>
                  </a>
                </button>
              </div>
              <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] col-span-1 bill-annually md:col-span-2 lg:col-span-1">
                <div>
                  <div className="mb-[21px]">
                    <span className="text-heading-3 font-bold font-chivo">
                      $1500
                    </span>
                    <span className="text-sm font-bold text-gray-400 ml-[2px]">
                      /year
                    </span>
                  </div>
                  <h5 className="text-heading-5 font-chivo font-bold mb-[9px]">
                    Premium
                  </h5>
                  <p className="text-sm font-bold text-gray-400 mb-[43px]">
                    Avanced features for pros who need more customization.
                  </p>
                  <div className="w-full bg-gray-300 h-[1px] mb-[21px]" />
                  <ul className="mb-[76px]">
                    <li className="flex items-center gap-[10px] mb-[17px]">
                      <img
                        className="tick-icon"
                        src="./assets/images/icons/icon-tick.svg"
                        alt="icon"
                      />
                      <img
                        className="hidden tick-icon-active"
                        src="./assets/images/icons/icon-tick-orange.svg"
                        alt="icon"
                      />
                      <span className="text-md text-gray-500">
                        Unlimited updates
                      </span>
                    </li>
                    <li className="flex items-center gap-[10px] mb-[17px]">
                      <img
                        className="tick-icon"
                        src="./assets/images/icons/icon-tick.svg"
                        alt="icon"
                      />
                      <img
                        className="hidden tick-icon-active"
                        src="./assets/images/icons/icon-tick-orange.svg"
                        alt="icon"
                      />
                      <span className="text-md text-gray-500">
                        Custom permissions
                      </span>
                    </li>
                    <li className="flex items-center gap-[10px] mb-[17px]">
                      <img
                        src="./assets/images/icons/icon-close.svg"
                        alt="icon"
                      />
                      <span className="text-md text-gray-500">
                        Custom designs & features
                      </span>
                    </li>
                  </ul>
                </div>
                <button type="button">
                  {" "}
                  <a
                    className="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                    href="#"
                  >
                    <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                      Get Started
                    </span>
                    <i>
                      {" "}
                      <img
                        className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                        src="./assets/images/icons/icon-right.svg"
                        alt="arrow right icon"
                      />
                    </i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 mt-[70px] md:mt-[150px]">
        <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] gap-5 mx-auto bg-orange-100 px-[15px] py-[50px] md:flex md:px-[52px] md:py-[72px] lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px]">
          <div className="flex-1 mb-[30px]">
            <p className="text-capitalized uppercase text-gray-500 tracking-[2px] mb-[13px]">
              newsletter
            </p>
            <h4 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[20px]">
              Subscribe our newsletter
            </h4>
            <p className="text-text text-gray-500">
              By clicking the button, you are agreeing with our
            </p>
            <a className="text-green-900" href="/">
              Term & Conditions
            </a>
            <form className="mt-[30px]" action="/">
              <div className="bg-white flex items-center justify-between p-3 rounded-[55px]">
                <input
                  className="ml-[25px]"
                  type="text"
                  placeholder="Enter your mail ..."
                />
                <button
                  className="rounded-full bg-green-900 grid place-items-center w-[56px] h-[56px]"
                  type="submit"
                >
                  {" "}
                  <img
                    className="filter-white"
                    src="./assets/images/icons/icon-right.svg"
                    alt
                  />
                </button>
              </div>
            </form>
          </div>
          <div className="relative flex-1">
            {" "}
            <img
              className="h-full w-full object-cover rounded-2xl img-shadow lg:absolute lg:max-w-[332px] lg:h-[403px] lg:right-0"
              src="./assets/images/thumbnail-2.png"
              alt="Agon"
            />
            <img
              className="h-full w-full object-cover absolute animate-float w-[225px] h-[170px] rounded-[14px] bottom-[-20px] left-[-10px]"
              src="./assets/images/chart.png"
              alt="Agon"
            />
          </div>
        </div>
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
  </div>
);

export default NotNeed;
