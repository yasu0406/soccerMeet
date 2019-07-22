import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import firebase from 'firebase';
import { Button, ButtonSection, FormContainer, Input, Spinner, InputSection } from './common';


class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };
    static navigationOptions = {
        header: null
    };
    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed', loading: false });
    }

    onLoginSuccess() {
        this.setState({ 
            email: '',
            password: '',
            loading: false,
            error: ''
         });
    }

    renderButton() {
        if(this.state.loading) {
            return <Spinner size="small" />;
        }

        return (
            <>
            <Button onPress={this.onButtonPress.bind(this)}>
                Sign in
            </Button>
            <View>
                <Text
                    style={{textAlign: 'center'}}
                    onPress={() => this.props.navigation.navigate('SignUp')}
                    >
                    Forgot password?
                </Text>
                <Text
                style={styles.signInTextStyle}
                onPress={() => this.props.navigation.navigate('SignUp')}
                >
                    Sign Up
                </Text>
            </View>
            </>
        );
    }

    render() {
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
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </InputSection>
                <InputSection>
                    <Input 
                        secureTextEntry
                        placeholder="password"
                        label="PASSWORD"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </InputSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <ButtonSection>
                    {this.renderButton()}
                </ButtonSection>
            </FormContainer>
            </>
        );
    }
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

export default LoginForm;