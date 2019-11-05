import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {CardSection} from './common/index';
import {getTeamsSchdule} from '../firebase/firebase.util';

const ScheduleList = (props) => {
  const [teams, setTeams] = useState();
  useEffect(() => {
    getTeamsSchdule().then((data) => {
      setTeams(data);
    })
  }, []);
    if(teams) {
      return (
        <>
          {
            teams.map((team) => {
              const {name, teamSchdule, teamMembers} = team;
              return Object.values(teamSchdule).map((schedule, idx) => {
                const {month, day, location, startTime, endTime} = schedule;
                return(
                  <TouchableOpacity onPress={() => props.navigate('ScheduleDetail', {name, schedule, teamMembers})}>
                  <CardSection key={idx}>
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
                </TouchableOpacity>
                )
              })
            })
          }
        </>
      )
    } else {
      return <View><Text>Loading</Text></View>
    }
}

const styles = {
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
    textFontStyle: {
    }
  }

export default ScheduleList;