import React, { useState } from "react";

const Business2 = () => {
  const [text, setText] = useState("");
  const [lastName, setLastName] = useState("");
  const [designation, setDesignation] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [social, setSocial] = useState("");
  const [color, setColor] = useState("#000000");

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
            'url("https://i.pinimg.com/originals/13/2d/ff/132dff0e9767b7ae0f478e3b02d532fa.png")',
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          height: "100%",
          width: "90%",
        }}
      >
        <div className="flex pt-6 pl-4  ">
          <div style={{ color }}>{text.length === 0 ? "FNAME" : text}</div>
          <div style={{ color, marginLeft: "15px" }}>
            {lastName.length === 0 ? "LNAME" : lastName}
          </div>
          <div style={{ color, marginLeft: "104px", fontWeight: "bolder" }}>
            {title.length === 0 ? "BUSINESS TITLE" : title}
          </div>
        </div>
        <div style={{ color, marginLeft: "20px", marginTop: "20px" }}>
          {designation.length === 0 ? "DESIGNATION" : designation}
        </div>
        <div style={{ color, marginLeft: "20px", marginTop: "104px" }}>
          {email.length === 0 ? "ENTER YOUR EMAIL" : email}
        </div>
        <div style={{ color, marginLeft: "20px", marginTop: "20px" }}>
          {phone.length === 0 ? "ENTER YOUR PHONE:NO" : phone}
        </div>
        <div style={{ color, marginLeft: "20px", marginTop: "20px" }}>
          {adress.length === 0 ? "ADRESS:" : adress}
        </div>
        <div style={{ color, marginLeft: "20px", marginTop: "20px" }}>
          {social.length === 0 ? "SOCIAL LINKS" : social}
        </div>
      </div>
      <div>
        <div className="bw1">
          <div className="">
            <input
              className="w-1/2"
              type="text"
              placeholder="Enter Text"
              id="text-input"
              value={text}
              onChange={handleTextChange}
            />

            <button
              onClick={handleCapitalizeText}
              className="bg-[#696969] text-black "
            >
              Capitalize Text
            </button>
            <button
              onClick={handleEraseText}
              className="bg-[#696969]  ml-3 text-black "
            >
              Erase Text
            </button>
          </div>
          <div>
            <input
              className="w-1/2"
              type="text"
              placeholder="Enter Text"
              id="text-input"
              value={lastName}
              onChange={handleTextChangea}
            />

            <button
              onClick={handleCapitalizeTexta}
              className="bg-[#696969]  ml-3 text-black "
            >
              Capitalize Text
            </button>
            <button
              onClick={handleEraseTexta}
              className="bg-[#696969]  ml-3 text-black "
            >
              Erase Text
            </button>
          </div>
          <div>
            <input
              className="w-1/2"
              type="text"
              placeholder="Enter Text"
              id="text-input"
              value={designation}
              onChange={handleTextChangeb}
            />

            <button
              onClick={handleCapitalizeTextb}
              className="bg-[#696969]  ml-3 text-black "
            >
              Capitalize Text
            </button>
            <button
              onClick={handleEraseTextb}
              className="bg-[#696969]  ml-3 text-black "
            >
              Erase Text
            </button>
          </div>
          <div>
            <input
              className="w-1/2"
              type="text"
              placeholder="Enter Text"
              id="text-input"
              value={title}
              onChange={handleTextChangec}
            />

            <button
              onClick={handleCapitalizeTextc}
              className="bg-[#696969]  ml-3 text-black "
            >
              Capitalize Text
            </button>
            <button
              onClick={handleEraseTextc}
              className="bg-[#696969]  ml-3 text-black "
            >
              Erase Text
            </button>
          </div>
          <div>
            <input
              className="w-1/2"
              type="text"
              placeholder="Enter Text"
              id="text-input"
              value={email}
              onChange={handleTextChanged}
            />

            <button
              onClick={handleCapitalizeTextd}
              className="bg-[#696969]  ml-3 text-black "
            >
              Capitalize Text
            </button>
            <button
              onClick={handleEraseTextd}
              className="bg-[#696969]  ml-3 text-black "
            >
              Erase Text
            </button>
          </div>
          <div>
            <input
              className="w-1/2"
              type="text"
              placeholder="Enter Text"
              id="text-input"
              value={phone}
              onChange={handleTextChangee}
            />

            <button
              onClick={handleCapitalizeTexte}
              className="bg-[#696969]  ml-3 text-black "
            >
              Capitalize Text
            </button>
            <button
              onClick={handleEraseTexte}
              className="bg-[#696969]  ml-3 text-black "
            >
              Erase Text
            </button>
          </div>
          <div>
            <input
              className="w-1/2"
              type="text"
              placeholder="Enter Text"
              id="text-input"
              value={adress}
              onChange={handleTextChangef}
            />

            <button
              onClick={handleCapitalizeTextf}
              className="bg-[#696969]  ml-3 text-black "
            >
              Capitalize Text
            </button>
            <button
              onClick={handleEraseTextf}
              className="bg-[#696969]  ml-3 text-black "
            >
              Erase Text
            </button>
          </div>
          <div>
            <input
              className="w-1/2"
              type="text"
              placeholder="Enter Text"
              id="text-input"
              value={social}
              onChange={handleTextChangeg}
            />

            <button
              onClick={handleCapitalizeTextg}
              className="bg-[#696969]  ml-3 text-black "
            >
              Capitalize Text
            </button>
            <button
              onClick={handleEraseTextg}
              className="bg-[#696969]  ml-3 text-black "
            >
              Erase Text
            </button>
          </div>
        </div>
        <div className="ml-4 p-8 flex">
          <p className="text-2xl mr-5 text-black  ">
            change the color theme of card
          </p>
          <input type="color" id="color-picker" onChange={handleColorChange} />
        </div>
      </div>
    </div>
  );
};

export default Business2;
