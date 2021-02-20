import React from "react";
import {View,Text,StyleSheet,Button} from "react-native";

const SettingsScreen = () => {
    return (
        <View style={styles.setting}>
            <Text>Setting</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    setting: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default SettingsScreen;