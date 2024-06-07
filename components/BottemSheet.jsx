import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
const CustomBootemSheet = () => {
  const [sliderValue, setSliderValue] = useState(1);
  const [show, setShow] = useState(false);


  console.log("slider", sliderValue);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textstyle}> Cash Deposit</Text>
        <TouchableOpacity activeOpacity={0.6} onPress={()=>setShow(!show)}>
          <MaterialCommunityIcons
           name={show ? "chevron-up" : "chevron-down"}
            size={30}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {
        show&&
        <View style={styles.midcontainer}>
        <Text style={styles.BVStext}>
          You first cash deposit needs to be made through as Biometric (BVS)cash
          Point
        </Text>
        <View style={styles.btncontainer}>
          <TouchableOpacity style={styles.btnstyle}>
            <Ionicons
              name="location"
              size={24}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.btntext}>Cash Point</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnstyle}>
            <Entypo
              name="location-pin"
              size={26}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.btntext}>BVS Cash point</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.slidercontainer}>
          <Text style={styles.slidertext}>{sliderValue}.0 Location</Text>
          <Slider
            style={{ width: 160, height: 40 }}
            minimumValue={1}
            step={1}
            maximumValue={20}
            minimumTrackTintColor="#0000"
            maximumTrackTintColor="#000000"
            value={sliderValue}
            onValueChange={(value) => setSliderValue(value)}
             tapToSeek={true}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Text style={styles.slidertext1}> KM Islambad</Text>
          <Text style={styles.slidertext1}> Expand Radius</Text>
          <View />
        </View>
        <View style={styles.bottomcontainer}>
          <TouchableOpacity activeOpacity={0.6} style={styles.bottom}>
            <MaterialCommunityIcons
              name="cash"
              size={24}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.btntext}> How to Cash Deposit</Text>

            <MaterialCommunityIcons
              name="chevron-down"
              size={30}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      }


     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    //  height:100
    paddingBottom:10,
    padding:2
    
  },
  header: {
    backgroundColor: "#22B25D",
    // height: 80,
    paddingVertical: 5,
    paddingHorizontal: 5,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius:5,
  

  },
  textstyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  midcontainer: {
    margin: 15
  },
  btncontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    marginTop: 15
  },
  btnstyle: {
    height: 40,
    width: 150,
    backgroundColor: "#22B25D",
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: "row",
    borderRadius: 25,
    padding: 10
  },
  btntext: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    alignItems:'center'
  },
  BVStext: {
    color: "orange",
    fontSize: 13
  },
  bottom: {
    height: 50,
    width: 370,
    backgroundColor: "#22B25D",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 25,
    padding: 10
  },
  bottomcontainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  icon: {
    
  },
  slidercontainer: {
    flexDirection: "row",
  alignItems:'center',
    justifyContent: "space-between",
    margin: 5
  },
  slidertext: {
    fontSize: 13,
    fontWeight: "bold",
    marginLeft: 10
  },
  slidertext1: {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 10,
    color:'#B9B9B9'
  },
  
});
export default CustomBootemSheet;
