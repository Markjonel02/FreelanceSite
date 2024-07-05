import React, { useState } from "react";
export const AddAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleButtonClick = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="bg-white rounded-lg shadow-lg w-60 text-center p-4">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="w-20 h-20 rounded-full mx-auto mb-2"
          />
          <h2 className="text-lg font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-500 mb-3">Software Developer</p>
          <div>
            <button
              className="bg-blue-500 text-white py-1 px-3 rounded-lg m-1 hover:bg-blue-600 transition duration-300"
              onClick={() => handleButtonClick("Message")}
            >
              Message
            </button>
            <button
              className="bg-green-500 text-white py-1 px-3 rounded-lg m-1 hover:bg-green-600 transition duration-300"
              onClick={() => handleButtonClick("Add")}
            >
              Add
            </button>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg w-80 p-6">
              <h3 className="text-lg font-semibold mb-4">{modalContent}</h3>
              <p>This is the modal content for {modalContent}.</p>
              <button
                className="bg-red-500 text-white py-1 px-3 rounded-lg mt-4 hover:bg-red-600 transition duration-300"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
