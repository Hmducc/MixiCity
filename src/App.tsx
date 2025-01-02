import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { FaGamepad, FaPalette, FaUser } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import close from "../assets/close.svg";
import shutdown from "../assets/down.svg";
import hagg from "../assets/hagg.jpg";
import info from "../assets/info.svg";
import logo from "../assets/logo-mixicity.png";
import map from "../assets/map.svg";
import people from "../assets/people.svg";
import ps4 from "../assets/ps4.svg";
import settings from "../assets/settings.svg";
import speaker from "../assets/speaker.svg";
import "./App.css";
import FallingBlossom from "./FallingBlossom";
import FadingImageSlideshow from "./Images";

const Homepage: React.FC = () => {
  const [isCityPartBig, setIsCityPartBig] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isTurnOffModalVisible, setIsTurnOffModalVisible] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [activeSection, setActiveSection] = useState("account");
  const renderContent = () => {
    switch (activeSection) {
      case "account":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6 raleway text-[#fecc86]">
              Cài đặt Tài Khoản
            </h2>
            <label className="block">
              <span className="text-md raleway text-[#fecc86]">
                Tên tài khoản
              </span>
              <input
                type="text"
                className="mt-2 p-3 w-full raleway text-sm rounded-lg bg-[#bf1f2b] placeholder-[#fecc86] text-[#fecc86] border border-[#95181f] font-bold  shadow-md focus:outline-none focus:ring-2 focus:ring-[#e2b573]"
                placeholder="Nhập tên tài khoản của bạn"
              />
            </label>
          </div>
        );
      case "appearance":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6 raleway text-[#fecc86]">
              Cài đặt Giao Diện
            </h2>
            <div className="mb-2 raleway text-[#fecc86] font-semibold">
              Giao diện tối
            </div>

            <div className="flex items-center space-x-4 border-[#fecc86] border h-12 w-52 rounded-md mb-5 hover:bg-[#ae1e25]">
              <label
                htmlFor="darkMode"
                className="flex items-center space-x-4 cursor-pointer"
              >
                <input type="checkbox" id="darkMode" className="peer hidden" />
                <div className="w-5 h-5 border-2 border-[#e2b573] rounded-sm flex items-center justify-center peer-checked:bg-[#e2b573] peer-checked:border-[#e2b573]"></div>
                <span className="text-[#fecc86] raleway font-semibold text-[13px]">
                  Sử dụng giao diện tối
                </span>
              </label>
            </div>

            <div className="mb-2 raleway text-[#fecc86] font-semibold">
              Làm mờ ảnh nền
            </div>
            <div className="flex items-center space-x-4 border-[#fecc86] border h-16 w-[470px] rounded-md hover:bg-[#ae1e25]">
              <label
                htmlFor="blurBackground"
                className="flex items-center space-x-4 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="blurBackground"
                  className="peer hidden"
                />
                <div className="w-5 h-5 border-2  border-[#e2b573] rounded-sm mb-5 flex items-center justify-center peer-checked:bg-[#e2b573] peer-checked:border-[#e2b573]"></div>
                <div>
                  <span className="text-[#fecc86] raleway font-semibold text-[13px] ">
                    Làm mờ ảnh nền và giảm độ tương phản để bạn có thể đọc tốt
                    hơn
                  </span>

                  <div className="text-[11px] raleway mt-2 ">
                    Bật tính năng này có thể làm giảm hiệu năng của UI
                  </div>
                </div>
              </label>
            </div>
          </div>
        );
      case "player":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6 raleway text-[#fecc86]">
              Cài đặt Trò Chơi
            </h2>
            <div className="mb-2 raleway text-[#fecc86] font-semibold">
              Sử dụng GPU xử lí UI
            </div>

            <div className="flex items-center space-x-4 border-[#fecc86] border h-16 rounded-md mb-5 hover:bg-[#ae1e25]">
              <label
                htmlFor="GPU"
                className="flex items-center space-x-4 cursor-pointer"
              >
                <input type="checkbox" id="GPU" className="peer hidden" />
                <div className="w-5 h-5 border-2   border-[#e2b573] rounded-sm  flex items-center justify-center peer-checked:bg-[#e2b573] peer-checked:border-[#e2b573]"></div>

                <span className="text-[#fecc86] text-[13px]    raleway font-semibold ">
                  Sửa lỗi LAG UI khi GPU đang hoạt động tối đa, nhưng nó sẽ bị
                  ảnh hưởng đôi chút khi GPU bị CRASH
                </span>
              </label>
            </div>

            <div className="mb-2 raleway text-[#fecc86] font-semibold">
              Giới hạn âm thanh khung hình
            </div>
            <div className="flex items-center space-x-4 border-[#fecc86] border h-12 mb-5 rounded-md hover:bg-[#ae1e25]">
              <label
                htmlFor="Soundperframe"
                className="flex items-center space-x-4 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="Soundperframe"
                  className="peer hidden"
                />
                <div className="w-5 h-5 border-2  border-[#e2b573] rounded-sm  flex items-center justify-center peer-checked:bg-[#e2b573] peer-checked:border-[#e2b573]"></div>
                <div>
                  <span className="text-[#fecc86] raleway font-semibold text-[13px]  ">
                    Sửa lỗi mất âm thanh khi ở khung hình cao bằng cách tắt
                    rage::g..audUseFrameLimiter
                  </span>
                </div>
              </label>
            </div>
            <div className="mb-2 raleway text-[#fecc86] font-semibold">
              Camera phanh tay trên phương tiện
            </div>
            <div className="flex items-center space-x-4 border-[#fecc86] border h-12 mb-5 rounded-md hover:bg-[#ae1e25]">
              <label
                htmlFor="brake"
                className="flex items-center space-x-4 cursor-pointer"
              >
                <input type="checkbox" id="brake" className="peer hidden" />
                <div className="w-5 h-5 border-2  border-[#e2b573] rounded-sm  flex items-center justify-center peer-checked:bg-[#e2b573] peer-checked:border-[#e2b573]"></div>
                <div>
                  <span className="text-[#fecc86] raleway font-semibold text-[13px] ">
                    Tự động cân giữa camera phương tiện khi sử dụng phanh tay
                  </span>
                </div>
              </label>
            </div>
            <div className="mb-2 raleway text-[#fecc86] font-semibold">
              Tắt rung camera
            </div>
            <div className="flex items-center space-x-4 border-[#fecc86] border h-12 mb-5 rounded-md hover:bg-[#ae1e25]">
              <label
                htmlFor="shakecamera"
                className="flex items-center space-x-4 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="shakecamera"
                  className="peer hidden"
                />
                <div className="w-5 h-5 border-2  border-[#e2b573] rounded-sm flex items-center justify-center peer-checked:bg-[#e2b573] peer-checked:border-[#e2b573]"></div>
                <div>
                  <span className="text-[#fecc86] raleway font-semibold  text-[13px]">
                    Tắt rung camera ở chế độ góc nhìn thứ 3 khi đang chạy hoặc
                    sử dụng phương tiện
                  </span>
                </div>
              </label>
            </div>
            <div className="mb-2 raleway text-[#fecc86] font-semibold">
              Cố định kích thước UI
            </div>
            <div className="flex items-center space-x-4 border-[#fecc86] border h-12 mb-5 rounded-md hover:bg-[#ae1e25]">
              <label
                htmlFor="1920"
                className="flex items-center space-x-4 cursor-pointer"
              >
                <input type="checkbox" id="1920" className="peer hidden" />
                <div className="w-5 h-5 border-2  border-[#e2b573] rounded-sm  flex items-center justify-center peer-checked:bg-[#e2b573] peer-checked:border-[#e2b573]"></div>
                <div>
                  <span className="text-[#fecc86] raleway font-semibold text-[13px] ">
                    Ép NUI về độ phân giải 1920x1080
                  </span>
                </div>
              </label>
            </div>
            <div className="mb-2 raleway text-[#fecc86] font-semibold">
              Khử tiếng ồn khi chat voice
            </div>
            <div className="flex items-center space-x-4 border-[#fecc86] border h-12 rounded-md hover:bg-[#ae1e25]">
              <label
                htmlFor="chatvoice"
                className="flex items-center space-x-4 cursor-pointer"
              >
                <input type="checkbox" id="chatvoice" className="peer hidden" />
                <div className="w-5 h-5 border-2  border-[#e2b573] rounded-sm  flex items-center justify-center peer-checked:bg-[#e2b573] peer-checked:border-[#e2b573]"></div>
                <div>
                  <span className="text-[#fecc86] raleway font-semibold text-[13px] ">
                    Bật tính năng khử tiếng ồn (sử dụng RNNoise) cho chat voice
                    mặc định
                  </span>
                </div>
              </label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

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
    setTimeout(() => setIsConnecting(false), 1000);
  };

  return (
    <div className="h-screen text-white flex flex-col ">
      <FallingBlossom></FallingBlossom>

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
                  className="h-[15px] w-[15px] fill-[#e2b573] group-hover:fill-[#bf1f2b] transition-colors duration-300"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z" />
                </svg>
                <span className="text-[#e2b573] group-hover:text-[#bf1f2b] font-bold text-sm transition-colors duration-300">
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
        <div className="flex flex-col flex-1 gap-4">
          {isCityPartBig ? (
            <>
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
                  <div className="flex gap-4 justify-center items-center text-center mb-5">
                    <div className="flex gap-2 raleway text-[12px] bg-black bg-opacity-50 p-1 rounded">
                      <img src={map} className="w-[20px] h-[20px]"></img>Los
                      Santos
                    </div>
                    <div className="flex gap-2 raleway text-[12px] bg-black bg-opacity-50 p-1 rounded">
                      <img src={ps4} className="w-[20px] h-[20px] "></img>
                      Nhập vai - RolePlay
                    </div>
                    <div className="raleway text-[12px] mb-1 bg-black bg-opacity-50 p-1 rounded">
                      DLC: Los Santos Drug Wars
                    </div>
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
                className="h-[50px] bg-[#ae1e25] border  border-[#e2b573] text-white text-center flex items-center justify-center rounded-lg shadow-md cursor-pointer hover:bg-[#750f16] transition-colors duration-300"
                onClick={handleSwitch}
              >
                <img src={logo} className="w-[40px] h-[20px]"></img>
                <p className="text-lg font-semibold raleway text-[#e2b573]">
                  MixiCity Sự Kiện
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="relative flex-1 dragon p-6 rounded-lg shadow-lg flex border border-[#e2b573] flex-col justify-center items-center">
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
                    MixiCity Sự Kiện
                  </h1>
                  <h1 className="text-[12px] w-[800px] raleway text-white mb-4">
                    Thành Phố tổ chức sự kiện cho MixiCity
                  </h1>
                  <div className="flex gap-2 items-center justify-center mb-4">
                    <img
                      src={people}
                      className="h-[20px] w-[20px]"
                      alt="People Icon"
                    />
                    <p className="text-md raleway text-white">0 / 0</p>
                  </div>
                  <div className="flex gap-4 justify-center items-center text-center mb-5">
                    <div className="flex gap-2 raleway text-[12px] bg-black bg-opacity-50 p-1 rounded">
                      <img src={map} className="w-[20px] h-[20px]"></img>Los
                      Santos
                    </div>
                    <div className="flex gap-2 raleway text-[12px] bg-black bg-opacity-50 p-1 rounded">
                      <img src={ps4} className="w-[20px] h-[20px] "></img>
                      Nhập vai - RolePlay
                    </div>
                    <div className="raleway text-[12px] mb-1 bg-black bg-opacity-50 p-1 rounded">
                      DLC: Los Santos Drug Wars
                    </div>
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
                className="h-[50px] bg-[#ae1e25] border border-[#e2b573] text-white text-center flex items-center justify-center rounded-lg shadow-md cursor-pointer hover:bg-[#750f16] transition-colors duration-300"
                onClick={handleSwitch}
              >
                <img src={logo} className="w-[40px] h-[20px]"></img>
                <p className="text-lg font-semibold raleway text-[#e2b573]">
                  MixiCity Season 3
                </p>
              </div>
            </>
          )}
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <div className="bg-[#ae1e25] border border-[#e2b573] text-white p-4 rounded-lg shadow-lg flex-1">
            <div className="text-xl font-bold mb-4 raleway test flex items-center  p-4 relative">
              <div className="flex items-center gap-2 absolute inset-0 justify-center">
                <img
                  src={speaker}
                  className="w-[20px] h-[20px]"
                  alt="Speaker"
                />
                <h3 className="text-[#e2b573]">Thông báo MixiCity</h3>
                <Tooltip
                  id="my-tooltip"
                  style={{
                    backgroundColor: "#e2b573",
                    color: "#bf1f2b",
                    fontSize: "12px",
                    height: "30px",
                    padding: "5px",
                  }}
                />
              </div>

              <img
                src={info}
                className="w-[20px] h-[20px] absolute right-4"
                alt="Info"
                data-tooltip-content="Các thông báo mới nhất từ MixiCity"
                data-tooltip-place="top"
                data-tooltip-id="my-tooltip"
              />
            </div>

            <div
              className="h-[400px] overflow-y-scroll space-y-4  rounded-lg  [&::-webkit-scrollbar]:w-1
                        [&::-webkit-scrollbar-track]:rounded-full
                      [&::-webkit-scrollbar-track]:bg-gray-100
                        [&::-webkit-scrollbar-thumb]:rounded-full
                      [&::-webkit-scrollbar-thumb]:bg-gray-300
                      dark:[&::-webkit-scrollbar-track]:bg-[#e2b573]
                      dark:[&::-webkit-scrollbar-thumb]:bg-[#bf1f2b] "
            >
              <ul className="space-y-2">
                <li>
                  <div className="flex space-x-4 p-4">
                    <img
                      src={hagg}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full"
                    />

                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[#fecc86] raleway font-semibold text-base">
                          hoanganh
                        </span>
                        <span className="text-gray-300 raleway text-[12px]">
                          khoảng 2 ngày trước
                        </span>
                      </div>

                      <p className="text-gray-200 mt-1 raleway text-sm leading-relaxed">
                        <span className="text-red-500">🚨</span> Thông báo giai
                        đoạn 2! Theo kế hoạch kể từ 01/01/2025, có những thay
                        đổi như sau: - Kể từ 18h ngày 31/12/2024, chính thức cho
                        các thành viên Chờ duyệt vào thành phố. @everyone
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex space-x-4 p-4">
                    <img
                      src={hagg}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full"
                    />

                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[#fecc86] raleway font-semibold text-base">
                          hoanganh
                        </span>
                        <span className="text-gray-300 raleway text-[12px]">
                          khoảng 8 ngày trước
                        </span>
                      </div>

                      <p className="text-gray-200 mt-1 raleway text-sm leading-relaxed">
                        <span className="text-red-500">🚨</span> Theo kế hoạch
                        kể từ 01/01/2025 sẽ có những thay đổi như sau: 1. Mở
                        public kể từ ngày này, đồng nghĩa các bạn chỉ cần đã gửi
                        form sẽ được tham gia thành phố. 2. Chia lại cấp bậc
                        công dân trong thành phố bao gồm: Công dân, công dân tạm
                        thời, công dân chờ duyệt. 3. Quyền lợi của các cấp bậc
                        như sau: + Công dân: FULL chức năng. + Công dân tạm
                        thời: Giới hạn các chức năng liên quan đến tiền, sở hữu
                        tài sản (Ô tô và nhà). Được cầm tối đa 50.000$ trong
                        người. + Công dân chờ duyệt: Giới hạn chức năng liên
                        quan đến nghề bẩn, tiền, sở hữu tài sản. Được cầm tối đa
                        20.000$. 4. Kể từ 24/12/2024, dừng duyệt thành viên theo
                        phương án cũ. 5. Phương thức phỏng vấn duyệt thành viên
                        mới kể từ 1/1/2025: + Đối tượng áp dụng: Công dân tạm
                        thời và công dân chờ duyệt. + Hình thức duyệt: 1 tuần 1
                        lần, thời gian duyệt từ 11h - 13h vào buổi sáng và 20h -
                        22h vào ngày thứ 7 và chủ nhật của tuần đó. Các công dân
                        trong mục đối tượng được áp dụng sẽ xếp hàng theo thứ tự
                        phục vụ là **ĐẾN TRƯỚC DUYỆT TRƯỚC, ĐẾN SAU DUYỆT SAU**.
                        Chỉ duyệt 1 ca tối đa 20 người, kết quả có luôn. Nếu
                        được duyệt có thể từ Chờ duyệt - Công dân hoặc Chờ duyệt
                        - Công dân tạm thời hoặc Công dân tạm thời - Công dân.
                        Mỗi người chỉ được tham gia phỏng vấn 1 lần 1 tuần. Tạch
                        sẽ giữ nguyên quyền công dân, không có trường hợp bị tụt
                        quyền công dân trừ một vài trường hợp đặc biệt là tiễn
                        luôn. + Thành phần tiến hành duyệt: Thị trưởng (Chỉ báo
                        **DUYỆT** hoặc **TẠCH**), Cán bộ đồn liêm, cán bộ bệnh
                        viện, quản trị viên thành phố. + Tiêu chí để được duyệt:
                        Thông qua quá trình roleplay trong thành phố, tốt thì
                        duyệt, tạch thì đen. 6. Chính thức cho phép chơi game
                        bằng GTA V trên Epic, Rockstar Game nhưng vẫn cần tài
                        khoản Steam. Chúc mọi người có một năm mới thật tuyệt
                        vời!
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex space-x-4 p-4">
                    <img
                      src={hagg}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full"
                    />

                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[#fecc86] raleway font-semibold text-base">
                          hoanganh
                        </span>
                        <span className="text-gray-300 raleway text-[12px]">
                          khoảng 10 ngày trước
                        </span>
                      </div>

                      <p className="text-gray-200 mt-1 raleway text-sm leading-relaxed">
                        <span className="text-red-500">🚨</span> Các bạn đang là
                        Công dân và Công dân tạm thời đã có thể tham gia discord
                        của MixiCity Season 3 bằng nút trong ảnh. Sau khi tham
                        gia, các quản trị viên sẽ căn cứ vào form của các bạn để
                        set role theo đúng quy định. Các bạn vui lòng kiểm tra
                        kỹ discord xem có trùng với discord đã liên kết với
                        MixiCity không. Nếu không chính xác, các bạn không thể
                        vào được MixiCity. Do đây là hệ thống tự động, không có
                        link Invite nên đừng mong chờ vào phép màu để có link
                        invite!
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex space-x-4 p-4">
                    <img
                      src={hagg}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full"
                    />

                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[#fecc86] raleway font-semibold text-base">
                          hoanganh
                        </span>
                        <span className="text-gray-300 raleway text-[12px]">
                          khoảng 20 ngày trước
                        </span>
                      </div>

                      <p className="text-gray-200 raleway mt-1 text-sm leading-relaxed">
                        <span className="text-red-500">🚨</span> @everyone Cuộc
                        vui cũng có lúc tàn Anh em sống tốt, ngàn đời F.A -
                        Thành phố sẽ đóng cửa thử nghiệm vào lúc 12h trưa hôm
                        nay, cảm ơn các bạn đã nhiệt tình báo lỗi và bây giờ là
                        thời gian để chúng tôi kiểm tra fix lại lỗi. Tổng cộng
                        có gần 300 cái email báo lỗi cần xử lý nên công việc hơi
                        nặng. MixiCity sẽ quay trở lại vào thời gian sớm nhất.
                        Chúc các bạn một ngày tốt lành. Hẹn gặp lại 👋 - Trước
                        khi đóng cửa, server muốn stress test thêm một lần nữa.
                        Vào lúc 10h, server sẽ mở lên 500 slot để test đồng bộ
                        và voice. Kính mong các bạn phi vào afk cũng được để xem
                        500 người nó như thế nào.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex space-x-4 p-4">
                    <img
                      src={hagg}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full"
                    />

                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[#fecc86] raleway font-semibold text-base">
                          hoanganh
                        </span>
                        <span className="text-gray-300 raleway text-[12px]">
                          khoảng 3 tháng trước
                        </span>
                      </div>

                      <p className="text-gray-200 raleway mt-1 text-sm leading-relaxed">
                        <span className="text-red-500">🚨</span> Lưu ý trước khi
                        chơi, trong trường hợp bạn cần báo cáo hãy sử dụng lệnh:
                        `/baocao noidungbaocao`. Các trường hợp sử dụng lệnh báo
                        cáo: 1. Khi có người chơi khác phá banh chành nhà lầu.
                        2. Khi gặp lỗi trong game. --- Các trường hợp không được
                        sử dụng lệnh báo cáo: 1. Khi bị chết. 2. Khi không biết
                        chơi thế nào. 3. Thích gọi admin để trêu. --- Các trường
                        hợp sử dụng sai mục đích, người chơi sẽ được bye bye
                        vĩnh viễn kèm 1 sẹo trong hồ sơ.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex space-x-4 p-4">
                    <img
                      src={hagg}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full"
                    />

                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[#fecc86] raleway font-semibold text-base">
                          hoanganh
                        </span>
                        <span className="text-gray-300 raleway text-[12px]">
                          khoảng 3 tháng trước
                        </span>
                      </div>

                      <p className="text-gray-200 raleway mt-1 text-sm leading-relaxed">
                        <span className="text-red-500">🚨</span> Những điều cần
                        biết khi tham gia MixiCity Public Test: 1. Chuẩn bị một
                        tâm hồn thật đẹp và trong sáng. 2. BAN VĨNH VIỄN = KHỎI
                        NỘP FORM. 3. Không bám đuôi streamer, chơi để trải
                        nghiệm trò chơi không phải chơi để lấy số lấy má với
                        streamer. 4. Không quậy phá ở mức banh chành, phá ở
                        trong quy củ để ra lỗi. Lỗi vui lòng report về email:
                        support@hoanganhgaming.com, mô tả chi tiết, có hình ảnh
                        hoặc video càng tốt. Lỗi càng giá trị tỷ lệ được vào
                        thành phố chính càng cao. 5. Đăng ký tài khoản tại:
                        https://mixicity.com/, đăng ký xong cần liên kết steam,
                        discord và facebook, sau khi hoàn thiện các bước trên
                        mới có thể vào PUBLIC TEST (Không cần nộp form trong
                        thời gian public test) 6. Sau khi có hiệu lệnh mở server
                        chính thức, link tải về sẽ được ghim lên trên cao ở box
                        này. 7. Mọi thông báo chi tiết sẽ được thông báo ở đây
                        và ghim trên cao, vui lòng bấm vào biểu tượng đinh ghim
                        để đọc.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border border-[#e2b573] p-1 h-64 rounded-lg shadow-lg">
            <FadingImageSlideshow></FadingImageSlideshow>
          </div>
        </div>
      </div>
      {isSettingsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10" />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-[850px] border-l border-[#e2b573] transform z-20 ${
          isSettingsOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500`}
      >
        <div className="flex h-screen bg-[#bf1f2b] ">
          <div className="w-1/4 bg-[#ae1e25] text-[#fecc86] p-6">
            <div className=" ">
              <h2 className="text-2xl font-semibold mb-6 raleway">Cài Đặt</h2>
            </div>
            <ul>
              <li
                className={`flex items-center space-x-3 p-4 mb-3 rounded-lg cursor-pointer transition-all ${
                  activeSection === "account"
                    ? "bg-[#e2b573] text-[#bf1f26]"
                    : "hover:bg-[#e2b573] hover:text-[#bf1f2b]"
                }`}
                onClick={() => setActiveSection("account")}
              >
                <FaUser className="mb-1" />
                <span className="raleway font-bold  ">Tài Khoản</span>
              </li>
              <li
                className={`flex items-center space-x-3 p-4 mb-3 rounded-lg cursor-pointer transition-all ${
                  activeSection === "appearance"
                    ? "bg-[#e2b573] text-[#bf1f26]"
                    : "hover:bg-[#e2b573] hover:text-[#bf1f2b]"
                }`}
                onClick={() => setActiveSection("appearance")}
              >
                <FaPalette className="" />
                <span className="raleway font-bold">Giao Diện</span>
              </li>
              <li
                className={`flex items-center space-x-3 p-4 rounded-lg cursor-pointer transition-all ${
                  activeSection === "player"
                    ? "bg-[#e2b573] text-[#bf1f26]"
                    : "hover:bg-[#e2b573] hover:text-[#bf1f2b]"
                }`}
                onClick={() => setActiveSection("player")}
              >
                <FaGamepad className="" />
                <span className="raleway font-bold">Trò Chơi</span>
              </li>
            </ul>
            <div className=" mt-5 flex justify-center items-center">
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
                <img src={close} className="h-[20px] w-[20px]" alt="Shutdown" />
              </AwesomeButton>
            </div>
          </div>

          <div className="flex-1 bg-[#bf1f2b] text-white overflow-y-auto">
            {renderContent()}
          </div>
        </div>
      </div>
      {isTurnOffModalVisible && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-80 z-30" />
          <div className="fixed top-4 right-4 z-40">
            <div className=" text-black p-6 rounded-md shadow-lg flex justify-center items-center gap-5">
              <p className="text-[#e2b573] font-semibold raleway">
                Bạn có chắc muốn thoát khỏi thành phố không?
              </p>
              <div className=" flex gap-5 justify-center items-center raleway">
                <AwesomeButton
                  type="primary"
                  style={{
                    "--button-default-height": "40px",
                    "--button-default-font-size": "13px",
                    "--button-default-border-radius": "6px",
                    "--button-horizontal-padding": "20px",
                    "--button-raise-level": "3px",
                    "--button-hover-pressure": "2",
                    "--transform-speed": "0.185s",
                    "--button-primary-color": "#bf1f2b",
                    "--button-primary-color-dark": "#e2b573",
                    "--button-primary-color-light": "#e2b573",
                    "--button-primary-color-hover": "#95181f",
                    "--button-primary-color-active": "#95181f",
                    "--button-primary-border": "1px solid #95181f",
                  }}
                  onPress={closeTurnOffModal}
                >
                  Đi ngủ
                </AwesomeButton>
                <AwesomeButton
                  type="primary"
                  style={{
                    "--button-default-height": "40px",
                    "--button-default-font-size": "13px",
                    "--button-default-border-radius": "6px",
                    "--button-horizontal-padding": "20px",
                    "--button-raise-level": "3px",
                    "--button-hover-pressure": "2",
                    "--transform-speed": "0.185s",
                    "--button-primary-color": "#e2b573",
                    "--button-primary-color-dark": "#bf1f2b",
                    "--button-primary-color-light": "#bf1f2b",
                    "--button-primary-color-hover": "#cca366",
                    "--button-primary-color-active": "#a58455",
                    "--button-primary-border": "1px solid #bf1f2b",
                  }}
                  onPress={closeTurnOffModal}
                >
                  Chiến tiếp
                </AwesomeButton>
              </div>
            </div>
          </div>
        </>
      )}

      {isConnecting && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-30" />
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-40">
            <div className="bg-[#bf1f26] text-[#fecc86] p-6 w-[1000px] rounded shadow-lg flex flex-col justify-center ">
              <h2 className="text-lg font-bold mb-4 raleway">
                Đang kết nối...
              </h2>
              <p className="raleway text-base">
                Chờ tí đê, sắp được vào thành phố rồi bạn êii
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
