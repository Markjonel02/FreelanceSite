import React, { useState } from "react";
import Blob2 from "../assets/images/Blob2.svg";
export const Faq = () => {
  const [rotatedItem, setRotatedItem] = useState(null); // Changed to single item state
  const faqitems = [
    {
      questions: "What is ProjectHub?",
      answers:
        "ProjectHub is a project management and collaboration platform designed to help teams plan, track, and complete projects efficiently",
    },
    {
      questions: " Who can use ProjectHub?",
      answers:
        "ProjectHub is suitable for teams of all sizes across various industries. Whether you’re a startup, a large enterprise, or a non-profit organization, ProjectHub can help streamline your project management processes.",
    },
    {
      questions: " What payment methods are accepted?",
      answers:
        " ProjectHub accepts E-Transfer, G-cash, PayPal, Maya, and Cash. ",
    },
    {
      questions: "How do I communicate with my team within ProjectHub?",
      answers:
        " ProjectHub provides multiple communication channels including project-specific chat, direct messaging, and comment sections within tasks. Use these features to stay connected with our team.",
    },
    {
      questions: "What should I do if I encounter a bug or technical issue",
      answers:
        "If you encounter a bug or technical issue, please report it through the 'Contact Us' tab or contact our support team at support@projecthub.com. Provide as much detail as possible to help us resolve the issue quickly.",
    },
  ];
  const handleRotate = (index) => {
    // If the clicked index is already rotated, set it to null
    // This will hide the answer for this item
    if (rotatedItem === index) {
      setRotatedItem(null);
    } else {
      // If a different item is clicked, set it as the rotatedItem
      setRotatedItem(index);
    }
  };

  return (
    <>
      <div className="faq-container mb-32">
        <h1
          className=" px-10 text-blue-primary flex justify-start xl:justify-start sm:justify-center mb-5 mt-32  font-Lato-Black text-3xl xl:text-5xl lg:text-4xl md:3xl sm:text-2xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Frequently Asked Questions
        </h1>
        <div className="relative">
          <img
            src={Blob2}
            alt=""
            className="absolute right-32 z-50 opacity-20"
          />
        </div>

        {faqitems.map((item, index) => (
          <div
            className="faq-wrapper"
            key={index}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="mainwrapper">
              <div className="questions flex justify-center  flex-col px-10">
                <div className="items bg-gray-200  border shadow-sm  rounded-lg flex w-full justify-between items-center mb-5 p-5">
                  <div className="title w-3/4">
                    <h1 className="text-Dark-primary font-Lato-Bold text-xl lg:text-2xl">
                      {item.questions}
                    </h1>
                  </div>

                  <div className="icon flex justify-end w-1/4 text-Dark-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-10 h-10  cursor-pointer ${
                        rotatedItem === index ? "rotate-45" : ""
                      }`}
                      onClick={() => handleRotate(index)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className={`answers mb-5 ease-in-out mt-[-25px] border bg-Lighter-Blue ${
                    rotatedItem === index ? "block rounded-b-lg" : "hidden"
                  }`}
                >
                  <p className="text-Dark-Purple2 text-xl font-Lato-Light rounded tracking-wide  p-10 mt-0">
                    {" "}
                    {item.answers}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
