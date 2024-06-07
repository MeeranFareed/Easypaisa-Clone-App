import React from "react";
import { View, StyleSheet, Text, Image, FlatList ,TouchableOpacity} from "react-native";
import Swiper from 'react-native-swiper';
const Data = [
  {
    id: "1",
    Image: require("../assets/images/1.jpeg")
  },
  {
    id: "2",
    Image: require("../assets/images/2.jpeg")
  },
  {
    id: "3",
    Image: require("../assets/images/3.jpeg")
  },
  {
    id: "4",
    Image: require("../assets/images/4.jpeg")
  },
  {
    id: "5",
    Image: require("../assets/images/5.jpeg")
  },
  {
    id: "6",
    Image: require("../assets/images/6.jpeg")
  },
  {
    id: "7",
    Image: require("../assets/images/7.jpeg")
  },
  {
    id: "8",
    Image: require("../assets/images/8.jpeg")
  },
  {
    id: "9",
    Image: require("../assets/images/9.jpeg")
  }
];
const Prmotion = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>Promotion</Text>
      
      <View style={styles.container2}>
        <FlatList
          horizontal={true}
          data={Data}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} activeOpacity={0.6}>
              <Image source={item.Image} style={styles.imgstyle} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 2
  },
  container2: {
    marginTop: 15
  },
  textstyle: {
    fontWeight: "bold",
    fontSize: 16
  },
  imgstyle: {
    height: 140,
    width: 370,
    marginRight: 15
  },
  item: {flex:1}
});
export default Prmotion;
