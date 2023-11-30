// import React from 'react';
// import ReactDOM from 'react-dom';
import { useEffect } from "react";
const createScrollStopListener = (element, callback, timeout) => {
    let removed = false;
    let handle = null;
    const onScroll = () => {
        if (handle) {
             clearTimeout(handle);
        }
        handle = setTimeout(callback, timeout || 200); // default 200 ms
    };
    element.addEventListener('scroll', onScroll);
    return () => {
        if (removed) {
            return;
        }
        removed = true;
      	if (handle) {
      		clearTimeout(handle);
        }
    	element.removeEventListener('scroll', onScroll);
    };
};

const useScrollStopListener = (element, callback, timeout) => {
    const callbackRef = React.useRef();
    callbackRef.current = callback;
    useEffect(() => {
        const destroyListener = createScrollStopListener(element, () => {
            if (callbackRef.current) {
                callbackRef.current();
            }
        });
      	return () => destroyListener();
    }, [element]);
}

export { useScrollStopListener }