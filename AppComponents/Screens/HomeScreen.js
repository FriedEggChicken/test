import React, {Component} from "react";
import {View,Text,StyleSheet,Button,TouchableOpacity,Platform} from "react-native";
import Constants from 'expo-constants'
export default class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.home}>
              <View style={styles.board_}>
              <Text style={{fontSize:30}}>📋</Text>
              <Text style={styles.board}> 게시판</Text>
              </View>
              <View style={styles.square}>
                <TouchableOpacity
                        style = {styles.button}
                        onPress = {()=>this.props.navigation.navigate("board")}
                        >
                        <Text style={styles.buttonText}>💡 공지사항 💡</Text>
                 </TouchableOpacity>
                 <TouchableOpacity
                        style = {styles.button}
                        onPress = {()=>this.props.navigation.navigate("board")}
                        >
                        <Text style={styles.buttonText}>👨‍👨‍👧‍👦 활동한 모습 👨‍👨‍👧‍👦</Text>
                 </TouchableOpacity>
                 <TouchableOpacity
                        style = {styles.button}
                        onPress = {()=>this.props.navigation.navigate("board")}
                        >
                        <Text style={styles.buttonText}>👀 자유게시판 👀</Text>
                 </TouchableOpacity>
                 </View>
                 <Text>Home</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    home: {
      paddingTop: Constants.statusBarHeight, //statusbar 안겹치게
    },
    board_: {
      flexDirection: "row",
    },
    board:{
      marginTop: 10,
      fontSize: 20,
      fontWeight: 'bold'
    },
    square:{
      marginTop: 10,
      borderWidth: 1,
      borderColor: "#a7b4c9"
    },
    button:{
        marginBottom: 10,
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center",
      },
      buttonText: {
        fontSize : 20,
      }
  });
