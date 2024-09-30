import React from "react";

const Services1 = () => (
  <div>
    <meta charSet="utf-8" />
    <title>services</title>
    <meta name="description" content />
    <meta name="keywords" content />
    <meta name="robots" content="index, follow" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1.0"
    />
  
    <div className="wrapper mx-auto text-gray-900 font-normal max-w-[1320px]">
      <div className="full-width bg-bg-5">
        <div className="items-center mx-auto px-5 pt-24 lg:flex max-w-[1320px]">
          <div className="flex-1">
            <h1 className="font-poppins font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[30px] md:w-[13ch]">
              Building the Work Ecosystem
            </h1>
            <p className="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[150px] mb-[44px] md:w-[57ch]">
              Connect your conversations with the tools and services that you
              use to get the job done. With over 1,500 apps and a robust API
            </p>
            <div className="flex items-center justify-start mb-[85px]">
              <button type="button">
                {" "}
                <a
                  className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-white bg-black text-heading-6 tracking-wide mr-[22px]"
                  href="#"
                >
                  <span className="block text-inherit w-full h-full rounded-md text-lg font-poppins font-semibold">
                    Get Start
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
              <div className="flex items-center gap-3">
                <i>
                  {" "}
                  <img src="./assets/images/icons/icon-button.svg" alt />
                </i>
                <a
                  className="text-base flex items-center font-poppins font-medium text-[18px] leading-[18px] gap-[5px]"
                  href="/"
                >
                  How it works
                </a>
              </div>
            </div>
            <div className="flex w-full gap-[60px]">
              <div className="flex items-start lg:mb-[60px] last:mb-0 gap-[26px]">
                <div className="bg-white rounded-full w-[80px] h-[80px]">
                  <img
                    className="h-full w-full object-cover p-[18px]"
                    src="./assets/images/icons/icon-waves.svg"
                    alt="icon"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold font-poppins text-[25px] leading-[30px] md:text-heading-3 text-green-900 mb-[5px]">
                    +12k
                  </h2>
                  <p className="text-text text-gray-500">Projects done</p>
                </div>
              </div>
              <div className="flex items-start lg:mb-[60px] last:mb-0 gap-[26px]">
                <div className="bg-white rounded-full w-[80px] h-[80px]">
                  <img
                    className="h-full w-full object-cover p-[18px]"
                    src="./assets/images/icons/icon-pine.svg"
                    alt="icon"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold font-poppins text-[25px] leading-[30px] md:text-heading-3 text-green-900 mb-[5px]">
                    +68
                  </h2>
                  <p className="text-text text-gray-500">Offices / Factories</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden relative h-auto self-end lg:block min-w-[680px]">
            <div className="absolute bottom-0 translate-x-[-120px]">
              <img
                className="h-full w-full object-cover"
                src="./assets/images/hero-services-1.png"
                alt="Agon"
              />
            </div>
            <img
              className="absolute animate-float max-w-[300px] bottom-[336px] left-[-28%]"
              src="./assets/images/bussiness-card.png"
              alt="Agon"
            />
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[150px]">
        <span className="font-poppins inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[25px]">
          What We Do
        </span>
        <div className="mb-[45px] md:mb-[75px]">
          <h2 className="text-gray-900 font-bold font-poppins mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
            We're always looking for new faces and fresh ideas
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600"></p>
        </div>
        <div className="grid grid-cols-1 gap-x-[30px] gap-y-[45px] lg:gap-x-[46px] lg:gap-y-[77px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-[60px] lg:mb-[132px]">
          <div className="flex items-start gap-[15px] md:gap-[30px]">
            <img
              className="max-w-[40px] md:max-w-[52px]"
              src="./assets/images/icons/icon-job-1.svg"
              alt="icon"
            />
            <div>
              <p className="font-bold font-poppins text-[14px] md:text-heading-6 mb-3 md:mb-[22px]">
                Support Engineer
              </p>
              <p className="text-text">
                We commit to original work of the highest standard and giving
                credit where it's due.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-[15px] md:gap-[30px]">
            <img
              className="max-w-[40px] md:max-w-[52px]"
              src="./assets/images/icons/icon-job-2.svg"
              alt="icon"
            />
            <div>
              <p className="font-bold font-poppins text-[14px] md:text-heading-6 mb-3 md:mb-[22px]">
                Web Developer
              </p>
              <p className="text-text">
                We become a bonafide agency with a tiny team of 3 and then hire
                our first developers
              </p>
            </div>
          </div>
          <div className="flex items-start gap-[15px] md:gap-[30px]">
            <img
              className="max-w-[40px] md:max-w-[52px]"
              src="./assets/images/icons/icon-job-3.svg"
              alt="icon"
            />
            <div>
              <p className="font-bold font-poppins text-[14px] md:text-heading-6 mb-3 md:mb-[22px]">
                Business Analyst
              </p>
              <p className="text-text">
                We create our first campaign for Kaleidoscope Tech and it goes
                viral
              </p>
            </div>
          </div>
          <div className="flex items-start gap-[15px] md:gap-[30px]">
            <img
              className="max-w-[40px] md:max-w-[52px]"
              src="./assets/images/icons/icon-job-4.svg"
              alt="icon"
            />
            <div>
              <p className="font-bold font-poppins text-[14px] md:text-heading-6 mb-3 md:mb-[22px]">
                Product Designer
              </p>
              <p className="text-text">
                With a growing body of work, we bring more artists, designers on
                board.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-[15px] md:gap-[30px]">
            <img
              className="max-w-[40px] md:max-w-[52px]"
              src="./assets/images/icons/icon-job-5.svg"
              alt="icon"
            />
            <div>
              <p className="font-bold font-poppins text-[14px] md:text-heading-6 mb-3 md:mb-[22px]">
                Share stories
              </p>
              <p className="text-text">
                We earn our first organic feature in Magazine as a creative
                agency
              </p>
            </div>
          </div>
          <div className="flex items-start gap-[15px] md:gap-[30px]">
            <img
              className="max-w-[40px] md:max-w-[52px]"
              src="./assets/images/icons/icon-job-6.svg"
              alt="icon"
            />
            <div>
              <p className="font-bold font-poppins text-[14px] md:text-heading-6 mb-3 md:mb-[22px]">
                Build communities
              </p>
              <p className="text-text">
                We're not in the business of selling at any cost or running
                after unrealistic
              </p>
            </div>
          </div>
          <div className="flex items-start gap-[15px] md:gap-[30px]">
            <img
              className="max-w-[40px] md:max-w-[52px]"
              src="./assets/images/icons/icon-job-7.svg"
              alt="icon"
            />
            <div>
              <p className="font-bold font-poppins text-[14px] md:text-heading-6 mb-3 md:mb-[22px]">
                A team with a mission
              </p>
              <p className="text-text">
                We tell powerful stories that matter to your customers (and us)
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-200 h-[1px]" />
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[150px]">
        <div className="lg:grid lg:grid-cols-2 gap-[150px]">
          <img
            className="h-full w-full object-cover order-2 rounded-2xl mb-[30px] lg:mb-0 lg:flex-1"
            src="./assets/images/thumbnail-10.png"
            alt="Agon"
          />
          <div className="flex-1 order-1 lg:gap-[30px] xl:gap-[64px] order-[-1]">
            <span className="font-poppins inline-block bg-bg-9 text-primary py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">
              Built Exclusively For You
            </span>
            <h3 className="font-poppins font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">
              From the big picture to every tiny detail, we got you covered.
            </h3>
            <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
              Necessary to deliver white glove, fully managed campaigns that
              surpass industry benchmarks.Take your career to next level. Apply
              to our team and see what we can do together. You’re good enough.
            </p>
            <div className="border border-green-900 border-dashed mb-[48px]" />
            <div className="md:grid md:grid-cols-2 md:gap-y-[34px] lg:gap-x-[70px]">
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
                    Smart Installation Tools
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
              <div className="mb-[30px] lg:mb-0">
                <div className="flex items-center mb-[17px]">
                  <img
                    className="mr-[9px]"
                    src="./assets/images/icons/icon-leaf.svg"
                    alt="leaf icon"
                  />
                  <h4 className="text-heading-6 font-poppins font-bold">
                    Dynamic Boosting
                  </h4>
                </div>
                <p className="text-excerpt text-gray-600">
                  The latest design trends meet hand-crafted templates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[139px]">
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
      <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] gap-5 mx-auto bg-bg-6 px-[15px] py-[50px] md:flex md:px-[52px] md:py-[72px] lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px] mt-[70px] lg:mt-[150px]">
        <div className="flex-1 mb-[30px]">
          <p className="text-capitalized uppercase text-gray-500 tracking-[2px] mb-[13px]">
            newsletter
          </p>
          <h4 className="font-bold font-poppins text-[28px] leading-[32px] md:text-heading-2 mb-[20px]">
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

export default Services1;
