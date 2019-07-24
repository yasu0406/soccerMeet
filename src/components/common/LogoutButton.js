import React from 'react';
import { TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import Icon from '@expo/vector-icons';

const LogoutButton = () => {
    return (
        <TouchableOpacity onPress={()=> firebase.auth().signOut()}>
            <Icon 
                name='log-out'
                size={30}
                style={{ color: focused ? '#161F3D' : '##00807D'}}
             />
        </TouchableOpacity>
    )
}

export { LogoutButton }; 