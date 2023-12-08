import React, { useEffect } from "react";

const useLocalStorage = (key, initialValue) =>{
    const [state,setState] = React.useState(initialValue);

    useEffect(()=>{
        window.localStorage.setItem(key, state);
    }, [state, key]);

    return [state, setState];
};

export default useLocalStorage;