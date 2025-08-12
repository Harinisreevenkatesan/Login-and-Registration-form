import React, { useState } from "react";
import "./Form.css";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dept, setDept] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registration Data:", { name, dob, email, phone, dept });
    alert("Registration Successful!");
  };

  return (
    <div className="form-container">
      <h2>Registration</h2>
      <form onSubmit={handleRegister}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Date of Birth:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label>Department:</label>
        <select
          value={dept}
          onChange={(e) => setDept(e.target.value)}
          required
        >
          <option value="">Select Department</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="MECH">MECH</option>
          <option value="CIVIL">CIVIL</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
