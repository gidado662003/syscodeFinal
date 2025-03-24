import React from "react";

function WhySys() {
  const data = [
    {
      title: "Collaboration",
      description: "Connecting minds, creating brilliance.",
      image: "/images/whySys/colla-2.png",
    },
    {
      title: "Innovation",
      description: "Staying ahead of the curve.",
      image: "/images/whySys/inno.png",
    },
    {
      title: "Excellence",
      description: "Crafted with passion, delivered with precision.",
      image: "/images/whySys/excellence.png",
    },
    {
      title: "24/7 Support System",
      description: "A helping hand, available all day long.",
      image: "/images/whySys/24.png",
    },
  ];

  return (
    <div className="bg-white py-3 px-10">
      <div className="h-[1px] bg-red-900 w-full"></div>

      <h1 className="text-2xl font-bold text-gray-900 mt-8 px-2">
        Why SysCode?
      </h1>

      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
          {data.map((item) => (
            <div
              key={item.title}
              className="relative group overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                className="w-full h-28 object-contain transition-transform duration-300 group-hover:scale-105 "
                src={item.image}
                alt={item.title}
              />

              <div className=" flex flex-col items-center justify-center text-gray-900  text-center">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhySys;
