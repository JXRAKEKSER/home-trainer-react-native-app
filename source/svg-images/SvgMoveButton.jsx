import React from "react";
import Svg, {Path, Circle} from "react-native-svg";

const SvgMoveButton = ({width, height}) => {
    return(
        <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
            <Circle cx="50" cy="50" r="50" fill="#FECE2E"/>
            <Path d="M30 46.5C28.067 46.5 26.5 48.067 26.5 50C26.5 51.933 28.067 53.5 30 53.5V46.5ZM72.4749 52.4749C73.8417 51.108 73.8417 48.892 72.4749 47.5251L50.201 25.2513C48.8342 23.8844 46.6181 23.8844 45.2513 25.2513C43.8844 26.6181 43.8844 28.8342 45.2513 30.201L65.0503 50L45.2513 69.799C43.8844 71.1658 43.8844 73.3819 45.2513 74.7487C46.6181 76.1156 48.8342 76.1156 50.201 74.7487L72.4749 52.4749ZM30 53.5H70V46.5H30V53.5Z" fill="#FEFEFE"/>
        </Svg>

    )
}

export default SvgMoveButton;