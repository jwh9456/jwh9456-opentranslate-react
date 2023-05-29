/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { Workbook, Worksheet } from "react-excel";

const openBilingual = (myfile) => {
  const [workbook, setWorkbook] = useState();

  useEffect(() => {
    // Load the Excel file.
    const workbook = new Workbook(`${myfile}.xlsx`);
    setWorkbook(workbook);
  }, []);

  return (
    <div>
      {workbook && (
        <Worksheet sheetName="Sheet1">
          {workbook.getSheet("Sheet1").getData()}
        </Worksheet>
      )}
    </div>
  );
};

export default openBilingual;