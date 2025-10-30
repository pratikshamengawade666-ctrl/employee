import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-gray-200 py-6 mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          
          {/* Left side - Brand or Text */}
          <p className="text-sm mb-2 sm:mb-0">
            © {new Date().getFullYear()} EmployeePortal. All rights reserved.
          </p>

          {/* Right side - Links */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition"> About</a>
            <a href="#" className="hover:text-white transition">  Menu</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer