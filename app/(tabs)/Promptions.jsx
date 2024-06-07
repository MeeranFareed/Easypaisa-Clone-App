import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import React from "react";
import Header from "../../components/Header";

const Data = [
  {
    id: "1",

    Image: require("../../assets/images/1.jpeg"),
    title: "Raho connected 😎",
    subtitle: "Subscribe Zong offers 💚",

    description: "Poori family ab rahay connected with Zong My3 and My5 offers   Subscribe now and enjoy up to 200GB data!🥳",
     
  },
  {
    id: "2",
    Image: require("../../assets/images/2.jpeg"),
    title: "Upgrade & win 😍✨",
    subtitle: "For 10 licky winners 💚",
    description: "10 grand prizes 10 lucky winners ke liye! 😍✨   Bas apne easypaisa account me Rs. 2000 ya zyada ke funds transfer karo aur lucky draw mein shamil hojao. 💚"
     
      
  },
  {
    id: "3",
    Image: require("../../assets/images/3.jpeg"),
    title: "Exclusive packages ! 🚨 ",
    subtitle: "Non-stop socializing 🥳",
    description: "Non-stop socialising is just a tap away! 🥳📲   Telenor users ab exclusively easypaisa app ke through easily subscribe kar saktay hain 15 Days Max & 15 Days Plus mobile package all through a few taps! 💚🤩"
    
      
  },
  {
    id: "4",
    Image: require("../../assets/images/4.jpeg"),
    title: "hoshiyar rahein ⚠️ ",
    subtitle: "PIN/OTP Kisi se share na Karen 😯",
    description: "PIIIIN CHORON SE HOSHIYAR KHABARDAR!⚠️   If someone calls you for your easypaisa account awareness asking for your OTP, know that it is a PIN CHOR!   Do not ever give your OTP to anyone for any reason and keep your account safe from online fraud!"
    

     
       
      
  },
  {
    id: "5",
    Image: require("../../assets/images/5.jpeg"),
    title: "Lagao packages with ease 😌",
    subtitle: "Subscribe offers 💚😌",
    description: "Get recommended mobile packages for your daily needs! 💚😌   Ab chahay jo bhi network ho   Pao zarurat ke mutabiq package recommendations all from with in your easypaisa app. 📲"

     
     
      
  },
  {
    id: "6",
    Image: require("../../assets/images/6.jpeg"),
    title: "Visa and Debit card 💳 ",
    subtitle: " Now, you can grab your Debit. 🏦",
    description:
      "With Easypaisa, managing your finances and accessing your Visa debit card is as simple as a few taps on your phone.   Enjoy the convenience of digital banking and stay in control of your financial world with Easypaisa. 💳📲 "
  },
  {
    id: "7",
    Image: require("../../assets/images/7.jpeg"),
    title: "Rs.100 cashback 💸 ",
    subtitle: "Pay with easypaisa CODM webstore 🛒",
    description:
      "Enjoy Rs. 100 cashback on deposit and maintaining Rs. 1000 or more in your mobile account for 2 days between (21st Feb - 28th Feb) and get a chance to WIN 1 Samsung Galaxy S8 handset (through lucky draw). "
  },

  {
    id: "8",
    Image: require("../../assets/images/9.jpeg"),
    title: "Enjoy a discount of Rs. 150! 😋🍛 ",
    subtitle: "Enjoy ghar ka khaana ! 🍽️🧑‍🍳",
    description:
      "Abhi apna order place karo via Homechef on foodpanda, use the voucher “HCEP150” on your checkout, pay with easypaisa & enjoy a discount of Rs. 150! 😋🍛 "
  }
];

const Promptions = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        title="Promotions"
        onPressBack={() => {
          navigation.navigate("HomeScreen");
        }}
      />
      <View></View>
      <FlatList
        data={Data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Promotiondetails", { item: item })
            }
            style={styles.item}
            activeOpacity={0.6}
          >
            <Image source={item.Image} style={styles.imgstyle} />
            <Text style={styles.heading}>{item.title}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 7
              }}
            >
              <Text style={styles.midtext}>{item.subtitle}</Text>
              <Text style={styles.lasttext}> Read More</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imgstyle: {
    height: 150,
    width: "100%",
    marginRight: 15
  },
  item: {
    flex: 1,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 20,
    margin: 4,
    borderRadius: 4
  },
  lasttext: {
    fontSize: 10,
    color: "green"
  },
  heading: {
    color: "green",
    fontSize: 16,
    marginTop: 7
  },
  midtext: {
    fontSize: 13,
    color: "#000"
  }
});
export default Promptions;
