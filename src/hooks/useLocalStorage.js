import { useState, useEffect } from "react";

function getSavedValue(key, initialVal) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;
    if (initialVal instanceof Function) return initialVal();
    return initialVal;
}

export default function useLocalStorage(key, initialVal) {
    const [val, setVal] = useState(() => {
        return getSavedValue(key, initialVal);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(val));
    }, [val]);

    return [val, setVal];
}

