import React, { useState } from "react";

// Define props type
interface SettingsPanelProps {
  toggleSettings: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ toggleSettings }) => {
  const [activeCategory, setActiveCategory] = useState("account"); // Default category

  // Function to render the content of the selected category
  const renderCategoryContent = () => {
    switch (activeCategory) {
      case "account":
        return (
          <div>
            <h3 className="text-md font-semibold text-[#e2b573]">Tài khoản</h3>
            <p className="text-sm text-gray-400 mt-2">
              Thông tin tài khoản của bạn và tùy chọn bảo mật.
            </p>
          </div>
        );
      case "appearance":
        return (
          <div>
            <h3 className="text-md font-semibold text-[#e2b573]">Giao diện</h3>
            <div className="mt-4">
              <label className="block mb-2 text-sm text-gray-400">
                Chế độ sáng / tối
              </label>
              <select className="w-full bg-[#2c2c2c] text-white p-2 rounded border border-gray-600 focus:ring-2 focus:ring-[#e2b573]">
                <option>Sáng</option>
                <option>Tối</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm text-gray-400">
                Màu sắc chủ đề
              </label>
              <input
                type="color"
                className="w-full h-[40px] p-2 rounded border border-gray-600 bg-[#2c2c2c] cursor-pointer"
              />
            </div>
          </div>
        );
      case "settings":
        return (
          <div>
            <h3 className="text-md font-semibold text-[#e2b573]">Thiết lập</h3>
            <p className="text-sm text-gray-400 mt-2">
              Tùy chỉnh cài đặt nâng cao và các tùy chọn khác.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 bg-[#1e1e1e] text-white h-full">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-4">
        <h2 className="text-lg font-semibold">Tùy chỉnh</h2>
        <button
          onClick={toggleSettings}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Sidebar and Content */}
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-1/3 bg-[#252525] p-4 rounded-lg shadow-md">
          <ul className="space-y-4">
            <li
              className={`text-sm font-medium cursor-pointer ${
                activeCategory === "account"
                  ? "text-[#e2b573]"
                  : "hover:text-[#e2b573] text-gray-400"
              }`}
              onClick={() => setActiveCategory("account")}
            >
              Tài khoản
            </li>
            <li
              className={`text-sm font-medium cursor-pointer ${
                activeCategory === "appearance"
                  ? "text-[#e2b573]"
                  : "hover:text-[#e2b573] text-gray-400"
              }`}
              onClick={() => setActiveCategory("appearance")}
            >
              Giao diện
            </li>
            <li
              className={`text-sm font-medium cursor-pointer ${
                activeCategory === "settings"
                  ? "text-[#e2b573]"
                  : "hover:text-[#e2b573] text-gray-400"
              }`}
              onClick={() => setActiveCategory("settings")}
            >
              Thiết lập
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="flex-1 ml-4 bg-[#1e1e1e] p-6 rounded-lg shadow-md">
          {renderCategoryContent()}
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
