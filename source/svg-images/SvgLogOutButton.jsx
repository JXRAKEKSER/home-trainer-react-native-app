import React from "react";
import Svg, {Path, Rect} from "react-native-svg";

const SvgLogOutButton = ({width, height}) => {
    return(
        <Svg width={width} height={height} viewBox="0 0 83 65" fill="none">
            <Rect x="31" y="3" width="50" height="60" fill="#FECE2E"/>
            <Path d="M68 35.5C69.3807 35.5 70.5 34.3807 70.5 33C70.5 31.6193 69.3807 30.5 68 30.5V35.5ZM1.23223 31.2322C0.255922 32.2085 0.255922 33.7915 1.23223 34.7678L17.1421 50.6777C18.1184 51.654 19.7014 51.654 20.6777 50.6777C21.654 49.7014 21.654 48.1184 20.6777 47.1421L6.53553 33L20.6777 18.8579C21.654 17.8816 21.654 16.2986 20.6777 15.3223C19.7014 14.346 18.1184 14.346 17.1421 15.3223L1.23223 31.2322ZM68 30.5L3 30.5V35.5L68 35.5V30.5Z" fill="#FEFEFE" strokeWidth="5" strokeLinecap="round"/>
            <Path d="M30.5 48V57.5C30.5 60.2614 32.7386 62.5 35.5 62.5H75.5C78.2614 62.5 80.5 60.2614 80.5 57.5V8C80.5 5.23858 78.2614 3 75.5 3H35.5C32.7386 3 30.5 5.23858 30.5 8V17.5" stroke="#FEFEFE" strokeWidth="5" strokeLinecap="round"/>
        </Svg>


    )
}

export default SvgLogOutButton;