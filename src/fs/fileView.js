import React from "react";

const FileView = (props) => {
    console.log(props);
    return (
        <div>
            {props.content}
        </div>
    )
}
export default FileView;