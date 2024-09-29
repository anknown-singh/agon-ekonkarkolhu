import React from "react";

const Shop2 = () => (
  <div>
    <meta charSet="utf-8" />
    <title>Shop 2 Page</title>
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
      <div className="full-width bg-gray-100">
        <div className="text-center px-5 pt-[74px] pb-[90px]">
          <h1 className="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-7">
            Shop: Electronic
          </h1>
          <p className="font-bold font-chivo text-[14px] md:text-heading-6 text-gray-600 mx-auto md:max-w-[55ch]">
            From year to year we strive to invent the most innovative technology
            that is used by both small enterprises and space enterprises.
          </p>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 flex flex-col gap-[30px] lg:grid lg:grid-cols-[336px_1fr]">
        <div className="flex flex-col gap-[30px]">
          <div className="rounded-2xl border border-gray-200 h-fit p-[30px]">
            <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[22px]">
              Filter items
            </h4>
            <div className="w-full bg-gray-200 h-[1px] mb-[33px]" />
            <div className="flex items-center gap-[15px] mb-[33px]">
              <p className="text-text text-gray-500">Price Range:</p>
              <p className="text-heading-5 text-green-900 font-bold font-chivo">
                <span id="price-range-from">$16</span>
                <span className="px-3">-</span>
                <span id="price-range-to">$173</span>
              </p>
            </div>
            <div className="w-full min-h-[50px]">
              <div className="multi-range">
                <input
                  id="lower"
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={0}
                  step="0.0001"
                />
                <input
                  className="bg-green-1000"
                  id="upper"
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={100}
                  step="0.0001"
                />
              </div>
            </div>
            <p className="font-bold font-chivo text-[14px] md:text-heading-6 text-green-900 mb-[18px]">
              Used for
            </p>
            <ul className="mb-5">
              <li className="flex items-center gap-[5px] mb-[10px]">
                <div className="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                  <input
                    className="opacity-0 cursor-pointer relative z-10 peer"
                    id="professtional"
                    type="checkbox"
                    name="professtional"
                  />
                  <img
                    className="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block"
                    src="./assets/images/icons/icon-check-green-sqr.svg"
                    alt="checked icon"
                  />
                  <div className="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-gray-200" />
                </div>
                <p className="text-text">Professtional</p>
              </li>
              <li className="flex items-center gap-[5px] mb-[10px]">
                <div className="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                  <input
                    className="opacity-0 cursor-pointer relative z-10 peer"
                    id="students"
                    type="checkbox"
                    name="students"
                  />
                  <img
                    className="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block"
                    src="./assets/images/icons/icon-check-green-sqr.svg"
                    alt="checked icon"
                  />
                  <div className="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-gray-200" />
                </div>
                <p className="text-text">Students</p>
              </li>
              <li className="flex items-center gap-[5px] mb-[10px]">
                <div className="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                  <input
                    className="opacity-0 cursor-pointer relative z-10 peer"
                    id="office"
                    type="checkbox"
                    name="office"
                  />
                  <img
                    className="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block"
                    src="./assets/images/icons/icon-check-green-sqr.svg"
                    alt="checked icon"
                  />
                  <div className="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-gray-200" />
                </div>
                <p className="text-text">Office</p>
              </li>
              <li className="flex items-center gap-[5px] mb-[10px]">
                <div className="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                  <input
                    className="opacity-0 cursor-pointer relative z-10 peer"
                    id="company"
                    type="checkbox"
                    name="company"
                  />
                  <img
                    className="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block"
                    src="./assets/images/icons/icon-check-green-sqr.svg"
                    alt="checked icon"
                  />
                  <div className="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-gray-200" />
                </div>
                <p className="text-text">Company</p>
              </li>
              <li className="flex items-center gap-[5px] mb-[10px]">
                <div className="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                  <input
                    className="opacity-0 cursor-pointer relative z-10 peer"
                    id="sport"
                    type="checkbox"
                    name="sport"
                  />
                  <img
                    className="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block"
                    src="./assets/images/icons/icon-check-green-sqr.svg"
                    alt="checked icon"
                  />
                  <div className="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-gray-200" />
                </div>
                <p className="text-text">Sport</p>
              </li>
            </ul>
            <p className="font-bold font-chivo text-[14px] md:text-heading-6 text-green-900 mb-[18px]">
              Brand
            </p>
            <ul className="mb-5">
              <li className="flex items-center gap-[5px] mb-[10px]">
                <div className="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                  <input
                    className="opacity-0 cursor-pointer relative z-10 peer"
                    id="apply"
                    type="checkbox"
                    name="apply"
                  />
                  <img
                    className="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block"
                    src="./assets/images/icons/icon-check-green-sqr.svg"
                    alt="checked icon"
                  />
                  <div className="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-gray-200" />
                </div>
                <p className="text-text">Apply</p>
              </li>
              <li className="flex items-center gap-[5px] mb-[10px]">
                <div className="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                  <input
                    className="opacity-0 cursor-pointer relative z-10 peer"
                    id="assus"
                    type="checkbox"
                    name="assus"
                  />
                  <img
                    className="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block"
                    src="./assets/images/icons/icon-check-green-sqr.svg"
                    alt="checked icon"
                  />
                  <div className="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-gray-200" />
                </div>
                <p className="text-text">Assus</p>
              </li>
              <li className="flex items-center gap-[5px] mb-[10px]">
                <div className="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                  <input
                    className="opacity-0 cursor-pointer relative z-10 peer"
                    id="samsung"
                    type="checkbox"
                    name="samsung"
                  />
                  <img
                    className="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block"
                    src="./assets/images/icons/icon-check-green-sqr.svg"
                    alt="checked icon"
                  />
                  <div className="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-gray-200" />
                </div>
                <p className="text-text">Samsung</p>
              </li>
              <li className="flex items-center gap-[5px] mb-[10px]">
                <div className="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                  <input
                    className="opacity-0 cursor-pointer relative z-10 peer"
                    id="sony"
                    type="checkbox"
                    name="sony"
                  />
                  <img
                    className="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block"
                    src="./assets/images/icons/icon-check-green-sqr.svg"
                    alt="checked icon"
                  />
                  <div className="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-gray-200" />
                </div>
                <p className="text-text">Sony</p>
              </li>
              <li className="flex items-center gap-[5px] mb-[10px]">
                <div className="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                  <input
                    className="opacity-0 cursor-pointer relative z-10 peer"
                    id="toshiba"
                    type="checkbox"
                    name="toshiba"
                  />
                  <img
                    className="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block"
                    src="./assets/images/icons/icon-check-green-sqr.svg"
                    alt="checked icon"
                  />
                  <div className="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-gray-200" />
                </div>
                <p className="text-text">Toshiba</p>
              </li>
            </ul>
            <p className="font-bold font-chivo text-[14px] md:text-heading-6 text-green-900 mb-[18px]">
              Color
            </p>
            <ul className="mb-5">
              <li className="flex items-center gap-[10px] mb-[10px]">
                <div className="rounded-full bg-danger w-[18px] h-[18px]" />
                <p className="text-text">Apply</p>
              </li>
              <li className="flex items-center gap-[10px] mb-[10px]">
                <div className="rounded-full bg-success w-[18px] h-[18px]" />
                <p className="text-text">Assus</p>
              </li>
              <li className="flex items-center gap-[10px] mb-[10px]">
                <div className="rounded-full bg-primary w-[18px] h-[18px]" />
                <p className="text-text">Samsung</p>
              </li>
              <li className="flex items-center gap-[10px] mb-[10px]">
                <div className="rounded-full bg-gray-900 w-[18px] h-[18px]" />
                <p className="text-text">Sony</p>
              </li>
              <li className="flex items-center gap-[10px] mb-[10px]">
                <div className="rounded-full bg-warning w-[18px] h-[18px]" />
                <p className="text-text">Toshiba</p>
              </li>
            </ul>
            <button className="flex items-center bg-bg-6 py-3 justify-center transition-colors duration-200 w-[130px] gap-[6px] rounded-[4px] hover:bg-bg-9 hover:text-gray-900">
              <img
                src="./assets/images/icons/icon-filter.svg"
                alt="filter icon"
              />
              <p className="font-bold font-chivo text-[14px] md:text-heading-6 text-green-900">
                Filter
              </p>
            </button>
          </div>
          <div className="rounded-2xl border border-gray-200 h-fit p-[30px]">
            <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[22px]">
              Popular Items
            </h4>
            <div className="w-full bg-gray-200 h-[1px] mb-[33px]" />
            <div className="flex flex-col gap-[33px]">
              <div className="flex items-center gap-[15px]">
                <div className="max-w-[80px]">
                  {" "}
                  <img
                    className="h-full w-full object-cover"
                    src="./assets/images/product-sm-1.png"
                    alt="product image"
                  />
                </div>
                <div>
                  <p className="text-md font-bold mb-[6px]">HP 232v Printers</p>
                  <div className="flex items-center gap-[10px] mb-9 mb-[17px]">
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
                  <div className="flex items-baseline gap-2">
                    <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">
                      $22.51
                    </h4>
                    <span className="text-gray-400 line-through text-tiny lg:text-md">
                      $2.80
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[15px]">
                <div className="max-w-[80px]">
                  {" "}
                  <img
                    className="h-full w-full object-cover"
                    src="./assets/images/product-sm-2.png"
                    alt="product image"
                  />
                </div>
                <div>
                  <p className="text-md font-bold mb-[6px]">Apple Charger</p>
                  <div className="flex items-center gap-[10px] mb-9 mb-[17px]">
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
                  <div className="flex items-baseline gap-2">
                    <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">
                      $22.51
                    </h4>
                    <span className="text-gray-400 line-through text-tiny lg:text-md">
                      $2.80
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[15px]">
                <div className="max-w-[80px]">
                  {" "}
                  <img
                    className="h-full w-full object-cover"
                    src="./assets/images/product-sm-3.png"
                    alt="product image"
                  />
                </div>
                <div>
                  <p className="text-md font-bold mb-[6px]">
                    DP 10 Internet Router
                  </p>
                  <div className="flex items-center gap-[10px] mb-9 mb-[17px]">
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
                  <div className="flex items-baseline gap-2">
                    <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">
                      $22.51
                    </h4>
                    <span className="text-gray-400 line-through text-tiny lg:text-md">
                      $2.80
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[15px]">
                <div className="max-w-[80px]">
                  {" "}
                  <img
                    className="h-full w-full object-cover"
                    src="./assets/images/product-sm-2.png"
                    alt="product image"
                  />
                </div>
                <div>
                  <p className="text-md font-bold mb-[6px]">Eagle Eye Camera</p>
                  <div className="flex items-center gap-[10px] mb-9 mb-[17px]">
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
                  <div className="flex items-baseline gap-2">
                    <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">
                      $22.51
                    </h4>
                    <span className="text-gray-400 line-through text-tiny lg:text-md">
                      $2.80
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[15px]">
                <div className="max-w-[80px]">
                  {" "}
                  <img
                    className="h-full w-full object-cover"
                    src="./assets/images/product-sm-3.png"
                    alt="product image"
                  />
                </div>
                <div>
                  <p className="text-md font-bold mb-[6px]">Sony x6 Speaker</p>
                  <div className="flex items-center gap-[10px] mb-9 mb-[17px]">
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
                  <div className="flex items-baseline gap-2">
                    <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">
                      $22.51
                    </h4>
                    <span className="text-gray-400 line-through text-tiny lg:text-md">
                      $2.80
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[15px]">
                <div className="max-w-[80px]">
                  {" "}
                  <img
                    className="h-full w-full object-cover"
                    src="./assets/images/product-sm-1.png"
                    alt="product image"
                  />
                </div>
                <div>
                  <p className="text-md font-bold mb-[6px]">
                    Window CD Software
                  </p>
                  <div className="flex items-center gap-[10px] mb-9 mb-[17px]">
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
                  <div className="flex items-baseline gap-2">
                    <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">
                      $22.51
                    </h4>
                    <span className="text-gray-400 line-through text-tiny lg:text-md">
                      $2.80
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[15px]">
                <div className="max-w-[80px]">
                  {" "}
                  <img
                    className="h-full w-full object-cover"
                    src="./assets/images/product-sm-2.png"
                    alt="product image"
                  />
                </div>
                <div>
                  <p className="text-md font-bold mb-[6px]">
                    Noise N10 Headphone
                  </p>
                  <div className="flex items-center gap-[10px] mb-9 mb-[17px]">
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
                  <div className="flex items-baseline gap-2">
                    <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">
                      $22.51
                    </h4>
                    <span className="text-gray-400 line-through text-tiny lg:text-md">
                      $2.80
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form
            className="bg-gray-100 rounded-2xl bg-gray-100 h-fit p-[30px]"
            action="#"
          >
            <p className="mb-9 text-heading-6 font-bold font-chivo">
              Get free coupons
            </p>
            <p className="text-text text-gray-500 mb-[18px]">
              Enter you email address and get free coupons.
            </p>
            <div className="flex items-center p-4 bg-white gap-[9px] rounded-[8px] mb-[22px]">
              <img src="./assets/images/icons/icon-mail.svg" alt="Mail icon" />
              <input
                className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo p-0"
                type="text"
                placeholder="Enter email address"
              />
            </div>
            <button className="flex items-center transition-colors duration-200 py-3 px-[33px] rounded-[50px] text-heading-6 font-chivo font-bold bg-green-900 text-white hover:bg-black">
              Submit
            </button>
          </form>
        </div>
        <div className="row-span-3">
          <div className="flex items-center bg-gray-100 flex-col gap-5 mb-10 py-[23px] px-[29px] md:flex-row">
            <p className="text-lead text-gray-500 font-bold flex-1">
              There are <span className="text-green-900">1853</span> products in
              this category
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center relative gap-[5px]">
                <label className="flex items-center gap-[5px]" htmlFor="show">
                  <img
                    src="./assets/images/icons/icon-grid.svg"
                    alt="grid icon"
                  />
                  <span className="text-text text-gray-500">Show:</span>
                </label>
                <select
                  className="bg-transparent outline-none text-green-900 cursor-pointer min-w-[38px]"
                  id="show"
                  name="show"
                >
                  <option className="text-green-900" value={50}>
                    50
                  </option>
                  <option className="text-green-900" value={100}>
                    100
                  </option>
                  <option className="text-green-900" value={150}>
                    150
                  </option>
                </select>
                <img
                  className="filter-gray-500 absolute right-0 pointer-events-none w-[13px] h-[7px]"
                  src="./assets/images/icons/icon-angle-down.svg"
                  alt="caret icon"
                />
              </div>
              <div className="flex items-center relative gap-[5px]">
                <label className="flex items-center gap-[5px]" htmlFor="show">
                  <img
                    src="./assets/images/icons/icon-sort.svg"
                    alt="grid icon"
                  />
                  <span className="text-text text-gray-500">Sort by:</span>
                </label>
                <select
                  className="bg-transparent outline-none text-green-900 cursor-pointer min-w-[88px]"
                  id="show"
                  name="show"
                >
                  <option className="text-green-900" value="Featured">
                    Featured
                  </option>
                  <option className="text-green-900" value="Rating">
                    Rating
                  </option>
                  <option className="text-green-900" value="Low Price">
                    Low Price
                  </option>
                </select>
                <img
                  className="filter-gray-500 absolute right-0 pointer-events-none w-[13px] h-[7px]"
                  src="./assets/images/icons/icon-angle-down.svg"
                  alt="caret icon"
                />
              </div>
            </div>
          </div>
          <div className="product mb-[64px]">
            <div className="grid-cols-1 !grid mt-[5px] gap-[30px] lg:grid-cols-2 xl:grid-cols-3">
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
                    <p className="text-xs text-gray-500 font-bold mb-[7px]">
                      Sony
                    </p>
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
                    <p className="text-xs text-gray-500 font-bold mb-[7px]">
                      Sony
                    </p>
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
                    <p className="text-xs text-gray-500 font-bold mb-[7px]">
                      Sony
                    </p>
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
                    <p className="text-xs text-gray-500 font-bold mb-[7px]">
                      Sony
                    </p>
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
                    <p className="text-xs text-gray-500 font-bold mb-[7px]">
                      Sony
                    </p>
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
                    <p className="text-xs text-gray-500 font-bold mb-[7px]">
                      Sony
                    </p>
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
                    <p className="text-xs text-gray-500 font-bold mb-[7px]">
                      Sony
                    </p>
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
                    <p className="text-xs text-gray-500 font-bold mb-[7px]">
                      Sony
                    </p>
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
                    <p className="text-xs text-gray-500 font-bold mb-[7px]">
                      Sony
                    </p>
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
                    <p className="text-xs text-gray-500 font-bold mb-[7px]">
                      Sony
                    </p>
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
                    <p className="text-xs text-gray-500 font-bold mb-[7px]">
                      Sony
                    </p>
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
                    <p className="text-xs text-gray-500 font-bold mb-[7px]">
                      Sony
                    </p>
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
                    <p className="text-xs text-gray-500 font-bold mb-[7px]">
                      Sony
                    </p>
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
                    <p className="text-xs text-gray-500 font-bold mb-[7px]">
                      Sony
                    </p>
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
                    <p className="text-xs text-gray-500 font-bold mb-[7px]">
                      Sony
                    </p>
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
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="grid place-items-center bg-gray-200 rounded-full cursor-pointer group transition-colors duration-200 w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] hover:bg-green-900 product-prev">
              <img
                className="group-hover:filter-white"
                src="./assets/images/icons/icon-arrow-left.svg"
                alt="control icon button"
              />
            </div>
            <div className="product-paging number-dots" />
            <div className="grid place-items-center bg-gray-200 rounded-full cursor-pointer group transition-colors duration-200 w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] hover:bg-green-900 product-next">
              <img
                className="group-hover:filter-white"
                src="./assets/images/icons/icon-arrow-right.svg"
                alt="control icon button"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
        {" "}
        <img
          className="h-full w-full object-cover"
          src="./assets/images/banner-ads.png"
          alt="Banner Ads"
        />
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[93px]">
        <div className="mb-[50px]">
          <h2 className="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
            Browse by category
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600 md:max-w-[50ch]">
            All the smart devices, electronics or software you need are ready to
            be discovered. Let’s go!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          <div className="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
            <a className="block" href="#">
              {" "}
              <img
                className="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"
                src="./assets/images/icons/icon-computer.svg"
                alt="computer icon"
              />
              <p className="text-heading-5 font-chivo font-bold mb-[5px]">
                Desktop PC
              </p>
              <p className="text-text text-gray-500">1253 products</p>
            </a>
          </div>
          <div className="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
            <a className="block" href="#">
              {" "}
              <img
                className="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"
                src="./assets/images/icons/icon-mobile.svg"
                alt="computer icon"
              />
              <p className="text-heading-5 font-chivo font-bold mb-[5px]">
                Mobile Phone
              </p>
              <p className="text-text text-gray-500">1253 products</p>
            </a>
          </div>
          <div className="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
            <a className="block" href="#">
              {" "}
              <img
                className="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"
                src="./assets/images/icons/icon-headphone.svg"
                alt="computer icon"
              />
              <p className="text-heading-5 font-chivo font-bold mb-[5px]">
                Headphone
              </p>
              <p className="text-text text-gray-500">1253 products</p>
            </a>
          </div>
          <div className="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
            <a className="block" href="#">
              {" "}
              <img
                className="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"
                src="./assets/images/icons/icon-laptop.svg"
                alt="computer icon"
              />
              <p className="text-heading-5 font-chivo font-bold mb-[5px]">
                Laptop
              </p>
              <p className="text-text text-gray-500">1253 products</p>
            </a>
          </div>
          <div className="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
            <a className="block" href="#">
              {" "}
              <img
                className="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"
                src="./assets/images/icons/icon-printer.svg"
                alt="computer icon"
              />
              <p className="text-heading-5 font-chivo font-bold mb-[5px]">
                Printer
              </p>
              <p className="text-text text-gray-500">1253 products</p>
            </a>
          </div>
          <div className="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
            <a className="block" href="#">
              {" "}
              <img
                className="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"
                src="./assets/images/icons/icon-tablet.svg"
                alt="computer icon"
              />
              <p className="text-heading-5 font-chivo font-bold mb-[5px]">
                Tablet
              </p>
              <p className="text-text text-gray-500">1253 products</p>
            </a>
          </div>
          <div className="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
            <a className="block" href="#">
              {" "}
              <img
                className="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"
                src="./assets/images/icons/icon-usb.svg"
                alt="computer icon"
              />
              <p className="text-heading-5 font-chivo font-bold mb-[5px]">
                USB Flash
              </p>
              <p className="text-text text-gray-500">1253 products</p>
            </a>
          </div>
          <div className="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
            <a className="block" href="#">
              {" "}
              <img
                className="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"
                src="./assets/images/icons/icon-mouse.svg"
                alt="computer icon"
              />
              <p className="text-heading-5 font-chivo font-bold mb-[5px]">
                Game Mouse
              </p>
              <p className="text-text text-gray-500">1253 products</p>
            </a>
          </div>
          <div className="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
            <a className="block" href="#">
              {" "}
              <img
                className="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"
                src="./assets/images/icons/icon-shield.svg"
                alt="computer icon"
              />
              <p className="text-heading-5 font-chivo font-bold mb-[5px]">
                Security
              </p>
              <p className="text-text text-gray-500">1253 products</p>
            </a>
          </div>
          <div className="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
            <a className="block" href="#">
              {" "}
              <img
                className="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"
                src="./assets/images/icons/icon-watch.svg"
                alt="computer icon"
              />
              <p className="text-heading-5 font-chivo font-bold mb-[5px]">
                Smart Watch
              </p>
              <p className="text-text text-gray-500">1253 products</p>
            </a>
          </div>
          <div className="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
            <a className="block" href="#">
              {" "}
              <img
                className="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"
                src="./assets/images/icons/icon-scanner.svg"
                alt="computer icon"
              />
              <p className="text-heading-5 font-chivo font-bold mb-[5px]">
                Scanner
              </p>
              <p className="text-text text-gray-500">1253 products</p>
            </a>
          </div>
          <div className="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
            <a className="block" href="#">
              {" "}
              <img
                className="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"
                src="./assets/images/icons/icon-book.svg"
                alt="computer icon"
              />
              <p className="text-heading-5 font-chivo font-bold mb-[5px]">
                Desktop PC
              </p>
              <p className="text-text text-gray-500">1253 products</p>
            </a>
          </div>
        </div>
      </div>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[100px]">
        <div className="mb-[35px] md:mb-[64px]">
          <h2 className="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
            Viewed products
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

export default Shop2;
