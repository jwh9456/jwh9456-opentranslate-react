/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentFile, getCurrentFile } from "../atoms";

const ChooseFile = async ({ accept }) => {
  const [file, setFile] = useRecoilState(currentFile);

  const handleClick = () => {
    const input = document.getElementById("file-input");
    input.click();
  };

  const handleFileChange = async( event) => {
    await setFile(event.target.files[0]);
    await console.log(file.name);
  };
  return (
    <div>
      <button onClick={handleClick}>asdasd</button>
      <input
        id="file-input"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept={accept}
      />
      <div>{file.name}</div>
    </div>
  );
}

export default ChooseFile;