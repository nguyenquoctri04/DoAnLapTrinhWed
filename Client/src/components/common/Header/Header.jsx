"use client"
import React from "react"
import { useState, useRef, useEffect } from "react"
import { Search, Home, Play, MessageCircle, User, LogOut, Settings, ChevronDown } from "lucide-react"
import { useNavigate } from "react-router-dom"
import logo from "../../../../src/assets/logoLTW.jpg"

const Header = () => {
  const [activeTab, setActiveTab] = useState("home")
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const dropdownRef = useRef(null);
  const navigate = useNavigate()

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLogout = () => {
    setIsProfileDropdownOpen(false)
    localStorage.clear()
    setTimeout(() => {
      navigate('/login')
    }, 500)
  }

  const handleEditProfile = () => {
    // Thêm logic chỉnh sửa profile ở đây
    console.log("Chỉnh sửa trang cá nhân")
    setIsProfileDropdownOpen(false)
    navigate("/profile/edit")
  }

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen)
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Left Side - Logo & Search */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center overflow-hidden">
                  <img src={logo || "/placeholder.svg"} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <span className="ml-2 text-lg sm:text-xl font-semibold text-gray-900 hidden md:block">
                  DT Social Media
                </span>
              </div>
            </div>

            {/* Search Bar - Shortened */}
            <div className="w-32 sm:w-48 md:w-64 lg:w-72">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="block w-full pl-7 sm:pl-10 pr-2 sm:pr-3 py-1.5 sm:py-2 border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:text-pink-500 focus:border-transparent focus:bg-white text-xs sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Center - Home & Watch (Hidden on small screens) */}
          <div className="hidden sm:flex items-center space-x-4 md:space-x-8">
            {/* Home Icon */}
            <button
              onClick={() => {
                setActiveTab("home")
                navigate("/home")
              }}
              className="cursor-pointer relative p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
            >
              <Home
                className={`h-5 w-5 md:h-6 md:w-6 transition-colors duration-200 ${
                  activeTab === "home" ? "text-pink-500" : "text-gray-600 group-hover:text-pink-500"
                }`}
              />
              <span className="sr-only">Trang chủ</span>
              {/* Underline */}
              <div
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-pink-500 transition-all duration-200 ${
                  activeTab === "home" ? "w-6 md:w-8" : "w-0"
                }`}
              ></div>
            </button>

            {/* Watch Video Icon */}
            <button
              onClick={() => {
                setActiveTab("watch")
                navigate("/watch")
              }}
              className="cursor-pointer relative p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
            >
              <Play
                className={`h-5 w-5 md:h-6 md:w-6 transition-colors duration-200 ${
                  activeTab === "watch" ? "text-pink-500" : "text-gray-600 group-hover:text-pink-500"
                }`}
              />
              <span className="sr-only">Xem video</span>
              {/* Underline */}
              <div
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-pink-500 transition-all duration-200 ${
                  activeTab === "watch" ? "w-6 md:w-8" : "w-0"
                }`}
              ></div>
            </button>
          </div>

          {/* Right Side - Message & Profile */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 flex-1 justify-end">
            {/* Home & Watch for mobile */}
            <div className="flex sm:hidden items-center space-x-1">
              <button
                onClick={() => setActiveTab("home")}
                className="relative p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <Home
                  className={`h-5 w-5 transition-colors duration-200 ${
                    activeTab === "home" ? "text-pink-500" : "text-gray-600"
                  }`}
                />
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-pink-500 transition-all duration-200 ${
                    activeTab === "home" ? "w-6" : "w-0"
                  }`}
                ></div>
              </button>

              <button
                onClick={() => setActiveTab("watch")}
                className="relative p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <Play
                  className={`h-5 w-5 transition-colors duration-200 ${
                    activeTab === "watch" ? "text-pink-500" : "text-gray-600"
                  }`}
                />
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-pink-500 transition-all duration-200 ${
                    activeTab === "watch" ? "w-6" : "w-0"
                  }`}
                ></div>
              </button>
            </div>

            {/* Message Icon */}
            <button
              onClick={() => navigate("/messenger")}
              className="cursor-pointer not-first:p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 relative"
            >
              <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 hover:text-pink-500" />
              {/* Notification badge */}
              <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 h-3 w-3 sm:h-4 sm:w-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-medium">3</span>
              </span>
              <span className="sr-only">Tin nhắn</span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleProfileDropdown}
                className="cursor-pointer p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 flex items-center"
              >
                <div className="h-6 w-6 sm:h-8 sm:w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <ChevronDown
                  className={`ml-1 h-3 w-3 text-gray-500 transition-transform duration-200 ${
                    isProfileDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="sr-only">Hồ sơ</span>
              </button>

              {/* Dropdown Menu */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {/* Edit Profile Option */}
                  <button
                    onClick={handleEditProfile}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Settings className="h-4 w-4 text-gray-500" />
                    <span>Chỉnh sửa trang cá nhân</span>
                  </button>

                  {/* Separator */}
                  <div className="border-t border-gray-100 my-1"></div>

                  {/* Logout Option */}
                  <button
                    onClick={handleLogout}
                    className="cursor-pointer w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                  >
                    <LogOut className="h-4 w-4 text-red-500" />
                    <span>Đăng xuất</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
