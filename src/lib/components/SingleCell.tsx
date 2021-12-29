import React from 'react'




type propTypes = {
    cell: string|number
    indexes: {headIndex: number, dataIndex: number}
}

function SingleCell({cell, indexes}: propTypes) {
    let {headIndex, dataIndex} = indexes
    return (
        <td>{cell}</td>
    )
}

export default SingleCell
