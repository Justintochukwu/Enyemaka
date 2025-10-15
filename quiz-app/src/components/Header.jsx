import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-6 shadow-md text-center">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Welcome to JustinBliss Quiz App
        </h1>
        <p className="text-sm sm:text-base md:text-lg mt-2 opacity-90">
          Test your knowledge, anywhere you are!
        </p>
      </div>
    </header>
  );
};

export default Header;
