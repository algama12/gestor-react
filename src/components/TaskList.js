import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onToggle, onDelete, onUpdate }) => {
  return (
    <div className="space-y-2 mt-4">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TaskList;
