import { useState, useEffect } from 'react';

export function UseScrollTop() {
    const [y, sety] = useState(0);
    useEffect(() => {
        console.log(y);
    }, [y]);
    window.addEventListener('scroll',()=>{
        sety(window.document.documentElement.scrollTop)
    })
    return { y }
}