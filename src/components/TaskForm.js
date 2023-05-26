import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [hours, setHours] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, hours: parseInt(hours, 10), completed: false });
    setTitle("");
    setHours("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="title" className="font-medium text-gray-700">
          Tarea
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="hours" className="font-medium text-gray-700">
          Horas
        </label>
        <input
          id="hours"
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md focus:outline-none hover:bg-blue-600"
      >
        Agregar tarea
      </button>
    </form>
  );
};

export default TaskForm;
