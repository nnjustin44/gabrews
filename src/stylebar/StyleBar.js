import React from "react";

export function StyleBar(props){
    return (
        <>
            {props.stylelist.map(style =>(
                <p>{style}</p>
            ))}
        </>
    )
}

