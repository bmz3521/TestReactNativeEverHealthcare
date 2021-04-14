import React, { useState, useEffect } from "react";
import { View, Text,TouchableOpacity,StyleSheet,ScrollView,Image } from 'react-native';
import axios from 'axios';
import { baseProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlers";


//Counter Ever1 => Ever5
const CounterEver = ({ navigation }) => {
  let [count, setCount] = useState(1);//Set Default state
  function plusCountEver(){
    if(count < 5){//Condition state plus
      setCount(count+1)//TRUE => Set setCount count + 1
    }
  }
  return (
      <View style={{alignItems: 'center'}}>
        <View style={styles.row}>
          <View style={styles.leftContainer}>
            <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
              <Text style={styles.buttonLabel}>
                {"<"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.centerItem}>
            <Text style={{textAlignVertical:'center',paddingRight:12}}>Ever{count}</Text>
            <TouchableOpacity style={styles.button} title='plus' onPress={plusCountEver}>
              <Text style={styles.buttonLabel}>
                +
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.rightIcon}/>
          </View>
        </View>
      </View>
  );
}
 
const SectionUser = ({title, image ,children}) => {
  
  return (
    <View style={styles.sectionContainer}>
      <Image style={styles.tinyLogo} source={{
          uri: image,
        }} />
        <View>
          <Text style={styles.nameContent}>
            {title}
          </Text>
          <Text style={styles.content}>
            {children}
          </Text>
        </View>
  </View>
  );
}


export default ({navigation}) => {
  let [data, setData] = useState([]);

  useEffect(() => {
     axios
   .get('https://reqres.in/api/users')
   .then(function (response) {
     // handle success
     setData(response.data["data"]);
   })
   .catch(function (error) {
     // handle error
     alert(error.message);
   });
   return data;
 },[]);
    return (
      <View style={{flex:1}}>
        <CounterEver navigation={navigation}/>
        <View style={{   justifyContent: 'center' }}>
          <ScrollView>
          {data.map((x)=>
            <SectionUser key={x.id} title={x.first_name + " " +x.last_name } image={x.avatar}>
              {x.email}
            </SectionUser>
          )}
         </ScrollView>
        </View>
      </View>
    );
  }
 
  const styles = StyleSheet.create({
    centerItem:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    leftContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      backgroundColor: 'green'
    },
    button: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 100,
        backgroundColor: "dodgerblue",
        alignSelf: "center",
        textAlign: "center",
      },
      buttonBack:{
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: "dodgerblue",
        marginRight:'auto'
      },
      buttonLabel: {
        fontSize: 12,
        fontWeight: "bold",
        color: "ghostwhite",
      },
      row: {
        flexDirection: "row",
        flexWrap: "wrap",
      },
      sectionContainer: {
        marginTop: 1,
        paddingHorizontal: 50,
        padding:20,
        backgroundColor: "deepskyblue",
        flexDirection: "row",
      },
      tinyLogo: {
        width: 50,
        height: 50,
        borderRadius:50
      },
      content:{
        paddingLeft:12,
        color:"ghostwhite",
        fontWeight:'bold',
        fontSize:16
      },
      nameContent:{
        paddingLeft:12,
        color:"snow",
        fontWeight:'bold',
        fontSize:20
      },
      leftContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }
  });