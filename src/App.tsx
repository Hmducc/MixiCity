import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import shutdown from "../assets/down.svg";
import logo from "../assets/logo-mixicity.png";
import people from "../assets/people.svg";
import settings from "../assets/settings.svg";
import speaker from "../assets/speaker.svg";
import "./App.css";
import FallingBlossom from "./FallingBlossom";

const Homepage: React.FC = () => {
  const [isCityPartBig, setIsCityPartBig] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isTurnOffModalVisible, setIsTurnOffModalVisible] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const handleSwitch = () => {
    setIsCityPartBig((prev) => !prev);
  };

  const toggleSettings = () => {
    setIsSettingsOpen((prev) => !prev);
  };

  const handleTurnOffClick = () => {
    setIsTurnOffModalVisible(true);
  };

  const closeTurnOffModal = () => {
    setIsTurnOffModalVisible(false);
  };

  const handleConnectClick = () => {
    setIsConnecting(true);
    setTimeout(() => setIsConnecting(false), 1000); // Simulate connecting
  };

  return (
    <div className="h-screen text-white flex flex-col ">
      <FallingBlossom></FallingBlossom>
      {/* Navigation Bar */}
      <nav className=" flex items-center justify-between bg-[#bf1f2b] shadow-md px-6 py-4  relative z-0">
        <div className="text-lg font-bold flex items-center">
          <img src={logo} alt="Logo" className="h-[40px] w-[80px]" />
          <div className="flex gap-2 ml-4">
            <a
              href="https://mixicity.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block raleway"
            >
              <div className="px-4 py-2 rounded flex justify-center items-center gap-2 group-hover:bg-[#e2b573] transition-colors duration-300">
                <svg
                  className="h-[13px] w-[15px] mb-1 fill-[#e2b573] group-hover:fill-[#bf1f26] transition-colors duration-300"
                  fill="#e2b573"
                  version="1.1"
                  width="15px"
                  height="15px"
                  viewBox="0 0 495.398 495.398"
                >
                  <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391 v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158 c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747 c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z" />
                  <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401 c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79 c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z" />
                </svg>
                <span className="text-[#e2b573] group-hover:text-[#bf1f26] font-bold text-sm transition-colors duration-300">
                  Trang chủ
                </span>
              </div>
            </a>
            <button
              onClick={() =>
                window.open("https://discord.com/invite/mixigaming")
              }
              className="group relative inline-block raleway"
            >
              <div className="px-4 py-2 rounded flex justify-center items-center gap-2 group-hover:bg-[#e2b573] transition-colors duration-300">
                <svg
                  className="h-[15px] w-[15px] fill-[#e2b573] group-hover:fill-[#bf1f26] transition-colors duration-300"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z" />
                </svg>
                <span className="text-[#e2b573] group-hover:text-[#bf1f26] font-bold text-sm transition-colors duration-300">
                  Discord Bộ Tộc Mixigaming
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          <AwesomeButton
            type="primary"
            style={{
              "--button-default-height": "40px",
              "--button-default-font-size": "14px",
              "--button-default-border-radius": "6px",
              "--button-horizontal-padding": "20px",
              "--button-raise-level": "5px",
              "--button-hover-pressure": "2",
              "--transform-speed": "0.185s",
              "--button-primary-color": "#e2b573",
              "--button-primary-color-dark": "#bf1f2b",
              "--button-primary-color-light": "#bf1f2b",
              "--button-primary-color-hover": "#cca366",
              "--button-primary-color-active": "#a58455",
              "--button-primary-border": "1px solid #bf1f2b",
            }}
            onPress={toggleSettings}
          >
            <img src={settings} className="h-[20px] w-[20px]" alt="Settings" />
          </AwesomeButton>

          <AwesomeButton
            type="primary"
            style={{
              "--button-default-height": "40px",
              "--button-default-font-size": "14px",
              "--button-default-border-radius": "6px",
              "--button-horizontal-padding": "20px",
              "--button-raise-level": "5px",
              "--button-hover-pressure": "2",
              "--transform-speed": "0.185s",
              "--button-primary-color": "#e2b573",
              "--button-primary-color-dark": "#bf1f2b",
              "--button-primary-color-light": "#bf1f2b",
              "--button-primary-color-hover": "#cca366",
              "--button-primary-color-active": "#a58455",
              "--button-primary-border": "1px solid #bf1f2b",
            }}
            onPress={handleTurnOffClick}
          >
            <img src={shutdown} className="h-[20px] w-[20px]" alt="Shutdown" />
          </AwesomeButton>
        </div>
      </nav>
      <div className="flex flex-1 gap-4 px-6 py-6 background  relative z-0">
        {/* Main Content Area */}
        <div className="flex flex-col flex-1 gap-4">
          {isCityPartBig ? (
            <>
              {/* City Section */}
              <div className="relative flex-1 gta5 p-6 rounded-lg shadow-lg flex border border-[#e2b573] flex-col justify-center items-center">
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg z-0"></div>
                <div className="relative z-10 text-center justify-center flex flex-col items-center">
                  <div>
                    <img
                      src={logo}
                      className="h-[100px] w-[200px]"
                      alt="Logo"
                    />
                  </div>
                  <h1 className="text-3xl font-bold mb-4 raleway text-white">
                    MixiCity Season 3
                  </h1>
                  <h1 className="text-[12px] w-[800px] raleway text-white mb-4">
                    MixiCity là thành phố giả tưởng dựa trên nền tảng của thành
                    phố Los Stantos. Dưới sự tác động của vũ trụ, MixiCity không
                    chỉ đơn giản là thành phố của con người bình thường mà còn
                    là nơi sinh sống của rất nhiều nhân vật từ các vũ trụ khác
                    nhau tới. Với trí tưởng tượng và khả năng nhập vai của chính
                    mình, các bạn có thể hoá thân thành mọi thứ trong MixiCity.
                  </h1>
                  <div className="flex gap-2 items-center justify-center mb-4">
                    <img
                      src={people}
                      className="h-[20px] w-[20px]"
                      alt="People Icon"
                    />
                    <p className="text-md raleway text-white">42 / 100</p>
                  </div>
                  <AwesomeButton
                    type="primary"
                    style={{
                      "--button-default-height": "50px",
                      "--button-default-font-size": "16px",
                      "--button-default-border-radius": "6px",
                      "--button-horizontal-padding": "20px",
                      "--button-raise-level": "7px",
                      "--button-hover-pressure": "2",
                      "--transform-speed": "0.185s",
                      "--button-primary-color": "#bf1f2b",
                      "--button-primary-color-dark": "#e2b573",
                      "--button-primary-color-light": "#e2b573",
                      "--button-primary-color-hover": "#95181f",
                      "--button-primary-color-active": "#95181f",
                      "--button-primary-border": "1px solid #95181f",
                    }}
                    onPress={handleConnectClick}
                  >
                    Connect
                  </AwesomeButton>
                </div>
              </div>
              <div
                className="h-[50px] bg-[#95181f] border border-[#e2b573] text-white text-center flex items-center justify-center rounded-lg shadow-md cursor-pointer hover:bg-[#750f16] transition-colors duration-300"
                onClick={handleSwitch}
              >
                <p className="text-lg font-semibold raleway">
                  MixiCity Sự Kiện
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="flex-1 bg-green-700 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-4 raleway">
                  Welcome to the Other City
                </h2>
                <p className="text-lg">Discover exciting new places!</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-500 mb-4">
                  Explore
                </button>
              </div>
              <div
                className="h-[50px] gta5 text-white text-center flex items-center justify-center rounded-lg shadow-md cursor-pointer"
                onClick={handleSwitch}
              >
                <p className="text-lg font-semibold">City Part</p>
              </div>
            </>
          )}
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <div className="bg-[#95181f] border border-[#e2b573] text-white p-4 rounded-lg shadow-lg flex-1">
            <div className="text-xl font-bold mb-4 gap-2 raleway test  flex justify-center items-center">
              <img src={speaker} className="w-[20px] mb-1 h-[20px]"></img>
              <h3 className="text-[#e2b573]">Thông báo MixiCity</h3>
            </div>
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
          <div className="bg-amber-600 p-6 h-64 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2 raleway text-center">
              Promotions
            </h3>
          </div>
        </div>
      </div>
      {isSettingsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10" />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-[500px] bg-[#bf1f26] text-black shadow-lg transform z-20 ${
          isSettingsOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold">Settings</h2>
          <p>Adjust your preferences here.</p>
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            onClick={toggleSettings}
          >
            Close
          </button>
        </div>
      </div>
      {isTurnOffModalVisible && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-30" />
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-40">
            <div className="bg-[#95181f] text-black p-6 rounded-md shadow-lg">
              <h2 className="text-lg font-bold mb-4 raleway text-[#e2b573]">
                Thoát khỏi thành phố
              </h2>
              <p className="text-[#e2b573]">
                Bạn có chắc muốn thoát khỏi thành phố không?
              </p>
              <div className="mt-4 flex gap-12 justify-center items-center">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={closeTurnOffModal}
                >
                  Yes
                </button>
                <button
                  className="bg-gray-300 text-black px-4 py-2 rounded"
                  onClick={closeTurnOffModal}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Connecting Modal */}
      {isConnecting && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-30" />
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-40">
            <div className="bg-white text-black p-6 rounded shadow-lg">
              <h2 className="text-lg font-bold mb-4">Connecting...</h2>
              <p>Please wait while we connect to the server.</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
