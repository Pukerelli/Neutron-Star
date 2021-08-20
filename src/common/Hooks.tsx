import {useEffect, useRef, useState} from "react";
import {useAppDispatch} from "../store";
import {userClearAction} from "../store/actions/user.action";
import {authLogoutAction} from "../store/actions/auth.action";
import {carClearAction} from "../store/actions/car.action";
import {clearStorage} from "./functions";

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

export const useDisplayWidth = () => {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const widthHasChanged = () =>
            setWidth(window.innerWidth)

        window.addEventListener('resize', widthHasChanged)

        return () => {
            window.removeEventListener('resize', widthHasChanged)
        }

    })

    return width
}

export const useLogout = () => {
    const dispatch = useAppDispatch()
    return () => {
        clearStorage()
        dispatch(authLogoutAction())
        dispatch(userClearAction())
        dispatch(carClearAction())
    }
}