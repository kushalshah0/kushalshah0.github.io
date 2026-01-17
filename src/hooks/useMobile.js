import { useState, useEffect } from 'react';

export const useMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        // Initial check
        checkMobile();

        // Debounced listener could be better, but simple resize is fine for now
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, [breakpoint]);

    return isMobile;
};
