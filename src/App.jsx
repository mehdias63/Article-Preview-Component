import React, { useState } from "react";
import IconShare from "./components/IconShare";

function App() {
  const [isSubmited, setIsSubmited] = useState(true);
  function handleSubmit() {
    setIsSubmited(false);
  }
  function handleSubmitBack() {
    setIsSubmited(true);
  }
  return (
    <main className="bg-light-blue min-h-screen flex justify-center items-center px-6 py-16 lg:px-[8rem]">
      <div className="md:flex font-man bg-white rounded-xl w-[20.4375rem] md:w-[45.625rem] md:h-[17.5rem] ">
        <div className="rounded-t-xl md:rounded-bl-xl">
          <img
            src="/images/drawers.jpg"
            alt="drawers"
            className="rounded-t-xl md:rounded-tr-none md:rounded-bl-xl md:w-[45rem] md:h-[17.5rem]"
          />
        </div>
        <div>
          <div className="p-8">
            <p className="text-base text-dark-gray font-bold leading-6 tracking-[0.0125rem] md:text-xl md:leading-7 md:tracking-[0.01563rem] mb-4 ">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </p>
            <p className="text-[0.8125rem] text-gray font-medium leading-5 tracking-[0.00763rem]">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
          </div>
          {isSubmited ? (
            <>
              <div className="flex items-center gap-3 p-8 md:p-0 md:px-8">
                <img
                  src="/images/avatar-michelle.jpg"
                  className="w-10 h-10 rounded-full"
                  alt="avatar"
                />
                <div className="leading-5 tracking-[0.00763rem] text-[0.8125rem]">
                  <h1 className=" text-dark-gray font-bold ">
                    Michelle Appleton
                  </h1>
                  <p className="text-light-gray font-medium">28 Jun 2020</p>
                </div>
                <div
                  onClick={handleSubmit}
                  className="w-8 h-8 bg-light-blue rounded-full flex justify-center items-center ml-auto"
                >
                  <img src="/images/icon-share.svg" alt="icon" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="relative">
                <div className="md:absolute md:left-[18rem] md:bottom-7 bg-dark-gray flex gap-5 p-6 md:p-3 rounded-b-xl md:rounded-xl  md:h-[3.4375rem]">
                  <p className="text-light-gray font-medium text-[0.8125rem] leading-5 tracking-[0.3125rem]">
                    SHARE
                  </p>
                  <div className="flex gap-3 w-[5.75rem] h-[1.25rem] justify-center items-center">
                    <img src="/images/icon-facebook.svg" alt="facebook" />
                    <img src="/images/icon-twitter.svg" alt="twitter" />
                    <img src="/images/icon-pinterest.svg" alt="pinterest" />
                  </div>
                  <div
                    onClick={handleSubmitBack}
                    className="w-8 h-8 bg-light-gray rounded-full flex justify-center items-center ml-auto md:hidden"
                  >
                    <IconShare className="fill-white w-4" />
                  </div>
                </div>
                <div className="border-t-dark-gray hidden md:block border-[1rem] border-transparent absolute left-[24rem] bottom-[1px]"></div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
