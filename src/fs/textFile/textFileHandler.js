/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { parsedCurrentFile, getCurrentFile } from "../../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import FileView from "../fileView";

const textFileHandler = async () => {
  const [text, setText] = useRecoilState(parsedCurrentFile);
  
      const selectedFile = useRecoilValue(getCurrentFile);
      const fileReader = new FileReader();
      fileReader.onload = async () => {
        await setText(fileReader.readAsText(selectedFile));
      }
  return await (
    <div>
      <FileView t={text}/>
    </div>
  );
};

export default textFileHandler;