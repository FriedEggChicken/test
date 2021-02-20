import React, {Component} from 'react';
import {View,Text,StyleSheet,Button,TouchableOpacity,SafeAreaView,FlatList,ActivityIndicator} from "react-native";
import axios from 'axios';
import Constants from 'expo-constants'

export default class BoardScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }
  componentDidMount () {
    return fetch('') //get
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.titles, //list 형태
      })
    })
    .catch((error) => {
      console.log(error)
    });
  }

  // state = {
  //   Writings:[]
  // }
  // onAddwrites = () => {
  //   this.setState(prevState => {
  //     return {
  //       Writings:[...prevState.Writings,prevState.item_title]
  //     }
  //   })
  // }
  // useEffect = () => {
  //   fetch('').then((response) => response.json()).
  //   then((json) => {
  //     setData(json.title);
  //     setTitle(json.title)
  //   })
  //   .catch((error) => alert(error))
  //   .finally(setLoading(false));
  // }
    render(){
      // const {item_title} = this.props.route.params || ''
      // const {item_content} = this.props.route.params || ''
      if(this.state.isLoading) {
        return (<View style={styles.setting}>
          <ActivityIndicator />
        </View>
          
        )
      }
      else {
        
        let titles = this.state.dataSource.map((val,key) => {
          return <View key={key} style = {styles.item}>
            <Text style={styles.writes}>{val.title}</Text>
            <View style={{flex:1,alignItems:"flex-end" ,justifyContent:"flex-end"}}>
            <TouchableOpacity
        onPress = {}
        >
        <Text style={{fontSize: 18}}>🔨 수정</Text>
        </TouchableOpacity>
        </View>
          </View>
        })
        
        return (
          <View>
          <View style={styles.setting}>
          <Text style={{marginTop: 8,textAlign:"center",fontSize:25}}>공지사항</Text>
          <TouchableOpacity 
          onPress = {()=>this.props.navigation.navigate("makingboard")}
          style={{alignItems:"flex-end" ,justifyContent:"flex-end"}}>
            <Text style={{fontSize:25}}>🔎</Text>
          </TouchableOpacity>
            {titles}
            </View>
      <View style={styles.settingg}>
            <TouchableOpacity
        onPress = {()=>this.props.navigation.navigate("makingboard")}
        >
        <Text style={styles.buttonText}>📝</Text>
        </TouchableOpacity>
        </View>
          </View>
        )
      }
      // const {boards} = this.state;
      // const {handleChange} = this
      // const {item_title} = this.props.route.params || ''
      // const {item_content} = this.props.route.params || ''
    
  }
}

const styles = StyleSheet.create({
    setting: {
      paddingTop: Constants.statusBarHeight, //statusbar 안겹치게
    },
    item: {
      flexDirection: "row",
      marginTop: 10,
      borderBottomWidth : 1,
      borderBottomColor : "#a7b4c9"
    },
    settingg: {
      justifyContent: "flex-end",
      alignItems: "flex-end"
    },
    writes:{
      fontSize: 25,
    },
    writess:{
      fontSize: 20,
    },
      buttonText: {
        fontSize : 40,
      }
  });
