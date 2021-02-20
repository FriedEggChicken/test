import React from "react";
import {View,Text,StyleSheet,Button} from "react-native";

const TimetableScreen = () => {
    return (
        <View style={styles.timetable}>
            <Text>TimeTable</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    timetable: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default TimetableScreen;