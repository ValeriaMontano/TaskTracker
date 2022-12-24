import React from "react";
import { useState } from "react";

export const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  //before calling onAdd we need :
  //onSubmit takes an event because we want to preventDefault so it dosen`t submit to a page
  const onSubmit = (e) => {
    e.preventDefault();

    //validation for the task text
    //if not text then alert and return
    if (!text) {
      alert("Please add a task");
      return;
    }
    //so if the validation passes on line 22 then we call onAdd and pass an object with the text, day, and reminder

    onAdd({ text, day, reminder });

    //here we clear the form and set to reminder false (to be unchecked when false we need to add checked={reminder} line 54)
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          //the check box takes the reminder
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};
export default AddTask;
