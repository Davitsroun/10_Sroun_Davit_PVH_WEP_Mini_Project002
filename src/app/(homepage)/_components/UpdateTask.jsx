"use client";
import { useState } from "react";
import { Plus, X } from "lucide-react";
import { updateworkspace } from "../../../../service/updateworkspaceByid";

export default function Updatetask() {

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    taskTitle: "",
    taskDetails: "",
    tag: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log("Submitted Data:", formData);
    try {
      // Call your insertWorkspace function to handle the data submission
      //await updateworkspace(formData);
      setIsOpen(false); // Close the modal
      setFormData({ taskTitle: "", taskDetails: "", tag: "", endDate: "" }); // Reset form data after submission
    } catch (error) {
      console.error("Error inserting workspace:", error);
    }
  };

  return (
    <div className="relative">
      {/* Button to open popup */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center px-4 py-2 transition"
      >
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.16667 8.61835C3.25 8.61835 2.5 9.36835 2.5 10.285C2.5 11.2017 3.25 11.9517 4.16667 11.9517C5.08333 11.9517 5.83333 11.2017 5.83333 10.285C5.83333 9.36835 5.08333 8.61835 4.16667 8.61835Z" stroke="#94A3B8" strokeWidth="1.5" />
          <path d="M15.8333 8.61835C14.9167 8.61835 14.1667 9.36835 14.1667 10.285C14.1667 11.2017 14.9167 11.9517 15.8333 11.9517C16.75 11.9517 17.5 11.2017 17.5 10.285C17.5 9.36835 16.75 8.61835 15.8333 8.61835Z" stroke="#94A3B8" strokeWidth="1.5" />
          <path d="M8.33333 10.285C8.33333 11.2017 9.08333 11.9517 10 11.9517C10.9167 11.9517 11.6667 11.2017 11.6667 10.285C11.6667 9.36835 10.9167 8.61835 10 8.61835" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      </button>

      {/* Popup Modal */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Modal */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-96">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Create New Task</h2>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} className="text-gray-500 hover:text-gray-700" />
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <input
                type="text"
                name="taskTitle"
                placeholder="Task Title"
                value={formData.taskTitle}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />

              <textarea
                name="taskDetails"
                placeholder="Task Details"
                value={formData.taskDetails}
                onChange={handleChange}
                className="w-full p-2 border rounded h-20"
              ></textarea>

              <select
                name="tasks"
                id="tasks"
                value={formData.tag}
                onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                className="w-full p-2 border rounded"
              >
                <option value="design">Design</option>
                <option value="homework">Homework</option>
                <option value="assignment">Assignment</option>
                <option value="deployment">Deployment</option>
                <option value="git">Git</option>
                <option value="database">Database</option>
                <option value="mini_project">Mini Project</option>
                <option value="documentation">Documentation</option>
                <option value="feature">Feature</option>
              </select>


              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
