import React from "react";

const HomeFaq = () => (
    <div>
     
      <div className="gap-6 px-5 lg:flex xl:gap-[50px]">
        <div className="flex-1 mb-[40px]">
          <div className="mb-[22px]">
            <h2 className="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
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
                <h4 className="text-heading-6 font-chivo font-bold">
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
                <h4 className="text-heading-6 font-chivo font-bold">
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
                <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
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
                <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
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
                <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">
                  Where is my order? Quisque molestie
                </h4>
              </summary>
              <p className="text-text content font-chivo mt-[30px] ml-[30px]">
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
                <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">
                  How can I return an item purchased online?
                </h4>
              </summary>
              <p className="text-text content font-chivo mt-[30px] ml-[30px]">
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
                <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">
                  Can I cancel or change my order?
                </h4>
              </summary>
              <p className="text-text content font-chivo mt-[30px] ml-[30px]">
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
                <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">
                  I have promotional or discount code?
                </h4>
              </summary>
              <p className="text-text content font-chivo mt-[30px] ml-[30px]">
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
                <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">
                  What are the delivery types you use?
                </h4>
              </summary>
              <p className="text-text content font-chivo mt-[30px] ml-[30px]">
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
                <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">
                  How can I pay for my purchases?
                </h4>
              </summary>
              <p className="text-text content font-chivo mt-[30px] ml-[30px]">
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
                <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">
                  Can I cancel my order?
                </h4>
              </summary>
              <p className="text-text content font-chivo mt-[30px] ml-[30px]">
                Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel
                pretium mi. Morbi varius, tellus in accumsan blandit, elit
                ligula eleifend velit, luctus mattis ante nulla condimentum
                nulla.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
);

export default HomeFaq;