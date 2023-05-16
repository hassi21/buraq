import React, { useState } from "react";

const Book3 = () => {
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [pages, setPages] = useState("");
  const [producer, setProducer] = useState("");
  const [color, setColor] = useState("#000000");

  const handleTextChangec = (event) => {
    setDate(event.target.value);
  };
  const handleTextChanged = (event) => {
    setBook(event.target.value);
  };
  const handleTextChangee = (event) => {
    setAuthor(event.target.value);
  };
  const handleTextChangef = (event) => {
    setPages(event.target.value);
  };
  const handleTextChangeg = (event) => {
    setProducer(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleCapitalizeTextc = () => {
    setDate(date.toUpperCase());
  };

  const handleEraseTextc = () => {
    setDate("");
  };
  const handleCapitalizeTextd = () => {
    setBook(book.toUpperCase());
  };

  const handleEraseTextd = () => {
    setBook("");
  };
  const handleCapitalizeTexte = () => {
    setAuthor(author.toUpperCase());
  };

  const handleEraseTexte = () => {
    setAuthor("");
  };
  const handleCapitalizeTextf = () => {
    setPages(pages.toUpperCase());
  };

  const handleEraseTextf = () => {
    setPages("");
  };
  const handleCapitalizeTextg = () => {
    setProducer(producer.toUpperCase());
  };

  const handleEraseTextg = () => {
    setProducer("");
  };
  return (
    <div className="w-full">
      <div
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/474x/de/e0/e6/dee0e680d36bfa93c6226a024ceb5616.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          height: "100%",
          width: "100%",
        }}
      >
        <div className=" pt-6 pl-4  ">
          <div
            style={{
              color,
              marginLeft: "25px",
              marginTop: "10px",
              fontWeight: "bolder",
              fontSize: "54px",
            }}
          >
            {book.length === 0 ? "MAGAZINE NAME" : book}
          </div>
          <div
            style={{
              color,
              marginLeft: "40px",
              marginTop: "90px",
              fontWeight: "bolder",
              fontSize: "42px",
            }}
          >
            {author.length === 0 ? "AUTHOR NAME" : author}
          </div>
          <div
            style={{
              color,
              marginLeft: "14px",
              marginTop: "30px",
              fontWeight: "bolder",
              fontSize: "22px",
            }}
          >
            {date.length === 0 ? "CHOOSE DATE OF PUBLISH" : date}
          </div>
          <div
            style={{
              color,
              marginLeft: "14px",
              marginTop: "30px",
              fontWeight: "bolder",
              fontSize: "22px",
            }}
          >
            {pages.length === 0 ? "NO OF PAGES" : pages}
          </div>
          <div
            style={{
              color,
              marginLeft: "14px",
              marginTop: "30px",
              fontWeight: "bolder",
              fontSize: "22px",
            }}
          >
            {producer.length === 0 ? "PRODUCED BY " : producer}
          </div>
        </div>
        <div>
          <div className="bw2">
            <div>
              <input
                className="w-1/2"
                type="text"
                placeholder="Enter Text"
                id="text-input"
                value={book}
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
                value={author}
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
                value={pages}
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
                value={producer}
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
            <input
              type="color"
              id="color-picker"
              onChange={handleColorChange}
            />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Book3;
