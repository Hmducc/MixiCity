import React, { useState } from "react";

const SettingsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("account");

  const renderContent = () => {
    switch (activeSection) {
      case "account":
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold">Tài khoản</h2>
            <label className="block mt-4">
              <span className="text-sm text-gray-400">Tên tài khoản</span>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-gray-800 text-white"
                placeholder="Nhập tên tài khoản"
              />
            </label>
          </div>
        );
      case "appearance":
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold">Giao diện</h2>
            <label className="block mt-4">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-400">
                Sử dụng giao diện tối
              </span>
            </label>
            <label className="block mt-4">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-400">
                Làm mờ ảnh nền để dễ đọc hơn
              </span>
            </label>
          </div>
        );
      case "player":
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold">Trò chơi</h2>
            <label className="block mt-4">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-400">
                Sử dụng GPU xử lý UI
              </span>
            </label>
            <label className="block mt-4">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-400">
                Giới hạn âm thanh khung hình
              </span>
            </label>
            <label className="block mt-4">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-400">
                Camera phanh tay trên phương tiện
              </span>
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 text-white p-4">
        <h2 className="text-lg font-bold mb-4">Tùy chỉnh</h2>
        <ul>
          <li
            className={`p-2 cursor-pointer ${
              activeSection === "account" ? "bg-gray-800" : ""
            }`}
            onClick={() => setActiveSection("account")}
          >
            Tài khoản
          </li>
          <li
            className={`p-2 cursor-pointer ${
              activeSection === "appearance" ? "bg-gray-800" : ""
            }`}
            onClick={() => setActiveSection("appearance")}
          >
            Giao diện
          </li>
          <li
            className={`p-2 cursor-pointer ${
              activeSection === "player" ? "bg-gray-800" : ""
            }`}
            onClick={() => setActiveSection("player")}
          >
            Trò chơi
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-gray-800 text-white">{renderContent()}</div>
    </div>
  );
};

export default SettingsPage;
