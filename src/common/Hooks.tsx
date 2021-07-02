import {useEffect, useRef} from "react";

export const useClickOutside = (handler: () => void) => {
    const ref = useRef<any>();

    useEffect(() => {
        const eventHandler = (event: MouseEvent) => {
            if (!ref.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", eventHandler);
        return () => {
            document.removeEventListener("mousedown", eventHandler);
        };
    }, []);
    return ref;
};

