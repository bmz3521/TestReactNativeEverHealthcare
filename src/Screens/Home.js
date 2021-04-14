
import * as React from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Linking } from 'react-native';


const profileObject = {
    title: 'I Love Ever.' 
}

const btnData = [
    {
        title : "Go to Ever healthcare",
        content:"https://ever.healthcare/",
        param : ""
    },
    {
        title : "Call to 1112",
        content:`tel:${1112}`,
        param : ""
    },
    {
        title : "Go to Profile Screens",
        content:"Profile",
        param : profileObject
    }
];


export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.homeText}>HOME</Text>
           <AppendTouchableOpacity btnDataContent={btnData} navigation={navigation}/>
        </View>
    );
}



function AppendTouchableOpacity({btnDataContent,navigation}){
    return(
        <View style={styles.row}>
           {btnDataContent.map((v,index)=>(v.content != "Profile")?
              <TouchableOpacity
               key={index}
               style={styles.button}
               onPress={()=>Linking.openURL(v.content)}
               >
               <Text style={styles.buttonLabel}>{v.title}</Text>
           </TouchableOpacity>
           :
           <TouchableOpacity
               key={index}
               style={styles.button}
               onPress={()=>navigation.navigate(v.content,v.param)}
               >
               <Text style={styles.buttonLabel}>{v.title}</Text>
           </TouchableOpacity>
           )}
    </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10,
      alignItems:"center"
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: "dodgerblue",
        alignSelf: "center",
        marginHorizontal: "1%",
        marginBottom: 6,
        textAlign: "center",
        borderRadius:12
      },
      buttonLabel: {
        fontSize: 12,
        fontWeight: "500",
        color: "ghostwhite",
      },
      row: {
        flexDirection: "row",
        flexWrap: "wrap",
      },
      homeText:{
        fontSize:20,
        padding:12,
        fontWeight:'bold'
      }
  });