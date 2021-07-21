import {useEffect, useRef} from "react";

export const useClickOutside = (handler: () => void) => {
    const ref = useRef<Event>();

    useEffect(() => {
        const eventHandler = (event: MouseEvent) => {
            if (ref.current!.currentTarget !== event.target) {
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

