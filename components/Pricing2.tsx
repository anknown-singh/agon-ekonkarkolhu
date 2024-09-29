import React from "react";

const Pricing2 = () => (
  <div>
    <meta charSet="utf-8" />
    <title>Pricing 2 Page</title>
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
      <img
        className="absolute w-full top-0 left-0 z-[-1] aspect-[1920/866]"
        src="./assets/images/pricing-2-bg.png"
        alt="image"
      />
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[139px]">
        <div className="text-center mb-10 md:mb-[80px]">
          <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
            Choose The Best Plan That’s For You
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p>
        </div>
        <div className="input-shadow bg-white p-5 rounded-[36px] lg:py-[72px] lg:px-[66px] lg:flex lg:gap-[38px] mb-[80px]">
          <div className="bg-green-900 py-10 px-5 rounded-2xl flex-1 lg:py-10 lg:px-12 mb-[30px] lg:mb-0">
            <div className="inline-block bg-green-500 py-1 bill-monthly bill px-[6px] rounded-[28px] mb-[55px]">
              <span className="inline-block text-text text-white py-2 bg-green-900 cursor-pointer btn-text-monthly px-[21px] rounded-[24px]">
                Monthly
              </span>
              <span className="inline-block text-text text-white py-2 cursor-pointer btn-text-yearly px-[21px] rounded-[24px]">
                Yearly
              </span>
            </div>
            <ul className="text-white text-text px-5">
              <li className="flex items-center justify-between mb-10 lg:mb-12">
                <span>Unlimited updates</span>
                <img
                  src="./assets/images/icons/icon-check-green.svg"
                  alt="icon check"
                />
              </li>
              <li className="flex items-center justify-between mb-10 lg:mb-12">
                <span>Custom designs & features</span>
                <img
                  src="./assets/images/icons/icon-check-green.svg"
                  alt="icon check"
                />
              </li>
              <li className="flex items-center justify-between mb-10 lg:mb-12">
                <span>Custom permissions</span>
                <img
                  src="./assets/images/icons/icon-check-green.svg"
                  alt="icon check"
                />
              </li>
              <li className="flex items-center justify-between mb-10 lg:mb-12">
                <span>Custom instructors</span>
                <img
                  src="./assets/images/icons/icon-x-green.svg"
                  alt="icon X"
                />
              </li>
              <li className="flex items-center justify-between mb-5">
                <span>Many devices</span>
                <img
                  src="./assets/images/icons/icon-x-green.svg"
                  alt="icon X"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 flex-1 package">
            <div className="border border-gray-400 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 p-[25px] bill-monthly block-price-item active">
              <div className="flex items-center gap-5 lg:gap-[35px]">
                <div className="block-price-icon w-[26px] h-[26px] bg-[url(/assets/images/icons/icon-checkbox.svg)]" />
                <div>
                  <p className="text-heading-5 font-chivo font-bold mb-[14px]">
                    Standard
                  </p>
                  <p className="text-text px-3 bg-gray-500 text-white discount rounded-[14px]">
                    Save 20%
                  </p>
                </div>
              </div>
              <div>
                <span className="text-heading-3 font-bold font-chivo">$35</span>
                <span className="text-sm font-bold text-gray-400 price-length ml-[2px]">
                  /Month
                </span>
              </div>
            </div>
            <div className="border border-gray-400 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 p-[25px] bill-monthly block-price-item">
              <div className="flex items-center gap-5 lg:gap-[35px]">
                <div className="block-price-icon w-[26px] h-[26px] bg-[url(/assets/images/icons/icon-checkbox.svg)]" />
                <div>
                  <p className="text-heading-5 font-chivo font-bold mb-[14px]">
                    Standard
                  </p>
                  <p className="text-text px-3 bg-gray-500 text-white discount rounded-[14px]">
                    Save 20%
                  </p>
                </div>
              </div>
              <div>
                <span className="text-heading-3 font-bold font-chivo">$89</span>
                <span className="text-sm font-bold text-gray-400 price-length ml-[2px]">
                  /Month
                </span>
              </div>
            </div>
            <div className="border border-gray-400 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 p-[25px] bill-monthly block-price-item">
              <div className="flex items-center gap-5 lg:gap-[35px]">
                <div className="block-price-icon w-[26px] h-[26px] bg-[url(/assets/images/icons/icon-checkbox.svg)]" />
                <div>
                  <p className="text-heading-5 font-chivo font-bold mb-[14px]">
                    Standard
                  </p>
                  <p className="text-text px-3 bg-gray-500 text-white discount rounded-[14px]">
                    Save 20%
                  </p>
                </div>
              </div>
              <div>
                <span className="text-heading-3 font-bold font-chivo">
                  $125
                </span>
                <span className="text-sm font-bold text-gray-400 price-length ml-[2px]">
                  /Month
                </span>
              </div>
            </div>
            <div className="border border-gray-400 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 p-[25px] bill-monthly block-price-item">
              <div className="flex items-center gap-5 lg:gap-[35px]">
                <div className="block-price-icon w-[26px] h-[26px] bg-[url(/assets/images/icons/icon-checkbox.svg)]" />
                <div>
                  <p className="text-heading-5 font-chivo font-bold mb-[14px]">
                    Standard
                  </p>
                  <p className="text-text px-3 bg-gray-500 text-white discount rounded-[14px]">
                    Save 20%
                  </p>
                </div>
              </div>
              <div>
                <span className="text-heading-3 font-bold font-chivo">
                  $199
                </span>
                <span className="text-sm font-bold text-gray-400 price-length ml-[2px]">
                  /Month
                </span>
              </div>
            </div>
            <div className="border border-gray-400 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 p-[25px] bill-annually block-price-item active">
              <div className="flex items-center gap-5 lg:gap-[35px]">
                <div className="block-price-icon w-[26px] h-[26px] bg-[url(/assets/images/icons/icon-checkbox.svg)]" />
                <div>
                  <p className="text-heading-5 font-chivo font-bold mb-[14px]">
                    Standard
                  </p>
                  <p className="text-text px-3 bg-gray-500 text-white discount rounded-[14px]">
                    Save 20%
                  </p>
                </div>
              </div>
              <div>
                <span className="text-heading-3 font-bold font-chivo">
                  $420
                </span>
                <span className="text-sm font-bold text-gray-400 price-length ml-[2px]">
                  /Year
                </span>
              </div>
            </div>
            <div className="border border-gray-400 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 p-[25px] bill-annually block-price-item">
              <div className="flex items-center gap-5 lg:gap-[35px]">
                <div className="block-price-icon w-[26px] h-[26px] bg-[url(/assets/images/icons/icon-checkbox.svg)]" />
                <div>
                  <p className="text-heading-5 font-chivo font-bold mb-[14px]">
                    Standard
                  </p>
                  <p className="text-text px-3 bg-gray-500 text-white discount rounded-[14px]">
                    Save 20%
                  </p>
                </div>
              </div>
              <div>
                <span className="text-heading-3 font-bold font-chivo">
                  $1068
                </span>
                <span className="text-sm font-bold text-gray-400 price-length ml-[2px]">
                  /Year
                </span>
              </div>
            </div>
            <div className="border border-gray-400 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 p-[25px] bill-annually block-price-item">
              <div className="flex items-center gap-5 lg:gap-[35px]">
                <div className="block-price-icon w-[26px] h-[26px] bg-[url(/assets/images/icons/icon-checkbox.svg)]" />
                <div>
                  <p className="text-heading-5 font-chivo font-bold mb-[14px]">
                    Standard
                  </p>
                  <p className="text-text px-3 bg-gray-500 text-white discount rounded-[14px]">
                    Save 20%
                  </p>
                </div>
              </div>
              <div>
                <span className="text-heading-3 font-bold font-chivo">
                  $1500
                </span>
                <span className="text-sm font-bold text-gray-400 price-length ml-[2px]">
                  /Year
                </span>
              </div>
            </div>
            <div className="border border-gray-400 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 p-[25px] bill-annually block-price-item">
              <div className="flex items-center gap-5 lg:gap-[35px]">
                <div className="block-price-icon w-[26px] h-[26px] bg-[url(/assets/images/icons/icon-checkbox.svg)]" />
                <div>
                  <p className="text-heading-5 font-chivo font-bold mb-[14px]">
                    Standard
                  </p>
                  <p className="text-text px-3 bg-gray-500 text-white discount rounded-[14px]">
                    Save 20%
                  </p>
                </div>
              </div>
              <div>
                <span className="text-heading-3 font-bold font-chivo">
                  $2388
                </span>
                <span className="text-sm font-bold text-gray-400 price-length ml-[2px]">
                  /Year
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex items-center justify-center flex-col gap-5 md:flex-row">
          <button type="button">
            {" "}
            <a
              className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px]"
              href="#"
            >
              <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                Start free trial
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
              className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px]"
              href="#"
            >
              <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                View plans comparison
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
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[104px]">
        <div className="text-center mb-[104px]">
          <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 max-w-[16ch] max-w-[725px]">
            Compare Pricing Packages
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-text text-center min-w-[800px]">
            <thead className="pb-8">
              <tr>
                <th className="pb-9"> </th>
                <th className="pb-9">
                  <p className="text-heading-4 font-chivo mb-3">Basic</p>
                  <p className="text-text text-gray-400 font-normal">
                    On request
                  </p>
                </th>
                <th className="pb-9">
                  <p className="text-heading-4 font-chivo mb-3">Premium</p>
                  <p className="text-text text-gray-400 font-normal">
                    On request
                  </p>
                </th>
                <th className="pb-9">
                  <p className="text-heading-4 font-chivo mb-3">Enterprise</p>
                  <p className="text-text text-gray-400 font-normal">
                    On request
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-gray-100">
                <td className="text-left p-[15px] rounded-tl-[5px] rounded-bl-[5px]">
                  <span>Members</span>
                  <i className="inline-block align-middle ml-3">
                    <img
                      src="./assets/images/icons/icon-question-gray.svg"
                      alt="question mark icon"
                    />
                  </i>
                </td>
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">
                  1
                </td>
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">
                  Up to 3
                </td>
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">
                  Unlimited
                </td>
              </tr>
              <tr className="odd:bg-gray-100">
                <td className="text-left p-[15px] rounded-tl-[5px] rounded-bl-[5px]">
                  <span>Workspace roles</span>
                  <span className="ml-3 text-gray-400 border text-sm font-bold px-[5px] rounded-[20px] border-[#818B98]">
                    soon
                  </span>
                  <i className="inline-block align-middle ml-3">
                    <img
                      src="./assets/images/icons/icon-question-gray.svg"
                      alt="question mark icon"
                    />
                  </i>
                </td>
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">
                  Admin only
                </td>
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">
                  Admin only
                </td>
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">
                  Admin & collaborator
                </td>
              </tr>
              <tr className="odd:bg-gray-100">
                <td className="text-left p-[15px] rounded-tl-[5px] rounded-bl-[5px]">
                  <span>Guests</span>
                  <span className="ml-3 text-gray-400 border text-sm font-bold px-[5px] rounded-[20px] border-[#818B98]">
                    soon
                  </span>
                  <i className="inline-block align-middle ml-3">
                    <img
                      src="./assets/images/icons/icon-question-gray.svg"
                      alt="question mark icon"
                    />
                  </i>
                </td>
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]" />
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]" />
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">
                  <img
                    className="mx-auto"
                    src="./assets/images/icons/icon-checkmark.svg"
                    alt="checkmark icon"
                  />
                </td>
              </tr>
              <tr className="odd:bg-gray-100">
                <td className="text-left p-[15px] rounded-tl-[5px] rounded-bl-[5px]">
                  <span>Live collaboration</span>
                  <span className="ml-3 text-gray-400 border text-sm font-bold px-[5px] rounded-[20px] border-[#818B98]">
                    soon
                  </span>
                  <i className="inline-block align-middle ml-3">
                    <img
                      src="./assets/images/icons/icon-question-gray.svg"
                      alt="question mark icon"
                    />
                  </i>
                </td>
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]" />
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">
                  <img
                    className="mx-auto"
                    src="./assets/images/icons/icon-checkmark.svg"
                    alt="checkmark icon"
                  />
                </td>
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">
                  <img
                    className="mx-auto"
                    src="./assets/images/icons/icon-checkmark.svg"
                    alt="checkmark icon"
                  />
                </td>
              </tr>
              <tr className="odd:bg-gray-100">
                <td className="text-left p-[15px] rounded-tl-[5px] rounded-bl-[5px]">
                  <span>Integration of sub-brands</span>
                  <i className="inline-block align-middle ml-3">
                    <img
                      src="./assets/images/icons/icon-question-gray.svg"
                      alt="question mark icon"
                    />
                  </i>
                </td>
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]" />
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">
                  <img
                    className="mx-auto"
                    src="./assets/images/icons/icon-checkmark.svg"
                    alt="checkmark icon"
                  />
                </td>
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">
                  <img
                    className="mx-auto"
                    src="./assets/images/icons/icon-checkmark.svg"
                    alt="checkmark icon"
                  />
                </td>
              </tr>
              <tr className="odd:bg-gray-100">
                <td className="text-left p-[15px] rounded-tl-[5px] rounded-bl-[5px]">
                  <span>Access to standard templates</span>
                  <i className="inline-block align-middle ml-3">
                    <img
                      src="./assets/images/icons/icon-question-gray.svg"
                      alt="question mark icon"
                    />
                  </i>
                </td>
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">
                  <img
                    className="mx-auto"
                    src="./assets/images/icons/icon-checkmark.svg"
                    alt="checkmark icon"
                  />
                </td>
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">
                  <img
                    className="mx-auto"
                    src="./assets/images/icons/icon-checkmark.svg"
                    alt="checkmark icon"
                  />
                </td>
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">
                  <img
                    className="mx-auto"
                    src="./assets/images/icons/icon-checkmark.svg"
                    alt="checkmark icon"
                  />
                </td>
              </tr>
              <tr className="odd:bg-gray-100">
                <td className="text-left p-[15px] rounded-tl-[5px] rounded-bl-[5px]">
                  <span>Access to pro templates</span>
                  <i className="inline-block align-middle ml-3">
                    <img
                      src="./assets/images/icons/icon-question-gray.svg"
                      alt="question mark icon"
                    />
                  </i>
                </td>
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]" />
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">
                  <img
                    className="mx-auto"
                    src="./assets/images/icons/icon-checkmark.svg"
                    alt="checkmark icon"
                  />
                </td>
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">
                  <img
                    className="mx-auto"
                    src="./assets/images/icons/icon-checkmark.svg"
                    alt="checkmark icon"
                  />
                </td>
              </tr>
              <tr className="odd:bg-gray-100">
                <td className="text-left p-[15px] rounded-tl-[5px] rounded-bl-[5px]">
                  <span>Custom designed templates</span>
                  <i className="inline-block align-middle ml-3">
                    <img
                      src="./assets/images/icons/icon-question-gray.svg"
                      alt="question mark icon"
                    />
                  </i>
                </td>
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]" />
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]" />
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">
                  <img
                    className="mx-auto"
                    src="./assets/images/icons/icon-checkmark.svg"
                    alt="checkmark icon"
                  />
                </td>
              </tr>
              <tr className="odd:bg-gray-100">
                <td className="text-left p-[15px] rounded-tl-[5px] rounded-bl-[5px]">
                  <span>Asset library</span>
                  <i className="inline-block align-middle ml-3">
                    <img
                      src="./assets/images/icons/icon-question-gray.svg"
                      alt="question mark icon"
                    />
                  </i>
                </td>
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">
                  <img
                    className="mx-auto"
                    src="./assets/images/icons/icon-checkmark.svg"
                    alt="checkmark icon"
                  />
                </td>
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">
                  <img
                    className="mx-auto"
                    src="./assets/images/icons/icon-checkmark.svg"
                    alt="checkmark icon"
                  />
                </td>
                <td className="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">
                  <img
                    className="mx-auto"
                    src="./assets/images/icons/icon-checkmark.svg"
                    alt="checkmark icon"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[138px]">
        <div className="text-center mb-[45px]">
          <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-full">
            Providing solutions of every kind
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
              <h3 className="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">
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
              <h3 className="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">
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
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[133px]">
        <div className="text-center mb-[30px] md:mb-[90px]">
          <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
            Discover powerful features to boost your productivity
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit laborum — semper quis lectus nulla.
          </p>
        </div>
        <div className="mx-auto lg:flex gap-[30px] max-w-[1190px]">
          <div className="text-center rounded-2xl p-5 max-h-[300px] md:max-h-[450px] lg:max-h-[380px] xl:max-h-[455px] md:p-14 mb-[150px] md:mb-[300px] lg:mb-0 transition-all duration-300 hover:translate-y-[-3px] bg-bg-2">
            <h3 className="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[18px]">
              Cross-Platform
            </h3>
            <p className="text-md text-gray-600 mb-[22px] lg:mx-16">
              Your site is not complete with only landings. Get essential inner
              pages using our ready demos.
            </p>
            <img
              className="p-5 rounded-2xl object-cover mx-auto w-full bg-[#EBECF4]"
              src="./assets/images/thumbnail-8.png"
              alt="Feature image"
            />
          </div>
          <div className="text-center rounded-2xl p-5 max-h-[300px] md:max-h-[450px] lg:max-h-[380px] xl:max-h-[455px] md:p-14 mb-[150px] md:mb-[300px] lg:mb-0 transition-all duration-300 hover:translate-y-[-3px] bg-bg-6">
            <h3 className="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[18px]">
              Extremely Flexible
            </h3>
            <p className="text-md text-gray-600 mb-[22px] lg:mx-16">
              Your site is not complete with only landings. Get essential inner
              pages using our ready demos.
            </p>
            <img
              className="p-5 rounded-2xl object-cover mx-auto w-full bg-[#EBECF4]"
              src="./assets/images/thumbnail-9.png"
              alt="Feature image"
            />
          </div>
        </div>
        <div className="bg-gray-100 relative p-[40px] md:pt-[91px] md:pr-[98px] md:pb-[86px] md:pl-[92px] mt-[260px] rounded-[56px]">
          <div className="mx-auto relative max-w-[1320px]">
            <img
              className="absolute right-0 max-w-[129px] top-[-50px]"
              src="./assets/images/mail.png"
              alt="mail image"
            />
            <p className="text-capitalized text-gray-500 uppercase tracking-[2px] mb-[15px]">
              Contact us
            </p>
            <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[22px]">
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
                  <p className="text-heading-6 font-bold font-chivo">
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
                    className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                    type="text"
                    placeholder="Enter your name"
                  />
                  <input
                    className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                    type="text"
                    placeholder="Company (optional)"
                  />
                </div>
                <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                  <input
                    className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                    type="text"
                    placeholder="Your email"
                  />
                  <input
                    className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
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
                    className="flex items-center transition-colors duration-200 px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] font-chivo font-semibold text-md md:text-lg text-white bg-gray-900 w-fit"
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
                    By clicking contact us button, you agree our terms and
                    policy,
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] gap-5 mx-auto bg-orange-100 px-[15px] py-[50px] md:flex md:px-[52px] md:py-[72px] lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px] mt-[150px]">
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

export default Pricing2;
