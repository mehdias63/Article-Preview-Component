import React, { useState } from "react";
import IconShare from "./components/IconShare";

function App() {
  const [isSharePanelVisible, setIsSharePanelVisible] = useState(true);
  function handleSubmit() {
    setIsSharePanelVisible(false);
  }
  function handleSubmitBack() {
    setIsSharePanelVisible(true);
  }
  return (
    <main className="bg-light-blue min-h-screen flex justify-center items-center px-6 py-16 md:p-16">
      <div className="md:flex font-man bg-white rounded-xl shadow-[0_40px_40px_-10px_rgba(201,213,225,0.50)] md:max-w-[46rem]">
        <div className="rounded-t-xl md:rounded-bl-xl  h-[14rem] w-full overflow-hidden md:h-auto bg-[url(/images/drawers.jpg)] bg-cover"></div>
        <div>
          <div className="p-8 flex flex-col gap-3">
            <p className="text-base text-dark-gray font-bold leading-6 tracking-[0.0125rem] md:text-xl md:leading-7 md:tracking-[0.01563rem]">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </p>
            <p className="text-[0.8125rem] text-gray font-medium leading-5 tracking-[0.00763rem]">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
          </div>
          <div className="flex items-center gap-4 px-8 py-5 md:py-8 ">
            <img
              src="/images/avatar-michelle.jpg"
              className="w-10 h-10 rounded-full"
              alt="avatar"
            />
            <div className="leading-5 tracking-[0.00763rem] text-[0.8125rem]">
              <h1 className=" text-dark-gray font-bold ">Michelle Appleton</h1>
              <p className="text-light-gray font-medium">28 Jun 2020</p>
            </div>
            <div
              onClick={handleSubmit}
              className="w-8 h-8 bg-light-blue rounded-full flex justify-center items-center ml-auto"
            >
              <img src="/images/icon-share.svg" alt="icon" />
            </div>
          </div>
          {isSharePanelVisible ? (
            <></>
          ) : (
            <>
              <div className="relative">
                <div className="bg-dark-gray flex gap-5 px-6 py-5 rounded-b-xl absolute bottom-2 left-0 right-0 md:-right-[3.05rem] md:bottom-[5.5rem] md:left-auto md:h-auto md:w-auto md:rounded-xl">
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
                  <div className="border-t-dark-gray hidden md:block border-[1rem] border-transparent absolute left-[50%] top-[3.5rem]"></div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
