import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputlStyle, labelStyle, containerStyle } = styles;
    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputlStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = {
    inputlStyle:{
        marginTop: 5,
        paddingRight: 5,
        color: '#161F3D',
        fontSize: 18,
        lineHeight: 23
    },
    labelStyle: {
        fontSize: 12,
        color: '#161F3D',
        opacity: 0.3
    },
    containerStyle: {
        marginTop: 10,
    }
}

export { Input };