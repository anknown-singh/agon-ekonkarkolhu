import React from "react";

const Recipe = () => (
  <div>
    <div className="wrapper mx-auto text-gray-900 font-normal max-w-[1320px]">
      <img
        className="h-full w-full object-cover absolute top-0 left-0 z-0 md:!object-fill max-h-[500px] lg:max-h-[600px]"
        src="./assets/images/blog-1-bg.png"
        alt="background"
      />
      <div className="full-width">
        <div className="text-center px-5 pt-[74px] pb-[90px]">
          <h1 className="font-poppins font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-7">
            Our Blog
          </h1>
          <p className="font-bold font-poppins text-[14px] md:text-heading-6 text-gray-600 mx-auto md:max-w-[55ch]">
            From year to year we strive to invent the most innovative technology
            that is used by both small enterprises and space enterprises.
          </p>
        </div>
      </div>
      <div className="flex items-center z-10 relative gap-[30px] lg:gap-[50px]">
        <div className="grid place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 blog-prev hidden md:grid">
          <img
            className="group-hover:filter-white"
            src="./assets/images/icons/icon-prev.svg"
            alt="control icon button"
          />
        </div>
        <div className="blog-post flex-1 w-[80%]">
          <div className="relative mx-5 lg:ml-2 lg:mr-[30px] min-h-[550px]">
            <div className="rounded-2xl p-0 flex items-center bg-white z-10 relative flex-col lg:gap-[50px] lg:flex-row">
              <a
                className="block self-stretch flex-1 aspect-[580/421]"
                href="#"
              >
                <img
                  className="h-full w-full object-cover rounded-2xl lg:rounded-tr-none lg:rounded-br-2xl"
                  src="./assets/images/thumbnail-4.png"
                  alt="Agon"
                />
              </a>
              <div className="flex-1">
                <div className="my-[60px] mr-[50px]">
                  <div className="flex items-center mb-3">
                    <div className="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" />
                    <span className="uppercase text-gray-500">
                      Marketing Event
                    </span>
                  </div>
                  <h2 className="font-bold font-poppins text-[25px] leading-[30px] md:text-heading-3 mb-5">
        
                    <a href="#">
                      How To Blow Through Capital At An Incredible Rate
                    </a>
                  </h2>
                  <p className="text-text text-gray-500 mb-[44px]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    interdum ullamcorper sed pharetra senectus donec
                    nunc.Consequat semper viverra nam libero justo laoreet
                    facilisis magna etiam.
                  </p>
                  <div className="flex items-center gap-[15px]">
                    <img
                      className="h-full w-full object-cover rounded-full max-w-[55px]"
                      src="./assets/images/avatar-11.png"
                      alt="avatar"
                    />
                    <div>
                      <p className="text-lead line-clamp-2 font-bold mb-[3px] text-gray-900 !text-heading-6">
                        Jenny Wilson
                      </p>
                      <p className="text-md text-gray-500 !text-sm font-bold">
                        August 25, 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full z-0 -translate-y-[95%] translate-x-[2%] pt-[45px]">
              <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" />
            </div>
          </div>
          <div className="relative mx-5 lg:ml-2 lg:mr-[30px] min-h-[550px]">
            <div className="rounded-2xl p-0 flex items-center bg-white z-10 relative flex-col lg:gap-[50px] lg:flex-row">
              <a
                className="block self-stretch flex-1 aspect-[580/421]"
                href="#"
              >
                <img
                  className="h-full w-full object-cover rounded-2xl lg:rounded-tr-none lg:rounded-br-2xl"
                  src="./assets/images/thumbnail-4.png"
                  alt="Agon"
                />
              </a>
              <div className="flex-1">
                <div className="my-[60px] mr-[50px]">
                  <div className="flex items-center mb-3">
                    <div className="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" />
                    <span className="uppercase text-gray-500">
                      Marketing Event
                    </span>
                  </div>
                  <h2 className="font-bold font-poppins text-[25px] leading-[30px] md:text-heading-3 mb-5">
        
                    <a href="#">
                      How To Blow Through Capital At An Incredible Rate
                    </a>
                  </h2>
                  <p className="text-text text-gray-500 mb-[44px]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    interdum ullamcorper sed pharetra senectus donec
                    nunc.Consequat semper viverra nam libero justo laoreet
                    facilisis magna etiam.
                  </p>
                  <div className="flex items-center gap-[15px]">
                    <img
                      className="h-full w-full object-cover rounded-full max-w-[55px]"
                      src="./assets/images/avatar-11.png"
                      alt="avatar"
                    />
                    <div>
                      <p className="text-lead line-clamp-2 font-bold mb-[3px] text-gray-900 !text-heading-6">
                        Jenny Wilson
                      </p>
                      <p className="text-md text-gray-500 !text-sm font-bold">
                        August 25, 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full z-0 -translate-y-[95%] translate-x-[2%] pt-[45px]">
              <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" />
            </div>
          </div>
          <div className="relative mx-5 lg:ml-2 lg:mr-[30px] min-h-[550px]">
            <div className="rounded-2xl p-0 flex items-center bg-white z-10 relative flex-col lg:gap-[50px] lg:flex-row">
              <a
                className="block self-stretch flex-1 aspect-[580/421]"
                href="#"
              >
                <img
                  className="h-full w-full object-cover rounded-2xl lg:rounded-tr-none lg:rounded-br-2xl"
                  src="./assets/images/thumbnail-4.png"
                  alt="Agon"
                />
              </a>
              <div className="flex-1">
                <div className="my-[60px] mr-[50px]">
                  <div className="flex items-center mb-3">
                    <div className="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" />
                    <span className="uppercase text-gray-500">
                      Marketing Event
                    </span>
                  </div>
                  <h2 className="font-bold font-poppins text-[25px] leading-[30px] md:text-heading-3 mb-5">
                    {" "}
                    <a href="#">
                      How To Blow Through Capital At An Incredible Rate
                    </a>
                  </h2>
                  <p className="text-text text-gray-500 mb-[44px]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    interdum ullamcorper sed pharetra senectus donec
                    nunc.Consequat semper viverra nam libero justo laoreet
                    facilisis magna etiam.
                  </p>
                  <div className="flex items-center gap-[15px]">
                    <img
                      className="h-full w-full object-cover rounded-full max-w-[55px]"
                      src="./assets/images/avatar-11.png"
                      alt="avatar"
                    />
                    <div>
                      <p className="text-lead line-clamp-2 font-bold mb-[3px] text-gray-900 !text-heading-6">
                        Jenny Wilson
                      </p>
                      <p className="text-md text-gray-500 !text-sm font-bold">
                        August 25, 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full z-0 -translate-y-[95%] translate-x-[2%] pt-[45px]">
              <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" />
            </div>
          </div>
        </div>
        <div className="grid place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 blog-next hidden md:grid">
          <img
            className="group-hover:filter-white"
            src="./assets/images/icons/icon-next.svg"
            alt="control icon button"
          />
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 z-10 relative lg:mt-[138px]">
        <div className="flex flex-col gap-6 justify-center lg:flex-row lg:items-center mb-[45px] md:mb-[87px]">
          <div className="text-center">
            <h2 className="font-bold font-poppins mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
              Latest News
            </h2>
            <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">
              From Our blog and Event fanpage
            </p>
          </div>
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
        <button type="button">

          <a
            className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] w-fit mx-auto"
            href="#"
          >
            <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-poppins font-semibold">
              Load more posts
            </span>
            <i>
    
              <img
                className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
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
  </div>
);

export default Recipe;
