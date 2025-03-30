import Image from "next/image";
import logo from "@/public/images/syslogo.aab64315.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2 inline-block">
            About Us
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We are dedicated to providing exceptional connectivity solutions
            that drive your business success.
          </p>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2 inline-block">
            Contact Information
          </h2>
          <address className="not-italic text-gray-300 space-y-2">
            <p className="flex items-start">
              <svg
                className="w-5 h-5 mr-2 mt-0.5 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              3rd Floor, 19 Toyin Street, Ikeja Lagos State, Nigeria
            </p>
            <p className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="space-x-4">
                <a
                  href="mailto:info@syscodes.com"
                  className="hover:text-blue-400 transition"
                >
                  Syscodes Communications
                </a>
                <a
                  href="mailto:support@syscodes.com"
                  className="hover:text-blue-400 transition"
                >
                  Support Team
                </a>
                <a
                  href="mailto:sales@syscodes.com"
                  className="hover:text-blue-400 transition"
                >
                  Sales Team
                </a>
              </span>
            </p>
            <p className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href="tel:+2348186249685"
                className="hover:text-blue-400 transition"
              >
                (+234) 818 624 9685
              </a>
            </p>
          </address>
        </div>

        {/* Branding Section */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <p className="text-gray-400 italic text-lg">
            ...connecting with ease
          </p>
          <div className="relative w-32 h-32">
            <Image
              src={logo}
              alt="Syscodes Communications Logo"
              layout="fill"
              objectFit="contain"
              className="filter brightness-0 invert"
            />
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Syscodes Communications. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
