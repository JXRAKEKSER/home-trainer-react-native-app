import React from "react";
import Svg, {Path, Circle, Rect, Line,} from "react-native-svg";

const SvgAddButton = ({width = 22, height = 22}) => {
    return(
        <Svg width={width} height={height} viewBox="0 0 50 50" fill="none">
            <Line y1="25.5" x2="50" y2="25.5" stroke="black" strokeWidth="5"/>
            <Line x1="25.5077" y1="50.0004" x2="25.5" y2="0.00038499" stroke="black" strokeWidth="5"/>
            <Rect x="1" y="1" width="48" height="48" rx="9" stroke="black" strokeWidth="2"/>
        </Svg>

    )
}

export default SvgAddButton;