/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentFile, getCurrentFile } from "../atoms";

const ChooseFile = ({accept}) => {
    const [file, setFile] = useRecoilState(currentFile);

    const handleClick = () => {
        const input = document.getElementById("file-input");
        input.click();
      };
    
      const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      };
      const selectedFile = useRecoilValue(getCurrentFile);
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
          <div>{selectedFile.name}</div>
        </div>
      );
}

export default ChooseFile;