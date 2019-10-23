import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderRadius: 5,
        paddingTop: 20,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 20,
        backgroundColor: '#fff',
        justfyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ccc',
        position: 'relative',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
}

export default CardSection;