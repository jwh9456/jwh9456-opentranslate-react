import React from "react";
import { getParsedCurrentFile } from "../atoms";
import { useRecoilValue } from "recoil";

const FileView = () => {
    const viewText = useRecoilValue(getParsedCurrentFile);
    // 1. props를 받지말고
    // 2. parsedText를 받아다가
    // 3. delimeter 설정에 따라서
    // 4. line by line으로 나누기
    return (
        <div>
            {viewText}
        </div>
    )
}
export default FileView;