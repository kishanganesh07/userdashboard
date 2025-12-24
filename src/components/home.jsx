import React from "react";
import Detailscard from "./detailscard";
import Footer from "./footer";
import Navbar from "./navbar";
import { useNavigate } from "react-router";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative min-h-screen w-full flex flex-col overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />

          <div className="grow mt-6 px-2 sm:px-4 lg:px-6">
            <header className="flex flex-col items-center justify-center text-center px-4 py-20">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                Manage Your Users Effortlessly
              </h1>

              <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-gray-200 mb-8">
                UserApp helps you view, manage, and organize user information in
                one place. Quickly search users, view detailed profiles, and add
                new users with ease.
              </p>

              <button
                onClick={() => navigate("/users")}
                className="px-6 py-3 rounded-md bg-gray-600 text-white font-semibold
               hover:bg-black-700 transition-all duration-300 shadow-lg"
              >
                View Users
              </button>
            </header>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
