import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Data = [
  {
    id: "1",
    icon1: (
      <MaterialCommunityIcons
        name="account-alert-outline"
        size={26}
        color="green"
      />
    ),

    title: "Account Information",
    icon: <MaterialIcons name="keyboard-arrow-right" size={28} color="black" />,
  },
  {
    id: "2",
    icon1: <MaterialIcons name="password" size={28} color="green" />,

    title: "Change easypaisa Account PIN",
    icon: <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />,
  },
  {
    id: "3",
    icon1: (
      <MaterialCommunityIcons
        name="credit-card-chip-outline"
        size={28}
        color="green"
      />
    ),

    title: "Link Telenor Microfinance Bank",
    icon: <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />,
  },
  {
    id: "4",
    icon1: (
      <MaterialCommunityIcons
        name="credit-card-plus-outline"
        size={28}
        color="green"
      />
    ),

    title: "Link Debit Card",
    icon: <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />,
  },
  {
    id: "5",
    icon1: (
      <MaterialCommunityIcons
        name="certificate-outline"
        size={28}
        color="green"
      />
    ),

    title: "Get Your Tax Certificate",
    icon: <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />,
  },
  {
    id: "6",
    icon1: (
      <MaterialIcons name="supervised-user-circle" size={28} color="green" />
    ),

    title: "Open NewGen Account",
    icon: <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />,
  },
  {
    id: "7",
    icon1: <MaterialIcons name="qr-code-scanner" size={28} color="green" />,

    title: "Become An easypaisa Merchent",
    icon: <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />,
  },
];
const MyAccount = () => {
  const [isSwitchon, setisSwitchon] = useState(false);
  const toggleSwitch = () => setisSwitchon((previousState) => !previousState);
  return (
    <View style={styles.Maincontainer}>
      <View style={styles.headerheading}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="chevron-left"
            size={35}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>

        <Text style={styles.boldheading}>Account Setting</Text>
        <Text style={styles.text}>Account info,Setting & More</Text>
      </View>
      <View style={styles.headerheading}>
        <Text>ACCOUNT</Text>
      </View>
      <FlatList
        data={Data}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.6} style={styles.item}>
            <View style={styles.icontext}>
              {item.icon1}

              <Text style={styles.inertext}>{item.title}</Text>
            </View>
            <View />
            {item.icon}
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      <Switch
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
          margin: 15,
        }}
        value={isSwitchon}
        onValueChange={toggleSwitch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    padding: 5,
  },
  headerheading: {
    margin: 16,
    paddingHorizontal: 4,
  },
  boldheading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 18,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 12,
  },
  inertext: {
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  icontext: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:"space-between",
    marginLeft: 15,
  },
});
export default MyAccount;
