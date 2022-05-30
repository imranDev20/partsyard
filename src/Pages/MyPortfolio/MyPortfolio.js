import React from "react";

const MyPortfolio = () => {
  return (
    <main className="">
      <div
        className="w-full h-[calc(100vh-66px)] relative before:content-['']
          before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:w-full before:h-full before:bg-black/70"
      >
        <img
          className="w-full h-full object-cover "
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h2 className="font-extrabold text-7xl">I'm Imran Kabir</h2>
          <p className="font-light text-3xl mt-3">Front-End Developer</p>
          <button className="btn btn-md bg-red-600 mt-5">Hire Me</button>
        </div>
      </div>
    </main>
  );
};

export default MyPortfolio;
