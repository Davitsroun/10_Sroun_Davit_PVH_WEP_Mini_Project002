"use client";
import { useState } from "react";
import { IoIosAdd, IoIosMore } from "react-icons/io";
import { updateworkspaceyid } from "../../../../service/updateworkspaceByid";

export default function UpdateWorkspace({ workspaceId }) {

  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);  // Optional: Loading state to handle async operation

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    setIsLoading(true); // Optional: Show loading indicator while submitting

    try {
      // Pass the input value to the updateworkspaceyid function
      await updateworkspaceyid({ inputValue, workspaceId });

      // Close the modal after successful submission
      setIsOpen(false);
      setInputValue(""); // Optionally reset the input field

    } catch (error) {
      console.error("Error updating workspace:", error);
    } finally {
      setIsLoading(false); // Optional: Hide loading indicator
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-5 w-5 z-10">
      {/* Button to open popup */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-4 text-2xl"
      >
        <IoIosMore />
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
            <p className="text-lg font-semibold mb-2">Update Workspace:</p>

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
                  disabled={isLoading} // Disable the submit button while loading
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
