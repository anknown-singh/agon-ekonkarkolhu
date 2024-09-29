import React from "react";

const Home5 = () => (
  <div>
    <meta charSet="utf-8" />
    <title>Home Page 5</title>
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
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[104px]">
        <div className="flex items-center">
          <div>
            <h3 className="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 text-gray-400 mb-[25px]">
              Exclusive Smart Watch
            </h3>
            <h1 className="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px]">
              Let go of the challenge
            </h1>
            <h1 className="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[45px]">
              See yourself better
            </h1>
            <p className="text-quote md:text-lead-lg text-gray-500 mb-[40px]">
              Real-time display of data such as exercise duration, mileage,
              heart rate, etc
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-[17px] mb-[70px]">
              <li className="flex items-center gap-[10px]">
                {" "}
                <img src="./assets/images/icons/icon-tick.svg" alt="icon" />
                <span className="text-md text-gray-500">Anti fingerprints</span>
              </li>
              <li className="flex items-center gap-[10px]">
                {" "}
                <img src="./assets/images/icons/icon-tick.svg" alt="icon" />
                <span className="text-md text-gray-500">Delicate touch</span>
              </li>
              <li className="flex items-center gap-[10px]">
                {" "}
                <img src="./assets/images/icons/icon-tick.svg" alt="icon" />
                <span className="text-md text-gray-500">Hardness screen</span>
              </li>
              <li className="flex items-center gap-[10px]">
                {" "}
                <img src="./assets/images/icons/icon-tick.svg" alt="icon" />
                <span className="text-md text-gray-500">Dust prevention</span>
              </li>
              <li className="flex items-center gap-[10px]">
                {" "}
                <img src="./assets/images/icons/icon-tick.svg" alt="icon" />
                <span className="text-md text-gray-500">3D anti-chip</span>
              </li>
              <li className="flex items-center gap-[10px]">
                {" "}
                <img src="./assets/images/icons/icon-tick.svg" alt="icon" />
                <span className="text-md text-gray-500">Impact resistant</span>
              </li>
            </ul>
            <div className="bg-white py-3 px-4 flex items-center justify-between border border-gray-100 input-shadow rounded-[10px]">
              <input
                className="outline-none ml-5 w-1/2"
                type="text"
                placeholder="Enter you mail .."
              />
              <div>
                <button className="flex items-center transition-colors duration-200 py-[17px] px-[26px] rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-900 whitespace-nowrap flex-1 w-fit gap-5">
                  Join Pre-Order
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
          <div className="relative hidden lg:block">
            <img
              className="h-full w-full object-cover animate-float-md"
              src="./assets/images/hero-5.png"
              alt="Agon"
            />
            <img
              className="absolute rounded-2xl animate-float max-w-[296px] -right-[45px] -bottom-[45px]"
              src="./assets/images/chart.png"
              alt="chart image"
            />
            <img
              className="absolute rounded-2xl animate-float bottom-0 left-[10%]"
              src="./assets/images/small-circle.png"
              alt="circle image"
            />
            <img
              className="absolute rounded-2xl animate-hero-thumb-sm-animation top-[-15px] left-[-40px]"
              src="./assets/images/medium-circle.png"
              alt="circle image"
            />
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
        <div className="grid grid-cols-1 items-center gap-[30px] lg:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl py-[18px] px-[13px] border border-gray-200 gap-2 w-full product-shadow transition-all duration-300 hover:translate-y-[-3px]">
            <a className="flex items-center" href="#">
              <img
                className="h-full w-full object-cover max-w-[170px]"
                src="./assets/images/product-sm-1.png"
                alt="product image"
              />
              <div className="font-chivo">
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
              <div className="font-chivo">
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
              <div className="font-chivo">
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
        <div className="flex items-center justify-between md:mb-[82px] mb-[40px]">
          <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 w-[16ch]">
            Featured Product For Pre-Order
          </h2>
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
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
            <div className="relative">
              {" "}
              <a href="#">
                {" "}
                <img
                  src="./assets/images/product-md-1.png"
                  alt="featured image product"
                />
              </a>
              <div className="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-heart.svg"
                    alt="heart icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-shuffle.svg"
                    alt="shuffle icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-eye.svg"
                    alt="eye icon"
                  />
                </a>
              </div>
            </div>
            <a className="flex flex-col justify-between flex-1" href="#">
              <div>
                <p className="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                <p className="text-lead font-bold mb-[11px]">
                  All Natural Italian-Style Chicken Meatballs
                </p>
                <div className="flex items-center gap-[10px] mb-9">
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
                    (86 rates)
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">
                    $22.51
                  </h4>
                  <span className="text-gray-400 line-through text-tiny lg:text-md">
                    $2.80
                  </span>
                </div>
                <button className="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">
                  Add +
                </button>
              </div>
            </a>
          </div>
          <div className="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
            <div className="relative">
              {" "}
              <a href="#">
                {" "}
                <img
                  src="./assets/images/product-md-2.png"
                  alt="featured image product"
                />
              </a>
              <div className="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-heart.svg"
                    alt="heart icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-shuffle.svg"
                    alt="shuffle icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-eye.svg"
                    alt="eye icon"
                  />
                </a>
              </div>
            </div>
            <a className="flex flex-col justify-between flex-1" href="#">
              <div>
                <p className="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                <p className="text-lead font-bold mb-[11px]">
                  All Natural Italian-Style Chicken Meatballs
                </p>
                <div className="flex items-center gap-[10px] mb-9">
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
                    <div className="flex items-center absolute overflow-hidden gap-[3px] w-[40%]">
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
                    (186 rates)
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">
                    $22.51
                  </h4>
                  <span className="text-gray-400 line-through text-tiny lg:text-md">
                    $2.80
                  </span>
                </div>
                <button className="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">
                  Add +
                </button>
              </div>
            </a>
          </div>
          <div className="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
            <div className="relative">
              {" "}
              <a href="#">
                {" "}
                <img
                  src="./assets/images/product-md-3.png"
                  alt="featured image product"
                />
              </a>
              <div className="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-heart.svg"
                    alt="heart icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-shuffle.svg"
                    alt="shuffle icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-eye.svg"
                    alt="eye icon"
                  />
                </a>
              </div>
            </div>
            <a className="flex flex-col justify-between flex-1" href="#">
              <div>
                <p className="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                <p className="text-lead font-bold mb-[11px]">
                  All Natural Italian-Style Chicken Meatballs
                </p>
                <div className="flex items-center gap-[10px] mb-9">
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
                    <div className="flex items-center absolute overflow-hidden gap-[3px] w-[60%]">
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
                    (826 rates)
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">
                    $22.51
                  </h4>
                  <span className="text-gray-400 line-through text-tiny lg:text-md">
                    $2.80
                  </span>
                </div>
                <button className="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">
                  Add +
                </button>
              </div>
            </a>
          </div>
          <div className="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
            <div className="relative">
              {" "}
              <a href="#">
                {" "}
                <img
                  src="./assets/images/product-md-4.png"
                  alt="featured image product"
                />
              </a>
              <div className="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-heart.svg"
                    alt="heart icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-shuffle.svg"
                    alt="shuffle icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-eye.svg"
                    alt="eye icon"
                  />
                </a>
              </div>
            </div>
            <a className="flex flex-col justify-between flex-1" href="#">
              <div>
                <p className="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                <p className="text-lead font-bold mb-[11px]">
                  All Natural Italian-Style Chicken Meatballs
                </p>
                <div className="flex items-center gap-[10px] mb-9">
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
                  <p className="text-tiny font-semibold text-gray-400">
                    (836 rates)
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">
                    $22.51
                  </h4>
                  <span className="text-gray-400 line-through text-tiny lg:text-md">
                    $2.80
                  </span>
                </div>
                <button className="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">
                  Add +
                </button>
              </div>
            </a>
          </div>
          <div className="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
            <div className="relative">
              {" "}
              <a href="#">
                {" "}
                <img
                  src="./assets/images/product-md-3.png"
                  alt="featured image product"
                />
              </a>
              <div className="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-heart.svg"
                    alt="heart icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-shuffle.svg"
                    alt="shuffle icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-eye.svg"
                    alt="eye icon"
                  />
                </a>
              </div>
            </div>
            <a className="flex flex-col justify-between flex-1" href="#">
              <div>
                <p className="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                <p className="text-lead font-bold mb-[11px]">
                  All Natural Italian-Style Chicken Meatballs
                </p>
                <div className="flex items-center gap-[10px] mb-9">
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
                    (122 rates)
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">
                    $22.51
                  </h4>
                  <span className="text-gray-400 line-through text-tiny lg:text-md">
                    $2.80
                  </span>
                </div>
                <button className="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">
                  Add +
                </button>
              </div>
            </a>
          </div>
          <div className="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
            <div className="relative">
              {" "}
              <a href="#">
                {" "}
                <img
                  src="./assets/images/product-md-1.png"
                  alt="featured image product"
                />
              </a>
              <div className="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-heart.svg"
                    alt="heart icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-shuffle.svg"
                    alt="shuffle icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-eye.svg"
                    alt="eye icon"
                  />
                </a>
              </div>
            </div>
            <a className="flex flex-col justify-between flex-1" href="#">
              <div>
                <p className="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                <p className="text-lead font-bold mb-[11px]">
                  All Natural Italian-Style Chicken Meatballs
                </p>
                <div className="flex items-center gap-[10px] mb-9">
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
                    <div className="flex items-center absolute overflow-hidden gap-[3px] w-[40%]">
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
                    (3 rates)
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">
                    $22.51
                  </h4>
                  <span className="text-gray-400 line-through text-tiny lg:text-md">
                    $2.80
                  </span>
                </div>
                <button className="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">
                  Add +
                </button>
              </div>
            </a>
          </div>
          <div className="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
            <div className="relative">
              {" "}
              <a href="#">
                {" "}
                <img
                  src="./assets/images/product-md-2.png"
                  alt="featured image product"
                />
              </a>
              <div className="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-heart.svg"
                    alt="heart icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-shuffle.svg"
                    alt="shuffle icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-eye.svg"
                    alt="eye icon"
                  />
                </a>
              </div>
            </div>
            <a className="flex flex-col justify-between flex-1" href="#">
              <div>
                <p className="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                <p className="text-lead font-bold mb-[11px]">
                  All Natural Italian-Style Chicken Meatballs
                </p>
                <div className="flex items-center gap-[10px] mb-9">
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
                    <div className="flex items-center absolute overflow-hidden gap-[3px] w-[60%]">
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
                    (6 rates)
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">
                    $22.51
                  </h4>
                  <span className="text-gray-400 line-through text-tiny lg:text-md">
                    $2.80
                  </span>
                </div>
                <button className="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">
                  Add +
                </button>
              </div>
            </a>
          </div>
          <div className="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
            <div className="relative">
              {" "}
              <a href="#">
                {" "}
                <img
                  src="./assets/images/product-md-4.png"
                  alt="featured image product"
                />
              </a>
              <div className="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-heart.svg"
                    alt="heart icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-shuffle.svg"
                    alt="shuffle icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-eye.svg"
                    alt="eye icon"
                  />
                </a>
              </div>
            </div>
            <a className="flex flex-col justify-between flex-1" href="#">
              <div>
                <p className="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                <p className="text-lead font-bold mb-[11px]">
                  All Natural Italian-Style Chicken Meatballs
                </p>
                <div className="flex items-center gap-[10px] mb-9">
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
                    <div className="flex items-center absolute overflow-hidden gap-[3px] w-[40%]">
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
                    (46 rates)
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">
                    $22.51
                  </h4>
                  <span className="text-gray-400 line-through text-tiny lg:text-md">
                    $2.80
                  </span>
                </div>
                <button className="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">
                  Add +
                </button>
              </div>
            </a>
          </div>
          <div className="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
            <div className="relative">
              {" "}
              <a href="#">
                {" "}
                <img
                  src="./assets/images/product-md-1.png"
                  alt="featured image product"
                />
              </a>
              <div className="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-heart.svg"
                    alt="heart icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-shuffle.svg"
                    alt="shuffle icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-eye.svg"
                    alt="eye icon"
                  />
                </a>
              </div>
            </div>
            <a className="flex flex-col justify-between flex-1" href="#">
              <div>
                <p className="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                <p className="text-lead font-bold mb-[11px]">
                  All Natural Italian-Style Chicken Meatballs
                </p>
                <div className="flex items-center gap-[10px] mb-9">
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
                    (48 rates)
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">
                    $22.51
                  </h4>
                  <span className="text-gray-400 line-through text-tiny lg:text-md">
                    $2.80
                  </span>
                </div>
                <button className="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">
                  Add +
                </button>
              </div>
            </a>
          </div>
          <div className="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
            <div className="relative">
              {" "}
              <a href="#">
                {" "}
                <img
                  src="./assets/images/product-md-3.png"
                  alt="featured image product"
                />
              </a>
              <div className="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-heart.svg"
                    alt="heart icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-shuffle.svg"
                    alt="shuffle icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-eye.svg"
                    alt="eye icon"
                  />
                </a>
              </div>
            </div>
            <a className="flex flex-col justify-between flex-1" href="#">
              <div>
                <p className="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                <p className="text-lead font-bold mb-[11px]">
                  All Natural Italian-Style Chicken Meatballs
                </p>
                <div className="flex items-center gap-[10px] mb-9">
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
                    <div className="flex items-center absolute overflow-hidden gap-[3px] w-[40%]">
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
                    (234 rates)
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">
                    $22.51
                  </h4>
                  <span className="text-gray-400 line-through text-tiny lg:text-md">
                    $2.80
                  </span>
                </div>
                <button className="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">
                  Add +
                </button>
              </div>
            </a>
          </div>
          <div className="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
            <div className="relative">
              {" "}
              <a href="#">
                {" "}
                <img
                  src="./assets/images/product-md-1.png"
                  alt="featured image product"
                />
              </a>
              <div className="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-heart.svg"
                    alt="heart icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-shuffle.svg"
                    alt="shuffle icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-eye.svg"
                    alt="eye icon"
                  />
                </a>
              </div>
            </div>
            <a className="flex flex-col justify-between flex-1" href="#">
              <div>
                <p className="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                <p className="text-lead font-bold mb-[11px]">
                  All Natural Italian-Style Chicken Meatballs
                </p>
                <div className="flex items-center gap-[10px] mb-9">
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
                    (44 rates)
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">
                    $22.51
                  </h4>
                  <span className="text-gray-400 line-through text-tiny lg:text-md">
                    $2.80
                  </span>
                </div>
                <button className="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">
                  Add +
                </button>
              </div>
            </a>
          </div>
          <div className="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
            <div className="relative">
              {" "}
              <a href="#">
                {" "}
                <img
                  src="./assets/images/product-md-2.png"
                  alt="featured image product"
                />
              </a>
              <div className="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-heart.svg"
                    alt="heart icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-shuffle.svg"
                    alt="shuffle icon"
                  />
                </a>
                <a
                  className="grid place-items-center h-full hover:bg-gray-200 w-[48px] h-[48px]"
                  href="#"
                >
                  {" "}
                  <img
                    src="./assets/images/icons/icon-eye.svg"
                    alt="eye icon"
                  />
                </a>
              </div>
            </div>
            <a className="flex flex-col justify-between flex-1" href="#">
              <div>
                <p className="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                <p className="text-lead font-bold mb-[11px]">
                  All Natural Italian-Style Chicken Meatballs
                </p>
                <div className="flex items-center gap-[10px] mb-9">
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
                  <p className="text-tiny font-semibold text-gray-400">
                    (257 rates)
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">
                    $22.51
                  </h4>
                  <span className="text-gray-400 line-through text-tiny lg:text-md">
                    $2.80
                  </span>
                </div>
                <button className="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">
                  Add +
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[111px]">
        <div className="text-center mb-[45px] md:mb-[80px]">
          <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
            Explore by Categories.
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[691px]">
            We provide many categories, choose a category according to your
            expertise to make it easier to find a job.
          </p>
        </div>
        <div className="gap-10 lg:grid lg:grid-cols-2">
          <div className="rounded-2xl p-5 md:p-[40px] border border-gray-200 mb-10 card-shadow lg:mb-0">
            <h3 className="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[35px]">
              Popular Categories
            </h3>
            <div className="flex flex-col gap-8">
              {" "}
              <a
                className="font-chivo font-medium flex items-center justify-between group text-[19px] leading-[29px] pb-[25px] border-b border-gray-200"
                href="#"
              >
                <span className="text-gray-500 transition-all duration-200 group-hover:text-green-900">
                  Computer - Laptop
                </span>
                <div className="bg-gray-200 rounded-full w-11 h-11 grid place-items-center group-hover:bg-green-900">
                  <p className="text-green-900 transition-all duration-300 group-hover:text-white">
                    6
                  </p>
                </div>
              </a>
              <a
                className="font-chivo font-medium flex items-center justify-between group text-[19px] leading-[29px] pb-[25px] border-b border-gray-200"
                href="#"
              >
                <span className="text-gray-500 transition-all duration-200 group-hover:text-green-900">
                  Smart phone & Tablets
                </span>
                <div className="bg-gray-200 rounded-full w-11 h-11 grid place-items-center group-hover:bg-green-900">
                  <p className="text-green-900 transition-all duration-300 group-hover:text-white">
                    12
                  </p>
                </div>
              </a>
              <a
                className="font-chivo font-medium flex items-center justify-between group text-[19px] leading-[29px] pb-[25px] border-b border-gray-200"
                href="#"
              >
                <span className="text-gray-500 transition-all duration-200 group-hover:text-green-900">
                  Fashion & Accessories
                </span>
                <div className="bg-gray-200 rounded-full w-11 h-11 grid place-items-center group-hover:bg-green-900">
                  <p className="text-green-900 transition-all duration-300 group-hover:text-white">
                    14
                  </p>
                </div>
              </a>
              <a
                className="font-chivo font-medium flex items-center justify-between group text-[19px] leading-[29px]"
                href="#"
              >
                <span className="text-gray-500 transition-all duration-200 group-hover:text-green-900">
                  Health & Beauty
                </span>
                <div className="bg-gray-200 rounded-full w-11 h-11 grid place-items-center group-hover:bg-green-900">
                  <p className="text-green-900 transition-all duration-300 group-hover:text-white">
                    8
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-[50px]">
              <div className="rounded-2xl py-[35px] px-[30px] border border-gray-200 card-shadow group cursor-pointer transition-all duration-200 hover:bg-green-900 hover:-translate-y-1">
                <a className="flex items-center gap-[17px]" href="#">
                  <div className="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]">
                    <img
                      className="rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white"
                      src="./assets/images/icons/icon-media.svg"
                      alt
                    />
                  </div>
                  <p className="text-heading-6 font-bold font-chivo transition-colors duration-200 group-hover:text-white">
                    Computer for Designer, Art
                  </p>
                </a>
              </div>
              <div className="rounded-2xl py-[35px] px-[30px] border border-gray-200 card-shadow group cursor-pointer transition-all duration-200 hover:bg-green-900 hover:-translate-y-1">
                <a className="flex items-center gap-[17px]" href="#">
                  <div className="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]">
                    <img
                      className="rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white"
                      src="./assets/images/icons/icon-human-dolly.svg"
                      alt
                    />
                  </div>
                  <p className="text-heading-6 font-bold font-chivo transition-colors duration-200 group-hover:text-white">
                    Sport, Home, Outdoor
                  </p>
                </a>
              </div>
              <div className="rounded-2xl py-[35px] px-[30px] border border-gray-200 card-shadow group cursor-pointer transition-all duration-200 hover:bg-green-900 hover:-translate-y-1">
                <a className="flex items-center gap-[17px]" href="#">
                  <div className="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]">
                    <img
                      className="rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white"
                      src="./assets/images/icons/icon-business.svg"
                      alt
                    />
                  </div>
                  <p className="text-heading-6 font-bold font-chivo transition-colors duration-200 group-hover:text-white">
                    Laptop for office, students
                  </p>
                </a>
              </div>
              <div className="rounded-2xl py-[35px] px-[30px] border border-gray-200 card-shadow group cursor-pointer transition-all duration-200 hover:bg-green-900 hover:-translate-y-1">
                <a className="flex items-center gap-[17px]" href="#">
                  <div className="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]">
                    <img
                      className="rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white"
                      src="./assets/images/icons/icon-account.svg"
                      alt
                    />
                  </div>
                  <p className="text-heading-6 font-bold font-chivo transition-colors duration-200 group-hover:text-white">
                    Software, card, book
                  </p>
                </a>
              </div>
            </div>
            <div className="rounded-2xl py-[20px] px-[30px] border border-gray-200 flex items-center card-shadow group cursor-pointer transition-all duration-200 mx-auto w-fit hover:bg-green-900 hover:-translate-y-1 gap-[17px] lg:w-1/2">
              <div className="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[20px] h-[20px] xl:w-[33px] xl:h-[33px] bg-[#0B7B3F] group-hover:bg-[#158E99]">
                <img
                  className="rounded-full max-w-[11px] xl:max-w-[33x] group-hover:filter-white"
                  src="./assets/images/icons/icon-seeding.svg"
                  alt
                />
              </div>
              <p className="text-heading-6 font-bold font-chivo group-hover:text-white">
                See All Categories
              </p>
              <img
                className="max-w-[16px] group-hover:filter-white"
                src="./assets/images/icons/icon-angle-down.svg"
                alt="angle icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 text-center mx-auto max-w-[905px]">
        {" "}
        <span className="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-4">
          How It Work ?
        </span>
        <div className="text-center mb-[88px]">
          <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
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
            <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">
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
            <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">
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
            <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">
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
            <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">
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
            <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">
              Complete
            </h4>
            <p className="text-text text-gray-500">After-release Support</p>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[111px]">
        <div className="rounded-2xl p-[30px] md:py-[41px] md:px-[87px] bg-green-900 flex relative">
          <div className="lg:w-[45%]">
            <h1 className="font-extrabold font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 text-white mb-[6px]">
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
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 mt-[30px] md:mt-[80px] lg:mt-[143px]">
        <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-center mb-[40px] md:mb-[60px] lg:mb-[84px]">
          Trusted by the world’s leading companies
        </h2>
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

export default Home5;
