"use client";
import { useState } from "react";
import { Plus, X } from "lucide-react";
import { inserWorkspace } from "../../../../service/insertWorkspace";

export default function Update() {
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
    // Log the form data just before submitting
    // console.log("Submitted Data:", formData);
    // try {
    //   // Call your insertWorkspace function to handle the data submission
    //   await inserWorkspace(formData);
    //   setIsOpen(false); // Close the modal
    //   setFormData({ taskTitle: "", taskDetails: "", tag: "", endDate: "" }); // Reset form data after submission
    // } catch (error) {
    //   console.error("Error inserting workspace:", error);
    // }
  };

  return (
    <div className="relative">
      {/* Button to open popup */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
      >
        <Plus size={18} className="mr-2" /> New Task
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


              {/* <input
                type="text"
                name="tag"
                placeholder="Tag"
                value={formData.tag}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
               */}
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
