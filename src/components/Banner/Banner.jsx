import React from "react";

const Banner = () => {
  return (
    <div className="bg-[rgba(19,19,19,0.05)] rounded-3xl max-w-10/12 mx-auto px-24 py-20 my-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[rgba(19,19,19,1)] text-[56px] font-bold text-left">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button
            className="rounded-xl bg-[rgba(35,190,10,1)] text-white text-[20px] font-bold text-center
         py-3 px-7 mt-4"
          >
            View The List
          </button>
        </div>
        <div>
          <img
            className="w-[318px] h-[394px]"
            src="https://i.ibb.co.com/RT5SWD7w/imgbin-the-dating-playbook-for-m.png"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
