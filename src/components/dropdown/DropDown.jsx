import React, { useState } from "react";
import uniqid from "uniqid";
import { LIST_TYPES } from "../../config";
import Arrow from "../../asset/Vector-arrow.svg";
import "./DropDown.css";

const DropDown = ({
  type,
  tasks,
  setTasks,
  setFormVisible,
  isFormVisible,
  back,
  read,
  inProgress,
}) => {
  const getTasksByType = () => {
    switch (type) {
      case LIST_TYPES.READY:
        return back;
      case LIST_TYPES.IN_PROGRESS:
        return read;
      case LIST_TYPES.FINISHED:
        return inProgress;
      default:
        return [];
    }
  };

  const handleTaskClick = (task) => {
    const newTask = {
      id: uniqid(),
      title: task.title,
      description: task.description,
      status: type,
    };
    setTasks([...tasks, newTask]);
    setFormVisible(false);
  };

  return (
    <div className="dropdown">
      <div className="arrow">
        <img
          src={Arrow}
          alt="Arrow"
          onClick={() => setFormVisible(!isFormVisible)}
        />
      </div>
      <div className="dropdown-title">
        {getTasksByType().map((task) => (
          <p
            key={task.id}
            id={task.id}
            className="title"
            onClick={() => handleTaskClick(task)} // Pass task object directly
          >
            {task.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
