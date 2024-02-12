import React, { useState } from "react";

export default function Card() {
  const [isSubmited, setIsSubmited] = useState(true);
  function handleSubmit() {
    setIsSubmited(false);
  }
  function handleSubmitBack() {
    setIsSubmited(true);
  }
  return (
    <div>
      <div>
        <img src="/images/drawers.jpg" alt="drawers" />
      </div>
      <div>
        <p>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </p>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
      </div>
      {isSubmited ? (
        <>
          <div className="flex items-center gap-3">
            <img src="/images/avatar-michelle.jpg" />
            <div>
              <h1>Michelle Appleton</h1>
              <p>28 Jun 2020</p>
            </div>
            <div onClick={handleSubmit}>
              <img src="/images/icon-share.svg" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-dark-gray flex gap-5">
            <p>SHARE</p>
            <img src="/images/icon-facebook.svg" />
            <img src="/images/icon-twitter.svg" />
            <img src="/images/icon-pinterest.svg" />
            <div onClick={handleSubmitBack}>
              <img src="/images/icon-share.svg" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
