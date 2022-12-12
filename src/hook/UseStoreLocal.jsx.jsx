import { useState, useEffect } from 'react';
export function UseStoreLocal(key, value) {
    const [local, setLocal] = useState(value);
    useEffect(() => {
        window.localStorage.setItem(key, local)
    }, [local]);
    return { local, setLocal }
}



parseFloat((0.1 + 0.2)).toFixed(10) === 0.3
parseFloat((0.1 + 0.2).toFixed(10)) === 0.3