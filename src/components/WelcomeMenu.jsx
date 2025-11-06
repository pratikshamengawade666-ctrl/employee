import React from 'react'
 
 function WelcomeMenu() {
   return (
     <div>
       <nav class="bg-blue-600 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">

        
        <div class="flex-shrink-0">
          <a href="#" class="text-white text-2xl font-bold tracking-wide">EmployeePortal</a>
        </div>

        
        <div class="flex space-x-6">
          <Link to={"/login"}  class="text-white hover:text-gray-200 font-medium">Login</Link>
          <Link to={"/register"}  class="text-white hover:text-gray-200 font-medium">Register</Link>

        </div>

      </div>
    </div>
  </nav>

     </div>
   )
 }
 
 export default WelcomeMenu