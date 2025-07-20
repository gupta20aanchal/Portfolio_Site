import { useState, useEffect, useRef } from 'react';

const useTypewriter = (text, speed = 50, start = false) => {
    const [displayedText, setDisplayedText] = useState('');
    const index = useRef(0);

    useEffect(() => {
        if (!start) {
            setDisplayedText('');
            index.current = 0;
            return;
        };

        const intervalId = setInterval(() => {
            if (index.current < text.length) {
                setDisplayedText((prev) => prev + text.charAt(index.current));
                index.current += 1;
            } else {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed, start]);

    return displayedText;
};

export default useTypewriter;