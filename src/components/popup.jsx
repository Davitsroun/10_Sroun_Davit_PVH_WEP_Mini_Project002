"use client";
import { useState } from "react";
import { inserWorkspace } from "../../service/insertWorkspace";

export default function PopupButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Pass the input value to the inserWorkspace function
    inserWorkspace(inputValue)
      .then((response) => {
        // Optionally handle the response here if needed
        setSubmittedValue(inputValue);
        setIsOpen(false); // Close the popup after submission
        setInputValue(""); // Reset input value after submission
      })
      .catch((error) => {
        // Optionally handle any errors here
        console.error("Error inserting workspace:", error);
      });
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-5 w-5 z-10">
      {/* Button to open popup */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-4 text-2xl"
      >
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.53 12H16.54" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.54004 12H12.35" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12.54 16V8" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.54004 13.04V15C2.54004 20 4.54004 22 9.54004 22H15.54C20.54 22 22.54 20 22.54 15V9C22.54 4 20.54 2 15.54 2H9.54004C4.54004 2 2.54004 4 2.54004 9" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      </button>

      {/* Overlay and Popup */}
      {isOpen && (
        <>
          {/* Overlay (click to close) */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Popup Modal */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-80">
            <p className="text-lg font-semibold mb-2">Add new workspace:</p>

            {/* Input Field */}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="workspace"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full p-2 border rounded mb-4"
                placeholder="Type here..."
              />

              {/* Buttons */}
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg"
                  type="button" // Prevent form submission when canceling
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}