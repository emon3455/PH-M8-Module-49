import React, { useEffect, useState } from 'react';
import Calculate from '../Calculate/Calculate';

const Watch = () => {

    let [count,setCount]= useState(0);

    const increase = () =>{
        setCount(count=count + 1);
    }


    return (
        <div>
            <h2>This is a counter</h2>
            <p>Let's Increase The count: {count}</p>
            <button onClick={increase}>Increase</button>
            <Calculate counts={count}></Calculate>
        </div>
    );
};

export default Watch;