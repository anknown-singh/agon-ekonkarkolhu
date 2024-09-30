import React from "react";

const Header = () => (
  <div>
    <header className="h-auto full-width relative py-[15px] first-letter:lg:py-[26px] ">
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
                className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px] font-bold text-primary"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="flex items-center group">
              <a
                className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px] font-bold text-primary"
                href="/about"
              >
                About
              </a>
            </li>
            <li className="flex items-center group">
              <a
                className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px] font-bold text-primary"
                href="/"
              >
                Our Products
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
                  data-menu="Mustard Oil"
                >
                  <a
                    className="flex items-center text-[14px]"
                    href="/mustard-oil"
                  >
                    <img
                      className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                      src="./assets/images/icons/icon-plane-header.svg"
                      alt
                    />
                    <span className="whitespace-nowrap">Mustard Oil</span>
                  </a>
                </li>
                <li
                  className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                  data-menu="Coconut Oil"
                >
                  <a
                    className="flex items-center text-[14px]"
                    href="/coconut-oil"
                  >
                    <img
                      className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                      src="./assets/images/icons/icon-plane-header.svg"
                      alt
                    />
                    <span className="whitespace-nowrap">Coconut Oil</span>
                  </a>
                </li>
                <li
                  className="menu-child-item font-poppins group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                  data-menu="Groundnut Oil"
                >
                  <a
                    className="flex items-center text-[14px]"
                    href="/groundnut-oil"
                  >
                    <img
                      className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                      src="./assets/images/icons/icon-plane-header.svg"
                      alt
                    />
                    <span className="whitespace-nowrap">Groundnut Oil</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="flex items-center group">
              <a
                className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px] font-bold text-primary"
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
                  <a className="flex items-center text-[14px]" href="/recipes">
                    <img
                      className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                      src="./assets/images/icons/icon-edit.svg"
                      alt
                    />
                    <span className="whitespace-nowrap">Recipes</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="flex items-center group">
              <a
                className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px] font-bold text-primary"
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden xl:block">
          <button type="button">
            <div
              className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[12px] rounded-[50px] bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] hidden lg:flex"
             
            >
        
        
            <input className="block text-inherit w-full h-full rounded-[50px] text-heading-6 font-bold font-poppins" placeholder="search here"/>
              <i>
                <img
                  className="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                  src="./assets/images/icons/icon-right.svg"
                  alt="arrow right icon"
                />
              </i>
              </div>
          </button>
        </div>
      </div>
      {/* <div className="burger-icon burger-icon-white menu__icon">
<span className="burger-icon-top" />
<span className="burger-icon-mid"> </span>
<span className="burger-icon-bottom" />
</div> */}
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
            </li>
            <li className="group menu-mobile-item py-[13px]">
              <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                {/* <p>About</p> */}
                <a
                  className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                  href="/about-1"
                >
                  About 01
                </a>
                <img
                  className="w-[18px] h-[18px]"
                  src="./assets/images/icons/icon-angle-down-fill.svg"
                  alt="angle icon"
                />
              </div>
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
  </div>
);

export default Header;
