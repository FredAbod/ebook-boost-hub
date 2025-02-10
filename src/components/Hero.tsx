
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="container-custom">
        <div className="relative z-10 pt-14 lg:pt-20 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main>
            <div className="text-center">
              <h1 className="animate-fade-up text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Node.js Performance</span>
                <span className="block text-primary">Optimization</span>
              </h1>
              <p className="animate-fade-up mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Master the art of building lightning-fast Node.js applications. From fundamentals to advanced techniques,
                learn how to optimize your Node.js applications for maximum performance.
              </p>
              <div className="animate-fade-up mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Link
                    to="/checkout"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-hover md:py-4 md:text-lg md:px-10"
                  >
                    Get the Book
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/book"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-secondary bg-secondary-50 hover:bg-secondary-100 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero;
