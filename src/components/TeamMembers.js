import React from 'react';
import {View, Text, Image} from 'react-native';

const TeamMembers = ({joinMembers, teamMembers}) => {
    if(joinMembers) {
        console.log(teamMembers);
        return joinMembers.map(joinMember => {
            return Object.values(teamMembers).filter(teamMember => teamMember.uid === joinMember).map(teamMember => {
                const {uid, name, position, photoUrl} = teamMember;
                return(
                    <View key={uid}>
                        <View style={styles.teamMemberContainer}>
                          <Image          
                          style={styles.teamMemberImage}
                          source={{uri: photoUrl}} />
                          <View style={styles.teamMemberInfo}>
                            <Text>{name}</Text>
                            <Text>{position}</Text>
                          </View>
                        </View>
                      </View>
                );
            })
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
        flexDirection: 'row',
        marginBottom: 10
      },
      teamMemberImage: {
        width: 50, 
        height: 50,
        borderRadius: 50 / 2
      },
      teamMemberInfo: {
        marginLeft: 10,
        justifyContent: 'center'
      }
    }

export default TeamMembers;