import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';
import {signUpWithEmailAndPassword} from '../firebase/firebase.util';
import * as ImagePicker from 'expo-image-picker'
import { Button, ButtonSection, FormContainer, InputSection, Input, Spinner } from './common';

const SignUpForm = (props) => {
    const [error, setError] = useState('');
    const [loading, setLoding] = useState(false);
    const [loggedIn, setLoggedIn] = useState(null);
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        username: ''
    })
  state = {
    image: null,
    loggedIn: null
  };
    const onButtonPress = () => {
        const { username, email, password } = userInfo;

        setLoding(true);
        
        signUpWithEmailAndPassword(username, email, password, onSignFail, onSignSuccess);
    }

    const onSignFail = () => {
        setLoding(false);
        setError('Authentication Failed');
    }

    const onSignSuccess = () => {
        setLoding(false);
        setError('');
        setLoggedIn(null);
        setUserInfo({ 
            ...userInfo,
            email: '',
            password: '',
            username: ''
         });
    }

    // _pickImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //       allowsEditing: true,
    //       aspect: [4, 3],
    //     });
    
    //     console.log(result);
    
    //     if (!result.cancelled) {
    //       this.setState({ image: result.uri });
    //     }
    //   };

    const renderButton = () => {
        if(loading) {
            return <Spinner size="small" />;
        }

        return (
            <>
            <Button onPress={onButtonPress.bind(this)}>
                Sign up
            </Button>
            <View style={styles.textStyle}>
                <Text
                    style={{textAlign: 'center'}}
                    >
                    Already have an account?
                </Text>
                <Text
                style={styles.signInTextStyle}
                onPress={() => props.navigation.navigate('SignIn')}
                >
                    Sign in
                </Text>
            </View>
            </>
        );
    }
        return(
        <>
            <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>{`Hello!
    Sign up to get started.
                `}</Text>
            </View>
            <FormContainer>
            <InputSection>
                <Input 
                    placeholder="user name"
                    label="USER NAME"
                    value={userInfo.username}
                    onChangeText={username => setUserInfo({...userInfo, username})}
                />
            </InputSection>
            <InputSection>
                <Input 
                    placeholder="user@gmail.com"
                    label="EMAIL ADDRESS"
                    value={userInfo.email}
                    onChangeText={email => setUserInfo({...userInfo, email})}
                />
            </InputSection>
            <InputSection>
                <Input 
                    secureTextEntry
                    placeholder="password"
                    label="PASSWORD"
                    value={userInfo.password}
                    onChangeText={password => setUserInfo({...userInfo, password})}
                />
            </InputSection>
            <Text style={styles.errorTextStyle}>
                {error}
            </Text>
            <ButtonSection>
                {renderButton()}
            </ButtonSection>
            </FormContainer>
            </>
        );
}


const styles = {
  bgContainerStyle: {
    paddingTop: 300,
    position: 'relative', 
    top: -130,
    left: 0
},
titleContainer: {
    marginBottom: 30,
    alignSelf: 'center'
},
titleStyle: {
    textAlign:'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#415D71',
},
  textStyle: {
      marginTop: 10,
      flexDirection: 'row',
      alignSelf: 'center'
  },
  signInTextStyle: {
    marginLeft: 5,
    color:'#E9446A'
  },
  errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
  }
}

export default SignUpForm;