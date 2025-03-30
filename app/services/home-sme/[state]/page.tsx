"use client";

import { useParams } from "next/navigation";
import { servicesData } from "@/app/services/home-sme/[state]/data";
import { motion } from "framer-motion";
import Image from "next/image";

const homeColors = ["#F9C23C", "#FF7A45", "#C471ED", "#00D8FF", "#00C853"];
const smeColors = ["#FF4E50", "#FC913A", "#F9D423", "#A8E6CE", "#35A79C"];

export default function ServicePage() {
  const { state } = useParams();
  const stateData = servicesData[state as string];

  if (!stateData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Service Not Available
          </h1>
          <p className="text-gray-700">
            We currently don't offer services in this location.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Image
          src={`/images/locations/${state}.jpg`}
          alt={`${state} location background`}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="brightness-75"
        />
      </div>

      <div className="relative z-10">
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-24 pb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold mb-6 drop-shadow-lg uppercase">
            {state} Internet Plans
          </h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </motion.header>

        <section className="bg-white/90 backdrop-blur-sm py-16 px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Home Connect
              </h2>
              <p className="text-lg text-gray-700">
                Enjoy unlimited high-speed internet for your residence using
                fiber or radio technology.
              </p>
            </div>

            <motion.div
              className={`grid grid-cols-1 md:grid-cols-2 ${
                state === "lagos" ? "lg:grid-cols-4" : "lg:grid-cols-3"
              } gap-8`}
            >
              {stateData.homeData.map((service, index) => (
                <motion.div
                  key={index}
                  className="p-8 rounded-xl shadow-lg flex flex-col gap-y-4 items-center text-center text-white transform hover:-translate-y-2 transition-transform duration-300"
                  style={{
                    backgroundColor: homeColors[index % homeColors.length],
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold">{service.name}</h3>
                  <div className="text-xl font-semibold">
                    ₦{service?.price?.toLocaleString()}{" "}
                    {service.vatInclusive && "(VAT Inclusive)"}
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="flex justify-between text-sm">
                      <span>Speed:</span>
                      <span className="font-medium">{service.speed}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Min Speed:</span>
                      <span className="font-medium">{service.minSpeed}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Validity:</span>
                      <span className="font-medium">{service.validity}</span>
                    </div>
                  </div>
                  <div className="mt-4 font-bold">
                    Setup Cost: ₦{service.setupCost.toLocaleString()}
                  </div>
                  {service.conditions && (
                    <div className="text-sm italic">{service.conditions}</div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Place Order
              </motion.button>
              <p className="text-sm text-gray-600 mt-4">
                * Prices may vary based on location and plan.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="bg-white/90 backdrop-blur-sm py-16 px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                SME Connect
              </h2>
              <p className="text-lg text-gray-700">
                Reliable, high-speed internet for small and medium-sized
                businesses with no data cap.
              </p>
            </div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stateData.smeData.map((service, index) => (
                <motion.div
                  key={index}
                  className="p-8 rounded-xl shadow-lg flex flex-col gap-y-4 items-center text-center text-white transform hover:-translate-y-2 transition-transform duration-300"
                  style={{
                    backgroundColor: smeColors[index % smeColors.length],
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold">{service.name}</h3>
                  <div className="text-xl font-semibold">
                    ₦{service?.price?.toLocaleString()}{" "}
                    {service.vatInclusive && "(VAT Inclusive)"}
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="flex justify-between text-sm">
                      <span>Speed:</span>
                      <span className="font-medium">{service.speed}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Min Speed:</span>
                      <span className="font-medium">{service.minSpeed}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Validity:</span>
                      <span className="font-medium">{service.validity}</span>
                    </div>
                  </div>
                  <div className="mt-4 font-bold">
                    Setup Cost: ₦{service?.setupCost?.toLocaleString()}
                  </div>
                  {service.conditions && (
                    <div className="text-sm italic">{service.conditions}</div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Place Order
              </motion.button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
