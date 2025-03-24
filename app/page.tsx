import React from "react";
import { motion } from "framer-motion";
import Services from "@/components/services";
import WhySys from "@/components/whySys";

const HomePage = () => {
  const buttons = [
    { name: "Who are we", link: "#who-are-we" },
    { name: "Coverage", link: "#coverage" },
    { name: "Check Internet speed", link: "#check-speed" },
  ];

  return (
    <div className="bg-[url('/images/pexels-chriz-luminario-198087-2928796.jpg')] bg-cover bg-center h-screen w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="w-full md:w-1/2 flex flex-col gap-y-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight">
              SEAMLESS CONNECTIVITY AND QUALITY IT SOLUTIONS
            </h1>
            <p className="text-white font-bold text-lg">
              ...connecting with ease
            </p>
            <nav>
              <ul className="list-none flex flex-col sm:flex-row gap-4 text-white font-medium">
                {buttons.map((btn, index) => (
                  <li key={index}>
                    <a
                      href={btn.link}
                      className="text-white bg-[#c8196d] py-3 px-6 rounded-lg hover:bg-[#a3145a] transition-colors duration-300"
                    >
                      {btn.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="w-full md:w-1/2">
            {/* Placeholder for additional content or images */}
          </div>
        </div>
      </div>
      <Services />
      <WhySys />
    </div>
  );
};

export default HomePage;
