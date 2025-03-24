import React from "react";

function Services() {
  const data = [
    {
      title: "Home & SME Internet Services",
      description:
        "Our shared internet services are categorized into Home and SME packages.",
      image: "./images/services/radio.jpg",
    },
    {
      title: "Enterprise Connectivity",
      description:
        "Make your firm’s connectivity seamless with our latest technologies.",
      image: "./images/services/syscoedsss-enter.jpg",
    },
    {
      title: "Application Development",
      description:
        "Digital age – Digital processes. Lets take you online and help you stay there.",
      image: "./images/services/enterprice.jpg",
    },
    {
      title: "IT Integration Solution",
      description:
        "A managed and secure network helps your business increase productivity and cost efficiency.",
      image: "./images/services/SAAS-service.jpg",
    },
    {
      title: "IT Integration Solution",
      description:
        "A managed and secure network helps your business increase productivity and cost efficiency.",
      image: "./images/services/integration-syscoedsss-copy.jpg",
    },
    {
      title: "Cloud Services",
      description:
        "We offer personalized consultation, setup, and ongoing support to ensure you get the most out of these powerful platforms.",
      image: "./images/services/azure-1024x441.jpg",
    },
  ];

  return (
    <div className="bg-white py-3 px-10">
      <div className="h-[1px] bg-red-900 w-full"></div>

      <h1 className="text-3xl font-bold text-gray-900 mt-8 px-2">
        Our Services
      </h1>
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
          {data.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden  transition duration-300"
            >
              <img
                className="w-full h-[140px] object-cover"
                src={service.image}
                alt={service.title}
              />

              <div className="p-5 flex flex-col gap-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>

                <button className="mt-3 py-2 px-4 cursor-pointer text-white bg-[#c8196d] hover:bg-[#c8175e] transition rounded-md self-start">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
