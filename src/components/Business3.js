import React, { useState } from "react";

const Business3 = () => {
  const [pool, setPool] = useState("");
  const [party, setParty] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [food, setFood] = useState("");
  const [phone, setPhone] = useState("");
  const [freeMusic, setFreeMusic] = useState("");
  const [dressCode, setDressCode] = useState("");
  const [color, setColor] = useState("#000000");

  const handleTextChange = (event) => {
    setPool(event.target.value);
  };
  const handleTextChangea = (event) => {
    setParty(event.target.value);
  };
  const handleTextChangeb = (event) => {
    setLocation(event.target.value);
  };
  const handleTextChangec = (event) => {
    setDate(event.target.value);
  };
  const handleTextChanged = (event) => {
    setFood(event.target.value);
  };
  const handleTextChangee = (event) => {
    setPhone(event.target.value);
  };
  const handleTextChangef = (event) => {
    setFreeMusic(event.target.value);
  };
  const handleTextChangeg = (event) => {
    setDressCode(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleCapitalizeText = () => {
    setPool(pool.toUpperCase());
  };

  const handleEraseText = () => {
    setPool("");
  };
  const handleCapitalizeTexta = () => {
    setParty(party.toUpperCase());
  };

  const handleEraseTexta = () => {
    setParty("");
  };
  const handleCapitalizeTextb = () => {
    setLocation(location.toUpperCase());
  };

  const handleEraseTextb = () => {
    setLocation("");
  };
  const handleCapitalizeTextc = () => {
    setDate(date.toUpperCase());
  };

  const handleEraseTextc = () => {
    setDate("");
  };
  const handleCapitalizeTextd = () => {
    setFood(food.toUpperCase());
  };

  const handleEraseTextd = () => {
    setFood("");
  };
  const handleCapitalizeTexte = () => {
    setPhone(phone.toUpperCase());
  };

  const handleEraseTexte = () => {
    setPhone("");
  };
  const handleCapitalizeTextf = () => {
    setFreeMusic(freeMusic.toUpperCase());
  };

  const handleEraseTextf = () => {
    setFreeMusic("");
  };
  const handleCapitalizeTextg = () => {
    setDressCode(dressCode.toUpperCase());
  };

  const handleEraseTextg = () => {
    setDressCode("");
  };
  return (
    <div className="w-full">
      <div
        style={{
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWWPX0yplf83r-fY__j3rgMsRbLuPw4xBhm4-AwcwYkA&s")',
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          height: "100%",
          width: "90%",
        }}
      >
        <div className="flex pt-6 pl-4  ">
          <div style={{ color }}>{pool.length === 0 ? "POOL" : pool}</div>
          <div style={{ color, marginLeft: "15px" }}>
            {party.length === 0 ? "PARTY" : party}
          </div>
          <div style={{ color, marginLeft: "100px", fontWeight: "bolder" }}>
            {date.length === 0 ? "CHOOSE DATE" : date}
          </div>
        </div>
        <div style={{ color, marginLeft: "20px", marginTop: "20px" }}>
          {location.length === 0 ? "LOCATION" : location}
        </div>
        <div style={{ color, marginLeft: "20px", marginTop: "104px" }}>
          {food.length === 0 ? "ENTER YOUR FOOD" : food}
        </div>
        <div style={{ color, marginLeft: "20px", marginTop: "20px" }}>
          {phone.length === 0 ? "ENTER YOUR PHONE:NO" : phone}
        </div>
        <div style={{ color, marginLeft: "20px", marginTop: "20px" }}>
          {freeMusic.length === 0 ? "WE OFFER FREE MUSIC" : freeMusic}
        </div>
        <div style={{ color, marginLeft: "20px", marginTop: "20px" }}>
          {dressCode.length === 0 ? "ENTER YOUR Dress Code " : dressCode}
        </div>
      </div>
      <div>
        <div className="bw4">
          <div className="">
            <input
              className="w-1/2"
              type="text"
              placeholder="Enter Text"
              id="text-input"
              value={pool}
              onChange={handleTextChange}
            />

            <button
              onClick={handleCapitalizeText}
              className="bg-[#696969] text-black ml-3 "
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
              value={party}
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
              value={location}
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
              type="date"
              placeholder="Enter Text"
              id="text-input"
              value={date}
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
              value={food}
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
              value={freeMusic}
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
              value={dressCode}
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
        </div>{" "}
      </div>
    </div>
  );
};

export default Business3;
