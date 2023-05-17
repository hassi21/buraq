import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Paydet() {
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "cvc") {
      setCvc(value.slice(0, 3));
    } else if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  return (
    <div id="Paydet" className="mt-8">
      <Cards cvc={cvc} focused={focus} name={name} number={number} />
      <form className="bg-[#696969] w-1/3 p-4 mx-auto mt-5 flex flex-col">
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <br /> <br />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <br /> <br />
        <input
          type="tel"
          name="cvc"
          placeholder="CVC Number"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <br />
        <div>
          <button
            className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>

          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Submission Confirmation"
          >
            <h2>Data Submitted</h2>
            <p>Your data has been successfully submitted.</p>
            <button onClick={closeModal}>Close</button>
          </Modal>
        </div>
      </form>
    </div>
  );
}
