import React from "react";

const Faqs1 = () => (
  <div>
    <meta charSet="utf-8" />
    <title>faqs 1 Page</title>
    <meta name="description" content />
    <meta name="keywords" content />
    <meta name="robots" content="index, follow" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1.0"
    />
    <div className="wrapper mx-auto text-gray-900 font-normal max-w-[1320px]">
      <div className="overlay" />

      <img
        className="h-full w-full object-cover absolute top-0 left-0 z-0 md:!object-fill max-h-[500px] lg:max-h-[600px]"
        src="./assets/images/faqs-1-bg.png"
        alt="background"
      />
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 z-10 relative lg:mt-[84px]">
        <div className="text-center text-white">
          <h1 className="font-poppins font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] text-white mb-[45px]">
            We are here to help you
          </h1>
          <form
            className="mt-[30px] mx-auto max-w-[550px] mb-[45px]"
            action="/"
          >
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
          <p className="text-lead font-bold">
            We are collect your searching keywords to improve our services
          </p>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[150px]">
        <div className="relative px-[12px] py-[70px] rounded-[50px]">
          <div className="text-center relative mb-[70px] md:mb-[90px]">
            <h2 className="font-bold font-poppins mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
              Or choose a category
            </h2>
            <p className="text-quote md:text-lead-lg text-gray-600 mx-auto md:w-[51ch]">
              Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
              primis a libero tempus, blandit and cursus varius and magnis
              sapien
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[30px]">
            <div className="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-bg-2">
              <img
                className="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                src="./assets/images/icons/icon-trees.svg"
                alt="icon"
              />
              <h3 className="font-poppins font-bold text-[18px] md:text-heading-5 mb-[20px]">
                Market research
              </h3>
              <p className="text-text text-gray-600">
                One make creepeth, man bearing theira firmament.
              </p>
            </div>
            <div className="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-bg-2">
              <img
                className="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                src="./assets/images/icons/icon-sun.svg"
                alt="icon"
              />
              <h3 className="font-poppins font-bold text-[18px] md:text-heading-5 mb-[20px]">
                Strategic Consulting
              </h3>
              <p className="text-text text-gray-600">
                One make creepeth, man bearing theira firmament.
              </p>
            </div>
            <div className="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-bg-2">
              <img
                className="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                src="./assets/images/icons/icon-hat.svg"
                alt="icon"
              />
              <h3 className="font-poppins font-bold text-[18px] md:text-heading-5 mb-[20px]">
                Cognitive Solution{" "}
              </h3>
              <p className="text-text text-gray-600">
                One make creepeth, man bearing theira firmament.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="gap-6 px-5 lg:flex xl:gap-[50px]">
        <div className="flex-1 mb-[40px]">
          <div className="mb-[22px]">
            <h2 className="text-gray-900 font-bold font-poppins mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
              Frequently asked questions
            </h2>
            <p className="text-quote md:text-lead-lg text-gray-600"></p>
          </div>
          <p className="text-text text-gray-600 mb-[40px]">
            Feeling inquisitive? Have a read through some of our FAQs or contact
            our supporters for help
          </p>
          <div className="flex flex-col lg:max-w-[303px] md:gap-[35px] lg:mb-[48px]">
            <div className="mb-[30px] lg:mb-0">
              <div className="flex items-center mb-[17px]">
                <img
                  className="mr-[9px]"
                  src="./assets/images/icons/icon-leaf.svg"
                  alt="leaf icon"
                />
                <h4 className="text-heading-6 font-poppins font-bold">
                  Boost your sale
                </h4>
              </div>
              <p className="text-excerpt text-gray-600">
                The latest design trends meet hand-crafted templates.
              </p>
            </div>
            <div className="mb-[30px] lg:mb-0">
              <div className="flex items-center mb-[17px]">
                <img
                  className="mr-[9px]"
                  src="./assets/images/icons/icon-leaf.svg"
                  alt="leaf icon"
                />
                <h4 className="text-heading-6 font-poppins font-bold">
                  Introducing New Features
                </h4>
              </div>
              <p className="text-excerpt text-gray-600">
                The latest design trends meet hand-crafted templates.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <button type="button">
              {" "}
              <a
                className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-white bg-gray-900 w-fit"
                href="#"
              >
                <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-poppins font-semibold">
                  Contact Us
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
            <button type="button">
              {" "}
              <a
                className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-gray-900 bg-transparent w-fit"
                href="#"
              >
                <span className="block text-inherit w-full h-full rounded-md text-lg font-poppins font-semibold">
                  Support Center
                </span>
              </a>
            </button>
          </div>
        </div>
        <div className="flex-[1.5]">
          <div className="relative accordion-item mb-5">
            <details>
              <summary className="flex justify-between py-5 items-center gap-5 px-[30px]">
                <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5">
                  Where is my order? Quisque molestie
                </h4>
              </summary>
              <p className="text-text content font-poppins mt-[30px] ml-[30px]">
                Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel
                pretium mi. Morbi varius, tellus in accumsan blandit, elit
                ligula eleifend velit, luctus mattis ante nulla condimentum
                nulla.
              </p>
            </details>
          </div>
          <div className="relative accordion-item mb-5">
            <details>
              <summary className="flex justify-between py-5 items-center gap-5 px-[30px]">
                <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5">
                  How can I return an item purchased online?
                </h4>
              </summary>
              <p className="text-text content font-poppins mt-[30px] ml-[30px]">
                Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel
                pretium mi. Morbi varius, tellus in accumsan blandit, elit
                ligula eleifend velit, luctus mattis ante nulla condimentum
                nulla.
              </p>
            </details>
          </div>
          <div className="relative accordion-item mb-5">
            <details>
              <summary className="flex justify-between py-5 items-center gap-5 px-[30px]">
                <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5">
                  Can I cancel or change my order?
                </h4>
              </summary>
              <p className="text-text content font-poppins mt-[30px] ml-[30px]">
                Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel
                pretium mi. Morbi varius, tellus in accumsan blandit, elit
                ligula eleifend velit, luctus mattis ante nulla condimentum
                nulla.
              </p>
            </details>
          </div>
          <div className="relative accordion-item mb-5">
            <details>
              <summary className="flex justify-between py-5 items-center gap-5 px-[30px]">
                <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5">
                  I have promotional or discount code?
                </h4>
              </summary>
              <p className="text-text content font-poppins mt-[30px] ml-[30px]">
                Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel
                pretium mi. Morbi varius, tellus in accumsan blandit, elit
                ligula eleifend velit, luctus mattis ante nulla condimentum
                nulla.
              </p>
            </details>
          </div>
          <div className="relative accordion-item mb-5">
            <details>
              <summary className="flex justify-between py-5 items-center gap-5 px-[30px]">
                <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5">
                  What are the delivery types you use?
                </h4>
              </summary>
              <p className="text-text content font-poppins mt-[30px] ml-[30px]">
                Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel
                pretium mi. Morbi varius, tellus in accumsan blandit, elit
                ligula eleifend velit, luctus mattis ante nulla condimentum
                nulla.
              </p>
            </details>
          </div>
          <div className="relative accordion-item mb-5">
            <details>
              <summary className="flex justify-between py-5 items-center gap-5 px-[30px]">
                <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5">
                  How can I pay for my purchases?
                </h4>
              </summary>
              <p className="text-text content font-poppins mt-[30px] ml-[30px]">
                Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel
                pretium mi. Morbi varius, tellus in accumsan blandit, elit
                ligula eleifend velit, luctus mattis ante nulla condimentum
                nulla.
              </p>
            </details>
          </div>
          <div className="relative accordion-item mb-5">
            <details>
              <summary className="flex justify-between py-5 items-center gap-5 px-[30px]">
                <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5">
                  Can I cancel my order?
                </h4>
              </summary>
              <p className="text-text content font-poppins mt-[30px] ml-[30px]">
                Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel
                pretium mi. Morbi varius, tellus in accumsan blandit, elit
                ligula eleifend velit, luctus mattis ante nulla condimentum
                nulla.
              </p>
            </details>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[150px]">
        <div className="text-center">
          <h2 className="font-bold font-poppins mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
            Choose The Best Plan That’s For You
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p>
        </div>
        <div className="flex items-center justify-center gap-[10px] mb-[54px] text-gray-900 text-gray-900">
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
                <div className="block rounded-full w-[65px] h-[30px] bg-gray-900 peer-checked:bg-green-900" />
                <div className="dot absolute left-1 top-1 rounded-full transition h-[21px] w-[21px] bg-white" />
              </div>
            </label>
          </div>
          <p className="text-text">Bill Annually</p>
        </div>
        <div className="package">
          <div className="grid package-list gap-[30px] md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] border border-gray-900 bill-monthly">
              <div>
                <div className="mb-[21px]">
                  <span className="text-heading-3 font-bold font-poppins">
                    $35
                  </span>
                  <span className="text-sm font-bold text-gray-400 ml-[2px]">
                    /month
                  </span>
                </div>
                <h5 className="text-heading-5 font-poppins font-bold mb-[9px]">
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
                  <span className="block text-inherit w-full h-full rounded-md text-lg font-poppins font-semibold">
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
            <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] active border border-gray-900 bill-monthly">
              <div>
                <div className="mb-[21px]">
                  <span className="text-heading-3 font-bold font-poppins">
                    $89
                  </span>
                  <span className="text-sm font-bold text-gray-400 ml-[2px]">
                    /month
                  </span>
                </div>
                <h5 className="text-heading-5 font-poppins font-bold mb-[9px]">
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
                  <span className="block text-inherit w-full h-full rounded-md text-lg font-poppins font-semibold">
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
            <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] border border-gray-900 bill-monthly">
              <div>
                <div className="mb-[21px]">
                  <span className="text-heading-3 font-bold font-poppins">
                    $125
                  </span>
                  <span className="text-sm font-bold text-gray-400 ml-[2px]">
                    /month
                  </span>
                </div>
                <h5 className="text-heading-5 font-poppins font-bold mb-[9px]">
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
                  <span className="block text-inherit w-full h-full rounded-md text-lg font-poppins font-semibold">
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
            <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] border border-gray-900 bill-monthly">
              <div>
                <div className="mb-[21px]">
                  <span className="text-heading-3 font-bold font-poppins">
                    $199
                  </span>
                  <span className="text-sm font-bold text-gray-400 ml-[2px]">
                    /month
                  </span>
                </div>
                <h5 className="text-heading-5 font-poppins font-bold mb-[9px]">
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
                  <span className="block text-inherit w-full h-full rounded-md text-lg font-poppins font-semibold">
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
            <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] border border-gray-900 bill-annually">
              <div>
                <div className="mb-[21px]">
                  <span className="text-heading-3 font-bold font-poppins">
                    $420
                  </span>
                  <span className="text-sm font-bold text-gray-400 ml-[2px]">
                    /year
                  </span>
                </div>
                <h5 className="text-heading-5 font-poppins font-bold mb-[9px]">
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
                  <span className="block text-inherit w-full h-full rounded-md text-lg font-poppins font-semibold">
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
            <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] active border border-gray-900 bill-annually">
              <div>
                <div className="mb-[21px]">
                  <span className="text-heading-3 font-bold font-poppins">
                    $1068
                  </span>
                  <span className="text-sm font-bold text-gray-400 ml-[2px]">
                    /year
                  </span>
                </div>
                <h5 className="text-heading-5 font-poppins font-bold mb-[9px]">
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
                  <span className="block text-inherit w-full h-full rounded-md text-lg font-poppins font-semibold">
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
            <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] border border-gray-900 bill-annually">
              <div>
                <div className="mb-[21px]">
                  <span className="text-heading-3 font-bold font-poppins">
                    $1500
                  </span>
                  <span className="text-sm font-bold text-gray-400 ml-[2px]">
                    /year
                  </span>
                </div>
                <h5 className="text-heading-5 font-poppins font-bold mb-[9px]">
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
                  <span className="block text-inherit w-full h-full rounded-md text-lg font-poppins font-semibold">
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
            <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] border border-gray-900 bill-annually">
              <div>
                <div className="mb-[21px]">
                  <span className="text-heading-3 font-bold font-poppins">
                    $2388
                  </span>
                  <span className="text-sm font-bold text-gray-400 ml-[2px]">
                    /year
                  </span>
                </div>
                <h5 className="text-heading-5 font-poppins font-bold mb-[9px]">
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
                  <span className="block text-inherit w-full h-full rounded-md text-lg font-poppins font-semibold">
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
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[150px]">
        <div className="text-center mb-[30px] md:mb-[68px]">
          <h2 className="font-bold font-poppins mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
            Still have a questions?
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600 mx-auto md:w-[62ch]">
            If you cannot find answer to your question in our FAQ, you can
            always contact us. We wil answer to you shortly! Meet our Support
            team
          </p>
        </div>
        <div className="feedback-list ml-[-15px]">
          <div className="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-4">
            <img
              className="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
              src="./assets/images/avatar-1.png"
              alt="avatar"
            />
            <p className="text-heading-6 font-poppins font-bold mb-[6px]">
              Wade Warren
            </p>
            <p className="text-sm font-bold mb-5 text-gray-700">
              Louis Vuitton
            </p>
            <p className="text-text text-gray-500">
              Even factoring differences in body weight between children and
              adults into account.
            </p>
          </div>
          <div className="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-6">
            <img
              className="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
              src="./assets/images/avatar-2.png"
              alt="avatar"
            />
            <p className="text-heading-6 font-poppins font-bold mb-[6px]">
              Wade Warren
            </p>
            <p className="text-sm font-bold mb-5 text-gray-700">
              Louis Vuitton
            </p>
            <p className="text-text text-gray-500">
              Even factoring differences in body weight between children and
              adults into account.
            </p>
          </div>
          <div className="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-10">
            <img
              className="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
              src="./assets/images/avatar-3.png"
              alt="avatar"
            />
            <p className="text-heading-6 font-poppins font-bold mb-[6px]">
              Wade Warren
            </p>
            <p className="text-sm font-bold mb-5 text-gray-700">
              Louis Vuitton
            </p>
            <p className="text-text text-gray-500">
              Even factoring differences in body weight between children and
              adults into account.
            </p>
          </div>
          <div className="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-9">
            <img
              className="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
              src="./assets/images/avatar-4.png"
              alt="avatar"
            />
            <p className="text-heading-6 font-poppins font-bold mb-[6px]">
              Wade Warren
            </p>
            <p className="text-sm font-bold mb-5 text-gray-700">
              Louis Vuitton
            </p>
            <p className="text-text text-gray-500">
              Even factoring differences in body weight between children and
              adults into account.
            </p>
          </div>
          <div className="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-4">
            <img
              className="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
              src="./assets/images/avatar-5.png"
              alt="avatar"
            />
            <p className="text-heading-6 font-poppins font-bold mb-[6px]">
              Wade Warren
            </p>
            <p className="text-sm font-bold mb-5 text-gray-700">
              Louis Vuitton
            </p>
            <p className="text-text text-gray-500">
              Even factoring differences in body weight between children and
              adults into account.
            </p>
          </div>
          <div className="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-6">
            <img
              className="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
              src="./assets/images/avatar-6.png"
              alt="avatar"
            />
            <p className="text-heading-6 font-poppins font-bold mb-[6px]">
              Wade Warren
            </p>
            <p className="text-sm font-bold mb-5 text-gray-700">
              Louis Vuitton
            </p>
            <p className="text-text text-gray-500">
              Even factoring differences in body weight between children and
              adults into account.
            </p>
          </div>
          <div className="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-10">
            <img
              className="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
              src="./assets/images/avatar-7.png"
              alt="avatar"
            />
            <p className="text-heading-6 font-poppins font-bold mb-[6px]">
              Wade Warren
            </p>
            <p className="text-sm font-bold mb-5 text-gray-700">
              Louis Vuitton
            </p>
            <p className="text-text text-gray-500">
              Even factoring differences in body weight between children and
              adults into account.
            </p>
          </div>
          <div className="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-9">
            <img
              className="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
              src="./assets/images/avatar-8.png"
              alt="avatar"
            />
            <p className="text-heading-6 font-poppins font-bold mb-[6px]">
              Wade Warren
            </p>
            <p className="text-sm font-bold mb-5 text-gray-700">
              Louis Vuitton
            </p>
            <p className="text-text text-gray-500">
              Even factoring differences in body weight between children and
              adults into account.
            </p>
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

export default Faqs1;
