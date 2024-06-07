import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, Share } from "react-native";
import { Entypo } from "@expo/vector-icons";

import Header from "./Header";

// Functional component
const Promotiondetails = ({ route, navigation }) => {
  const itemData = route.params;
   console.log("object", itemData.item.id);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${itemData.item.title} - ${itemData.item.subtitle}\n${itemData.item.description}\nCheck out more at: https://example.com`, // Example URL
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
           
        } else {
           
        }
      } else if (result.action === Share.dismissedAction) {
         
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.Maincontainer}>
      <Header
        title="Promotions"
        onPressBack={() => {
          navigation.navigate("HomeScreen");
        }}
      />

      <View style={styles.container}>
        <View>
          <Image style={styles.imgstyle} source={itemData.item.Image} />

          <Text style={styles.heading}>{itemData.item.title} </Text>
          <Text style={styles.midtext}>{itemData.item.subtitle}</Text>
          <Text style={styles.lasttext}>{itemData.item.description}</Text>
        </View>

        <View style={styles.btncontainer}>
          <TouchableOpacity  activeOpacity={0.6} style={styles.btnstyle} onPress={onShare}>
            <View
              style={{
                backgroundColor: "#01BD06",
                borderRadius: 50,
                height: 40,
                width: 40,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Entypo name="share" size={25} color="#fff" />
            </View>
            <Text>Share offer with Friends</Text>
            <View />
          </TouchableOpacity>
          <View />
        </View>
      </View>

      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.btn2style}>
          <Text style={styles.textstyle}>AVAIL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1
  },
  container: {
    padding: 10,
    backgroundColor: "#fff",
    margin: 8,
    justifyContent: 'space-between',
    height: 500
  },
  btncontainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  imgstyle: {
    height: 150,
    width: "100%",
    marginRight: 15
  },
  lasttext: {
    fontSize: 12,
    color: "#010",
    marginTop: 7
  },
  heading: {
    color: "green",
    fontSize: 20,
    marginTop: 7,
    fontWeight: "bold"
  },
  midtext: {
    fontSize: 15,
    color: "#000",
    marginTop: 7,
    fontWeight: "bold"
  },
  btnstyle: {
    borderWidth: 2,
    height: 40,
    width: 200,
    borderColor: "#01BD06",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  btn2style: {
    borderWidth: 2,
    height: 50,
    width: 300,
    backgroundColor: "#01BD06",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#01BD06"
  },
  textstyle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default Promotiondetails;
