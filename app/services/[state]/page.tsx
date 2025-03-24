"use client";

import { useParams } from "next/navigation";
import { servicesData } from "@/components/data";
import { motion } from "framer-motion";

const homeColors = ["#F9C23C", "#FF7A45", "#C471ED", "#00D8FF", "#00C853"];
const smeColors = ["#FF4E50", "#FC913A", "#F9D423", "#A8E6CE", "#35A79C"];

export default function ServicePage() {
  const { state } = useParams();
  const stateData = servicesData[state as string];

  if (!stateData) {
    return (
      <div className="text-center text-red-500 text-2xl font-bold mt-10">
        No services available for this location.
      </div>
    );
  }

  return (
    <div
      className="relative bg-cover bg-center w-full min-h-screen"
      style={{
        backgroundImage:
          "url('/images/locations/pexels-temple-maduoma-268383533-17586367-min.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="text-white text-[4rem] mb-10 text-center font-extrabold pt-16 drop-shadow-lg uppercase">
        {state} Internet Plans
      </h1>

      {/* Home Connect */}
      <div className="bg-gray-100">
        <div className=" py-10 px-6 md:px-14 lg:px-20 ">
          <h1 className="text-center font-bold text-4xl mb-4 text-gray-900">
            Home Connect
          </h1>
          <p className="text-center text-lg max-w-2xl mx-auto text-gray-700">
            Enjoy unlimited high-speed internet for your residence using fiber
            or radio technology.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
          >
            {stateData.homeData.map((service, index) => (
              <div
                key={index}
                className="p-6 shadow-md  flex flex-col gap-y-[22px] items-center text-center text-white"
                style={{
                  backgroundColor: homeColors[index % homeColors.length],
                }}
              >
                <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
                <p className="text-xl font-semibold">
                  ₦{service.price.toLocaleString()}{" "}
                  {service.vatIncluded && "(VAT Included)"}
                </p>
                <p className="text-lg">Speed: {service.speed}</p>
                <p className="text-sm">Min Speed: {service.minSpeed}</p>
                <p className="text-sm">Validity: {service.validity}</p>
                <p className="text-lg font-bold">
                  Setup Cost: ₦{service.setupCost.toLocaleString()}
                </p>
                <p className="text-lg font-bold">{service.conditions}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* SME Connect */}
        <div className=" text-gray-700 py-10 px-6 md:px-14 lg:px-20  mt-10">
          <h1 className="text-center font-bold text-4xl mb-4">SME Connect</h1>
          <p className="text-center text-lg max-w-2xl mx-auto">
            Reliable, high-speed internet for small and medium-sized businesses
            with no data cap.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
          >
            {stateData.smeData.map((service, index) => (
              <div
                key={index}
                className="p-6 shadow-lg  flex flex-col gap-y-[22px] items-center text-center"
                style={{
                  backgroundColor: smeColors[index % smeColors.length],
                  color: "#fff",
                }}
              >
                <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
                <p className="text-xl font-semibold">
                  ₦{service.price.toLocaleString()}{" "}
                  {service.vatIncluded && "(VAT Included)"}
                </p>
                <p className="text-lg">Speed: {service.speed}</p>
                <p className="text-sm">Min Speed: {service.minSpeed}</p>
                <p className="text-sm">Validity: {service.validity}</p>
                <p className="text-lg font-bold">
                  Setup Cost: ₦{service.setupCost.toLocaleString()}
                </p>
                <p className="text-lg font-bold">{service.conditions}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
