import React, {useEffect, useState } from "react";
import { pullStyles } from "../datasources/FireStoreService";

export function StyleBar(){
    const [styleList, setStyleList] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            let result =  await pullStyles()

            setStyleList(result);
            
        }
        fetchData();
    },[])

     return  ( <>
            {styleList?.map(style =>(
                <p>{style?.name}</p>
            ))}
        </>)
    }

// export default StyleBar;
