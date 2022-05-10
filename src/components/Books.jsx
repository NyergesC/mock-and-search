import React, { useState } from 'react'

function Book({ title, author, year }) {

    const [details, setDeatils] = useState(false)

    return (
        <div>
            <h2>{title}</h2>
            {/* {details ?  <h3>{author} {year}</h3> : false} */}
            {details && <h3>{author} {year}</h3>}
            <button onClick={ () => { setDeatils(!details) } } > {details ? "hide" : "show"}</button>

             
        </div>
    )
}

export default Book