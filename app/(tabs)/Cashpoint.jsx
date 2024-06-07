import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Headers from "../../components/Header";
import MapView from "react-native-maps";
 import  CustomBootemSheet from '../../components/BottemSheet';
 

   

const Cashpoint = () => {
  return (
    <View style={styles.container}>
      <Headers title="Cash Point"/>
      <MapView style={styles.map}
         initialRegion={{
          latitude: 31.499903,
          longitude: 74.350101,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
      <View>
         < CustomBootemSheet/>
      </View>
    </View>
  );
};

export default Cashpoint;

const styles = StyleSheet.create({
  container: {
   flex:1,
    backgroundColor: "#fff"
  },
  map:{
    flex:1
  }
});
