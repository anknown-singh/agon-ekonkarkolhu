import React from "react";

const Home6 = () => (
  <div>
    <meta charSet="utf-8" />
    <title>Home Page 6</title>
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
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 items-center lg:flex">
        <div className="lg:w-[70%] mb-[80px]">
          <span className="font-chivo inline-block bg-green-900 text-white py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[29px]">
            Digital Marketing Agency
          </span>
          <h1 className="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[54px]">
            The Fastest way to achieve success
          </h1>
          <p className="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[150px] mb-[44px]">
            It was popularised in the 1960s with the release sheets. We bring
            the right people together
          </p>
          <div className="flex items-center justify-start mb-[50px]">
            <button type="button">
              {" "}
              <a
                className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-white bg-black text-heading-6 tracking-wide mr-[22px]"
                href="#"
              >
                <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
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
                className="text-base flex items-center font-chivo font-medium text-[18px] leading-[18px] gap-[5px]"
                href="/"
              >
                How it works
              </a>
            </div>
          </div>
        </div>
        <div className="hidden relative lg:block">
          <img
            className="relative z-10 animate-hero-thumb-sm-animation"
            src="./assets/images/hero-6.png"
            alt="Agon"
          />
          <img
            className="absolute z-0 animate-float -right-1/4 top-[15%]"
            src="./assets/images/chart-1.png"
            alt="chart image"
          />
          <img
            className="absolute animate-float top-1/2"
            src="./assets/images/icons/line-chart.svg"
            alt="line image"
          />
        </div>
      </div>
      <div className="full-width bg-bg-6 z-50">
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 mx-auto hidden !mt-0 max-w-[1320px] lg:flex gap-[30px] -translate-y-[30%]">
          <div className="rounded-2xl p-[20px] xl:p-[30px] border border-gray-200 bg-white group flex-1">
            <a className="flex flex-col justify-between h-full" href="#">
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]">
                  <img
                    className="rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white"
                    src="./assets/images/icons/icon-media.svg"
                    alt
                  />
                </div>
                <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">
                  Computer for Designer, Art
                </h4>
              </div>
              <img
                className="object-cover rounded-2xl aspect-[285/160]"
                src="./assets/images/thumbnail-3.png"
                alt="Agon"
              />
            </a>
          </div>
          <div className="rounded-2xl p-[20px] xl:p-[30px] border border-gray-200 bg-white group flex-1">
            <a className="flex flex-col justify-between h-full" href="#">
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]">
                  <img
                    className="rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white"
                    src="./assets/images/icons/icon-account.svg"
                    alt
                  />
                </div>
                <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">
                  Computer for Designer, Art
                </h4>
              </div>
              <img
                className="object-cover rounded-2xl aspect-[285/160]"
                src="./assets/images/thumbnail-4.png"
                alt="Agon"
              />
            </a>
          </div>
          <div className="rounded-2xl p-[20px] p-[30px] border border-gray-200 group bg-white flex-[1.4]">
            <a className="flex h-full" href="#">
              <div className="flex flex-col gap-1">
                <div className="bg-opacity-20 rounded-full transition-all duration-200 w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-green-900">
                  <img
                    className="rounded-full p-[8px] xl:p-[18px] max-w-[60px] group-hover:filter-white"
                    src="./assets/images/icons/icon-business.svg"
                    alt
                  />
                </div>
                <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">
                  Computer for Designer, Art
                </h4>
                <p className="text-gray-500 text-[14px] xl:text-lead-lg xl:mb-5">
                  Real-time display of data
                </p>
                <img
                  className="w-[18px]"
                  src="./assets/images/icons/icon-right-arrow.svg"
                  alt="arrow icon"
                />
              </div>
              <img
                className="object-cover rounded-2xl xl:max-h-[249px] xl:max-w-[188px] max-w-[50%]"
                src="./assets/images/thumbnail-2.png"
                alt="Agon"
              />
            </a>
          </div>
          <div className="flex items-center gap-5">
            <div className="grid place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 undefined-prev">
              <img
                className="group-hover:filter-white"
                src="./assets/images/icons/icon-prev.svg"
                alt="control icon button"
              />
            </div>
            <div className="grid place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 undefined-next">
              <img
                className="group-hover:filter-white"
                src="./assets/images/icons/icon-next.svg"
                alt="control icon button"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 gap-8 flex flex-col lg:mt-[137px] lg:flex-row xl:gap-[180px]">
        <div className="grid grid-cols-1 flex-1 gap-[30px] md:grid-cols-2 xl:gap-y-[70px]">
          <div>
            <h1 className="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1">
              17+
            </h1>
            <p className="text-quote mb-3">Our Office</p>
            <p className="text-text text-gray-500 mx-auto md:w-[26ch]">
              We always provide people a complete solution upon focused of any
              business
            </p>
          </div>
          <div>
            <h1 className="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1">
              2K+
            </h1>
            <p className="text-quote mb-3">Completed Cases</p>
            <p className="text-text text-gray-500 mx-auto md:w-[26ch]">
              We always provide people a complete solution upon focused of any
              business
            </p>
          </div>
          <div>
            <h1 className="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1">
              28+
            </h1>
            <p className="text-quote mb-3">Happy Clients</p>
            <p className="text-text text-gray-500 mx-auto md:w-[26ch]">
              We always provide people a complete solution upon focused of any
              business
            </p>
          </div>
          <div>
            <h1 className="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1">
              86
            </h1>
            <p className="text-quote mb-3">Skilled People</p>
            <p className="text-text text-gray-500 mx-auto md:w-[26ch]">
              We always provide people a complete solution upon focused of any
              business
            </p>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-extrabold font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 mb-[30px] lg:mb-[53px]">
            Tell us about your business, we are ready to solve.
          </h1>
          <div className="bg-white py-3 px-4 flex items-center justify-between border border-gray-100 input-shadow rounded-[10px] mb-[49px]">
            <input
              className="outline-none ml-5 w-1/2"
              type="text"
              placeholder="Enter you mail .."
            />
            <div>
              <button className="flex items-center transition-colors duration-200 py-[17px] px-[26px] rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-900 whitespace-nowrap flex-1 w-fit gap-5">
                Get A Quote
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
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-[10px]">
              <img src="./assets/images/icons/icon-tick.svg" alt="icon" />
              <span className="text-md text-gray-500">
                Subscribe Newsletter
              </span>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src="./assets/images/icons/icon-tick.svg" alt="icon" />
              <span className="text-md text-gray-500">Get The Latest News</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[234px]">
        <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-bg-2">
          <div className="relative mx-auto max-w-[1190px] -translate-y-[50%] md:-translate-y-[30%] mb-[-50px]">
            <img
              className="h-full w-full object-cover rounded-2xl"
              src="./assets/images/thumbnail-12.png"
              alt="Agon"
            />
            <button className="rounded-full bg-white grid place-items-center absolute play-video w-[100px] h-[100px] lg:w-[138px] lg:h-[138px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img
                src="./assets/images/icons/icon-play.svg"
                alt="play button"
                width={26}
              />
            </button>
          </div>
          <div className="lg:flex lg:items-center gap-[30px]">
            <div className="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] last:mb-0">
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
            <div className="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] last:mb-0">
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
            <div className="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px]">
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
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[150px]">
        <div className="lg:grid lg:grid-cols-2 gap-[150px]">
          <img
            className="h-full w-full object-cover rounded-2xl order-0 mb-[30px] lg:mb-0 lg:flex-1"
            src="./assets/images/thumbnail-14.png"
            alt="Agon"
          />
          <div className="flex-1 order-1 items-center lg:gap-[30px] xl:gap-[45px] !grid-cols-[637px_1fr]">
            <span className="font-chivo inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">
              What We Do, What You Get
            </span>
            <h3 className="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">
              Exceptional Solution for Digital Business Model
            </h3>
            <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
              In a professional context it often happens that private or
              corporate clients order a publication news while still not being
              ready.
            </p>
            <div className="border border-green-900 border-dashed mb-[48px]" />
            <div className="md:grid md:grid-cols-2 md:gap-y-[22px] lg:gap-x-[70px]">
              <div className="mb-[30px] lg:mb-0">
                <div className="flex items-center">
                  <img
                    className="mr-[9px]"
                    src="./assets/images/icons/icon-leaf.svg"
                    alt="leaf icon"
                  />
                  <h4 className="text-heading-6 font-chivo font-bold">
                    Boost your sale
                  </h4>
                </div>
              </div>
              <div className="mb-[30px] lg:mb-0">
                <div className="flex items-center">
                  <img
                    className="mr-[9px]"
                    src="./assets/images/icons/icon-leaf.svg"
                    alt="leaf icon"
                  />
                  <h4 className="text-heading-6 font-chivo font-bold">
                    Smart Installation Tools
                  </h4>
                </div>
              </div>
              <div className="mb-[30px] lg:mb-0">
                <div className="flex items-center">
                  <img
                    className="mr-[9px]"
                    src="./assets/images/icons/icon-leaf.svg"
                    alt="leaf icon"
                  />
                  <h4 className="text-heading-6 font-chivo font-bold">
                    Introducing New Features
                  </h4>
                </div>
              </div>
              <div className="mb-[30px] lg:mb-0">
                <div className="flex items-center">
                  <img
                    className="mr-[9px]"
                    src="./assets/images/icons/icon-leaf.svg"
                    alt="leaf icon"
                  />
                  <h4 className="text-heading-6 font-chivo font-bold">
                    Dynamic Boosting
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[90px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[24px] lg:grid-cols-6">
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
        </div>
      </div>
      <div className="full-width bg-gray-100">
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 mx-auto lg:mt-[143px] max-w-[1320px]">
          <div className="bg-gray-100 relative p-[40px] md:pt-[91px] md:pr-[98px] md:pb-[86px] md:pl-[92px]">
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
                  <p className="text-text text-gray-600">
                    4517 Washington Ave.
                  </p>
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
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[138px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-[45px] md:mb-[87px]">
          <div>
            <h2 className="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
              Latest News
            </h2>
            <p className="text-quote md:text-lead-lg text-gray-600">
              From Our blog and Event fanpage
            </p>
          </div>
          <button type="button">
            {" "}
            <a
              className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-white bg-gray-900 w-fit"
              href="#"
            >
              <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
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
            <p className="text-heading-4 font-chivo font-bold inline-block mb-[26px]">
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
            <p className="text-heading-4 font-chivo font-bold inline-block mb-[26px]">
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
            <p className="text-heading-4 font-chivo font-bold inline-block mb-[26px]">
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
          <a className="block group" href="/single">
            <div className="flex items-center mb-[11px]">
              <div className="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" />
              <span className="uppercase text-gray-500">company</span>
            </div>
            <p className="text-heading-4 font-chivo font-bold inline-block mb-[26px]">
              We can blend colors multiple ways, the most common
            </p>
            <div className="relative mb-16">
              <div className="relative">
                <div className="pr-[26px] aspect-[430/275]">
                  <img
                    className="h-full w-full object-cover rounded-2xl z-10 relative object-cover"
                    src="./assets/images/thumbnail-1.png"
                    alt="Agon"
                  />
                </div>
                <div className="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                  <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" />
                </div>
              </div>
            </div>
          </a>
          <a className="block group" href="/single">
            <div className="flex items-center mb-[11px]">
              <div className="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" />
              <span className="uppercase text-gray-500">Marketing Event</span>
            </div>
            <p className="text-heading-4 font-chivo font-bold inline-block mb-[26px]">
              How To Blow Through Capital At An Incredible Rate
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
                  <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-8 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" />
                </div>
              </div>
            </div>
          </a>
          <a className="block group" href="/single">
            <div className="flex items-center mb-[11px]">
              <div className="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" />
              <span className="uppercase text-gray-500">Customer Services</span>
            </div>
            <p className="text-heading-4 font-chivo font-bold inline-block mb-[26px]">
              Design Studios That Everyone Should Know About?
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
                  <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-1 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" />
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

export default Home6;
