import React from "react";

const Homepage: React.FC = () => {
  return (
    <div className="h-screen bg-gray-800 text-white flex flex-col">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between bg-gray-900 shadow-lg px-6 py-4">
        <div className="text-lg font-bold">MixiCity</div>
        <div className="flex gap-6">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a href="#support" className="hover:underline">
            Support
          </a>
        </div>
        <div className="flex gap-4">
          <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
            Settings
          </button>
          <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-500">
            Logout
          </button>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* City Section */}
        <div className="flex-1 bg-gray-100 text-gray-900 p-6 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4">MixiCity Season 3</h2>
          <button className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-500 mb-4">
            Connect
          </button>
          <p className="text-lg">Players: 42 / 100</p>
          <p className="text-sm text-gray-600">
            Explore the city and enjoy the journey!
          </p>
        </div>

        {/* Sidebar */}
        <div className="w-1/3 flex flex-col">
          {/* News Section */}
          <div className="bg-gray-300 text-gray-900 p-4 flex-1">
            <h3 className="text-xl font-bold mb-4">News Section</h3>
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
          <div className="bg-blue-700 p-4">
            <h3 className="text-lg font-bold mb-2">Promotions123</h3>
            <p>Don't miss our exclusive offers!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
