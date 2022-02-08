import React from "react";
import Svg, {Line, Circle} from "react-native-svg";

const SvgPauseButton = ({width = 100, height = 100}) => {
    return(
        <Svg width={width} height={height} viewBox="0 0 100 100" fill="none" >
            <Circle cx={`${width/2}`} cy={`${height/2}`} r={`${height/2}`} fill="#FECE2E"/>
            <Line x1="40" y1="25" x2="40" y2="75" stroke="#FEFEFE" strokeWidth="10"/>
            <Line x1="60" y1="25" x2="60" y2="75" stroke="#FEFEFE" strokeWidth="10"/>
        </Svg>



    )
}

export default SvgPauseButton;