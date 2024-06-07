import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const Debitcard = ({ cardType, detail ,onPress}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.card,
          backgroundColor: cardType == "Online Card" ? "#306F66" : "#2B2C36"
        }}
      >
        <View style={styles.secondcontainer}>
          <View style={styles.third}>
            <Text style={styles.mainhadding}>{cardType}</Text>
            {cardType !== "Online Card" ? (
              <Image
                source={require("../assets/images/sim.png")}
                style={styles.image}
              />
            ) : (
              <View />
            )}
          </View>

          <Text style={styles.midletext}>{detail}</Text>
        </View>
        <TouchableOpacity
        activeOpacity={0.7}
          style={styles.btnstyle}
          onPress={onPress}
           
        >
          <Text style={styles.textstyle}>Manage Card</Text>
          <AntDesign name="arrowright" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor:'red',
    width: "50%"
  },
  card: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 5,
    margin: 5,
    borderRadius: 15,
    padding: 20
  },
  image: {
    height: 20,
    width: 20
  },
  third: {
    flexDirection: "row",
    justifyContent: "space-between",
    // margin: 20,
    alignItems: "center",
    // backgroundColor:'red',
    paddingVertical: 10
  },
  textstyle: {
    color: "#fff"
  },
  btnstyle: {
    borderRadius: 10,

    borderColor: "#259564",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    flexDirection: "row",
    padding: 7
  },
  mainhadding: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff"
  },
  midletext: {
    color: "#edb879",
    fontSize: 10
  }
});
export default Debitcard;
