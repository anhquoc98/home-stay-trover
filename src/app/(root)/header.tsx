import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-900  w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600">
        {/* Top Bar */}
        <div className="bg-[#FAF6F2]">
          <div className=" max-w-screen-xl text-gray-700 text-sm mx-auto flex flex-wrap justify-between items-center">
            <div className="flex space-x-4">
              <span className=" flex items-center">
                <Image
                  width="25"
                  height="25"
                  src="https://img.icons8.com/ios/50/region-code.png"
                  alt="region-code"
                />
                <b>27 An Nhơn 6,Sơn Trà, TP Đà Nẵng, VietNam</b>
              </span>
              <span className="flex items-center">
                <Image
                  width="25"
                  height="25"
                  src="https://img.icons8.com/ios/50/phone--v1.png"
                  alt="phone--v1"
                />
                <b>+84 985856715</b>
              </span>
              {/* <span className="flex items-center">📧 yourinfo@yourmail.com</span> */}
            </div>
            <div className="flex space-x-3">
              <Link
                href="https://www.facebook.com/trovehomestay"
                className="w-[20%] text-orange-500 hover:text-orange-600"
              >
                <Image
                  width="40"
                  height="40"
                  src="https://img.icons8.com/office/40/facebook-new.png"
                  alt="facebook-new"
                />
              </Link>

              <Link
                href="#"
                className=" w-[20%] text-orange-500 hover:text-orange-600"
              >
                <Image
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/zalo.png"
                  alt="zalo"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link href="/">
            <div className="flex items-center space-x-3">
              <Image
                width={150}
                height={50}
                src="/logo.png"
                alt="Flowbite Logo"
              />
              {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span> */}
            </div>
          </Link>
          <div className="flex md:order-2 space-x-3">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Get started
            </button>
            <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
