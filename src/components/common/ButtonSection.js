import React from 'react';
import { View } from 'react-native';

const ButtonSection = (props) => {
    return(
        <View style={styles.buttonContainerStyle}>
            {props.children}
        </View>
    );
}

const styles = {
    buttonContainerStyle: {
        marginTop: 50,
        justfyContent: 'flex-start',
        flexDirection: 'columin'
    },
}

export { ButtonSection };