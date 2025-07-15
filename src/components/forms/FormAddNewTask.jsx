import { useState } from "react";
import "./FormAddNewTask.css";

const FormAddNewTask = ({ addNewTask, setFormVisible }) => {
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const fieldName = e.target.name;
    setValues({ ...values, [fieldName]: e.target.value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { title: "", description: "" };

    if (!values.title.trim()) {
      newErrors.title = "Title is required.";
      isValid = false;
    } else if (values.title.length > 100) {
      newErrors.title = "Title cannot be longer than 100 characters.";
      isValid = false;
    }

    if (!values.description.trim()) {
      newErrors.description = "Description is required.";
      isValid = false;
    } else if (values.description.length > 500) {
      newErrors.description = "Description cannot be longer than 500 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addNewTask(values.title, values.description, "backlog");
      setFormVisible(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input
          className="input"
          id="taskTitle"
          name="title"
          type="text"
          placeholder="Task Title"
          onChange={handleChange}
          value={values.title}
        />
        {errors.title && <div className="error">{errors.title}</div>}
      </div>
      <div>
        <textarea
          className="input"
          id="taskDescription"
          name="description"
          placeholder="Task Description"
          onChange={handleChange}
          value={values.description}
        />
        {errors.description && <div className="error">{errors.description}</div>}
      </div>

      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormAddNewTask;