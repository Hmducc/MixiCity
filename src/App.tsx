import React, { useState } from "react";
import logo from "../assets/logo-mixicity.png";
import settings from "../assets/settingspin3.gif";
import shutdown from "../assets/down.svg";
import "./App.css";
import discord from "../assets/discord.svg";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import people from "../assets/people.svg";
import "react-awesome-button/dist/styles.css";
const Homepage: React.FC = () => {
  return (
    <div className="h-screen    text-white flex flex-col">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between  bg-[#bf1f2b] shadow-md px-6 py-4">
        <div className="text-lg font-bold flex items-center">
          <img src={logo} alt="Logo" className="h-[40px] w-[100px]" />
          <div className="flex gap-2 ml-4">
            <button className="group relative inline-block avenir ">
              <div className="px-4 py-2 rounded flex justify-center items-center gap-2  group-hover:bg-[#e2b573] transition-colors duration-300">
                <svg
                  className="h-[17px] w-[17px] fill-[#e2b573] group-hover:fill-[#bf1f26] transition-colors duration-300"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z" />
                </svg>
                <span className="text-[#e2b573] group-hover:text-[#bf1f26] font-bold text-sm transition-colors duration-300">
                  Discord Mixigaming
                </span>
              </div>
            </button>
            <button className="group relative inline-block avenir">
              <div className="px-4 py-2 rounded flex justify-center items-center gap-2  group-hover:bg-[#e2b573] transition-colors duration-300">
                <svg
                  className="h-[15px] w-[15px] fill-[#e2b573] group-hover:fill-[#bf1f26] transition-colors duration-300"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z" />
                </svg>
                <span className="text-[#e2b573] group-hover:text-[#bf1f26] font-bold text-sm transition-colors duration-300">
                  Discord Mixigaming
                </span>
              </div>
            </button>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="bg-[#e2b573] px-4 py-2 rounded ">
            <img src={settings} className="h-[20px] w-[20px]"></img>
          </button>

          <button className="bg-[#e2b573] px-4 py-2 rounded ">
            <img src={shutdown} className="h-[15px] w-[15px]"></img>
          </button>
        </div>
      </nav>

      <div className="flex flex-1 gap-4 px-6 py-6 background">
        {/* Main Content Area */}
        <div className="flex flex-col flex-1 gap-4">
          {/* City Section */}
          <div className="flex-1 gta5  p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <div>
              <img src={logo} className="h-[100px] w-[200px]" alt="Logo" />
            </div>
            <h2 className="text-3xl font-bold mb-4 avenir ">
              MixiCity Season 3
            </h2>
            <button className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-500 mb-4">
              Connect
            </button>
            <div className="flex gap-2 items-center justify-center">
              <img
                src={people}
                className="h-[20px] w-[20px]"
                alt="People Icon"
              />
              <p className="text-md avenir">42 / 100</p>
            </div>
            <p className="text-sm text-gray-600">
              Explore the city and enjoy the journey!
            </p>
          </div>

          {/* Other City Part */}
          <div className="h-[50px] bg-green-700 text-white text-center flex items-center justify-center rounded-lg shadow-md">
            <p className="text-lg font-semibold">Other City Part</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-1/3 flex flex-col gap-4">
          {/* News Section */}
          <div className="bg-teal-500 text-white p-4 rounded-lg shadow-lg flex-1">
            <h3 className="text-xl font-bold mb-4">News Section</h3>
            <AwesomeButton type="primary">Primary</AwesomeButton>
            <ul className="space-y-4">
              <li>
                <h4 className="font-bold">Update 1.0 Released</h4>
                <p className="text-sm">New features and bug fixes are here.</p>
              </li>
              <li>
                <h4 className="font-bold">Event Announcement</h4>
                <p className="text-sm">
                  Join us for the weekend special event!
                </p>
              </li>
            </ul>
          </div>

          {/* Banner Section */}
          <div className="bg-amber-600 p-6 h-20 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2 text-center">Promotions</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
