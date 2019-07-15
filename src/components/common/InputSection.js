import React from 'react';
import { View } from 'react-native';

const InputSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        padding: 5,
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#ddd',
    }
}

export { InputSection };