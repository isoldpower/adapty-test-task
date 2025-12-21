import { useState, useEffect } from 'react';

function useDocumentSize() {
    const [size, setSize] = useState({
        width: typeof window !== 'undefined' ? document.documentElement.clientWidth : 0,
        height: typeof window !== 'undefined' ? document.documentElement.clientHeight : 0
    });

    useEffect(() => {
        function handleResize() {
            setSize({
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            });
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return size;
}

export { useDocumentSize };