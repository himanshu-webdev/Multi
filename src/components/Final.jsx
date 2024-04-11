import React from 'react';
import logo from '../assets/logo.png';
import { BiSearch } from "react-icons/bi";
import { GoBriefcase } from "react-icons/go";
import { MdOutlineMarkEmailRead } from "react-icons/md";

import { BsPinterest } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsDribbble } from "react-icons/bs"

const Final = () => {
  return (
    <div className='w-full h-full'> 

      {/* Navbar */}
      <nav className="w-screen flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
            <img src={logo} className="object-cover w-24 h-10" alt="Logo" />
          </div>
          
        </div>

        <div className="menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
          <div className="text-md font-bold text-[#BFBDC4] lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-black px-4 py-2 rounded mr-2">
              Inspiration
            </a>
            <a href="#responsive-header" className=" block mt-4 lg:inline-block lg:mt-0 hover:text-black px-4 py-2 rounded mr-2">
              Find Work
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-black px-4 py-2 rounded mr-2">
              Learn Design
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-black px-4 py-2 rounded mr-2">
              Go Pro
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-black px-4 py-2 rounded mr-2">
              Hire Designers
            </a>
          </div>
          
          <div className="relative mr-5">
            <input
              type="text"
              className="border border-gray-300 rounded-lg py-2 pl-8 pr-4 bg-[#F2F5F4] focus:outline-none"
              placeholder="Search"
              size={6}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <BiSearch className="text-gray-400" />
            </div>
          </div>

          <div className="flex justify-center items-center mr-8 gap-x-4">
            <GoBriefcase className='text-gray-500' size={24}/>
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className='w-10 rounded-full' />
            <button className='focus:outline-none text-white bg-pink-700 font-medium rounded-lg text-md px-5 py-2.5 '>Upload</button>
          </div>
        </div>
      </nav>


      {/* Hero section */}
      <div className='flex flex-col justify-center items-center transform translate-y-[20%] w-screen'>
         <div className="text-center text-4xl font-bold  mb-4">Please verify your email...</div>
         <MdOutlineMarkEmailRead className='text-gray-500' size={98}/>
        <div className="text-center text-gray-500 text-lg font-semibold py-4  mb-4">
         Please verify your email address We've sent a confirmation email to: 
          <h4 className='text-black font-extrabold mt-4'>account@refero.design</h4>
        </div>
        
        <div className="">
          <h2 className="text-center text-gray-500 text-lg font-semibold mb-8">
            Click the confirmation link in that email to begin using Dribbble.
          </h2>
        </div>

        <div className="text-center text-gray-500 mb-4 text-lg font-semibold leading-8">
          <p>Didn't receive the email? Check your Spam folder, it may have been caught by a filter.If </p>
          <p>you still don't see it, you can <span className='text-pink-500 font-bold'>resend the confirmation email</span>.</p>
          <p className='mt-4'>Wrong email address? <span className='text-pink-500 font-bold'>Change it</span>.</p>
        </div>


       
      </div>
       <br />
       <br />
      {/* Footer */}
       
       <div className='w-screen mt-24'> 
          <footer className="bg-[#FAFAFA]">
          
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-1">
                  <img className="h-10" src={logo} alt="Logo" />
                  <p className="mt-8 text-base text-gray-500">
                    Dribbble is the world’s leading community for creatives to share, grow, and get hired.
                  </p>
                  <div className="mt-8 flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Facebook</span>
                      <AiFillFacebook className="h-6 w-6" aria-hidden="true" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Instagram</span>
                      <AiOutlineInstagram className="h-6 w-6" aria-hidden="true" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Pinterest</span>
                      <BsPinterest className="h-6 w-6" aria-hidden="true" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Twitter</span>
                      <AiOutlineTwitter className="h-6 w-6" aria-hidden="true" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Dribbble</span>
                      <BsDribbble className="h-6 w-6" aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                  <div className="md:grid md:grid-cols-2 md:gap-x-8">
                    <div>
                      <h4 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Company</h4>
                      <ul className="mt-4 space-y-4">
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            About us
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            Careers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            Contact
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            Newsletters
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-12 md:mt-0">
                      <h4 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                        Designers
                      </h4>
                      <ul className="mt-4 space-y-4">
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            Designers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            Teams
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            Hiring designers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            Tags
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-12 md:grid md:grid-cols-2 md:gap-x-8">
                    <div>
                      <h4 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Resources</h4>
                      <ul className="mt-4 space-y-4">
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            Help Center
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            Guides
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            Forums
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            Affiliates
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-12 md:mt-0">
                      <h4 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Community</h4>
                      <ul className="mt-4 space-y-4">
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            Marketplace
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            Testimonials
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            Invite a friend
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            Feedback
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 border-t border-gray-200 pt-8">
                <p className="text-base text-gray-400 xl:text-center">
                  &copy; 2024 Dribbble. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>

      
    </div>
  );
};

export default Final;

