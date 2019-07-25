import React from 'react';
import { View } from 'react-native';

const FormContainer = (props) => {
    return(
        <View style={styles.containerStyle}>
           {props.children} 
        </View>
    );
};

const styles = {
    containerStyle: {
        marginLeft: 30,
        marginRight: 30,
    }
}

export { FormContainer }