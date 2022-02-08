import React from "react";
import Svg, {Path, Circle} from "react-native-svg";

const SvgPlayButton = ({width = 100, height = 100}) => {
    return(
        <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
            <Circle cx={`${height/2}`} cy={`${width/2}`} r={`${width/2}`} fill="#FECE2E"/>
            <Path d="M75 50L37.5 75.9808L37.5 24.0192L75 50Z" fill="#FEFEFE"/>
        </Svg>


    )
}

export default SvgPlayButton;