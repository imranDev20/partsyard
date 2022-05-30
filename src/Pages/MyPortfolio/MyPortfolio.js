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

      <div className="my-20 max-w-2xl mx-auto px-10">
        <h2 className="text-3xl text-center font-bold uppercase ">My Skills</h2>
        <div className="flex justify-between">
          <div className="mt-10">
            <div className="">
              <div className="mr-2">HTML</div>
              <progress
                class="progress progress-secondary w-56"
                value="100"
                max="100"
              ></progress>
            </div>
            <div className="">
              <div className="mr-2">CSS</div>
              <progress
                class="progress progress-secondary w-56"
                value="95"
                max="100"
              ></progress>
            </div>
            <div className="">
              <div className="mr-2">JavaScript</div>
              <progress
                class="progress progress-secondary w-56"
                value="90"
                max="100"
              ></progress>
            </div>
          </div>
          <div className="mt-10">
            <div className="">
              <div className="mr-2">React</div>
              <progress
                class="progress progress-secondary w-56"
                value="90"
                max="100"
              ></progress>
            </div>
            <div className="">
              <div className="mr-2">MongoDB</div>
              <progress
                class="progress progress-secondary w-56"
                value="95"
                max="100"
              ></progress>
            </div>
            <div className="">
              <div className="mr-2">Node.js</div>
              <progress
                class="progress progress-secondary w-56"
                value="80"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 container mx-auto px-10">
        <h2 className="text-3xl text-center font-bold uppercase ">
          My Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="card shadow-lg p-10">
            <h3 className="text-xl font-medium">
              Warehouse Management Website
            </h3>
            <a
              className="text-red-600"
              href="https://warehouse-management-a0da8.web.app/"
            >
              warehouse-management-a0da8.web.app
            </a>
          </div>
          <div className="card shadow-lg p-10">
            <h3 className="text-xl font-medium">
              Independent Service Provider
            </h3>
            <a
              className="text-red-600"
              href="https://independent-service-prov-a0909.web.app/"
            >
              independent-service-prov-a0909.web.app
            </a>
          </div>
          <div className="card shadow-lg p-10">
            <h3 className="text-xl font-medium">Product Analysis Website</h3>
            <a
              className="text-red-600"
              href="https://product-analysis-imrandev20.netlify.app/"
            >
              product-analysis-imrandev20.netlify.app
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto ">
        <h2 className="text-3xl text-center font-bold uppercase ">About Me</h2>

        <div className="card shadow-lg p-10">
          <p className="text-xl my-2">
            Name: <span className="text-red-600">Imran Kabir</span>
          </p>
          <p className="text-xl my-2">
            Email: <span className="text-red-600">imrandev20@gmail.com</span>
          </p>
          <p className="text-xl my-2">
            Education: <span className="text-red-600">B.Sc in Mathematics</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default MyPortfolio;
