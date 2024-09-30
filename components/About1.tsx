import React from "react";

const About1 = () => (
  <div>
    <meta charSet="utf-8" />
    <title>About Page 1</title>
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
        className="w-full absolute top-0 left-0 z-0 top-[112px] h-[750px] object-fill"
        src="./assets/images/about-1-bg.png"
        alt="Agon"
      />
      <div className="full-width banner-hero banner-2">
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 z-10 relative mx-auto mt-0 py-[60px] !mt-0 max-w-[1320px] lg:flex lg:items-center">
          <div className="lg:w-[60%] lg:mr-[150px]">
            <span className="font-poppins inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[29px]">
              What We Do, What You Get
            </span>
            <h1 className="font-poppins font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-[20px]">
              A small creative team excited to create beautiful things
            </h1>
            <p className="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[60px] mb-[44px] md:w-[36ch]">
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
          <div className="hidden relative lg:block">
            <img
              className="animate-float absolute rounded-2xl max-w-[240px] max-h-[340px] bottom-[-12%] left-[-50%]"
              src="./assets/images/thumbnail-21.png"
              alt="Agon"
            />
            <img
              className="animate-hero-thumb-sm-animation max-w-[512px] max-h-[689px]"
              src="./assets/images/thumbnail-13.png"
              alt="Agon"
            />
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[88px]">
        <div className="grid grid-cols-2 flex-1 text-center gap-2 gap-y-8 md:grid-cols-2 xl:gap-y-[70px] lg:grid-cols-4 mb-[45px] md:mb-[88px]">
          <div>
            <h1 className="font-poppins font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-green-900">
              +12
            </h1>
            <p className="text-text text-gray-500 mx-auto md:w-[26ch]">
              years in business
            </p>
          </div>
          <div>
            <h1 className="font-poppins font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-green-900">
              2K+
            </h1>
            <p className="text-text text-gray-500 mx-auto md:w-[26ch]">
              projects done
            </p>
          </div>
          <div>
            <h1 className="font-poppins font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-green-900">
              28+
            </h1>
            <p className="text-text text-gray-500 mx-auto md:w-[26ch]">
              countries /offices
            </p>
          </div>
          <div>
            <h1 className="font-poppins font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-green-900">
              86
            </h1>
            <p className="text-text text-gray-500 mx-auto md:w-[26ch]">
              Constant clients
            </p>
          </div>
        </div>
        <div className="bg-gray-300 mx-auto w-[90%] h-[1px]" />
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 text-center lg:mt-[137px]">
        <span className="font-poppins inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[18px]">
          What We Do, What You Get
        </span>
        <div className="text-center mb-[40px] md:mb-[62px]">
          <h2 className="font-bold font-poppins mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
            We believe in the power of creative ideas
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p>
        </div>
        <div className="relative mx-auto max-w-[1190px]">
          <img
            className="h-full w-full object-cover rounded-2xl"
            src="./assets/images/thumbnail-22.png"
            alt="Agon"
          />
          <button className="rounded-full bg-white grid place-items-center absolute play-video w-[60px] h-[60px] md:w-[138px] md:h-[138px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              src="./assets/images/icons/icon-play.svg"
              alt="play button"
              width={26}
            />
          </button>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[150px]">
        <div className="text-center mb-[40px] lg:mb-[90px]">
          <h2 className="font-bold font-poppins mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] w-full">
            Providing solutions of every kind
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600 mx-auto md:max-w-[50ch]">
            In a professional context it often happens that private or corporate
            clients order a publication to publish news.
          </p>
        </div>
        <div className="lg:flex lg:items-center gap-[30px]">
          <div className="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] last:mb-0">
            <img
              className="h-full w-full object-cover max-w-[64px]"
              src="./assets/images/icons/icon-resources.svg"
              alt="icon"
            />
            <div>
              <h3 className="font-bold font-poppins text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">
                1. Acquisition
              </h3>
              <p className="text-excerpt">
                Aliquam a augue suscipit, luctus neque purus ipsum neque at
                dolor primis libero tempus, blandit
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] last:mb-0">
            <img
              className="h-full w-full object-cover max-w-[64px]"
              src="./assets/images/icons/icon-cards.svg"
              alt="icon"
            />
            <div>
              <h3 className="font-bold font-poppins text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">
                2. Activation
              </h3>
              <p className="text-excerpt">
                Aliquam a augue suscipit, luctus neque purus ipsum neque at
                dolor primis libero tempus, blandit
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px]">
            <img
              className="h-full w-full object-cover max-w-[64px]"
              src="./assets/images/icons/icon-stats.svg"
              alt="icon"
            />
            <div>
              <h3 className="font-bold font-poppins text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">
                3. Retention
              </h3>
              <p className="text-excerpt">
                Aliquam a augue suscipit, luctus neque purus ipsum neque at
                dolor primis libero tempus, blandit
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[150px]">
        <div className="text-center">
          <span className="font-poppins inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[19px]">
            What We Do, What You Get
          </span>
        </div>
        <div className="text-center mb-[70px]">
          <h2 className="font-bold font-poppins mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] md:w-[19ch]">
            Bringing the world's ideas to life
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600 mx-auto md:w-[63ch]">
            Developers are trusted to create an engaging experience for their
            companies, so we build tools to help them.
          </p>
        </div>
        <div className="lg:flex lg:gap-5 xl:gap-[30px]">
          <div className="relative mb-5 flex flex-col justify-between transition-all duration-300 border-bg-4 border-[10px] p-[30px] md:py-[53px] md:px-[48px] hover:translate-y-[-2px]">
            <div>
              <img
                className="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]"
                src="./assets/images/icons/icon-flower.svg"
                alt="icon"
              />
              <h2 className="font-bold font-poppins text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                Business strategy
              </h2>
              <p className="text-excerpt text-gray-600 mb-[30px]">
                You are always welcome to visit our little den. Professional in
                teir craft! All products were super amazing with strong
                attension to details, comps and overall vibe.
              </p>
            </div>
            <button type="button">
              {" "}
              <a
                className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] w-fit"
                href="#"
              >
                <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-poppins font-semibold">
                  Learn More
                </span>
                <i>
                  {" "}
                  <img
                    className="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                    src="./assets/images/icons/icon-right.svg"
                    alt="arrow right icon"
                  />
                </i>
              </a>
            </button>
          </div>
          <div className="relative mb-5 flex flex-col justify-between transition-all duration-300 border-bg-9 border-[10px] p-[30px] md:py-[53px] md:px-[48px] hover:translate-y-[-2px]">
            <div>
              <img
                className="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]"
                src="./assets/images/icons/icon-map.svg"
                alt="icon"
              />
              <h2 className="font-bold font-poppins text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                Local Marketing
              </h2>
              <p className="text-excerpt text-gray-600 mb-[30px]">
                You are always welcome to visit our little den. Professional in
                teir craft! All products were super amazing with strong
                attension to details, comps and overall vibe.
              </p>
            </div>
            <button type="button">
              {" "}
              <a
                className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] w-fit"
                href="#"
              >
                <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-poppins font-semibold">
                  Learn More
                </span>
                <i>
                  {" "}
                  <img
                    className="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                    src="./assets/images/icons/icon-right.svg"
                    alt="arrow right icon"
                  />
                </i>
              </a>
            </button>
          </div>
          <div className="relative mb-5 flex flex-col justify-between transition-all duration-300 border-bg-2 border-[10px] p-[30px] md:py-[53px] md:px-[48px] hover:translate-y-[-2px]">
            <div>
              <img
                className="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]"
                src="./assets/images/icons/icon-pine.svg"
                alt="icon"
              />
              <h2 className="font-bold font-poppins text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                Social Media
              </h2>
              <p className="text-excerpt text-gray-600 mb-[30px]">
                You are always welcome to visit our little den. Professional in
                teir craft! All products were super amazing with strong
                attension to details, comps and overall vibe.
              </p>
            </div>
            <button type="button">
              {" "}
              <a
                className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] w-fit"
                href="#"
              >
                <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-poppins font-semibold">
                  Learn More
                </span>
                <i>
                  {" "}
                  <img
                    className="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                    src="./assets/images/icons/icon-right.svg"
                    alt="arrow right icon"
                  />
                </i>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[150px]">
        <div className="items-center justify-between md:flex mb-[80px] md:mb-[90px]">
          <div className="mb-8">
            <h2 className="text-gray-900 font-bold font-poppins mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
              Our Team
            </h2>
            <p className="text-quote md:text-lead-lg text-gray-600">
              Decades of experience in design and development
            </p>
          </div>
          <div className="flex items-center gap-5">
            <div className="grid place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 team-prev">
              <img
                className="group-hover:filter-white"
                src="./assets/images/icons/icon-prev.svg"
                alt="control icon button"
              />
            </div>
            <div className="grid place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 team-next">
              <img
                className="group-hover:filter-white"
                src="./assets/images/icons/icon-next.svg"
                alt="control icon button"
              />
            </div>
          </div>
        </div>
        <div className="team-list">
          <div className="grid-cols-1 !grid gap-x-[30px] gap-y-[48px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-1.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    UI/UX Designer
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Darlene Robertson
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-2.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    Software Tester
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Devon Lane
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-3.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    Software Developer
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Darrell Steward
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-3.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    Software Developer
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Darrell Steward
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-2.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    UI/UX Designer
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Darlene Robertson
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-2.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    UI/UX Designer
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Darlene Robertson
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-1.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    Software Developer
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Darrell Steward
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-3.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    Project Manager
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Courtney Henry
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-cols-1 !grid gap-x-[30px] gap-y-[48px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-1.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    UI/UX Designer
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Darlene Robertson
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-2.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    Software Tester
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Devon Lane
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-3.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    Software Developer
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Darrell Steward
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-3.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    Software Developer
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Darrell Steward
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-2.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    UI/UX Designer
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Darlene Robertson
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-2.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    UI/UX Designer
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Darlene Robertson
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-1.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    Software Developer
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Darrell Steward
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-3.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    Project Manager
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Courtney Henry
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-cols-1 !grid gap-x-[30px] gap-y-[48px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-1.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    UI/UX Designer
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Darlene Robertson
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-2.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    Software Tester
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Devon Lane
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-3.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    Software Developer
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Darrell Steward
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-3.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    Software Developer
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Darrell Steward
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-2.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    UI/UX Designer
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Darlene Robertson
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-2.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    UI/UX Designer
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Darlene Robertson
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-1.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    Software Developer
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Darrell Steward
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[30px]">
                {" "}
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/team-3.png"
                  alt="team member picture"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-md mb-2 opacity-50 text-[#0A3361]">
                    Project Manager
                  </p>
                  <p className="text-heading-6 font-poppins font-bold">
                    Courtney Henry
                  </p>
                </div>
                <p className="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo
                </p>
                <div>
                  <p className="text-md text-gray-600 opacity-40 mb-5">
                    Let’s Connect
                  </p>
                  <div className="flex items-center gap-4 z-50">
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-facebook-gray.svg"
                        alt="facebook icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-instagram-gray.svg"
                        alt="instagram icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-twitter-gray.svg"
                        alt="twitter icon"
                      />
                    </a>
                    <a
                      className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                      href="/"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="./assets/images/icons/icon-linkedin-gray.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[150px]">
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
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[150px]">
        <div className="items-center justify-between mb-[70px] md:mb-[90px] md:flex">
          <div className="mb-[30px]">
            <h2 className="text-gray-900 font-bold font-poppins mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
              Latest News
            </h2>
            <p className="text-quote md:text-lead-lg text-gray-600">
              From Our blog and Event fanpage
            </p>
          </div>
          <button type="button">
            {" "}
            <a
              className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] bg-black text-white w-fit"
              href="#"
            >
              <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-poppins font-semibold">
                View More
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
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">
          <a className="block group" href="/single">
            <div className="flex items-center mb-[11px]">
              <div className="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" />
              <span className="uppercase text-gray-500">company</span>
            </div>
            <p className="text-heading-4 font-poppins font-bold inline-block mb-[26px]">
              We can blend colors multiple ways, the most common
            </p>
            <div className="relative mb-16">
              <div className="relative">
                <div className="pr-[26px] aspect-[430/275]">
                  <img
                    className="h-full w-full object-cover rounded-2xl z-10 relative object-cover"
                    src="./assets/images/thumbnail-3.png"
                    alt="Agon"
                  />
                </div>
                <div className="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                  <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-9 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" />
                </div>
              </div>
            </div>
          </a>
          <a className="block group" href="/single">
            <div className="flex items-center mb-[11px]">
              <div className="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" />
              <span className="uppercase text-gray-500">Marketing Event</span>
            </div>
            <p className="text-heading-4 font-poppins font-bold inline-block mb-[26px]">
              How To Blow Through Capital At An Incredible Rate
            </p>
            <div className="relative mb-16">
              <div className="relative">
                <div className="pr-[26px] aspect-[430/275]">
                  <img
                    className="h-full w-full object-cover rounded-2xl z-10 relative object-cover"
                    src="./assets/images/thumbnail-4.png"
                    alt="Agon"
                  />
                </div>
                <div className="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                  <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-6 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" />
                </div>
              </div>
            </div>
          </a>
          <a className="block group" href="/single">
            <div className="flex items-center mb-[11px]">
              <div className="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" />
              <span className="uppercase text-gray-500">Customer Services</span>
            </div>
            <p className="text-heading-4 font-poppins font-bold inline-block mb-[26px]">
              Design Studios That Everyone Should Know About?
            </p>
            <div className="relative mb-16">
              <div className="relative">
                <div className="pr-[26px] aspect-[430/275]">
                  <img
                    className="h-full w-full object-cover rounded-2xl z-10 relative object-cover"
                    src="./assets/images/thumbnail-5.png"
                    alt="Agon"
                  />
                </div>
                <div className="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                  <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-4 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" />
                </div>
              </div>
            </div>
          </a>
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
      <footer className="mt-[92px] lg:mt-[150px] xl:mt-[200px] mb-[30px]">
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
          <div className="flex flex-col items-center gap-2 mb-14 md:flex-row md:justify-between">
            {" "}
            <img
              className="h-full w-full object-cover max-w-[162px]"
              src="./assets/images/logo.svg"
              alt="logo"
            />
            <div className="flex items-center flex-col gap-5 md:flex-row lg:gap-[30px]">
              <p className="text-heading-6 font-poppins font-bold">
                Ready to get started?
              </p>
              <button type="button">
                {" "}
                <a
                  className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-white bg-gray-900 w-fit"
                  href="#"
                >
                  <span className="block text-inherit w-full h-full rounded-md text-lg font-poppins font-semibold">
                    Create an Account
                  </span>
                </a>
              </button>
            </div>
          </div>
          <div className="w-full bg-gray-200 h-[1px] mb-[52px]" />
          <div className="text-gray-600 grid gird-cols-1 gap-8 mb-[48px] md:grid-cols-2 lg:grid-cols-5 xl:gap-[98px]">
            <div>
              <h5 className="text-heading-5 font-poppins font-bold text-gray-900 mb-5 text-[18px]">
                Contact
              </h5>
              <p className="text-text mb-5">
                Amritsar Punjab, Pune Maharashtra
              </p>
              <p className="text-text underline">+91 82890 - 36681</p>
              <p className="text-text underline">support@ekonkarkolhu.shop</p>
            </div>
            <div>
              <h5 className="text-heading-5 font-poppins font-bold text-gray-900 mb-5 text-[18px]">
                About Us
              </h5>
              <ul>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    Mission & Vision
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    Our Team
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    Careers
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    Press & Media
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    Advertising
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-heading-5 font-poppins font-bold text-gray-900 mb-5 text-[18px]">
                Discover
              </h5>
              <ul>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    Our Blog
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    Plans & Pricing
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    Knowledge Base
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    Office Center
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    News & Events
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-heading-5 font-poppins font-bold text-gray-900 mb-5 text-[18px]">
                Support
              </h5>
              <ul>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    FAQs
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    Editor Help
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    Community
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    Live Chatting
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    Support Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-heading-5 font-poppins font-bold text-gray-900 mb-5 text-[18px]">
                Useful links
              </h5>
              <ul>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    Request an offer
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    How it works
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    Reviews
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    href="/"
                  >
                    Stories
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full bg-gray-200 h-[1px] mb-[46px]" />
          <div className="text-gray-400 lg:flex lg:items-center lg:justify-between">
            <div className="md:flex md:items-center md:gap-6">
              <p className="text-lead font-bold">©Agon Official 2022</p>
              <div className="flex items-center justify-between md:gap-6">
                <a className="text-text" href="/">
                  Privacy policy
                </a>
                <a className="text-text" href="/">
                  Cookies
                </a>
                <a className="text-text" href="/">
                  Terms of service
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 mt-5 lg:mt-0">
              <a
                className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1"
                href="/"
              >
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/icons/icon-facebook-green.svg"
                  alt="facebook icon"
                />
              </a>
              <a
                className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1"
                href="/"
              >
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/icons/icon-instagram-green.svg"
                  alt="instagram icon"
                />
              </a>
              <a
                className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1"
                href="/"
              >
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/icons/icon-twitter-green.svg"
                  alt="twitter icon"
                />
              </a>
              <a
                className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1"
                href="/"
              >
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/icons/icon-linkedin-green.svg"
                  alt="linkedin icon"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
);

export default About1;
