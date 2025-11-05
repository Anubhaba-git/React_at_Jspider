import React, { useState } from "react";
import "./ControlledForm.css";

const ControlForms = () => {
  const [formData, setFormData] = useState({
    firstnumber: "",
    secondnumber: "",
  });

  // This state is for set Answer getting Answer.
  const [answer, setAnswer] = useState("");

  // Function to change anything in input field .
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Calculation
  const add = () => {
    setAnswer(Number(formData.firstnumber) + Number(formData.secondnumber));
    // const num1 = Number(formData.firstnumber);
    // const num2 = Number(formData.secondnumber);
    // setAnswer(num1 + num2);
  };

  const subtract = () => {
    const num1 = formData.firstnumber;
    const num2 = formData.secondnumber;
    setAnswer(num1 - num2);
  };

  const multiply = () => {
    const num1 = formData.firstnumber;
    const num2 = formData.secondnumber;
    setAnswer(num1 * num2);
  };

  const divide = () => {
    const num1 = formData.firstnumber;
    const num2 = formData.secondnumber;
    if (num2 === 0) {
      setAnswer("Cannot divide by zero");
    } else {
      setAnswer(num1 / num2);
    }
  }

  const reset = () => {
    setFormData({ firstnumber: "", secondnumber: "" });
    setAnswer("")
  }

  // This is the function to avoid the default behaviour of form.
  const handleForm = (e) => {
    e.preventDefault();
  }

  return (
    <div className="form_container">
      <form onSubmit={handleForm}>
        <input
          type="number"
          placeholder="Enter First Number"
          name="firstnumber"
          value={formData.firstnumber}
          onChange={handleInput}
          className="input1"
        />
        <br />
        <br />

        <input
          type="number"
          placeholder="Enter Second Number"
          name="secondnumber"
          value={formData.secondnumber}
          onChange={handleInput}
          className="input2"
        />
        <br />
        <br />

        <div className="btns">
          <button type="button" onClick={add} className="btn1">
             +
          </button>
          <button type="button" onClick={subtract} className="btn2">
             -
          </button>
          <button type="button" onClick={multiply} className="btn3">
             *
          </button>
          <button type="button" onClick={divide} className="btn4">
             /
          </button>
          <br />
          <br />
        </div>
          <button type="button" onClick={reset} className="btn5">
            Reset
          </button>

        <h3>Your Answer is: {answer}</h3>
      </form>
    </div>
  );
};

export default ControlForms;
