"use client";

import { useState } from "react";
import { ClipboardIcon } from "@heroicons/react/24/solid";

function Contact() {
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const [isSuccessfulCopyVisible, setIsSuccessfulCopyVisible] = useState(false);

  const toggleVisibility = () => {
    setIsEmailVisible(!isEmailVisible);
    setIsSuccessfulCopyVisible(false);
  };

  const toggleCopyVisibility = () => {
    setIsSuccessfulCopyVisible(!isSuccessfulCopyVisible);
  };

  const copyToClipboard = () => {
    const copyText = "ericleecodes@gmail.com";
    navigator.clipboard.writeText(copyText);
  };

  const onClickCopyHandler = () => {
    copyToClipboard();
    toggleCopyVisibility();
  };
  return (
    <div className="w-[100%] h-screen bg-darker">
      <div className="pb-32 mt-14 text-lg bg-darker text-lighter">
        <h1 className="flex justify-center text-4xl font-bold py-10  text-lighter">
          Contact Me!
        </h1>
        <div className="flex flex-col justify-center items-center">
          <div className="px-4 my-10 text-lighter">
            Hey! Feel free to contact me:
          </div>

          <button
            onClick={toggleVisibility}
            className=" bg-gray-100 rounded-lg text-darker font-bold py-3 px-4 whitespace-nowrap hover:bg-accent hover:text-pink-100 transition w-[125px]"
          >
            Email
          </button>
          {isEmailVisible && (
            <div className="mt-10 flex flex-row gap-5 items-center">
              <p>Email: ericleecodes@gmail.com</p>
              <button
                onClick={onClickCopyHandler}
                className="bg-gray-100 text-gray-800 rounded-lg p-2 whitespace-nowrap hover:bg-accent hover:text-pink-100 transition w-[40px]"
              >
                <ClipboardIcon />
              </button>
            </div>
          )}
          {isSuccessfulCopyVisible && (
            <div className=" text-accentTwo mt-10">
              Successfully Copied! I look forward to hearing from you soon!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
