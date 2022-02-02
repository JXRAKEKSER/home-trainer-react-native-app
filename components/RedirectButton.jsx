import React from "react";

import { TouchableOpacity, Text } from "react-native";

const RedirectButton = ({navigation, title, nextScreen}) => {
    return(
        <TouchableOpacity onPress={() => navigation.navigate(nextScreen)}>
            <Text style={{marginTop: 10}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default RedirectButton;