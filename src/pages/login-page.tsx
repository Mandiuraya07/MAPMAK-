import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(30,64,175,0.4) 0%, rgba(59,130,246,0.30) 100%), url('https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=2000&q=80')",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Blue floating gradient blobs */}
      <div className="absolute top-14 right-24 w-72 h-72 bg-blue-500/30 rounded-full blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-16 left-10 w-60 h-60 bg-blue-700/30 rounded-full blur-xl opacity-20 animate-pulse"></div>

      {/* CARD */}
      <div className="relative z-10 w-full max-w-md bg-white/70 backdrop-blur-[2px] border border-blue-200/40 shadow-xl rounded-2xl p-8">
        <h2 className="text-center text-3xl font-bold text-blue-900 mb-6 drop-shadow-lg">
          Welcome Back
        </h2>

        {/* Tabs */}
        <div className="flex justify-between mb-6 border-b border-blue-300/40">
          {["signin", "signup"].map((tab) => (
            <button
              key={tab}
              className={`py-2 flex-1 text-sm sm:text-base font-semibold transition ${
                activeTab === tab
                  ? "border-b-2 border-blue-500 text-blue-900"
                  : "text-blue-800/70 hover:text-blue-900"
              }`}
              onClick={() => setActiveTab(tab as any)}
            >
              {tab === "signin" ? "Sign In" : "Sign Up"}
            </button>
          ))}
        </div>

        {/* FORMS */}
        <div className="space-y-4">
          {activeTab === "signin" && (
            <form className="space-y-4">
              <div>
                <label className="text-blue-900 font-medium text-sm">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full mt-1 p-3 bg-blue-50/80 border border-blue-200 text-blue-900 rounded-lg placeholder-blue-900/40 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="text-blue-900 font-medium text-sm">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full mt-1 p-3 bg-blue-50/80 border border-blue-200 text-blue-900 rounded-lg placeholder-blue-900/40 focus:outline-none focus:border-blue-400"
                  placeholder="Enter password"
                />
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition shadow-lg">
                Sign In
              </button>
            </form>
          )}

          {activeTab === "signup" && (
            <form className="space-y-4">
              <div>
                <label className="text-blue-900 font-medium text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-3 bg-blue-50/80 border border-blue-200 text-blue-900 rounded-lg placeholder-blue-900/40 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="text-blue-900 font-medium text-sm">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full mt-1 p-3 bg-blue-50/80 border border-blue-200 text-blue-900 rounded-lg placeholder-blue-900/40 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="text-blue-900 font-medium text-sm">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full mt-1 p-3 bg-blue-50/80 border border-blue-200 text-blue-900 rounded-lg placeholder-blue-900/40 focus:outline-none focus:border-blue-400"
                  placeholder="Create a password"
                />
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition shadow-lg">
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
