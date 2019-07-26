import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import * as ImagePicker from 'expo-image-picker'
import firebase from 'firebase';
import { Button, ButtonSection, FormContainer, InputSection, Input, Spinner } from '../components/common';
import { db } from '../components/common/config';
import uuid from 'react-native-uuid';
class CreateTeamScreen extends Component {
    constructor(props) {
        super(props);
        this.db = firebase.database();
    }
    static navigationOptions = {
        header: null
    }
  state = {
    useruuid: '',  
    passcode: '',
    teamname: '',
    info: '',
    owner: '',
    error: '',
    loading: false
  };
  onButtonPress() {
        this.onSignSuccess.bind(this);
        let setPasscode = uuid.v1();
        this.setState({ error: '', loading: true });
        const { teamname, info } = this.state;
        user = db.auth().currentUser;
        (() => {
            this.db
                .ref()
                .child('teams')
                .child(setPasscode)
                .set({
                    uuid:user.uid,
                    passcode: setPasscode,
                    teamname, 
                    info
                })
                .then(() => {
                    this.onSignSuccess().bind(this);
                })
                .catch((error) => {
                    console.log(error);
                    this.onSignFail.bind(this);
                });
        })();
    }

    onSignFail() {
        this.setState({ error: 'Authentication Failed', loading: false });
    }

    onSignSuccess() {
        this.setState({ 
            uuid: '',  
            passcode: '',
            teamname: '',
            info: '',
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
            Create Team
            </Button>
            </>
        );
    }
    render() {
        return(
        <>
            <View style={styles.titleContainer} style={styles.container}>
                <Text style={styles.titleStyle}>Create New Team!</Text>
            </View>
            <FormContainer>
            <InputSection>
                <Input 
                    placeholder="team name"
                    label="TEAM NAME"
                    value={this.state.teamname}
                    onChangeText={teamname => this.setState({ teamname })}
                />
            </InputSection>
            <InputSection>
                <Input 
                    placeholder="texttexttexttexttexttexttexttext"
                    label="INFORMATION"
                    value={this.state.info}
                    onChangeText={info => this.setState({ info })}
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
  container: {
      marginTop: 20
  },  
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
export default createStackNavigator({
    CreateTeamScreen: {
      screen: CreateTeamScreen,
    }
});