import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {CardSection, Button} from '../components/common/index';
import TeamMembers from '../components/TeamMembers';
import MapContainer from '../components/Map';

const ScheduleDetail = (props) => {
    const [showTbPage, setShowTbPage] = useState(true);
    
    const {schedule, name, teamMembers} = props.navigation.state.params;
    const {location, startTime, endTime,month, day, joinMember} = schedule;
    const showPage = () => {
      if(showTbPage) {
        return (
          <>
          <Text style={{textAlign:'right'}}>{joinMember.length}/{teamMembers.length}</Text>
          <TeamMembers joinMembers={joinMember} teamMembers={teamMembers}/>
          <View style={styles.joinGameContainer}>
            <Button style={styles.joinGameButton} onPress={() => {console.log('Join')}}>Join this game</Button>
          </View>
          </>
        )
      } else {
        return(
          <>
          <MapContainer location={location} />
          </>
        )
      }
    };
    return(
      <View style={styles.containerStyle}>
        <CardSection>
            <View style={styles.dateContainerStyle}>
            <Text style={[styles.dateFontStyle, styles.dayFontStyle]}>{day}</Text>
            <Text style={[styles.dateFontStyle, styles.monthFontStyle]}>{month}</Text>
            </View>
            <View>
                <Text style={styles.titleFontStyle}>{name}</Text>
                <Text style={styles.textFontStyle}>{location}</Text>
                <Text style={styles.textFontStyle}>{startTime} to {endTime}</Text>
            </View>
        </CardSection>
        <View style={[styles.tagButtonContainer]}>
            <TouchableOpacity style={[styles.buttonStyle, showTbPage ? styles.buttonActiveStyle : '']} onPress={() => {setShowTbPage(true)}}>
              <Text style={showTbPage ? styles.textActiveStyle : ''}>Join members</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonStyle, !showTbPage ? styles.buttonActiveStyle : '']} onPress={() => {setShowTbPage(false)}}>
              <Text style={!showTbPage ? styles.textActiveStyle : ''}>Map</Text>
            </TouchableOpacity>
          </View>
          {showPage()}
        </View>
    )
}

const styles = {
  containerStyle: {
    height: '100%',
    backgroundColor: '#F2F3FA',
    padding: 10,
  },
    dateContainerStyle: {
      marginRight: 10,
      padding: 5,
      borderColor: '#707070',
      borderWidth: 1,
    },
    dateFontStyle: {
      fontWeight: 'bold',
      textAlign: 'center'
    },
    monthFontStyle: {
      fontSize: 18,
    },
    dayFontStyle: {
      fontSize: 24
    },
    infoContainer: {
      flex: 1, 
      flexDirection: 'column'
    },
    titleFontStyle: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    tagButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    buttonStyle: {
      marginBottom: 30,
      width: '50%',
      height: 50,
      alignItems: 'center',
      backgroundColor: 'white',
      justifyContent: 'center',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    buttonActiveStyle: {
      backgroundColor: '#00807D'
    },
    textActiveStyle: {
      color: 'white'
    },
    joinGameContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center', 
      position: 'absolute',
      bottom: 0,
      left: 10
    },
    joinGameButton: {
      justifyContent:'center',  
    }
  }

export default ScheduleDetail;