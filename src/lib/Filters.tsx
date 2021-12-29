import React from 'react'
import { headerObject } from './index.d';


type propTypes = {
    headers: headerObject[]
}
function Filters({headers}:propTypes) {
    return (
        <thead>
        <tr>
          {headers.map((header) => {
            return <th key={header.field}>{header.title}</th>;
          })}
        </tr>
      </thead>
    )
}

export default Filters
