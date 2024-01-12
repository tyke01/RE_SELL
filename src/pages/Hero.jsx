import { Link } from "react-router-dom";
import ProductCards from "../components/ProductCards";
import Footer from "../components/Footer";

const Hero = () => {
  return (
    <>
      <div className="hero flex flex-col p-10 mt-20">
        <div className="flex flex-col lg:flex-row gap-8 ">
          <img
            src="/phone-4.jpg"
            alt="Resell Marketplace Logo"
            className="w-[600px] mb-5 object-cover"
          />
          <div className="flex flex-col items-start">
            <h1 className="text-6xl font-bold text-start mb-5 text-teal-500">
              Welcome to Resell!
            </h1>
            <p className="text-xl mb-5 text-start">
              Find your next great secondhand treasure or sell your unused items
              easily.
              <br />
              <span>
                Every Product posted is verified and approved by the admins to
                ensure atmost quality.
              </span>
            </p>
            <div className="flex justify-center gap-5">
              <Link
                to="/products"
                className="inline-block bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md"
              >
                Start Buying
              </Link>
              <Link
                to="/sell"
                className="inline-block bg-white border border-teal-500 text-teal-500 px-4 py-2 rounded-lg shadow-md"
              >
                Start Selling
              </Link>
            </div>
          </div>
        </div>
        <ProductCards />
      </div>
      <Footer />
    </>
  );
};

export default Hero;
