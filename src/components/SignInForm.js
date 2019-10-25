import React, {useState} from 'react';
import { View, Text, ImageBackground } from 'react-native';
import {signInWithEmail, signInWithGoogle, signInWithFacebook} from '../firebase/firebase.util';
import { Button, ButtonSection, FormContainer, Input, Spinner, InputSection } from './common';


const LoginForm = ({navigation}) => {
    const [error, setError] = useState('');
    const [loading, setLoding] = useState(false);
    const [userInfo, setUserInfo] = useState(
        {
            email: '',
            password: '',
        }
    );
    const onButtonPress = () => {
        const { email, password } = userInfo;

        setLoding(true);

        signInWithEmail(email, password, onLoginSuccess, onLoginFail)
    }
    const onLoginFail = () => {
        setLoding(false);
        setError('Authentication Failed');
    }

    const onLoginSuccess = () => {
        setLoding(false);
        setError('');
        setUserInfo({ 
            ...userInfo,
            email: '',
            password: '',
         });
    }

    const renderButton = () => {
        if(loading) {
            return <Spinner size="small" />;
        }

        return (
            <>
            <Button onPress={onButtonPress.bind(this)}>
                Sign in
            </Button>
            <Button onPress={signInWithGoogle.bind(this)}>
                Google Sign
            </Button>
            <Button onPress={signInWithFacebook.bind(this)}>
                Facebook Sign
            </Button>
            <View>
                <Text
                    style={{textAlign: 'center'}}
                    onPress={() => navigation.navigate('SignUp')}
                    >
                    Forgot password?
                </Text>
                <Text
                style={styles.signInTextStyle}
                onPress={() => navigation.navigate('SignUp')}
                >
                    Sign Up
                </Text>
            </View>
            </>
        );
    }

    return(
        <>
        <ImageBackground source={require('../../assets/headerBg.png')} style={styles.bgContainerStyle} />
        <FormContainer style={styles.containerStyle}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>Soocer Meet</Text>
            </View>
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
        fontSize: 36,
        fontWeight: 'bold',
        color: '#415D71',
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    signInTextStyle: {
        marginTop: 10,
        textAlign: 'center',
        color:'#E9446A'
    }
}

LoginForm.navigationOptions = {
    header: null
};

export default LoginForm;