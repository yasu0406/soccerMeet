import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import firebase from 'firebase';
import { Button, ButtonSection, FormContainer, InputSection, Input, Spinner } from './common';
import { db } from '../components/common/config';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
    }
  state = {
    email: '',
    password: '',
    username: '',
    image: null,
    error: '',
    loading: false,
    loggedIn: null
  };
    static navigationOptions = {
        header: null
    };

    onButtonPress() {
        this.onSignSuccess.bind(this);
        const { username, email, password } = this.state;

        this.setState({ error: '', loading: true });

        db.auth().createUserWithEmailAndPassword(email, password)
        .then(
            user => {
                user = db.auth().currentUser
                const ref_user = db.database().ref().child('users').child(user.uid);
                ref_user.set({
                    username,
                    email: user.email
                });
            }
        )
        .catch(this.onSignFail.bind(this));
    }

    onSignFail() {
        this.setState({ error: 'Authentication Failed', loading: false });
    }

    onSignSuccess() {
        this.setState({ 
            email: '',
            password: '',
            loading: false,
            error: '',
            loggedIn: true
        });
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      };

    renderButton() {
        if(this.state.loading) {
            return <Spinner size="small" />;
        }

        return (
            <>
            <Button onPress={this.onButtonPress.bind(this)}>
                Sign in
            </Button>
            <View style={styles.textStyle}>
                <Text
                    style={{textAlign: 'center'}}
                    >
                    Already have an account?
                </Text>
                <Text
                style={styles.signInTextStyle}
                onPress={() => this.props.navigation.navigate('SignIn')}
                >
                    Sign in
                </Text>
            </View>
            </>
        );
    }

    render() {
        let { image } = this.state;
        return(
        <>
            <ImageBackground source={require('../../assets/headerBg.png')} style={styles.bgContainerStyle} />
            <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>{`Hello!
    Sign up to get started.
                `}</Text>
            </View>
            <FormContainer>
            <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            <InputSection>
                <Input 
                    placeholder="user name"
                    label="USER NAME"
                    value={this.state.username}
                    onChangeText={username => this.setState({ username })}
                />
            </InputSection>
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