import React from "react";

const Contact = () => (
  <div>
    <meta charSet="utf-8" />
    <title>Contact Page</title>
    <meta name="description" content />
    <meta name="keywords" content />
    <meta name="robots" content="index, follow" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1.0"
    />
    <div className="wrapper mx-auto text-gray-900 font-normal max-w-[1320px]">
      <a name="top"> </a>
      <div className="overlay" />
      <div className="full-width contact-bg">
        <div className="text-center text-white px-5 pt-[74px] pb-[90px]">
          <h2 className="font-bold font-poppins text-[28px] leading-[32px] md:text-heading-2 mb-[22px] ">
            Contact Us
          </h2>
          <p className="text-text mx-auto md:w-[49ch]">
            <span className="font-bold">
              Get in touch, we’re always here to listen.
            </span>
            <br />
            <em>
              Whether you have questions, need support, or want to share
              feedback, we&apos;re ready to help.
            </em>
          </p>
        </div>
      </div>
      <div className="bg-gray-100 relative p-[40px] md:pt-[91px] md:pr-[98px] md:pb-[86px] md:pl-[92px] mt-[150px] rounded-[58px]">
        <div className="mx-auto relative max-w-[1320px]">
          <img
            className="absolute right-0 max-w-[129px] top-[-50px]"
            src="./assets/images/mail.png"
            alt="mail image"
          />
          <p className="text-capitalized text-gray-500 uppercase tracking-[2px] mb-[15px]">
            Contact us
          </p>
          <h2 className="font-bold font-poppins text-[25px] leading-[30px] md:text-heading-3 mb-[22px]">
            Have an project in mind?
          </h2>
          <p className="text-text text-gray-600 mb-[30px] md:mb-[60px]">
            The right move at the right time saves your investment. live the
            dream of expanding your business.
          </p>
          <div className="flex flex-col gap-8 mb-[15px] md:mb-[25px] lg:flex-row lg:gap-[50px] xl:gap-[98px]">
            <div>
              <div className="flex gap-[13px] mb-[15px] md:mb-[25px]">
                {" "}
                <i>
                  {" "}
                  <img
                    src="./assets/images/icons/icon-home-fill.svg"
                    alt="home icon"
                  />
                </i>
                <p className="text-heading-6 font-bold font-poppins">
                  Agon Studio
                </p>
              </div>
              <p className="text-text text-gray-600">4517 Washington Ave.</p>
              <p className="text-text text-gray-600 mb-[10px] md:mb-[16px]">
                Manchester, Kentucky 39495
              </p>
              <p className="text-text text-gray-600 underline">
                +91 82890 - 36681
              </p>
              <p className="text-text text-gray-600 underline">
                support@ekonkarkolhu.shop
              </p>
            </div>
            <form className="flex-1" action="/">
              <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                <input
                  className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-poppins py-5 px-[30px]"
                  type="text"
                  placeholder="Enter your name"
                />
                <input
                  className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-poppins py-5 px-[30px]"
                  type="text"
                  placeholder="Company (optional)"
                />
              </div>
              <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                <input
                  className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-poppins py-5 px-[30px]"
                  type="text"
                  placeholder="Your email"
                />
                <input
                  className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-poppins py-5 px-[30px]"
                  type="text"
                  placeholder="Phone number"
                />
              </div>
              <textarea
                className="w-full py-5 resize-none outline-0 px-[30px] max-h-[150px] mb-[35px] md:mb-[56px]"
                name
                cols={100}
                rows={10}
                placeholder="Tell us about yourself"
                defaultValue={""}
              />
              <div className="flex flex-col gap-5">
                <button
                  className="flex items-center transition-colors duration-200 px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] font-poppins font-semibold text-md md:text-lg text-white bg-gray-900 w-fit"
                  type="submit"
                >
                  Send Message
                  <i>
                    {" "}
                    <img
                      className="ml-[7px] w-[12px] filter-white"
                      src="./assets/images/icons/icon-right.svg"
                      alt="arrow right icon"
                    />
                  </i>
                </button>
                <p className="text-md text-gray-500">
                  By clicking contact us button, you agree our terms and policy,
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[138px]">
        <div className="text-center mb-[100px]">
          <h2 className="font-bold font-poppins mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-full">
            Our Location
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[743px]">
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
                Office
              </h3>
              <p className="text-[#7E7E7E] text-[14px] leading-[18px]">
                205 North Michigan Avenue, Suite 810
              </p>
              <p className="text-[#7E7E7E] text-[14px] leading-[18px]">
                Chicago, 60601, USA
              </p>
              <p className="text-[#7E7E7E] text-[14px] leading-[18px]">
                Phone: (123) 456-7890
              </p>
              <p className="text-[#7E7E7E] text-[14px] leading-[18px]">
                Email: contact@Evara.com
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
                Studio
              </h3>
              <p className="text-[#7E7E7E] text-[14px] leading-[18px]">
                205 North Michigan Avenue, Suite 810
              </p>
              <p className="text-[#7E7E7E] text-[14px] leading-[18px]">
                Chicago, 60601, USA
              </p>
              <p className="text-[#7E7E7E] text-[14px] leading-[18px]">
                Phone: (123) 456-7890
              </p>
              <p className="text-[#7E7E7E] text-[14px] leading-[18px]">
                Email: contact@Evara.com
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
                Factory
              </h3>
              <p className="text-[#7E7E7E] text-[14px] leading-[18px]">
                205 North Michigan Avenue, Suite 810
              </p>
              <p className="text-[#7E7E7E] text-[14px] leading-[18px]">
                Chicago, 60601, USA
              </p>
              <p className="text-[#7E7E7E] text-[14px] leading-[18px]">
                Phone: (123) 456-7890
              </p>
              <p className="text-[#7E7E7E] text-[14px] leading-[18px]">
                Email: contact@Evara.com
              </p>
            </div>
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

export default Contact;
