import React, {useEffect} from 'react';
import {
    NotFoundInner,
    NotFoundLayout,
    NotFoundTextContainer
} from "../../../styles/StyledComponents/Common/NotFound.styledComponents";

export const NotFound: React.FC<{ handler: (toggle: boolean) => void }> = ({handler}) => {
    useEffect(() => {
        handler(true)
        return () => {
            handler(false)
        }
    }, [])
    return (
        <NotFoundLayout>
            <NotFoundTextContainer>
                <NotFoundInner>404</NotFoundInner>
            </NotFoundTextContainer>
        </NotFoundLayout>
    );
};

