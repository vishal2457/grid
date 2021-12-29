import React, { useMemo, useState } from "react";
import SingleCell from "./components/SingleCell";
import { headerObject } from "./index.d";

type propTypes = {
  headers: headerObject[];
  data: any[];
};

function Data({ headers, data }: propTypes) {


  return (
    <>
      {data.map((d, dataIndex) => {
        return (
          <tr key={dataIndex}>
            {headers.map((h, headIndex) => {    
              return <SingleCell
              cell={d[h.field]}
              key={headIndex}
              indexes={{headIndex, dataIndex}}
              />
            })}
          </tr>
        );
      })}
    </>
  );
}

export default Data;
