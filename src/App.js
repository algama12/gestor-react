// src/App.js
import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  updateDoc,
  deleteDoc,
  doc,
} from "@firebase/firestore";
import { db } from "./firebase";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
      setTasks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();
  }, []);

  const addTask = async (task) => {
    await addDoc(collection(db, "tasks"), task);
  };

  const toggleTask = async (task) => {
    await updateDoc(doc(db, "tasks", task.id), { completed: !task.completed });
  };

  const deleteTask = async (task) => {
    await deleteDoc(doc(db, "tasks", task.id));
  };

  const updateTask = async (task, newTitle, newHours) => {
    await updateDoc(doc(db, "tasks", task.id), {
      title: newTitle,
      hours: newHours,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl mx-auto">
      <h1 className="text-4xl font-semibold mb-6 text-center">Gestor de Tareas</h1>
        <div className="relative shadow-md hover:shadow-lg p-6 bg-white mx-auto flex flex-col rounded-lg">
          <TaskForm addTask={addTask} />
          <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onUpdate={updateTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
