import React from "react";
import Svg, {Path, Text} from "react-native-svg";
import { StyleSheet } from "react-native";

const SvgListMarker = ({width = '36', height = '40', value, styleMix}) => {
    const mixedStyle = StyleSheet.compose({}, styleMix);
    return(
        <Svg style={mixedStyle} width={width} height={height} viewBox="0 0 26 30" fill="none">
            <Path d="M13 0L25.9904 7.5V22.5L13 30L0.00961876 22.5V7.5L13 0Z" fill="#FECE2E"/>
            <Text textAnchor="middle" fontWeight="700" fontSize="12" fill="#000" x="13" y="18">{value}</Text>
        </Svg>
    );
};

export default SvgListMarker;