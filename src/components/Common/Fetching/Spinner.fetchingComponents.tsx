import React from "react";
import Loader from "react-loader-spinner"
import {SpinnerContainer} from "../../../styles/StyledComponents/Spinner/Spinner.styledComponents";
import config from '../../../common/config/config.json'

export const Spinner: React.FC = () => (
    <SpinnerContainer>
        <Loader
            type='Oval'
            color={config.linkColor}
            height={300}
            width={300}
        />
    </SpinnerContainer>
)