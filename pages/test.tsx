import {useEffect, useState} from "react";

const Component = () => {
    const [number, setNumber] = useState(0)
    const [numberAffectedByUseEffect, setNumberAffectedByUseEffect] = useState(0);

    useEffect(() => {
        setNumberAffectedByUseEffect(number * 2);
    }, [number])

    return (
        <div>
            <button onClick={()=>{setNumber(i+1)}}>Current Number: {number}</button>
            <p>Number Affected By UseEffect: {numberAffectedByUseEffect}</p>
        </div>
    )
};

export default Component;