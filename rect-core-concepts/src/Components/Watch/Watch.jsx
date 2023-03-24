import React, { useEffect, useState } from 'react';

const Watch = () => {

    let [count,setCount]= useState(0);

    const increase = () =>{
        setCount(count=count + 1);
        console.log(count);
    }


    return (
        <div>
            <h2>This is a counter</h2>
            <p>Count: {count}</p>
            <button onClick={increase}>Increase</button>
        </div>
    );
};

export default Watch;