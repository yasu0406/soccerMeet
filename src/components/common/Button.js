import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 15,
        paddingBottom: 15,
    },
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#00807D',
        borderRadius: 5,
        marginBottom: 10,
    }
}

export { Button };