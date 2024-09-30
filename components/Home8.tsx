import React from "react";

const Home8 = () => (
  <div>
    <meta charSet="utf-8" />
    <title>
      Cold Pressed Pure Oil Online | Wood Pressed Healthy Cooking Oil Price -
      Ekonkar Kolhu
    </title>
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
      <div className="full-width">
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 grid items-center mx-auto lg:mt-[128px] max-w-[1320px] lg:gap-10 lg:grid-cols-2 xl:grid-cols-[minmax(695px,_1fr)_1fr]">
          <div className="flex-1">
            {" "}
            <span className="font-poppins inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">
              CHECK OUR BEST PRODUCTS
            </span>
            <h1 className="font-extrabold font-poppins text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 mb-6 lg:mb-10">
              <p className="text-green-900 font-bold inline-block">
                Healthier, Tastier, Happier 
              </p>
              <p className="font-bold inline-block">
                Transform Meals with Our Cooking Oil and Tasty Spices!
              </p>
            </h1>
            <p className="text-quote md:text-lead-lg text-gray-600 mb-[45px]">
              Get a website to be found on the first page of Google to avoid
              missing out on potential visitors and sales.
            </p>
            <div className="bg-white py-3 px-4 flex items-center justify-between border border-gray-100 input-shadow rounded-[10px] max-w-[600px]">
              <input
                className="outline-none ml-5 w-1/2"
                type="text"
                placeholder="Enter you mail .."
              />
              <div>
                <button className="flex items-center transition-colors duration-200 py-[17px] px-[26px] rounded-[8px] font-poppins font-semibold text-md md:text-lg text-white bg-green-900 whitespace-nowrap flex-1 w-fit gap-5">
                  Search
                  <i>
                    {" "}
                    <img
                      className="ml-[7px] w-[12px] filter-white"
                      src="./assets/images/icons/icon-right.svg"
                      alt="arrow right icon"
                    />
                  </i>
                </button>
              </div>
            </div>
          </div>
          <div className="items-center flex-1 relative hidden gap-[17px] lg:flex">
            <div className="flex-1 z-10">
              <img
                className="shadow-3 animate-float rounded-[158px] lg:max-w-[140px] xl:max-w-[184px]"
                src="./assets/images/hero-8a.png"
                alt="agon hero banner"
              />
            </div>
            <div className="flex-1 z-10">
              <img
                className="shadow-3 rounded-[158px] lg:max-w-[140px] xl:max-w-[184px]"
                src="./assets/images/hero-8b.png"
                alt="agon hero banner"
              />
            </div>
            <div className="flex-1 z-10">
              <img
                className="shadow-3 animate-float rounded-[158px] lg:max-w-[140px] xl:max-w-[184px]"
                src="./assets/images/hero-8c.png"
                alt="agon hero banner"
              />
            </div>
            <div className="rounded-full absolute opacity-50 w-[600px] h-[600px] bg-[#9BE9FB] blur-[200px] z-0 top-0 left-0 -translate-x-1/3 -translate-y-1/3" />
            <div className="rounded-full absolute opacity-50 w-[400px] h-[400px] bg-[#FFD5C8] blur-[200px] z-0 bottom-0 right-0 translate-x-1/3 translate-y-1/3" />
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
        <h3 className="font-bold font-poppins text-[20px] leading-[26px] md:text-heading-4 mb-[50px]">
          Popular Search
        </h3>
        <ul className="flex items-center flex-wrap gap-[15px]">
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              New York
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              London
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Estonia
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Phuket
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Paris
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Nethelands
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Lotus Temple
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Eiffel Tower
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              The Colosseum
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Rome
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Statue of Liberty
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Machu Picchu
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Bali, Indonesia
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Orleans
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Kerry, Ireland
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Marrakesh
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Morocco
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Central
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Tokyo
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Dubai
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Bora Bora
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Dubrovnik
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Edinburgh
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Paro Valley
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Jaipur, India
            </a>
          </li>
          <li>
            {" "}
            <a
              className="block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000"
              href="#"
            >
              Waikato
            </a>
          </li>
        </ul>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[150px]">
        <span className="font-poppins inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-8">
          Hot for this Summer
        </span>
        <div className="mb-14">
          <h2 className="text-gray-900 font-bold font-poppins mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
            Explore Top Destiations
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600">
            We find the absolute best prices on hotels & flights then we pass
            these savings directly to you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[30px] gap-y-[50px] mb-[52px]">
          <div className="rounded-2xl p-[25px] pb-[35px] border border-gray-200">
            <div className="aspect-[408/275]">
              {" "}
              <img
                className="h-full w-full object-cover rounded-2xl mb-[30px]"
                src="./assets/images/destination-1.png"
                alt="Agon"
              />
            </div>
            <div className="flex items-center gap-[10px] mb-9 mb-[11px]">
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
              <p className="text-tiny font-semibold text-gray-400">
                (84 rates)
              </p>
            </div>
            <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 mb-[15px]">
              Cold Pressed Pure Oil Online | Wood Pressed Healthy Cooking Oil
              Price - Ekonkar Kolhu
            </h4>
            <div className="flex items-center gap-[15px] lg:gap-[35px] mb-[43px]">
              <div className="flex items-baseline gap-[2px]">
                <img
                  src="./assets/images/icons/icon-location.svg"
                  alt="location icon"
                />
                <p className="text-sm font-bold text-gray-500">
                  Central Park West, USA
                </p>
              </div>
              <div className="flex items-baseline gap-[5px]">
                <img
                  src="./assets/images/icons/icon-calendar.svg"
                  alt="calendar icon"
                />
                <p className="text-sm font-bold text-gray-500 -translate-y-[1px]">
                  3 days, 2 night
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 text-green-900">
                  $22.51
                </h4>
                <span className="text-gray-400 line-through text-tiny lg:text-md">
                  $2.80
                </span>
              </div>
              <button className="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-poppins font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">
                Explore
                <i>
                  {" "}
                  <img
                    className="ml-[7px] w-[12px] filter-green"
                    src="./assets/images/icons/icon-right.svg"
                    alt="arrow right icon"
                  />
                </i>
              </button>
            </div>
          </div>
          <div className="rounded-2xl p-[25px] pb-[35px] border border-gray-200">
            <div className="aspect-[408/275]">
              {" "}
              <img
                className="h-full w-full object-cover rounded-2xl mb-[30px]"
                src="./assets/images/destination-2.png"
                alt="Agon"
              />
            </div>
            <div className="flex items-center gap-[10px] mb-9 mb-[11px]">
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
              <p className="text-tiny font-semibold text-gray-400">
                (84 rates)
              </p>
            </div>
            <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 mb-[15px]">
              Discovery Island Kayak Tour
            </h4>
            <div className="flex items-center gap-[15px] lg:gap-[35px] mb-[43px]">
              <div className="flex items-baseline gap-[2px]">
                <img
                  src="./assets/images/icons/icon-location.svg"
                  alt="location icon"
                />
                <p className="text-sm font-bold text-gray-500">
                  Central Park West, USA
                </p>
              </div>
              <div className="flex items-baseline gap-[5px]">
                <img
                  src="./assets/images/icons/icon-calendar.svg"
                  alt="calendar icon"
                />
                <p className="text-sm font-bold text-gray-500 -translate-y-[1px]">
                  3 days, 2 night
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 text-green-900">
                  $22.51
                </h4>
                <span className="text-gray-400 line-through text-tiny lg:text-md">
                  $2.80
                </span>
              </div>
              <button className="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-poppins font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">
                Explore
                <i>
                  {" "}
                  <img
                    className="ml-[7px] w-[12px] filter-green"
                    src="./assets/images/icons/icon-right.svg"
                    alt="arrow right icon"
                  />
                </i>
              </button>
            </div>
          </div>
          <div className="rounded-2xl p-[25px] pb-[35px] border border-gray-200">
            <div className="aspect-[408/275]">
              {" "}
              <img
                className="h-full w-full object-cover rounded-2xl mb-[30px]"
                src="./assets/images/destination-3.png"
                alt="Agon"
              />
            </div>
            <div className="flex items-center gap-[10px] mb-9 mb-[11px]">
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
              <p className="text-tiny font-semibold text-gray-400">
                (84 rates)
              </p>
            </div>
            <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 mb-[15px]">
              Mykonos and Santorini Tour
            </h4>
            <div className="flex items-center gap-[15px] lg:gap-[35px] mb-[43px]">
              <div className="flex items-baseline gap-[2px]">
                <img
                  src="./assets/images/icons/icon-location.svg"
                  alt="location icon"
                />
                <p className="text-sm font-bold text-gray-500">
                  Central Park West, USA
                </p>
              </div>
              <div className="flex items-baseline gap-[5px]">
                <img
                  src="./assets/images/icons/icon-calendar.svg"
                  alt="calendar icon"
                />
                <p className="text-sm font-bold text-gray-500 -translate-y-[1px]">
                  3 days, 2 night
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 text-green-900">
                  $22.51
                </h4>
                <span className="text-gray-400 line-through text-tiny lg:text-md">
                  $2.80
                </span>
              </div>
              <button className="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-poppins font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">
                Explore
                <i>
                  {" "}
                  <img
                    className="ml-[7px] w-[12px] filter-green"
                    src="./assets/images/icons/icon-right.svg"
                    alt="arrow right icon"
                  />
                </i>
              </button>
            </div>
          </div>
          <div className="rounded-2xl p-[25px] pb-[35px] border border-gray-200">
            <div className="aspect-[408/275]">
              {" "}
              <img
                className="h-full w-full object-cover rounded-2xl mb-[30px]"
                src="./assets/images/destination-4.png"
                alt="Agon"
              />
            </div>
            <div className="flex items-center gap-[10px] mb-9 mb-[11px]">
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
              <p className="text-tiny font-semibold text-gray-400">
                (84 rates)
              </p>
            </div>
            <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 mb-[15px]">
              The Metropolitan Museum Art
            </h4>
            <div className="flex items-center gap-[15px] lg:gap-[35px] mb-[43px]">
              <div className="flex items-baseline gap-[2px]">
                <img
                  src="./assets/images/icons/icon-location.svg"
                  alt="location icon"
                />
                <p className="text-sm font-bold text-gray-500">
                  Central Park West, USA
                </p>
              </div>
              <div className="flex items-baseline gap-[5px]">
                <img
                  src="./assets/images/icons/icon-calendar.svg"
                  alt="calendar icon"
                />
                <p className="text-sm font-bold text-gray-500 -translate-y-[1px]">
                  3 days, 2 night
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 text-green-900">
                  $22.51
                </h4>
                <span className="text-gray-400 line-through text-tiny lg:text-md">
                  $2.80
                </span>
              </div>
              <button className="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-poppins font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">
                Explore
                <i>
                  {" "}
                  <img
                    className="ml-[7px] w-[12px] filter-green"
                    src="./assets/images/icons/icon-right.svg"
                    alt="arrow right icon"
                  />
                </i>
              </button>
            </div>
          </div>
          <div className="rounded-2xl p-[25px] pb-[35px] border border-gray-200">
            <div className="aspect-[408/275]">
              {" "}
              <img
                className="h-full w-full object-cover rounded-2xl mb-[30px]"
                src="./assets/images/destination-5.png"
                alt="Agon"
              />
            </div>
            <div className="flex items-center gap-[10px] mb-9 mb-[11px]">
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
              <p className="text-tiny font-semibold text-gray-400">
                (84 rates)
              </p>
            </div>
            <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 mb-[15px]">
              Rainbow Mountain Red Valley
            </h4>
            <div className="flex items-center gap-[15px] lg:gap-[35px] mb-[43px]">
              <div className="flex items-baseline gap-[2px]">
                <img
                  src="./assets/images/icons/icon-location.svg"
                  alt="location icon"
                />
                <p className="text-sm font-bold text-gray-500">
                  Central Park West, USA
                </p>
              </div>
              <div className="flex items-baseline gap-[5px]">
                <img
                  src="./assets/images/icons/icon-calendar.svg"
                  alt="calendar icon"
                />
                <p className="text-sm font-bold text-gray-500 -translate-y-[1px]">
                  3 days, 2 night
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 text-green-900">
                  $22.51
                </h4>
                <span className="text-gray-400 line-through text-tiny lg:text-md">
                  $2.80
                </span>
              </div>
              <button className="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-poppins font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">
                Explore
                <i>
                  {" "}
                  <img
                    className="ml-[7px] w-[12px] filter-green"
                    src="./assets/images/icons/icon-right.svg"
                    alt="arrow right icon"
                  />
                </i>
              </button>
            </div>
          </div>
          <div className="rounded-2xl p-[25px] pb-[35px] border border-gray-200">
            <div className="aspect-[408/275]">
              {" "}
              <img
                className="h-full w-full object-cover rounded-2xl mb-[30px]"
                src="./assets/images/destination-6.png"
                alt="Agon"
              />
            </div>
            <div className="flex items-center gap-[10px] mb-9 mb-[11px]">
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
              <p className="text-tiny font-semibold text-gray-400">
                (84 rates)
              </p>
            </div>
            <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 mb-[15px]">
              Los Glaciares & Fitz Roy Trip
            </h4>
            <div className="flex items-center gap-[15px] lg:gap-[35px] mb-[43px]">
              <div className="flex items-baseline gap-[2px]">
                <img
                  src="./assets/images/icons/icon-location.svg"
                  alt="location icon"
                />
                <p className="text-sm font-bold text-gray-500">
                  Central Park West, USA
                </p>
              </div>
              <div className="flex items-baseline gap-[5px]">
                <img
                  src="./assets/images/icons/icon-calendar.svg"
                  alt="calendar icon"
                />
                <p className="text-sm font-bold text-gray-500 -translate-y-[1px]">
                  3 days, 2 night
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 text-green-900">
                  $22.51
                </h4>
                <span className="text-gray-400 line-through text-tiny lg:text-md">
                  $2.80
                </span>
              </div>
              <button className="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-poppins font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">
                Explore
                <i>
                  {" "}
                  <img
                    className="ml-[7px] w-[12px] filter-green"
                    src="./assets/images/icons/icon-right.svg"
                    alt="arrow right icon"
                  />
                </i>
              </button>
            </div>
          </div>
        </div>
        <button type="button">
          {" "}
          <a
            className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] mx-auto text-white bg-gray-900 tracking-wide text-md w-fit gap-4 md:text-heading-6"
            href="#"
          >
            <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-poppins font-semibold">
              Load more destinations
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
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 flex items-center flex-col md:flex-row lg:mt-[112px] gap-[35px] md:gap-[85px]">
        <div className="flex-1">
          {" "}
          <img
            className="h-full w-full object-cover"
            src="./assets/images/thumbnail-16.png"
            alt="Agon"
          />
        </div>
        <div className="flex-1 order-1">
          <h3 className="font-poppins font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">
            How does it works
          </h3>
          <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
            We find the absolute best prices on hotels & flights then we pass
            these savings directly to you.
          </p>
          <div className="flex flex-col">
            <div className="flex items-start gap-5 mb-[30px] last:mb-0">
              <div className="input-shadow grid place-items-center w-[64px] h-[64px] rounded-[36px]">
                <img
                  className="h-full w-full object-cover w-[25px] h-[25px]"
                  src="./assets/images/icons/icon-user.svg"
                  alt="icon"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 text-green-900 mb-[14px]">
                  Account
                </h4>
                <p className="text-text text-gray-500">
                  All the necessary information to create your account are below
                  this.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 mb-[30px] last:mb-0">
              <div className="input-shadow grid place-items-center w-[64px] h-[64px] rounded-[36px]">
                <img
                  className="h-full w-full object-cover w-[25px] h-[25px]"
                  src="./assets/images/icons/icon-destination.svg"
                  alt="icon"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 text-green-900 mb-[14px]">
                  Select Destination
                </h4>
                <p className="text-text text-gray-500">
                  At first choose the place you wanted to go
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 mb-[30px] last:mb-0">
              <div className="input-shadow grid place-items-center w-[64px] h-[64px] rounded-[36px]">
                <img
                  className="h-full w-full object-cover w-[25px] h-[25px]"
                  src="./assets/images/icons/icon-paperplane.svg"
                  alt="icon"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 text-green-900 mb-[14px]">
                  Book a Trip
                </h4>
                <p className="text-text text-gray-500">
                  book your tip form our exclusive offers
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 mb-[30px] last:mb-0">
              <div className="input-shadow grid place-items-center w-[64px] h-[64px] rounded-[36px]">
                <img
                  className="h-full w-full object-cover w-[25px] h-[25px]"
                  src="./assets/images/icons/icon-plane.svg"
                  alt="icon"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-bold font-poppins text-[14px] xl:text-heading-5 text-green-900 mb-[14px]">
                  Take your flight
                </h4>
                <p className="text-text text-gray-500">
                  Take your flight on selected date and joy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="full-width bg-bg-7">
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 flex items-center flex-col mx-auto relative md:flex-row lg:mt-[150px] gap-[35px] md:gap-[85px] pt-[143px] pb-[100px] max-w-[1320px]">
          <div className="flex-1 absolute bottom-0 right-0 max-w-[667px] aspect-[667/600]">
            <img
              className="h-full w-full object-cover"
              src="./assets/images/thumbnail-17.png"
              alt="Agon"
            />
          </div>
          <div className="flex-1 max-w-[667px]">
            <h3 className="font-poppins font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">
              A Simply Perfect Place To Get Lost
            </h3>
            <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
              Feugiat primis ligula risus auctor egestas and augue viverra mauri
              tortor in iaculis magna a feugiat mauris ipsum and placerat
              viverra tortor gravida purus.
            </p>
            <div className="md:mt-[90px]">
              <div className="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] last:mb-0">
                <img
                  className="h-full w-full object-cover max-w-[64px]"
                  src="./assets/images/icons/icon-temple.svg"
                  alt="icon"
                />
                <div>
                  <h3 className="font-bold font-poppins text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">
                    Work smarter with powerful features
                  </h3>
                  <p className="text-excerpt">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque at
                    dolor primis libero tempus, blandit
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] last:mb-0">
                <img
                  className="h-full w-full object-cover max-w-[64px]"
                  src="./assets/images/icons/icon-animal.svg"
                  alt="icon"
                />
                <div>
                  <h3 className="font-bold font-poppins text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">
                    Designed for teams of all sorts and sizes
                  </h3>
                  <p className="text-excerpt">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque at
                    dolor primis libero tempus, blandit
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] last:mb-0">
                <img
                  className="h-full w-full object-cover max-w-[64px]"
                  src="./assets/images/icons/icon-ball.svg"
                  alt="icon"
                />
                <div>
                  <h3 className="font-bold font-poppins text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">
                    Advanced analytics to grow your business
                  </h3>
                  <p className="text-excerpt">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque at
                    dolor primis libero tempus, blandit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
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
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 mt-[30px] md:mt-[80px] lg:mt-[143px]">
        <div className="flex flex-wrap items-center justify-center mb-[30px] md:mb-[60px] lg:mb-[80px]">
          <a
            className="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]"
            href="/"
          >
            <img src="./assets/images/partner-logo-1.svg" alt="partner logo" />
          </a>
          <a
            className="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]"
            href="/"
          >
            <img src="./assets/images/partner-logo-2.svg" alt="partner logo" />
          </a>
          <a
            className="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]"
            href="/"
          >
            <img src="./assets/images/partner-logo-3.svg" alt="partner logo" />
          </a>
          <a
            className="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]"
            href="/"
          >
            <img src="./assets/images/partner-logo-4.svg" alt="partner logo" />
          </a>
          <a
            className="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px] md:col-start-2 lg:col-start-auto"
            href="/"
          >
            <img src="./assets/images/partner-logo-5.svg" alt="partner logo" />
          </a>
          <a
            className="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px] md:col-start-3 lg:col-start-auto"
            href="/"
          >
            <img src="./assets/images/partner-logo-6.svg" alt="partner logo" />
          </a>
          <a
            className="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]"
            href="/"
          >
            <img src="./assets/images/partner-logo-1.svg" alt="partner logo" />
          </a>
          <a
            className="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]"
            href="/"
          >
            <img src="./assets/images/partner-logo-2.svg" alt="partner logo" />
          </a>
          <a
            className="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]"
            href="/"
          >
            <img src="./assets/images/partner-logo-3.svg" alt="partner logo" />
          </a>
        </div>
        <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] gap-5 mx-auto bg-bg-6 px-[15px] py-[50px] md:flex md:px-[52px] md:py-[72px] lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px]">
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

export default Home8;
