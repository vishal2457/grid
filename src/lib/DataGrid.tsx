import React, { useMemo, useState } from "react";
import Data from "./Data";
import Filters from "./Filters";
import Header from "./Header";
import { gridProps } from "./index.d";

function DataGrid({ data, header }: gridProps) {
  return (
    <div>
      <table>
        <Header headers={header} />
        <Filters headers={header} />
        <tbody>
          <Data headers={header} data={data} />
        </tbody>
      </table>
    </div>
  );
}

export default DataGrid;
