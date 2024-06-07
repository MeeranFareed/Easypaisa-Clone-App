import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const Header = ({title}) => {
  // method for go back
  const navigation=useNavigation()
  return (
     
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <MaterialCommunityIcons name="chevron-left" size={30} color="white" style={styles.icon} />
        
        </TouchableOpacity>
        <Text style={styles.textstyle}>  {title}</Text>
        < View/>
      </View>
     
  );
};

const styles = StyleSheet.create({
   
  header: {

    backgroundColor: '#01BD06',
    height: 70,
   paddingHorizontal:5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:'row'  
     
    
  },
  icon: {
     
    
  },
  textstyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Header;
