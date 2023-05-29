/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { parsedCurrentFile, getCurrentFile, getParsedCurrentFile } from "../../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import FileView from "../fileView";
import fs from "fs";

const TextWrapper = () => {
  const [text, setText] = useRecoilState(parsedCurrentFile);
  
  useEffect(() => {
    const readFile = () => {
      const selectedFile = useRecoilValue(getCurrentFile);
      const file = fs.readFileSync(selectedFile);
      setText(file.toString());
    };
    readFile();
  }, []);

  return (
    <div>
      <FileView content={useRecoilValue(getParsedCurrentFile)}/>
    </div>
  );
};

export default TextWrapper;