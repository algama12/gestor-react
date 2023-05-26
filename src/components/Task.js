import React, { useState } from "react";

const Task = ({ task, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newHours, setNewHours] = useState(task.hours);

  const handleUpdate = () => {
    onUpdate(task, newTitle, newHours);
    setIsEditing(false);
  };

  return (
    <div className={`border rounded-lg p-4 bg-white ${task.completed ? "opacity-50" : ""}`}>
      {isEditing ? (
        <>
                  <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            value={newHours}
            onChange={(e) => setNewHours(e.target.value)}
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
          />
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-4 py-1 rounded-lg shadow-md focus:outline-none hover:bg-green-600 mt-2"
          >
            Guardar
          </button>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task)}
                className="mr-2 focus:ring-2 focus:ring-blue-400"
              />
              <span className="text-xl font-semibold">{task.title}</span>
            </div>
            <div>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-yellow-500 text-white px-4 py-1 rounded-lg shadow-md focus:outline-none hover:bg-yellow-600 mr-2"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(task)}
                className="bg-red-500 text-white px-4 py-1 rounded-lg shadow-md focus:outline-none hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          </div>
          <p className="mt-1">Horas: {task.hours}</p>
        </>
      )}
    </div>
  );
};

export default Task;
