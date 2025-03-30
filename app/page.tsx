import Services from "@/components/services";
import WhySys from "@/components/whySys";
import Image from "next/image";
import heroImage from "@/public/images/pexels-chriz-luminario-198087-2928796.jpg";

const HomePage = () => {
  const buttons = [
    { name: "Who are we", link: "#who-are-we" },
    { name: "Coverage", link: "#coverage" },
    { name: "Check Internet speed", link: "#check-speed" },
  ];

  return (
    <div className="relative overflow-hidden">
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 bg-black/60 z-0">
          <Image
            src={heroImage}
            alt="Network connectivity"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
          <div className="flex flex-col md:flex-row justify-between gap-12 items-center w-full">
            <div className="w-full md:w-1/2 space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight">
                SEAMLESS CONNECTIVITY AND QUALITY IT SOLUTIONS
              </h1>

              <p className="text-white/90 text-xl font-medium">
                ...connecting with ease
              </p>

              <nav>
                <ul className="flex flex-wrap gap-4">
                  {buttons.map((btn, index) => (
                    <li key={index}>
                      <a
                        href={btn.link}
                        className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                      >
                        {btn.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="w-full md:w-1/2 hidden lg:block"></div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      <Services />

      <WhySys />
    </div>
  );
};

export default HomePage;
