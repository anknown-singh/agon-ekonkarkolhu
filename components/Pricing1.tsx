import React from "react";

const Pricing1 = () => (
  <div>
    <meta charSet="utf-8" />
    <title>Pricing 1 Page</title>
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
            <ul className="navbar flex flex-col justify-center font-chivo gap-[34px] lg:flex-row">
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                    className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
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
                <span className="block text-inherit w-full h-full rounded-[50px] text-heading-6 font-bold font-chivo">
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
              <p className="text-sm font-chivo text-gray-500">
                You have 5 new messages
              </p>
            </div>
          </div>
          <div className="p-[30px]">
            <ul className="font-chivo font-medium text-[16px] leading-[16px]">
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
            <div className="text-gray-400 font-chivo text-[13px]">
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
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[137px]">
        <div className="text-center">
          <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
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
            <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] active border border-gray-900 bill-monthly">
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
            <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] border border-gray-900 bill-monthly">
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
            <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] border border-gray-900 bill-monthly">
              <div>
                <div className="mb-[21px]">
                  <span className="text-heading-3 font-bold font-chivo">
                    $199
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
            <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] border border-gray-900 bill-annually">
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
            <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] active border border-gray-900 bill-annually">
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
            <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] border border-gray-900 bill-annually">
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
            <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] border border-gray-900 bill-annually">
              <div>
                <div className="mb-[21px]">
                  <span className="text-heading-3 font-bold font-chivo">
                    $2388
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
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 flex flex-col gap-8 lg:mt-[120px] lg:flex-row xl:gap-[88px]">
        <div>
          <h1 className="font-extrabold font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 mb-[28px]">
            How It Works
          </h1>
          <p className="text-excerpt text-gray-600">
            Ac sapien purus tristique neque nibh vitae faucibus non phasellus
            vulputate nulla in eget amet, risus
          </p>
        </div>
        <div className="lg:flex lg:items-center gap-[30px]">
          <div className="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] last:mb-0 flex-col">
            <img
              className="h-full w-full object-cover max-w-[64px]"
              src="./assets/images/icons/icon-resources.svg"
              alt="icon"
            />
            <div>
              <h3 className="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">
                1. Acquisition
              </h3>
              <p className="text-excerpt">
                Aliquam a augue suscipit, luctus neque purus ipsum neque at
                dolor primis libero tempus, blandit
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] last:mb-0 flex-col">
            <img
              className="h-full w-full object-cover max-w-[64px]"
              src="./assets/images/icons/icon-cards.svg"
              alt="icon"
            />
            <div>
              <h3 className="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">
                2. Activation
              </h3>
              <p className="text-excerpt">
                Aliquam a augue suscipit, luctus neque purus ipsum neque at
                dolor primis libero tempus, blandit
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] flex-col">
            <img
              className="h-full w-full object-cover max-w-[64px]"
              src="./assets/images/icons/icon-stats.svg"
              alt="icon"
            />
            <div>
              <h3 className="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">
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
        <div className="rounded-2xl px-5 py-24 lg:pt-[96px] lg:px-[122px] lg:pb-[139px] bg-gray-100">
          <div className="text-center">
            <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-[8px] max-w-[725px]">
              Our Happy Customers
            </h2>
            <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p>
          </div>
          <p className="text-quote md:text-lead-lg text-gray-600 mx-auto text-center max-w-[509px] mb-[30px] lg:mb-[60px]">
            Know about our clients, we are a woldwide corporate brand
          </p>
          <div className="grid grid-cols-1 gap-y-8 gap-x-[30px] lg:grid-cols-2">
            <div className="rounded-2xl py-[40px] px-[30px] md:py-[55px] md:px-[48px] hover:translate-y-[-3px] transition-all duration-300 bg-white">
              <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[30px]">
                Satisfied client testimonial
              </h4>
              <p className="text-text text-gray-600 mb-[30px]">
                Even factoring differences in body weight between children and
                adults into account, it would still not reach an intoxicating
                level in children.
              </p>
              <div className="flex items-center gap-6">
                <img
                  className="h-full w-full object-cover max-w-[80px] rounded-[4px]"
                  src="./assets/images/avatar-5.png"
                  alt="avatar"
                />
                <div>
                  <p className="text-lead font-bold mb-[3px]">Jane Cooper</p>
                  <p className="text-md text-gray-500">
                    Biffco Enterprises Ltd.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl py-[40px] px-[30px] md:py-[55px] md:px-[48px] hover:translate-y-[-3px] transition-all duration-300 bg-white">
              <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[30px]">
                98% of residents recommend us
              </h4>
              <p className="text-text text-gray-600 mb-[30px]">
                So yes, the alcohol (ethanol) in hand sanitizers can be absorbed
                through the skin, but no, it would not cause intoxication.
              </p>
              <div className="flex items-center gap-6">
                <img
                  className="h-full w-full object-cover max-w-[80px] rounded-[4px]"
                  src="./assets/images/avatar-6.png"
                  alt="avatar"
                />
                <div>
                  <p className="text-lead font-bold mb-[3px]">Wade Warren</p>
                  <p className="text-md text-gray-500">Krusty Krab</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl py-[40px] px-[30px] md:py-[55px] md:px-[48px] hover:translate-y-[-3px] transition-all duration-300 bg-white">
              <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[30px]">
                Our success stories
              </h4>
              <p className="text-text text-gray-600 mb-[30px]">
                “It has been an absolute pleasure dealing with Scan during the
                lockdown. Our church began to livestream our services, and Scan
                had a great selection of hardware....”
              </p>
              <div className="flex items-center gap-6">
                <img
                  className="h-full w-full object-cover max-w-[80px] rounded-[4px]"
                  src="./assets/images/avatar-7.png"
                  alt="avatar"
                />
                <div>
                  <p className="text-lead font-bold mb-[3px]">
                    Leslie Alexander
                  </p>
                  <p className="text-md text-gray-500">Rundofase</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl py-[40px] px-[30px] md:py-[55px] md:px-[48px] hover:translate-y-[-3px] transition-all duration-300 bg-white">
              <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[30px]">
                This is simply unbelievable
              </h4>
              <p className="text-text text-gray-600 mb-[30px]">
                “I was also lucky enough to read @Coding_Career early and I was
                thoroughly blown away! It’s the book I wish I had when I started
                my dev career.”
              </p>
              <div className="flex items-center gap-6">
                <img
                  className="h-full w-full object-cover max-w-[80px] rounded-[4px]"
                  src="./assets/images/avatar-8.png"
                  alt="avatar"
                />
                <div>
                  <p className="text-lead font-bold mb-[3px]">Jenny Wilson</p>
                  <p className="text-md text-gray-500">Soylent Corp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 mx-auto lg:mt-[141px] max-w-[1248px]">
        <div className="text-center relative mb-[70px] md:mb-[90px]">
          <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] w-full">
            Frequently Asked Questions
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600 mx-auto md:w-[51ch]">
            Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
            primis a libero tempus, blandit and cursus varius and magnis sapien
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[70px] gap-y-[30px]">
          <div className="flex items-start gap-3">
            <img
              src="./assets/images/icons/icon-question.svg"
              alt="question icon"
            />
            <div>
              <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">
                Can I see the demo before purchasing?
              </h4>
              <p className="text-text text-gray-500">
                Etiam amet mauris suscipit in odio integer congue metus vitae
                arcu mollis blandit ultrice ligula egestas and magna suscipit
                lectus magna suscipit luctus blandit vitae
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img
              src="./assets/images/icons/icon-question.svg"
              alt="question icon"
            />
            <div>
              <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">
                Can I use your system on different devices?
              </h4>
              <p className="text-text text-gray-500">
                Etiam amet mauris suscipit in odio integer congue metus vitae
                arcu mollis blandit ultrice ligula egestas and magna suscipit
                lectus magna suscipit luctus blandit vitae
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img
              src="./assets/images/icons/icon-question.svg"
              alt="question icon"
            />
            <div>
              <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">
                Can I import my sitemap to your system?
              </h4>
              <p className="text-text text-gray-500">
                Etiam amet mauris suscipit in odio integer congue metus vitae
                arcu mollis blandit ultrice ligula egestas and magna suscipit
                lectus magna suscipit luctus blandit vitae
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img
              src="./assets/images/icons/icon-question.svg"
              alt="question icon"
            />
            <div>
              <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">
                Can I cancel my subscription at any time?
              </h4>
              <p className="text-text text-gray-500">
                Etiam amet mauris suscipit in odio integer congue metus vitae
                arcu mollis blandit ultrice ligula egestas and magna suscipit
                lectus magna suscipit luctus blandit vitae
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img
              src="./assets/images/icons/icon-question.svg"
              alt="question icon"
            />
            <div>
              <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">
                How can I switch my subscription between essential, and premium
                plan
              </h4>
              <p className="text-text text-gray-500">
                Etiam amet mauris suscipit in odio integer congue metus vitae
                arcu mollis blandit ultrice ligula egestas and magna suscipit
                lectus magna suscipit luctus blandit vitae
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img
              src="./assets/images/icons/icon-question.svg"
              alt="question icon"
            />
            <div>
              <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">
                Is there an additional discount when paid annually?
              </h4>
              <p className="text-text text-gray-500">
                Etiam amet mauris suscipit in odio integer congue metus vitae
                arcu mollis blandit ultrice ligula egestas and magna suscipit
                lectus magna suscipit luctus blandit vitae
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img
              src="./assets/images/icons/icon-question.svg"
              alt="question icon"
            />
            <div>
              <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">
                I have an issue with my account
              </h4>
              <p className="text-text text-gray-500">
                Etiam amet mauris suscipit in odio integer congue metus vitae
                arcu mollis blandit ultrice ligula egestas and magna suscipit
                lectus magna suscipit luctus blandit vitae
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img
              src="./assets/images/icons/icon-question.svg"
              alt="question icon"
            />
            <div>
              <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">
                What happens if I don’t renew my license after one year?
              </h4>
              <p className="text-text text-gray-500">
                Etiam amet mauris suscipit in odio integer congue metus vitae
                arcu mollis blandit ultrice ligula egestas and magna suscipit
                lectus magna suscipit luctus blandit vitae
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img
              src="./assets/images/icons/icon-question.svg"
              alt="question icon"
            />
            <div>
              <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">
                Do you have a free trial?
              </h4>
              <p className="text-text text-gray-500">
                Etiam amet mauris suscipit in odio integer congue metus vitae
                arcu mollis blandit ultrice ligula egestas and magna suscipit
                lectus magna suscipit luctus blandit vitae
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img
              src="./assets/images/icons/icon-question.svg"
              alt="question icon"
            />
            <div>
              <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">
                What kind of payment methods do you provide?
              </h4>
              <p className="text-text text-gray-500">
                Etiam amet mauris suscipit in odio integer congue metus vitae
                arcu mollis blandit ultrice ligula egestas and magna suscipit
                lectus magna suscipit luctus blandit vitae
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] gap-5 mx-auto bg-orange-100 px-[15px] py-[50px] md:flex md:px-[52px] md:py-[72px] lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px] mt-[70px] lg:mt-[138px]">
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
              <p className="text-heading-6 font-chivo font-bold">
                Ready to get started?
              </p>
              <button type="button">
                {" "}
                <a
                  className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-white bg-gray-900 w-fit"
                  href="#"
                >
                  <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                    Create an Account
                  </span>
                </a>
              </button>
            </div>
          </div>
          <div className="w-full bg-gray-200 h-[1px] mb-[52px]" />
          <div className="text-gray-600 grid gird-cols-1 gap-8 mb-[48px] md:grid-cols-2 lg:grid-cols-5 xl:gap-[98px]">
            <div>
              <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
                Contact
              </h5>
              <p className="text-text mb-5">
                Amritsar Punjab, Pune Maharashtra
              </p>
              <p className="text-text underline">+91 82890 - 36681</p>
              <p className="text-text underline">support@ekonkarkolhu.shop</p>
            </div>
            <div>
              <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
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
              <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
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
              <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
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
              <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
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

export default Pricing1;
