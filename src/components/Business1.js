import React, { useState } from "react";

const Business1 = () => {
  const [text, setText] = useState("");
  const [lastName, setLastName] = useState("");
  const [designation, setDesignation] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [social, setSocial] = useState("");
  const [color, setColor] = useState("#FFFFFF");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleTextChangea = (event) => {
    setLastName(event.target.value);
  };
  const handleTextChangeb = (event) => {
    setDesignation(event.target.value);
  };
  const handleTextChangec = (event) => {
    setTitle(event.target.value);
  };
  const handleTextChanged = (event) => {
    setEmail(event.target.value);
  };
  const handleTextChangee = (event) => {
    setPhone(event.target.value);
  };
  const handleTextChangef = (event) => {
    setAdress(event.target.value);
  };
  const handleTextChangeg = (event) => {
    setSocial(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  const handleColorChangea = (event) => {
    setColor(event.target.value);
  };
  const handleColorChangeb = (event) => {
    setColor(event.target.value);
  };
  const handleColorChangec = (event) => {
    setColor(event.target.value);
  };
  const handleColorChanged = (event) => {
    setColor(event.target.value);
  };
  const handleColorChangee = (event) => {
    setColor(event.target.value);
  };
  const handleColorChangef = (event) => {
    setColor(event.target.value);
  };
  const handleColorChangeg = (event) => {
    setColor(event.target.value);
  };
  const handleCapitalizeText = () => {
    setText(text.toUpperCase());
  };

  const handleEraseText = () => {
    setText("");
  };
  const handleCapitalizeTexta = () => {
    setLastName(lastName.toUpperCase());
  };

  const handleEraseTexta = () => {
    setLastName("");
  };
  const handleCapitalizeTextb = () => {
    setDesignation(designation.toUpperCase());
  };

  const handleEraseTextb = () => {
    setDesignation("");
  };
  const handleCapitalizeTextc = () => {
    setTitle(title.toUpperCase());
  };

  const handleEraseTextc = () => {
    setTitle("");
  };
  const handleCapitalizeTextd = () => {
    setEmail(email.toUpperCase());
  };

  const handleEraseTextd = () => {
    setEmail("");
  };
  const handleCapitalizeTexte = () => {
    setPhone(phone.toUpperCase());
  };

  const handleEraseTexte = () => {
    setPhone("");
  };
  const handleCapitalizeTextf = () => {
    setAdress(adress.toUpperCase());
  };

  const handleEraseTextf = () => {
    setAdress("");
  };
  const handleCapitalizeTextg = () => {
    setSocial(social.toUpperCase());
  };

  const handleEraseTextg = () => {
    setSocial("");
  };
  return (
    <div className="w-full">
      <div
        style={{
          backgroundImage:
            'url("https://png.pngtree.com/thumb_back/fh260/back_our/20190623/ourmid/pngtree-black-business-atmosphere-business-card-background-image_239793.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          height: "50vh",
          width: "90%",
        }}
      >
        <div className="flex pt-6 pl-4  ">
          <div style={{ color }}>
            {text.length === 0 ? "ENTER FIRST NAME" : text}
          </div>
          <div className="text-white ml-4" style={{ color }}>
            {lastName.length === 0 ? "ENTER SECOND NAME" : lastName}
          </div>
          <div className="text-white font-extrabold ml-36" style={{ color }}>
            {title.length === 0 ? "BUSINESS TITLE" : title}
          </div>
        </div>
        <div className="text-white ml-4 mt-4" style={{ color }}>
          {designation.length === 0 ? "DESIGNATION" : designation}
        </div>
        <div className="text-white ml-4 mt-24" style={{ color }}>
          {email.length === 0 ? "ENTER YOUR EMAIL" : email}
        </div>
        <div className="text-white ml-4 mt-4" style={{ color }}>
          {phone.length === 0 ? "ENTER YOUR PHONE:NO" : phone}
        </div>
        <div className="text-white ml-4 mt-4" style={{ color }}>
          {adress.length === 0 ? "ADRESS:" : adress}
        </div>
        <div className="text-white ml-4 mt-4" style={{ color }}>
          {social.length === 0 ? "SOCIAL LINKS" : social}
        </div>
      </div>
      <div className="flex">
        <div>
          <div>
            <label htmlFor="text-input">Enter text:</label>
            <input
              type="text"
              id="text-input"
              value={text}
              onChange={handleTextChange}
            />

            <button
              onClick={handleCapitalizeText}
              className="bg-[#696969] ml-3 border border-red-600 p-1"
            >
              Capitalize Text
            </button>
            <button
              onClick={handleEraseText}
              className="bg-[#696969] ml-3 border border-red-600 p-1"
            >
              Erase Text
            </button>
          </div>
          <div>
            <label htmlFor="text-input">Enter text:</label>
            <input
              type="text"
              id="text-input"
              value={lastName}
              onChange={handleTextChangea}
            />

            <button
              onClick={handleCapitalizeTexta}
              className="bg-[#696969] ml-3 border border-red-600 p-1"
            >
              Capitalize Text
            </button>
            <button
              onClick={handleEraseTexta}
              className="bg-[#696969] ml-3 border border-red-600 p-1"
            >
              Erase Text
            </button>
          </div>
          <div>
            <label htmlFor="text-input">Enter text:</label>
            <input
              type="text"
              id="text-input"
              value={designation}
              onChange={handleTextChangeb}
            />

            <button
              onClick={handleCapitalizeTextb}
              className="bg-[#696969] ml-3 border border-red-600 p-1"
            >
              Capitalize Text
            </button>
            <button
              onClick={handleEraseTextb}
              className="bg-[#696969] ml-3 border border-red-600 p-1"
            >
              Erase Text
            </button>
          </div>
          <div>
            <label htmlFor="text-input">Enter text:</label>
            <input
              type="text"
              id="text-input"
              value={title}
              onChange={handleTextChangec}
            />

            <button
              onClick={handleCapitalizeTextc}
              className="bg-[#696969] ml-3 border border-red-600 p-1"
            >
              Capitalize Text
            </button>
            <button
              onClick={handleEraseTextc}
              className="bg-[#696969] ml-3 border border-red-600 p-1"
            >
              Erase Text
            </button>
          </div>
          <div>
            <label htmlFor="text-input">Enter text:</label>
            <input
              type="text"
              id="text-input"
              value={email}
              onChange={handleTextChanged}
            />

            <button
              onClick={handleCapitalizeTextd}
              className="bg-[#696969] ml-3 border border-red-600 p-1"
            >
              Capitalize Text
            </button>
            <button
              onClick={handleEraseTextd}
              className="bg-[#696969] ml-3 border border-red-600 p-1"
            >
              Erase Text
            </button>
          </div>
          <div>
            <label htmlFor="text-input">Enter text:</label>
            <input
              type="text"
              id="text-input"
              value={phone}
              onChange={handleTextChangee}
            />

            <button
              onClick={handleCapitalizeTexte}
              className="bg-[#696969] ml-3 border border-red-600 p-1"
            >
              Capitalize Text
            </button>
            <button
              onClick={handleEraseTexte}
              className="bg-[#696969] ml-3 border border-red-600 p-1"
            >
              Erase Text
            </button>
          </div>
          <div>
            <label htmlFor="text-input">Enter text:</label>
            <input
              type="text"
              id="text-input"
              value={adress}
              onChange={handleTextChangef}
            />

            <button
              onClick={handleCapitalizeTextf}
              className="bg-[#696969] ml-3 border border-red-600 p-1"
            >
              Capitalize Text
            </button>
            <button
              onClick={handleEraseTextf}
              className="bg-[#696969] ml-3 border border-red-600 p-1"
            >
              Erase Text
            </button>
          </div>
          <div>
            <label htmlFor="text-input">Enter text:</label>
            <input
              type="text"
              id="text-input"
              value={social}
              onChange={handleTextChangeg}
            />

            <button
              onClick={handleCapitalizeTextg}
              className="bg-[#696969] ml-3 border border-red-600 p-1"
            >
              Capitalize Text
            </button>
            <button
              onClick={handleEraseTextg}
              className="bg-[#696969] ml-3 border border-red-600 p-1"
            >
              Erase Text
            </button>
          </div>
        </div>
        <div className="ml-4 p-6">
          <input type="color" id="color-picker" onChange={handleColorChange} />
        </div>
      </div>
    </div>
  );
};

export default Business1;
