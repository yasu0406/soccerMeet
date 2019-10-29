import React from 'react';
import {View, Text} from 'react-native';
import {CardSection} from '../components/common/index';

const ScheduleDetail = (props) => {
    const {schedule, name} = props.navigation.state.params;
    const {location, startTime, endTime,month, day, joinMember} = schedule;
    return(
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
    )
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

export default ScheduleDetail;