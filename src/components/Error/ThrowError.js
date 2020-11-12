import React, { useEffect, useState } from "react";

function ThrowError({ time, errorMessage }) {
    const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setError(true)
            if (time === 2000) {
                console.log(performance.now - window.time)
            }
        }, time);
    }, [time]);

    if (error) throw new Error(errorMessage);

    return (
        <h1>
            throwing the error in {time / 1000} seconds
        </h1>
    )
}

export default ThrowError;