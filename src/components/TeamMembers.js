import React from 'react';
import {View, Text, Image} from 'react-native';

const TeamMembers = ({joinMembers}) => {
    console.log(joinMembers);
    if(joinMembers) {
        return joinMembers.map(joinMember => {
            const {uid, name, position, profileImg} = joinMember;
            return(
                <View key={uid}>
                    <Text style={{textAlign:'right'}}>20/{joinMembers.length}</Text>
                    <View style={styles.teamMemberContainer}>
                      <Image          
                      style={styles.teamMemberImage}
                      source={{uri: profileImg}} />
                      <View style={styles.teamMemberInfo}>
                        <Text>{name}</Text>
                        <Text>{position}</Text>
                      </View>
                    </View>
                  </View>
            );
        })
    } else {
        if(joinMembers.length === 0) {
            return(
                <View>
                    <Text>Not</Text>
                </View>
            )
        } else {
            return(
                <View>
                    <Text>Loading</Text>
                </View>
            )
        }
        
    }
}

const styles = {
      teamMemberContainer: {
        flexDirection: 'row'
      },
      teamMemberImage: {
        width: 50, 
        height: 50,
        borderRadius: 50 / 2
      },
      teamMemberInfo: {
        marginLeft: 10,
        justifyContent: 'center'
      },
      joinGameContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      joinGameButton: {
        width: '100%',
        justifyContent:'center',  
        position: 'absolute',
        bottom: 0
      }
    }

export default TeamMembers;