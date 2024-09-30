import React from "react";

const SingleProduct = () => (
  <div>
    <meta charSet="utf-8" />
    <title>Single Product Page</title>
    <meta name="description" content />
    <meta name="keywords" content />
    <meta name="robots" content="index, follow" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1.0"
    />
    <link
      rel="icon"
      href="favicon-16x16.png"
      type="image/x-icon"
      sizes="16x16"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
    />
    <link rel="stylesheet" href="./assets/styles/tailwind.min.css" />
    <link rel="stylesheet" href="./assets/styles/app.min.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&display=swap" rel="stylesheet"/>
    <div className="full-with address hidden">
      <div className="flex items-center px-3 justify-between gap-5 mx-auto max-w-[1320px] py-[10px] md:mx-8">
        <p className="text-base hidden font-bold md:block">
          Amritsar Punjab, Pune Maharashtra
        </p>
        <div className="flex items-center gap-5 contact ml-auto gap-[10px] md:gap-5 md:flex-row">
          {" "}
          <span>+91 82890 - 36681</span>
          <div className="border border-dashed border-white self-stretch" />
          <span>support@ekonkarkolhu.shop</span>
        </div>
      </div>
    </div>
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
      <header className="h-auto full-width relative py-[5px] first-letter:lg:py-[26px] bg-green-800">
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 flex items-center justify-between mx-auto relative !mt-0 max-w-[1320px]">
          <a className="flex" href="/">
            <img
              className="logo z-50 w-[90px] md:w-[101px] lg:w-[122px] xl:w-[138px]"
              src="./assets/images/logo.svg"
              alt="logo image"
            />
          </a>
          <nav className="z-50 absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:block">
            <ul className="navbar flex flex-col justify-center font-poppins gap-[34px] lg:flex-row">
              <li className="flex items-center group">
                <a
                  className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                  href="/"
                >
                  Home
                </a>
                <i>
                  <img
                    className="icon-caret group-hover:filter-green"
                    src="./assets/images/icons/icon-caret.svg"
                    alt="caret"
                  />
                </i>
                <ul className="menu-child translate-y-4 opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-2 w-[340px]">
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="hp1"
                  >
                    <a className="flex items-center text-[14px]" href="/">
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-home.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Homepage 01</span>
                    </a>
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="hp2"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/home-2"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-home.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Homepage 02</span>
                    </a>
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="hp3"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/home-3"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-home.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Homepage 03</span>
                    </a>
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="hp4"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/home-4"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-home.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Homepage 04</span>
                    </a>
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="hp5"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/home-5"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-home.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Homepage 05</span>
                    </a>
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="hp6"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/home-6"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-home.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Homepage 06</span>
                    </a>
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="hp7"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/home-7"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-home.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Homepage 07</span>
                    </a>
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="hp8"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/home-8"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-home.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Homepage 08</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="flex items-center group">
                <a
                  className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                  href="/"
                >
                  About
                </a>
                <i>
                  <img
                    className="icon-caret group-hover:filter-green"
                    src="./assets/images/icons/icon-caret.svg"
                    alt="caret"
                  />
                </i>
                <ul className="menu-child translate-y-4 opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="ab1"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/about-1"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-star-header.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">About 01</span>
                    </a>
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="ab2"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/about-2"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-star-header.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">About 02</span>
                    </a>
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="ab3"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/about-3"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-star-header.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">About 03</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="flex items-center group">
                <a
                  className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                  href="/"
                >
                  Company
                </a>
                <i>
                  <img
                    className="icon-caret group-hover:filter-green"
                    src="./assets/images/icons/icon-caret.svg"
                    alt="caret"
                  />
                </i>
                <ul className="menu-child translate-y-4 opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="sv1"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/services-1"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-gem.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Services 01</span>
                    </a>
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="sv2"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/services-2"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-gem.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Services 02</span>
                    </a>
                  </li>
                  <li className="hr px-[22px]">
                    {" "}
                    <span className="block bg-gray-100 w-full h-[1px] my-[5px]" />
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="p1"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/pricing-1"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-database.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Pricing 01</span>
                    </a>
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="p2"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/pricing-2"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-database.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Pricing 02</span>
                    </a>
                  </li>
                  <li className="hr px-[22px]">
                    {" "}
                    <span className="block bg-gray-100 w-full h-[1px] my-[5px]" />
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="faqs1"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/faqs-1"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-headset.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">FAQS 01</span>
                    </a>
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="faqs2"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/faqs-2"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-headset.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">FAQS 02</span>
                    </a>
                  </li>
                  <li className="hr px-[22px]">
                    {" "}
                    <span className="block bg-gray-100 w-full h-[1px] my-[5px]" />
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="career"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/career"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-briefcase.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Career</span>
                    </a>
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="career-details"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/career-details"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-briefcase.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Career Detials</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="flex items-center group">
                <a
                  className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                  href="/"
                >
                  Pages
                </a>
                <i>
                  <img
                    className="icon-caret group-hover:filter-green"
                    src="./assets/images/icons/icon-caret.svg"
                    alt="caret"
                  />
                </i>
                <ul className="menu-child translate-y-4 opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="contact"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/contact"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-plane-header.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Contact</span>
                    </a>
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="singup"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/signup"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-user-add.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Sign Up</span>
                    </a>
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="login"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/login"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-fingerprint.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Log In</span>
                    </a>
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="rp"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/reset-password"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-settings.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Reset Password</span>
                    </a>
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="error404"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/error-404"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-exclamation.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Error 404</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="flex items-center group">
                <a
                  className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                  href="/"
                >
                  Blog
                </a>
                <i>
                  <img
                    className="icon-caret group-hover:filter-green"
                    src="./assets/images/icons/icon-caret.svg"
                    alt="caret"
                  />
                </i>
                <ul className="menu-child translate-y-4 opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="b1"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/blog-1"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-edit.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Blog 01</span>
                    </a>
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="b2"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/blog-2"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-edit.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Blog 02</span>
                    </a>
                  </li>
                  <li className="hr px-[22px]">
                    {" "}
                    <span className="block bg-gray-100 w-full h-[1px] my-[5px]" />
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="single"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/single"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-document-signed.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Blog Single</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="flex items-center group">
                <a
                  className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                  href="/"
                >
                  Shop
                </a>
                <i>
                  <img
                    className="icon-caret group-hover:filter-green"
                    src="./assets/images/icons/icon-caret.svg"
                    alt="caret"
                  />
                </i>
                <ul className="menu-child translate-y-4 opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="s1"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/shop-1"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-edit.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Shop 01</span>
                    </a>
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="s2"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/shop-2"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-edit.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Shop 02</span>
                    </a>
                  </li>
                  <li
                    className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="product"
                  >
                    <a
                      className="flex items-center text-[14px]"
                      href="/single-product"
                    >
                      <img
                        className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                        src="./assets/images/icons/icon-edit.svg"
                        alt
                      />
                      <span className="whitespace-nowrap">Product Details</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="hidden xl:block">
            <button type="button">
              {" "}
              <a
                className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] hidden lg:flex"
                href="#"
              >
                <span className="block text-inherit w-full h-full rounded-[50px] text-heading-6 font-bold font-poppins">
                  Learn more
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
        <div className="burger-icon burger-icon-white menu__icon">
          <span className="burger-icon-top" />
          <span className="burger-icon-mid"> </span>
          <span className="burger-icon-bottom" />
        </div>
        <nav className="fixed top-0 right-0 bg-white flex flex-col h-screen nav-shadow overflow-y-scroll nav-mobile opacity-0 pointer-events-none transition-all duration-200 w-[380px] z-[100]">
          <div className="flex items-center border-b p-[15px] lg:p-[26px] gap-[10px] border-[#F2F4F7]">
            <img
              className="max-w-[50px]"
              src="./assets/images/avatar-9.png"
              alt="avatar"
            />
            <div>
              <p className="font-bold">Hi! Steven</p>
              <p className="text-sm font-poppins text-gray-500">
                You have 5 new messages
              </p>
            </div>
          </div>
          <div className="p-[30px]">
            <ul className="font-poppins font-medium text-[16px] leading-[16px]">
              <li className="group menu-mobile-item py-[13px]">
                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>Home</p>
                  <img
                    className="w-[18px] h-[18px]"
                    src="./assets/images/icons/icon-angle-down-fill.svg"
                    alt="angle icon"
                  />
                </div>
                <ul className="pl-5 menu-child hidden pt-[10px]">
                  <li className="text-md py-[10px]" id="hp1">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/"
                    >
                      Homepage 01
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="hp2">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/home-2"
                    >
                      Homepage 02
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="hp3">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/home-3"
                    >
                      Homepage 03
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="hp4">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/home-4"
                    >
                      Homepage 04
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="hp5">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/home-5"
                    >
                      Homepage 05
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="hp6">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/home-6"
                    >
                      Homepage 06
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="hp7">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/home-7"
                    >
                      Homepage 07
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="hp8">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/home-8"
                    >
                      Homepage 08
                    </a>
                  </li>
                </ul>
              </li>
              <li className="group menu-mobile-item py-[13px]">
                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>About</p>
                  <img
                    className="w-[18px] h-[18px]"
                    src="./assets/images/icons/icon-angle-down-fill.svg"
                    alt="angle icon"
                  />
                </div>
                <ul className="pl-5 menu-child hidden pt-[10px]">
                  <li className="text-md py-[10px]" id="ab1">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/about-1"
                    >
                      About 01
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="ab2">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/about-2"
                    >
                      About 02
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="ab3">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/about-3"
                    >
                      About 03
                    </a>
                  </li>
                </ul>
              </li>
              <li className="group menu-mobile-item py-[13px]">
                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>Services</p>
                  <img
                    className="w-[18px] h-[18px]"
                    src="./assets/images/icons/icon-angle-down-fill.svg"
                    alt="angle icon"
                  />
                </div>
                <ul className="pl-5 menu-child hidden pt-[10px]">
                  <li className="text-md py-[10px]" id="sv1">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/services-1"
                    >
                      Services 01
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="sv2">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/services-2"
                    >
                      Services 02
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="p1">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/pricing-1"
                    >
                      Pricing 01
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="p2">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/pricing-2"
                    >
                      Pricing 02
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="faqs1">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/faqs-1"
                    >
                      FAQS 01
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="faqs2">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/faqs-2"
                    >
                      FAQS 02
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="career">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/career"
                    >
                      Career
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="career-details">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/career-details"
                    >
                      Career Detials
                    </a>
                  </li>
                </ul>
              </li>
              <li className="group menu-mobile-item py-[13px]">
                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>Pages</p>
                  <img
                    className="w-[18px] h-[18px]"
                    src="./assets/images/icons/icon-angle-down-fill.svg"
                    alt="angle icon"
                  />
                </div>
                <ul className="pl-5 menu-child hidden pt-[10px]">
                  <li className="text-md py-[10px]" id="contact">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/contact"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="singup">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/signup"
                    >
                      Sign Up
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="login">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/login"
                    >
                      Log In
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="rp">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/reset-password"
                    >
                      Reset Password
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="error404">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/error-404"
                    >
                      Error 404
                    </a>
                  </li>
                </ul>
              </li>
              <li className="group menu-mobile-item py-[13px]">
                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>Blog</p>
                  <img
                    className="w-[18px] h-[18px]"
                    src="./assets/images/icons/icon-angle-down-fill.svg"
                    alt="angle icon"
                  />
                </div>
                <ul className="pl-5 menu-child hidden pt-[10px]">
                  <li className="text-md py-[10px]" id="b1">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/blog-1"
                    >
                      Blog 01
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="b2">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/blog-2"
                    >
                      Blog 02
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="single">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/single"
                    >
                      Blog Single
                    </a>
                  </li>
                </ul>
              </li>
              <li className="group menu-mobile-item py-[13px]">
                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>Shop</p>
                  <img
                    className="w-[18px] h-[18px]"
                    src="./assets/images/icons/icon-angle-down-fill.svg"
                    alt="angle icon"
                  />
                </div>
                <ul className="pl-5 menu-child hidden pt-[10px]">
                  <li className="text-md py-[10px]" id="s1">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/shop-1"
                    >
                      Shop 01
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="s2">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/shop-2"
                    >
                      Shop 02
                    </a>
                  </li>
                  <li className="text-md py-[10px]" id="product">
                    <a
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/single-product"
                    >
                      Product Details
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="mt-5 border-t border-b border-gray-100 pb-5 mb-[25px] pt-[30px]">
              <p className="font-bold text-heading-6 mb-[10px]">Your Account</p>
              <ul className="text-[15px]">
                <li className="py-[13px]">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                    href="/"
                  >
                    Profile
                  </a>
                </li>
                <li className="py-[13px]">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                    href="/"
                  >
                    Work Preferences
                  </a>
                </li>
                <li className="py-[13px]">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                    href="/"
                  >
                    My Boosted Shots
                  </a>
                </li>
                <li className="py-[13px]">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                    href="/"
                  >
                    My Collections
                  </a>
                </li>
                <li className="py-[13px]">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                    href="/"
                  >
                    Account Settings
                  </a>
                </li>
                <li className="py-[13px]">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                    href="/"
                  >
                    Go Pro
                  </a>
                </li>
                <li className="py-[13px]">
                  <a
                    className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                    href="/"
                  >
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-gray-400 font-poppins text-[13px]">
              Copyright 2022 © Agon - Agency Template.
              <br />
              <span>Designed by</span>
              <a className="text-green-900" href="http://alithemes.com">
                 AliThemes
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className="full-width bg-gray-100">
        <div className="px-5 py-4 mx-auto max-w-[1320px]">
          <ul className="flex items-center flex-wrap gap-[8px]">
            <li className="flex items-center gap-[5px]">
              <img
                src="./assets/images/icons/icon-home-gray.svg"
                alt="home icon"
              />
              <a
                className="text-md text-gray-500 transition-colors duration-200 hover:text-gray-900"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="flex items-center gap-[8px]">
              <img
                src="./assets/images/icons/icon-angle-right-gray.svg"
                alt="home icon"
              />
              <a
                className="text-md text-gray-500 transition-colors duration-200 hover:text-gray-900"
                href="/"
              >
                Shop
              </a>
            </li>
            <li className="flex items-center gap-[8px]">
              <img
                src="./assets/images/icons/icon-angle-right-gray.svg"
                alt="home icon"
              />
              <a
                className="text-md text-gray-500 transition-colors duration-200 hover:text-gray-900"
                href="/"
              >
                Headphone
              </a>
            </li>
            <li className="flex items-center gap-[8px]">
              <img
                src="./assets/images/icons/icon-angle-right-gray.svg"
                alt="home icon"
              />
              <a
                className="text-md text-gray-500 transition-colors duration-200 hover:text-gray-900"
                href="/"
              >
                Sony Digital Surround Wireless Headphones
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:grid lg:grid-cols-2 lg:gap-[35px]">
        <div className="gap-6 relative lg:flex">
          <div className="lg:w-[65%] xl:w-[75%]">
            <div className="product-main mb-[30px]">
              <div className="border border-gray-200 rounded-2xl relative p-[30px]">
                <div className="relative image-zoom bg-[length:840px] bg-[url(/assets/images/product-1.png)]">
                  <img
                    className="absolute top-0 right-0"
                    src="./assets/images/icons/icon-zoom-in.svg"
                    alt="zoom in icon"
                  />
                  <img
                    className="h-full w-full object-cover transition-all duration-300 cursor-crosshair hover:opacity-0"
                    src="/assets/images/product-1.png"
                    alt="image of a product"
                  />
                </div>
              </div>
              <div className="border border-gray-200 rounded-2xl relative p-[30px]">
                <div className="relative image-zoom bg-[length:840px] bg-[url(/assets/images/product-2.png)]">
                  <img
                    className="absolute top-0 right-0"
                    src="./assets/images/icons/icon-zoom-in.svg"
                    alt="zoom in icon"
                  />
                  <img
                    className="h-full w-full object-cover transition-all duration-300 cursor-crosshair hover:opacity-0"
                    src="/assets/images/product-2.png"
                    alt="image of a product"
                  />
                </div>
              </div>
              <div className="border border-gray-200 rounded-2xl relative p-[30px]">
                <div className="relative image-zoom bg-[length:840px] bg-[url(/assets/images/product-3.png)]">
                  <img
                    className="absolute top-0 right-0"
                    src="./assets/images/icons/icon-zoom-in.svg"
                    alt="zoom in icon"
                  />
                  <img
                    className="h-full w-full object-cover transition-all duration-300 cursor-crosshair hover:opacity-0"
                    src="/assets/images/product-3.png"
                    alt="image of a product"
                  />
                </div>
              </div>
              <div className="border border-gray-200 rounded-2xl relative p-[30px]">
                <div className="relative image-zoom bg-[length:840px] bg-[url(/assets/images/product-4.png)]">
                  <img
                    className="absolute top-0 right-0"
                    src="./assets/images/icons/icon-zoom-in.svg"
                    alt="zoom in icon"
                  />
                  <img
                    className="h-full w-full object-cover transition-all duration-300 cursor-crosshair hover:opacity-0"
                    src="/assets/images/product-4.png"
                    alt="image of a product"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="order-first overflow-y-scroll scrollbar-hide lg:w-[35%] xl:w-[25%] mt-[-24px] max-h-[430px]">
            <div className="product-nav lg:flex lg:flex-col">
              <div className="border border-gray-200 rounded-2xl p-[10px] mx-[10px]">
                <img
                  className="h-full w-full object-cover min-w-[91px]"
                  src="./assets/images/product-1.png"
                  alt="image of a product"
                />
              </div>
              <div className="border border-gray-200 rounded-2xl p-[10px] mx-[10px]">
                <img
                  className="h-full w-full object-cover min-w-[91px]"
                  src="./assets/images/product-2.png"
                  alt="image of a product"
                />
              </div>
              <div className="border border-gray-200 rounded-2xl p-[10px] mx-[10px]">
                <img
                  className="h-full w-full object-cover min-w-[91px]"
                  src="./assets/images/product-3.png"
                  alt="image of a product"
                />
              </div>
              <div className="border border-gray-200 rounded-2xl p-[10px] mx-[10px]">
                <img
                  className="h-full w-full object-cover min-w-[91px]"
                  src="./assets/images/product-4.png"
                  alt="image of a product"
                />
              </div>
            </div>
          </div>
          <div className="grid place-items-center bg-gray-200 rounded-full cursor-pointer group transition-colors duration-200 w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] hover:bg-green-900 product-single-prev absolute left-0 translate-y-[-75px] lg:bottom-0 lg:translate-y-0 lg:translate-x-[57%] lg:top-[47%] xl:translate-x-[45%] xl:top-[66%] lg:-rotate-90">
            <img
              className="group-hover:filter-white"
              src="./assets/images/icons/icon-arrow-left.svg"
              alt="control icon button"
            />
          </div>
          <div className="grid place-items-center bg-gray-200 rounded-full cursor-pointer group transition-colors duration-200 w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] hover:bg-green-900 product-single-next absolute right-0 translate-y-[-75px] lg:bottom-0 lg:translate-y-0 lg:left-[50px] lg:translate-x-[57%] lg:top-[47%] xl:left-[60px] xl:translate-x-[45%] xl:top-[66%] lg:-rotate-90">
            <img
              className="group-hover:filter-white"
              src="./assets/images/icons/icon-arrow-right.svg"
              alt="control icon button"
            />
          </div>
        </div>
        <div className="col-start-2 mt-[30px]">
          <div className="flex items-center justify-between mb-[22px]">
            <p className="text-sm text-gray-500 font-bold">Audio & Speakers</p>
            <div className="flex items-center gap-[10px]">
              <div className="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                <img
                  src=" ./assets/images/icons/icon-star.svg"
                  alt="star icon"
                />
                <img
                  src=" ./assets/images/icons/icon-star.svg"
                  alt="star icon"
                />
                <img
                  src=" ./assets/images/icons/icon-star.svg"
                  alt="star icon"
                />
                <img
                  src=" ./assets/images/icons/icon-star.svg"
                  alt="star icon"
                />
                <img
                  src=" ./assets/images/icons/icon-star.svg"
                  alt="star icon"
                />
                <div className="flex items-center absolute overflow-hidden gap-[3px] w-[20%]">
                  <img
                    src=" ./assets/images/icons/icon-star-yellow.svg"
                    alt="star icon"
                  />
                  <img
                    src=" ./assets/images/icons/icon-star-yellow.svg"
                    alt="star icon"
                  />
                  <img
                    src=" ./assets/images/icons/icon-star-yellow.svg"
                    alt="star icon"
                  />
                  <img
                    src=" ./assets/images/icons/icon-star-yellow.svg"
                    alt="star icon"
                  />
                  <img
                    src=" ./assets/images/icons/icon-star-yellow.svg"
                    alt="star icon"
                  />
                </div>
              </div>
              <p className="text-tiny font-semibold text-gray-400">
                (138 rates)
              </p>
            </div>
          </div>
          <h3 className="font-bold font-poppins text-[20px] leading-[26px] md:text-heading-4 mb-8">
            Sony Digital Surround Wireless Headphones Black Bundle with Deco
            Gear 6FT Universal 4K
          </h3>
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="font-bold font-poppins text-[25px] leading-[30px] md:text-heading-3 text-green-1000">
              $318.00
            </h2>
            <h3 className="font-bold font-poppins text-[20px] leading-[26px] md:text-heading-4 text-gray-500 line-through">
              $420.00
            </h3>
            <p className="text-text text-gray-500">(In stock)</p>
          </div>
          <p className="text-text text-gray-500 mb-8">
            The WH-L600 delivers cinematic surround sound to immerse you in
            whatever you're watching or listening to. Sound modes enhance
            movies, dialogue, games, and sport, while a 98.43-ft wireless
            listening range gives you the freedom to move around.
          </p>
          <div className="flex flex-col gap-5 mb-[30px] md:flex-row md:gap-[37px]">
            <div className="flex-1">
              <div className="font-poppins text-heading-6 font-bold text-green-1000 mb-[10px]">
                <span className="block">Hurry up!</span>
                <span className="block">Sales ends soon!</span>
              </div>
              <div className="w-full bg-gray-200 h-[11px] rounded-[10px] mb-[6px]">
                <div className="bg-danger h-[11px] rounded-[10px] w-[60%]" />
              </div>
              <p className="text-gray-500 font-bold text-sm">63/158 sold</p>
            </div>
            <div className="flex items-center justify-center gap-[25px]">
              <div>
                <div className="border border-gray-200 rounded grid place-items-center relative w-[57px] h-[64px] mb-[2px]">
                  <p className="text-heading-5 font-bold font-poppins text-green-1000">
                    10
                  </p>
                  <img
                    className="absolute right-[-28%]"
                    src="./assets/images/icons/icon-colon.svg"
                    alt="colon icon"
                  />
                </div>
                <p className="text-tiny font-semibold text-gray-500 text-center">
                  Days
                </p>
              </div>
              <div>
                <div className="border border-gray-200 rounded grid place-items-center relative w-[57px] h-[64px] mb-[2px]">
                  <p className="text-heading-5 font-bold font-poppins text-green-1000">
                    10
                  </p>
                  <img
                    className="absolute right-[-28%]"
                    src="./assets/images/icons/icon-colon.svg"
                    alt="colon icon"
                  />
                </div>
                <p className="text-tiny font-semibold text-gray-500 text-center">
                  Hours
                </p>
              </div>
              <div>
                <div className="border border-gray-200 rounded grid place-items-center relative w-[57px] h-[64px] mb-[2px]">
                  <p className="text-heading-5 font-bold font-poppins text-green-1000">
                    10
                  </p>
                  <img
                    className="absolute right-[-28%]"
                    src="./assets/images/icons/icon-colon.svg"
                    alt="colon icon"
                  />
                </div>
                <p className="text-tiny font-semibold text-gray-500 text-center">
                  Minutes
                </p>
              </div>
              <div>
                <div className="border border-gray-200 rounded grid place-items-center relative w-[57px] h-[64px] mb-[2px]">
                  <p className="text-heading-5 font-bold font-poppins text-green-1000">
                    10
                  </p>
                </div>
                <p className="text-tiny font-semibold text-gray-500 text-center">
                  Seconds
                </p>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-200 h-[1px] mb-[46px]" />
          <div className="flex flex-col gap-[10px] mb-[46px] md:flex-row">
            <div className="detail-qty border border-green-100 rounded-lg flex items-center justify-between w-[118px]">
              <input
                className="qty-val text-green-1000 px-4 text-center font-bold font-poppins text-[20px] max-w-[80px]"
                name="quantity"
                defaultValue={1}
                min={1}
              />
              <div className="flex flex-col">
                <span
                  className="qty-down cursor-pointer"
                  onclick="increaseCount(event, this)"
                >
                  <i>
                    <img
                      src="./assets/images/icons/icon-caret-up-green.svg"
                      alt="caret icon"
                    />
                  </i>
                </span>
                <span
                  className="qty-up cursor-pointer"
                  onclick="decreaseCount(event, this)"
                >
                  <i>
                    <img
                      src="./assets/images/icons/icon-caret-down-green.svg"
                      alt="caret icon"
                    />
                  </i>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <button className="bg-green-100 flex items-center rounded transition-colors duration-300 border border-green-100 py-[15px] px-[22px] gap-[13px] hover:bg-white">
                <img
                  src="./assets/images/icons/icon-cart.svg"
                  alt="cart icon"
                />
                <p className="text-green-1000 font-poppins font-bold text-[14px] md:text-[18px] md:leading-[20px]">
                  Add To Cart
                </p>
              </button>
              <div className="border border-green-100 grid place-items-center cursor-pointer transition-all duration-300 w-[50px] h-[50px] rounded-[5px] hover:bg-green-100 hover:translate-y-[-5px]">
                <img src="./assets/images/icons/icon-heart.svg" alt="icon" />
              </div>
              <div className="border border-green-100 grid place-items-center cursor-pointer transition-all duration-300 w-[50px] h-[50px] rounded-[5px] hover:bg-green-100 hover:translate-y-[-5px]">
                <img src="./assets/images/icons/icon-shuffle.svg" alt="icon" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[46px]">
            <p className="text-text">
              <span>Vendor:</span>
              <span className="text-gray-500"> AgonMart</span>
            </p>
            <p className="text-text">
              <span>SKU:</span>
              <span className="text-gray-500"> FWM15VKT</span>
            </p>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[104px] xl:max-w-[996px] xl:mx-auto">
        <div className="flex flex-wrap mb-14 gap-[15px] md:gap-[25px]">
          <div
            className="cursor-pointer inline-block p-3 border border-gray-200 text-gray-500 font-bold transition-all duration-200 text-sm product-tab md:py-[20px] md:px-[35px] rounded-[50px] md:text-[18px] md:leading-[20px] hover:text-green-1000 hover:border-green-100 hover:translate-y-[-2px] active"
            data-product="description"
          >
            Description
          </div>
          <div
            className="cursor-pointer inline-block p-3 border border-gray-200 text-gray-500 font-bold transition-all duration-200 text-sm product-tab md:py-[20px] md:px-[35px] rounded-[50px] md:text-[18px] md:leading-[20px] hover:text-green-1000 hover:border-green-100 hover:translate-y-[-2px]"
            data-product="additional"
          >
            Additional info
          </div>
          <div
            className="cursor-pointer inline-block p-3 border border-gray-200 text-gray-500 font-bold transition-all duration-200 text-sm product-tab md:py-[20px] md:px-[35px] rounded-[50px] md:text-[18px] md:leading-[20px] hover:text-green-1000 hover:border-green-100 hover:translate-y-[-2px]"
            data-product="vendors"
          >
            Vendors
          </div>
          <div
            className="cursor-pointer inline-block p-3 border border-gray-200 text-gray-500 font-bold transition-all duration-200 text-sm product-tab md:py-[20px] md:px-[35px] rounded-[50px] md:text-[18px] md:leading-[20px] hover:text-green-1000 hover:border-green-100 hover:translate-y-[-2px]"
            data-product="reviews"
          >
            Reviews (3)
          </div>
        </div>
        <div
          className="product-tag-content text-gray-500 active"
          id="description"
        >
          <p className="text-text mb-9">
            Uninhibited carnally hired played in whimpered dear gorilla koala
            depending and much yikes off far quetzal goodness and from for
            grimaced goodness unaccountably and meadowlark near unblushingly
            crucial scallop tightly neurotic hungrily some and dear furiously
            this apart.
            <br />
            <br />
            <span>
              Spluttered narrowly yikes left moth in yikes bowed this that
              grizzly much hello on spoon-fed that alas rethought much decently
              richly and wow against the frequent fluidly at formidable
              acceptably flapped besides and much circa far over the bucolically
              hey precarious goldfinch mastodon goodness gnashed a jellyfish and
              one however because.
            </span>
          </p>
          <p className="text-text font-bold mb-7">E9SNWHL600B</p>
          <ul className="mb-9 !list-disc ml-[19px]">
            <li className="mb-2">
              WH-L600 Digital Surround Wireless Headphones (Black)
            </li>
            <li className="mb-2">Charging Stand</li>
            <li className="mb-2">AC Adapter</li>
            <li className="mb-2">Optical Digital Audio Cable</li>
            <li className="mb-2">USA Warranty</li>
          </ul>
          <p className="text-text font-bold mb-7">Bundle Includes:</p>
          <ul className="mb-9 !list-disc ml-[19px]">
            <li className="mb-2">
              Sony Digital Surround Wireless Headphones Black
            </li>
            <li className="mb-2">
              Deco Gear 6FT Universal 4K HDMI 2.0 Cable with 28AWG Pure Copper
              Conductors
            </li>
            <li className="mb-2">
              1 Year Extended Warranty for Products Valued up to $500
            </li>
          </ul>
        </div>
        <div className="product-tag-content text-gray-500" id="additional">
          <table className="border-collapse w-full">
            <tbody>
              <tr>
                <th className="px-5 border border-gray-200 text-left font-normal py-2.5">
                  Stand Up
                </th>
                <td className="px-5 border border-gray-200 text-left py-2.5">
                  35″L x 24″W x 37-45″H(front to back wheel)
                </td>
              </tr>
              <tr>
                <th className="px-5 border border-gray-200 text-left font-normal py-2.5">
                  Folded (w/o wheels)
                </th>
                <td className="px-5 border border-gray-200 text-left py-2.5">
                  32.5″L x 18.5″W x 16.5″H
                </td>
              </tr>
              <tr>
                <th className="px-5 border border-gray-200 text-left font-normal py-2.5">
                  Folded (w/ wheels)
                </th>
                <td className="px-5 border border-gray-200 text-left py-2.5">
                  32.5″L x 24″W x 18.5″H
                </td>
              </tr>
              <tr>
                <th className="px-5 border border-gray-200 text-left font-normal py-2.5">
                  Door Pass Through
                </th>
                <td className="px-5 border border-gray-200 text-left py-2.5">
                  24
                </td>
              </tr>
              <tr>
                <th className="px-5 border border-gray-200 text-left font-normal py-2.5">
                  Frame
                </th>
                <td className="px-5 border border-gray-200 text-left py-2.5">
                  Aluminum
                </td>
              </tr>
              <tr>
                <th className="px-5 border border-gray-200 text-left font-normal py-2.5">
                  Weight (w/o wheels)
                </th>
                <td className="px-5 border border-gray-200 text-left py-2.5">
                  20 LBS
                </td>
              </tr>
              <tr>
                <th className="px-5 border border-gray-200 text-left font-normal py-2.5">
                  Weight Capacity
                </th>
                <td className="px-5 border border-gray-200 text-left py-2.5">
                  60 LBS
                </td>
              </tr>
              <tr>
                <th className="px-5 border border-gray-200 text-left font-normal py-2.5">
                  Width
                </th>
                <td className="px-5 border border-gray-200 text-left py-2.5">
                  24″
                </td>
              </tr>
              <tr>
                <th className="px-5 border border-gray-200 text-left font-normal py-2.5">
                  Handle height (ground to handle)
                </th>
                <td className="px-5 border border-gray-200 text-left py-2.5">
                  37-45″
                </td>
              </tr>
              <tr>
                <th className="px-5 border border-gray-200 text-left font-normal py-2.5">
                  Wheels
                </th>
                <td className="px-5 border border-gray-200 text-left py-2.5">
                  12″ air / wide track slick tread
                </td>
              </tr>
              <tr>
                <th className="px-5 border border-gray-200 text-left font-normal py-2.5">
                  Seat back height
                </th>
                <td className="px-5 border border-gray-200 text-left py-2.5">
                  21.5″
                </td>
              </tr>
              <tr>
                <th className="px-5 border border-gray-200 text-left font-normal py-2.5">
                  Head room (inside canopy)
                </th>
                <td className="px-5 border border-gray-200 text-left py-2.5">
                  25″
                </td>
              </tr>
              <tr>
                <th className="px-5 border border-gray-200 text-left font-normal py-2.5">
                  Color
                </th>
                <td className="px-5 border border-gray-200 text-left py-2.5">
                  Black, Blue, Red, White
                </td>
              </tr>
              <tr>
                <th className="px-5 border border-gray-200 text-left font-normal py-2.5">
                  Size
                </th>
                <td className="px-5 border border-gray-200 text-left py-2.5">
                  M, S
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="product-tag-content text-gray-500" id="vendors">
          <div className="flex gap-x-4 mb-[30px]">
            <img src="./assets/images/noodles-logo.svg" alt="noodles logo" />
            <div className="flex flex-col gap-y-1">
              <h6>
                {" "}
                <a className="text-green-900 font-bold" href="#">
                  Noodles Co.
                </a>
              </h6>
              <div className="flex items-center gap-x-1">
                <div className="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                  <img
                    src=" ./assets/images/icons/icon-star.svg"
                    alt="star icon"
                  />
                  <img
                    src=" ./assets/images/icons/icon-star.svg"
                    alt="star icon"
                  />
                  <img
                    src=" ./assets/images/icons/icon-star.svg"
                    alt="star icon"
                  />
                  <img
                    src=" ./assets/images/icons/icon-star.svg"
                    alt="star icon"
                  />
                  <img
                    src=" ./assets/images/icons/icon-star.svg"
                    alt="star icon"
                  />
                  <div className="flex items-center absolute overflow-hidden gap-[3px] w-[90%]">
                    <img
                      src=" ./assets/images/icons/icon-star-yellow.svg"
                      alt="star icon"
                    />
                    <img
                      src=" ./assets/images/icons/icon-star-yellow.svg"
                      alt="star icon"
                    />
                    <img
                      src=" ./assets/images/icons/icon-star-yellow.svg"
                      alt="star icon"
                    />
                    <img
                      src=" ./assets/images/icons/icon-star-yellow.svg"
                      alt="star icon"
                    />
                    <img
                      src=" ./assets/images/icons/icon-star-yellow.svg"
                      alt="star icon"
                    />
                  </div>
                </div>
                <span>(32 reviews)</span>
              </div>
            </div>
          </div>
          <ul className="mb-[50px]">
            <li className="flex items-center">
              {" "}
              <img
                className="mr-2"
                src="./assets/images/icons/icon-location-black.svg"
                alt="icon location"
              />
              <strong className="text-black mr-1">Address:</strong>
              <span>
                5171 W Campbell Ave undefined Kent, Utah 53127 United States
              </span>
            </li>
            <li className="flex items-center">
              {" "}
              <img
                className="mr-2"
                src="./assets/images/icons/icon-contact-black.svg"
                alt="icon contact"
              />
              <strong className="text-black mr-1">Contact Seller:</strong>
              <span>(+91) - 540-025-553</span>
            </li>
          </ul>
          <div className="flex gap-x-7 mb-[55px]">
            <div className="flex flex-col gap-y-1">
              <p className="text-[13px]">Rating</p>
              <h4 className="text-black font-bold text-[28px] leading-[34px]">
                92%
              </h4>
            </div>
            <div className="flex flex-col gap-y-1">
              <p className="text-[13px]">Ship on time</p>
              <h4 className="text-black font-bold text-[28px] leading-[34px]">
                100%
              </h4>
            </div>
            <div className="flex flex-col gap-y-1">
              <p className="text-[13px]">Chat response</p>
              <h4 className="text-black font-bold text-[28px] leading-[34px]">
                89%
              </h4>
            </div>
          </div>
          <p>
            Noodles & Company is an American fast-casual restaurant that offers
            international and American noodle dishes and pasta in addition to
            soups and salads. Noodles & Company was founded in 1995 by Aaron
            Kennedy and is headquartered in Broomfield, Colorado. The company
            went public in 2013 and recorded a $457 million revenue in 2017.In
            late 2018, there were 460 Noodles & Company locations across 29
            states and Washington, D.C.
          </p>
        </div>
        <div className="product-tag-content text-gray-500" id="reviews">
          <div className="flex justify-between flex-col lg:flex-row gap-[30px]">
            <div className="flex flex-col gap-y-[30px] lg:w-[60%]">
              <h4 className="font-bold text-lg">
                Customer questions & answers
              </h4>
              <article className="flex gap-x-4 p-5 border border-gray-200 rounded-2xl group">
                <div className="flex flex-col gap-y-2 items-center flex-1">
                  <img
                    className="max-w-[50px] lg:max-w-[80px]"
                    src="./assets/images/avatar-11.png"
                    alt="customer"
                  />
                  <a className="text-green-900 font-bold text-[13px]" href="#">
                    Sienna
                  </a>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="font-poppins flex-1 text-[13px]">
                      December 4, 2022 at 3:12 pm
                    </span>
                    <div className="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                      <img
                        src=" ./assets/images/icons/icon-star.svg"
                        alt="star icon"
                      />
                      <img
                        src=" ./assets/images/icons/icon-star.svg"
                        alt="star icon"
                      />
                      <img
                        src=" ./assets/images/icons/icon-star.svg"
                        alt="star icon"
                      />
                      <img
                        src=" ./assets/images/icons/icon-star.svg"
                        alt="star icon"
                      />
                      <img
                        src=" ./assets/images/icons/icon-star.svg"
                        alt="star icon"
                      />
                      <div className="flex items-center absolute overflow-hidden gap-[3px] w-[100%]">
                        <img
                          src=" ./assets/images/icons/icon-star-yellow.svg"
                          alt="star icon"
                        />
                        <img
                          src=" ./assets/images/icons/icon-star-yellow.svg"
                          alt="star icon"
                        />
                        <img
                          src=" ./assets/images/icons/icon-star-yellow.svg"
                          alt="star icon"
                        />
                        <img
                          src=" ./assets/images/icons/icon-star-yellow.svg"
                          alt="star icon"
                        />
                        <img
                          src=" ./assets/images/icons/icon-star-yellow.svg"
                          alt="star icon"
                        />
                      </div>
                    </div>
                  </div>
                  <span className="text-base leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Delectus, suscipit exercitationem accusantium obcaecati quos
                    voluptate nesciunt facilis itaque modi commodi dignissimos
                    sequi repudiandae minus ab deleniti totam officia id
                    incidunt?
                  </span>
                  <span className="text-base leading-7 ml-1 inline-block transition duration-300 opacity-0 cursor-pointer text-[#06d6a0] hover:text-green-1000 group-hover:opacity-100">
                    Reply
                  </span>
                </div>
              </article>
              <article className="flex gap-x-4 p-5 border border-gray-200 rounded-2xl group ml-[30px]">
                <div className="flex flex-col gap-y-2 items-center flex-1">
                  <img
                    className="max-w-[50px] lg:max-w-[80px]"
                    src="./assets/images/avatar-12.png"
                    alt="customer"
                  />
                  <a className="text-green-900 font-bold text-[13px]" href="#">
                    Brenna
                  </a>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="font-poppins flex-1 text-[13px]">
                      December 4, 2022 at 3:12 pm
                    </span>
                    <div className="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                      <img
                        src=" ./assets/images/icons/icon-star.svg"
                        alt="star icon"
                      />
                      <img
                        src=" ./assets/images/icons/icon-star.svg"
                        alt="star icon"
                      />
                      <img
                        src=" ./assets/images/icons/icon-star.svg"
                        alt="star icon"
                      />
                      <img
                        src=" ./assets/images/icons/icon-star.svg"
                        alt="star icon"
                      />
                      <img
                        src=" ./assets/images/icons/icon-star.svg"
                        alt="star icon"
                      />
                      <div className="flex items-center absolute overflow-hidden gap-[3px] w-[90%]">
                        <img
                          src=" ./assets/images/icons/icon-star-yellow.svg"
                          alt="star icon"
                        />
                        <img
                          src=" ./assets/images/icons/icon-star-yellow.svg"
                          alt="star icon"
                        />
                        <img
                          src=" ./assets/images/icons/icon-star-yellow.svg"
                          alt="star icon"
                        />
                        <img
                          src=" ./assets/images/icons/icon-star-yellow.svg"
                          alt="star icon"
                        />
                        <img
                          src=" ./assets/images/icons/icon-star-yellow.svg"
                          alt="star icon"
                        />
                      </div>
                    </div>
                  </div>
                  <span className="text-base leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Delectus, suscipit exercitationem accusantium obcaecati quos
                    voluptate nesciunt facilis itaque modi commodi dignissimos
                    sequi repudiandae minus ab deleniti totam officia id
                    incidunt?
                  </span>
                  <span className="text-base leading-7 ml-1 inline-block transition duration-300 opacity-0 cursor-pointer text-[#06d6a0] hover:text-green-1000 group-hover:opacity-100">
                    Reply
                  </span>
                </div>
              </article>
              <article className="flex gap-x-4 p-5 border border-gray-200 rounded-2xl group">
                <div className="flex flex-col gap-y-2 items-center flex-1">
                  <img
                    className="max-w-[50px] lg:max-w-[80px]"
                    src="./assets/images/avatar-10.png"
                    alt="customer"
                  />
                  <a className="text-green-900 font-bold text-[13px]" href="#">
                    Gemma
                  </a>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="font-poppins flex-1 text-[13px]">
                      December 4, 2022 at 3:12 pm
                    </span>
                    <div className="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                      <img
                        src=" ./assets/images/icons/icon-star.svg"
                        alt="star icon"
                      />
                      <img
                        src=" ./assets/images/icons/icon-star.svg"
                        alt="star icon"
                      />
                      <img
                        src=" ./assets/images/icons/icon-star.svg"
                        alt="star icon"
                      />
                      <img
                        src=" ./assets/images/icons/icon-star.svg"
                        alt="star icon"
                      />
                      <img
                        src=" ./assets/images/icons/icon-star.svg"
                        alt="star icon"
                      />
                      <div className="flex items-center absolute overflow-hidden gap-[3px] w-[80%]">
                        <img
                          src=" ./assets/images/icons/icon-star-yellow.svg"
                          alt="star icon"
                        />
                        <img
                          src=" ./assets/images/icons/icon-star-yellow.svg"
                          alt="star icon"
                        />
                        <img
                          src=" ./assets/images/icons/icon-star-yellow.svg"
                          alt="star icon"
                        />
                        <img
                          src=" ./assets/images/icons/icon-star-yellow.svg"
                          alt="star icon"
                        />
                        <img
                          src=" ./assets/images/icons/icon-star-yellow.svg"
                          alt="star icon"
                        />
                      </div>
                    </div>
                  </div>
                  <span className="text-base leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Delectus, suscipit exercitationem accusantium obcaecati quos
                    voluptate nesciunt facilis itaque modi commodi dignissimos
                    sequi repudiandae minus ab deleniti totam officia id
                    incidunt?
                  </span>
                  <span className="text-base leading-7 ml-1 inline-block transition duration-300 opacity-0 cursor-pointer text-[#06d6a0] hover:text-green-1000 group-hover:opacity-100">
                    Reply
                  </span>
                </div>
              </article>
            </div>
            <div className="flex flex-col gap-y-[30px] lg:w-[36%]">
              <h4 className="font-bold text-lg">Customer reviews</h4>
              <div className="flex items-center gap-x-3">
                <div className="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                  <img
                    src=" ./assets/images/icons/icon-star.svg"
                    alt="star icon"
                  />
                  <img
                    src=" ./assets/images/icons/icon-star.svg"
                    alt="star icon"
                  />
                  <img
                    src=" ./assets/images/icons/icon-star.svg"
                    alt="star icon"
                  />
                  <img
                    src=" ./assets/images/icons/icon-star.svg"
                    alt="star icon"
                  />
                  <img
                    src=" ./assets/images/icons/icon-star.svg"
                    alt="star icon"
                  />
                  <div className="flex items-center absolute overflow-hidden gap-[3px] w-[90%]">
                    <img
                      src=" ./assets/images/icons/icon-star-yellow.svg"
                      alt="star icon"
                    />
                    <img
                      src=" ./assets/images/icons/icon-star-yellow.svg"
                      alt="star icon"
                    />
                    <img
                      src=" ./assets/images/icons/icon-star-yellow.svg"
                      alt="star icon"
                    />
                    <img
                      src=" ./assets/images/icons/icon-star-yellow.svg"
                      alt="star icon"
                    />
                    <img
                      src=" ./assets/images/icons/icon-star-yellow.svg"
                      alt="star icon"
                    />
                  </div>
                </div>
                <span className="text-black font-bold">4.8 out of 5</span>
              </div>
              <ul className="flex flex-col gap-y-[14px]">
                <li className="flex overflow-hidden bg-gray-100 text-[13px]">
                  <span className="bg-white pr-[10px]">5 star</span>
                  <div
                    className="flex flex-col justify-center text-white overflow-hidden text-center bg-green-900 whitespace-nowrap w-[50%]"
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    50%
                  </div>
                </li>
                <li className="flex overflow-hidden bg-gray-100 text-[13px]">
                  <span className="bg-white pr-[10px]">4 star</span>
                  <div
                    className="flex flex-col justify-center text-white overflow-hidden text-center bg-green-900 whitespace-nowrap w-[25%]"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    25%
                  </div>
                </li>
                <li className="flex overflow-hidden bg-gray-100 text-[13px]">
                  <span className="bg-white pr-[10px]">3 star</span>
                  <div
                    className="flex flex-col justify-center text-white overflow-hidden text-center bg-green-900 whitespace-nowrap w-[45%]"
                    aria-valuenow={45}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    45%
                  </div>
                </li>
                <li className="flex overflow-hidden bg-gray-100 text-[13px]">
                  <span className="bg-white pr-[10px]">2 star</span>
                  <div
                    className="flex flex-col justify-center text-white overflow-hidden text-center bg-green-900 whitespace-nowrap w-[65%]"
                    aria-valuenow={65}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    65%
                  </div>
                </li>
                <li className="flex overflow-hidden bg-gray-100 text-[13px]">
                  <span className="bg-white pr-[10px]">1 star</span>
                  <div
                    className="flex flex-col justify-center text-white overflow-hidden text-center bg-green-900 whitespace-nowrap w-[85%]"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    85%
                  </div>
                </li>
              </ul>
              <a className="text-[13px]" href="#">
                How are ratings calculated?
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[100px]">
        <div className="mb-[35px] md:mb-[64px]">
          <h2 className="text-gray-900 font-bold font-poppins mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
            You may also like
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600">
            Take it to your cart
          </p>
        </div>
        <div className="grid grid-cols-1 items-center gap-[30px] lg:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl py-[18px] px-[13px] border border-gray-200 gap-2 w-full product-shadow transition-all duration-300 hover:translate-y-[-3px]">
            <a className="flex items-center" href="#">
              <img
                className="h-full w-full object-cover max-w-[170px]"
                src="./assets/images/product-sm-1.png"
                alt="product image"
              />
              <div className="font-poppins">
                <p className="font-bold mb-3 text-[18px] leading-[21px] lg:text-[26px] lg:leading-[32px]">
                  Bass ultra x-203. Head phone
                </p>
                <div className="flex items-center gap-3">
                  {" "}
                  <span className="text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]">
                    $29.8
                  </span>
                  <span className="text-gray-500 strike line-through text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]">
                    $29.8
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="rounded-2xl py-[18px] px-[13px] border border-gray-200 gap-2 w-full product-shadow transition-all duration-300 hover:translate-y-[-3px]">
            <a className="flex items-center" href="#">
              <img
                className="h-full w-full object-cover max-w-[170px]"
                src="./assets/images/product-sm-2.png"
                alt="product image"
              />
              <div className="font-poppins">
                <p className="font-bold mb-3 text-[18px] leading-[21px] lg:text-[26px] lg:leading-[32px]">
                  Bass ultra x-203. Head phone
                </p>
                <div className="flex items-center gap-3">
                  {" "}
                  <span className="text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]">
                    $29.8
                  </span>
                  <span className="text-gray-500 strike line-through text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]">
                    $29.8
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="rounded-2xl py-[18px] px-[13px] border border-gray-200 gap-2 w-full product-shadow transition-all duration-300 hover:translate-y-[-3px]">
            <a className="flex items-center" href="#">
              <img
                className="h-full w-full object-cover max-w-[170px]"
                src="./assets/images/product-sm-3.png"
                alt="product image"
              />
              <div className="font-poppins">
                <p className="font-bold mb-3 text-[18px] leading-[21px] lg:text-[26px] lg:leading-[32px]">
                  Bass ultra x-203. Head phone
                </p>
                <div className="flex items-center gap-3">
                  {" "}
                  <span className="text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]">
                    $29.8
                  </span>
                  <span className="text-gray-500 strike line-through text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]">
                    $29.8
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="rounded-2xl py-[18px] px-[13px] border border-gray-200 gap-2 w-full product-shadow transition-all duration-300 hover:translate-y-[-3px]">
            <a className="flex items-center" href="#">
              <img
                className="h-full w-full object-cover max-w-[170px]"
                src="./assets/images/product-sm-1.png"
                alt="product image"
              />
              <div className="font-poppins">
                <p className="font-bold mb-3 text-[18px] leading-[21px] lg:text-[26px] lg:leading-[32px]">
                  Bass ultra x-203. Head phone
                </p>
                <div className="flex items-center gap-3">
                  {" "}
                  <span className="text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]">
                    $29.8
                  </span>
                  <span className="text-gray-500 strike line-through text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]">
                    $29.8
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="rounded-2xl py-[18px] px-[13px] border border-gray-200 gap-2 w-full product-shadow transition-all duration-300 hover:translate-y-[-3px]">
            <a className="flex items-center" href="#">
              <img
                className="h-full w-full object-cover max-w-[170px]"
                src="./assets/images/product-sm-2.png"
                alt="product image"
              />
              <div className="font-poppins">
                <p className="font-bold mb-3 text-[18px] leading-[21px] lg:text-[26px] lg:leading-[32px]">
                  Bass ultra x-203. Head phone
                </p>
                <div className="flex items-center gap-3">
                  {" "}
                  <span className="text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]">
                    $29.8
                  </span>
                  <span className="text-gray-500 strike line-through text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]">
                    $29.8
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="rounded-2xl py-[18px] px-[13px] border border-gray-200 gap-2 w-full product-shadow transition-all duration-300 hover:translate-y-[-3px]">
            <a className="flex items-center" href="#">
              <img
                className="h-full w-full object-cover max-w-[170px]"
                src="./assets/images/product-sm-3.png"
                alt="product image"
              />
              <div className="font-poppins">
                <p className="font-bold mb-3 text-[18px] leading-[21px] lg:text-[26px] lg:leading-[32px]">
                  Bass ultra x-203. Head phone
                </p>
                <div className="flex items-center gap-3">
                  {" "}
                  <span className="text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]">
                    $29.8
                  </span>
                  <span className="text-gray-500 strike line-through text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]">
                    $29.8
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[111px]">
        <div className="rounded-2xl p-[30px] md:py-[41px] md:px-[87px] bg-green-900 flex relative">
          <div className="lg:w-[45%]">
            <h1 className="font-extrabold font-poppins text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 text-white mb-[6px]">
              You can order on App and Play store
            </h1>
            <p className="text-gray-200 text-md md:text-[18px] mb-[60px]">
              Bring the world of shopping to your phone
            </p>
            <div className="flex items-center gap-5 mb-[22px]">
              {" "}
              <a href="#">
                <img
                  src="./assets/images/Apple-button.png"
                  alt="app store link button"
                />
              </a>
              <a href="#">
                <img
                  src="./assets/images/google-play.png"
                  alt="google store link button"
                />
              </a>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-[7px]">
                <div className="bg-green-500 w-[14px] h-[14px] rounded-[2px]" />
                <p className="text-sm text-[#B4B4B4]">
                  Order direct from the app
                </p>
              </div>
              <div className="flex items-center gap-[7px]">
                <div className="bg-green-500 w-[14px] h-[14px] rounded-[2px]" />
                <p className="text-sm text-[#B4B4B4]">Save and searches</p>
              </div>
            </div>
          </div>
          <img
            className="absolute right-0 hidden w-[54%] lg:block lg:top-1/4 xl:top-[40px]"
            src="./assets/images/app-block-img.png"
            alt
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

export default SingleProduct;
