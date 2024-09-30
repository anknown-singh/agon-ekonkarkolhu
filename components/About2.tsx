import React from "react";

const About2 = () => (

    <div className="wrapper mx-auto text-gray-900 font-normal max-w-[1320px]">
      <div className="overlay" />
      <div className="full-width bg-bg-2">
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 z-10 relative mx-auto !mt-0 py-[60px] max-w-[1320px] lg:flex lg:items-end lg:justify-between">
          <div className="lg:w-[60%] lg:mr-[150px]">
            <span className="font-poppins inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[10px]">
              What We Do, What You Get
            </span>
            <h1 className="font-poppins font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[30px]">
              Advanced analytics to grow your business
            </h1>
            <p className="text-quote md:text-lead-lg text-gray-500 relative z-10 pr-[40px] lg:pr-[60px] mb-[44px]">
              Integrated workflow designed for product teams. We create
              world-class development and branding
            </p>
            <div className="flex items-center justify-start mb-[50px]">
              <button type="button">
                {" "}
                <a
                  className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-white bg-black text-heading-6 tracking-wide mr-[22px]"
                  href="#"
                >
                  <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-poppins font-semibold">
                    Join Our Team
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
              <a
                className="text-base flex items-center font-poppins font-bold text-[18px] leading-[18px] gap-[5px]"
                href="/"
              >
                Contact Us
              </a>
              <i>
                {" "}
                <img
                  className="ml-[7px] w-[12px]"
                  src="./assets/images/icons/icon-right.svg"
                  alt="arrow right icon"
                />
              </i>
            </div>
          </div>
          <div className="relative">
            <div className="flex justify-between w-full flex-wrap lg:flex-col gap-[40px] lg:gap-0">
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
              <div className="flex items-start lg:mb-[60px] last:mb-0 gap-[26px]">
                <div className="bg-white rounded-full w-[80px] h-[80px]">
                  <img
                    className="h-full w-full object-cover p-[18px]"
                    src="./assets/images/icons/icon-anchor.svg"
                    alt="icon"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold font-poppins text-[25px] leading-[30px] md:text-heading-3 text-green-900 mb-[5px]">
                    +15k
                  </h2>
                  <p className="text-text text-gray-500">Constant clients</p>
                </div>
              </div>
            </div>
            <div className="absolute hidden bottom-[-60px] left-[-117px] translate-x-[-260px] lg:block">
              <img
                className="h-full w-full object-cover animate-hero-thumb-sm-animation"
                src="./assets/images/hero-about2.png"
                alt="Agon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 text-center mx-auto max-w-[905px]">

        <span className="font-poppins inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-4">
          How It Work ?
        </span>
        <div className="text-center mb-[88px]">
          <h2 className="font-bold font-poppins mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
            Cross-border ordering has never been easier
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center relative md:flex-wrap md:flex-row lg:gap-[30px] xl:gap-[110px]">
          <div className="rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative bg-bg-2 md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px]">
            <div className="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]">
              <img
                className="max-w-[36px]"
                src="./assets/images/icons/icon-dharma-wheel.svg"
                alt="icon"
              />
            </div>
            <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 mb-[15px]">
              Start Plan
            </h4>
            <p className="text-text text-gray-500">
              Choose any of our packages
            </p>
            <img
              className="hidden absolute right-0 lg:block top-1/2 translate-x-[30px] z-[-1] xl:translate-x-full xl:right-[-15px]"
              src="./assets/images/icons/icon-arrow-1.svg"
              alt="direction arrow"
            />
          </div>
          <div className="rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative bg-bg-3 md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px]">
            <div className="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]">
              <img
                className="max-w-[36px]"
                src="./assets/images/icons/icon-wave.svg"
                alt="icon"
              />
            </div>
            <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 mb-[15px]">
              Connect
            </h4>
            <p className="text-text text-gray-500">
              Receive concepts In 24 hours
            </p>
            <img
              className="hidden absolute right-0 lg:block top-1/2 translate-x-[30px] z-[-1] xl:translate-x-full xl:right-[-15px]"
              src="./assets/images/icons/icon-arrow-2.svg"
              alt="direction arrow"
            />
          </div>
          <div className="rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative bg-bg-5 md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px]">
            <div className="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]">
              <img
                className="max-w-[36px]"
                src="./assets/images/icons/icon-headphones.svg"
                alt="icon"
              />
            </div>
            <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 mb-[15px]">
              Match
            </h4>
            <p className="text-text text-gray-500">Development Stage</p>
            <img
              className="hidden absolute right-0 top-full lg:block translate-x-[-60px] z-[-1] xl:translate-y-[30px]"
              src="./assets/images/icons/icon-arrow-3.svg"
              alt="direction arrow"
            />
          </div>
          <div className="rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative bg-bg-9 md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px] lg:order-1">
            <div className="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]">
              <img
                className="max-w-[36px]"
                src="./assets/images/icons/icon-trees.svg"
                alt="icon"
              />
            </div>
            <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 mb-[15px]">
              Review
            </h4>
            <p className="text-text text-gray-500">
              Project launch and checkout
            </p>
            <img
              className="hidden absolute left-0 lg:block top-1/2 translate-x-[-30px] z-[-1] xl:-translate-x-full xl:left-[-15px]"
              src="./assets/images/icons/icon-arrow-4.svg"
              alt="direction arrow"
            />
          </div>
          <div className="rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative bg-bg-5 md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px]">
            <div className="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]">
              <img
                className="max-w-[36px]"
                src="./assets/images/icons/icon-flower.svg"
                alt="icon"
              />
            </div>
            <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 mb-[15px]">
              Complete
            </h4>
            <p className="text-text text-gray-500">After-release Support</p>
          </div>
        </div>
      </div>
      <div className="full-width bg-green-900">
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 flex items-center mx-auto lg:mt-[150px] py-[96px] gap-[50px] max-w-[1320px]">
          <div className="hidden grid-cols-2 grid-rows-2 flex-1 gap-5 lg:grid">
            <div>
              <img
                className="h-full w-full object-cover rounded-2xl"
                src="./assets/images/thumbnail-5.png"
                alt="Agon"
              />
            </div>
            <div className="col-start-1 row-start-2">
              <img
                className="h-full w-full object-cover rounded-2xl"
                src="./assets/images/thumbnail-12.png"
                alt="Agon"
              />
            </div>
            <div className="col-start-2 row-span-2">
              <img
                className="h-full w-full object-cover rounded-2xl"
                src="./assets/images/thumbnail-13.png"
                alt="Agon"
              />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="font-extrabold font-poppins text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 text-white mb-[26px]">
              Our game-changing approach to working together
            </h1>
            <p className="text-text mb-9 text-[#D1DAE4]">
              Check out stories from companies like Leroy Merlin and Decathlon
              to get inspired by how much you can gain.
            </p>
            <button type="button">
              {" "}
              <a
                className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-text w-fit"
                href="#"
              >
                <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-poppins font-semibold">
                  I am Button
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[128px]">
        <div className="items-center justify-between md:flex mb-[30px] md:mb-[90px]">
          <div className="mb-8">
            <h2 className="text-gray-900 font-bold font-poppins mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
              Our Happy Customers
            </h2>
            <p className="text-quote md:text-lead-lg text-gray-600">
              Know about our clients, we are a woldwide corporate brand
            </p>
          </div>
          <div className="flex items-center gap-5">
            <div className="grid place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-prev">
              <img
                className="group-hover:filter-white"
                src="./assets/images/icons/icon-prev.svg"
                alt="control icon button"
              />
            </div>
            <div className="grid place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-next">
              <img
                className="group-hover:filter-white"
                src="./assets/images/icons/icon-next.svg"
                alt="control icon button"
              />
            </div>
          </div>
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

);

export default About2;
