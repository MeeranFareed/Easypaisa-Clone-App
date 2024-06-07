import 'react-native-gesture-handler';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  FlatList
} from "react-native";
import Debitcard from "../../components/Debitcard";
import Prmotion from "../../components/Prmotion";
import { EvilIcons } from "@expo/vector-icons";
import  Miniapp from "../../components/Miniapp";


 

 
import Swiper from 'react-native-swiper'


 
const Data = [
  {
    id: "1",
    image: require("../../assets/images/easy.png"),
    title: "Easyload"
  },
  {
    id: "2",
    image: require("../../assets/images/easycash.png"),
    title: "Easycash"
  },
  {
    id: "3",
    image: require("../../assets/images/savingpoclet.png"),
    title: "Saving Pocket"
  },
  {
    id: "4",
    image: require("../../assets/images/invite.png"),
    title: "Invite & Earn"
  },
  {
    id: "5",
    image: require("../../assets/images/easycash.png"),
    title: "Easycash"
  },
  {
    id: "6",
    image: require("../../assets/images/internationalrooming.png"),
    title: "International Remttance"
  },
  {
    id: "7",
    image: require("../../assets/images/miniapp.png"),
    title: "Mini App"
  },
  {
    id: "8",
    image: require("../../assets/images/saving.png"),
    title: "Savings"
  },
  {
    id: "9",
    image: require("../../assets/images/paylator.png"),
    title: "Buy Now Pay Later"
  },
  {
    id: "10",
    image: require("../../assets/images/inshurance.png"),
    title: "Inshurance"
  },
  {
    id: "11",
    image: require("../../assets/images/donation.png"),
    title: "Donation"
  },
  {
    id: "12",
    image: require("../../assets/images/rsgame.png"),
    title: "Rs.1Game"
  },
  
];
const Data2 = [
  {
    id: "1",
    image: require("../../assets/images/rast.png"),
    title: "Rasst Payment"
  },
  {
    id: "2",
    image: require("../../assets/images/descount.png"),
    title: "Discount"
  },
  {
    id: "3",
    image: require("../../assets/images/top.png"),
    title: "Topups"
  },
  {
    id: "4",
    image: require("../../assets/images/education.png"),
    title: "Education"
  },
  {
    id: "5",
    image: require("../../assets/images/nadra.png"),
    title: "Nadra Fee"
  },
  {
    id: "6",
    image: require("../../assets/images/online.png"),
    title: "Online Payment"
  },
  {
    id: "7",
    image: require("../../assets/images/knor.png"),
    title: "Enter and win"
  },
  {
    id: "8",
    image: require("../../assets/images/thofa.png"),
    title: "Tohfa"
  },
  {
    id: "9",
    image: require("../../assets/images/all.png"),
    title: "More"
  },
 
  
];

const HomeScreen=()=>{
 
  return (
    <View style={styles.maincontainer}>
      <View style={styles.header}>
        <View style={styles.secoundcont}>
          <TouchableOpacity 
           
          activeOpacity={0.6} style={styles.btn1}>
            <Text>MF</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.text}>easypaisa</Text>
          </View>

          <View style={styles.secoundcont}>
            <TouchableOpacity>
              <EvilIcons name="search" size={28} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <EvilIcons name="bell" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.header2}>
          <View
            style={{
              height: 150,
              width: 380,
              backgroundColor: "#fff",
              borderRadius: 20,
              padding: 8,
              flexDirection: "column"
            }}
          >
            <Text
              style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}
            >
              {" "}
              easypaisa
            </Text>
            <Text style={styles.textcon}> MEERAN FAREED</Text>

            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                padding: 8
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                03257580280
              </Text>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  backgroundColor: "#01BD60",
                  height: 30,
                  width: 100,
                  borderRadius: 35,
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onPress={() => console.log("Login")}
              >
                <Text style={{ color: "#fff" }}>Login</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.textcon}>sin in to your easypaisa account</Text>
          </View>
        </View>
        <View style={styles.container3}>
          <View style={styles.container4}>
            <TouchableOpacity style={styles.container4}>
              <Image
                style={styles.imgstyle}
                source={require("../../assets/images/send.png")}
              />
              <Text>Send Money</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container4}>
            <TouchableOpacity style={styles.btn2}>
              <Image
                style={styles.imgstyle}
                source={require("../../assets/images/bill.png")}
              />
              <Text>Bill payment</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container4}>
            <TouchableOpacity style={styles.btn2}>
              <Image
                style={styles.imgstyle}
                source={require("../../assets/images/pack.png")}
              />
              <Text style={styles.textcon}>Mobile Packages</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.more}>
          <Text style={{ fontWeight: "bold" }}>More with easypaisa</Text>
        </View>

        <View style={styles.container5}>
          <Swiper  showsButtons={false} height={320} dotColor="#d1d0cd"
         activeDotColor="#01BD60"  loop={true} autoplay={false}
          > 
          <View style={styles.row}>
            <FlatList
              data={Data}
              numColumns={4}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.item}>
                  <Image source={item.image} style={styles.imgstyle} />
                  <Text style={styles.textunderpic} numberOfLines={1} ellipsizeMode="tail">{item?.title}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={styles.row}>
            <FlatList
              data={Data2}
              numColumns={4}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.item}>
                  <Image source={item.image} style={styles.imgstyle} />
                  <Text style={styles.textunderpic} numberOfLines={1} ellipsizeMode="tail">{item?.title}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
      </Swiper>
          
        </View>
        <View style={styles.debitcard}>
          <Text style={styles.textstyle}>Get Your easypaisa Debit Card</Text>
          <View style={styles.cardstyle}>
            <Debitcard
              onPress={() => console.log("online")}
              cardType="Online Card"
              detail="Only for only payment in pakistan"
            />
            <Debitcard
              onPress={() => console.log("plastic")}
              cardType="Plastic Card"
              detail="Use at any ATM  or Shop in pakistan"
            />
          </View>
          <View>
            <Prmotion />
          </View>
          <View>
            <Miniapp/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1
  },
  header: {
    backgroundColor: "#01BD60",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22
  },
  header2: {
    backgroundColor: "#01BD60",
    height: 180,
    alignItems: "center",
    justifyContent: "center"
  },
  container3: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,

    alignItems: "center"
  },
  container31: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  btn1: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#76D9F9",
    alignItems: "center",
    justifyContent: "center",
    padding: 1
  },
  btn2: {
    alignItems: "center",
    justifyContent: "center"
  },
  secoundcont: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal"
  },
  textcon: {
    fontStyle: "normal",
    fontSize: 14
  },
  imgstyle: {
    height: 30,
    width: 30
  },
  container4: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 100,
    width: 100,
    borderRadius: 20
  },

  more: {
    marginLeft: 20,
    padding: 2
  },
  container5: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 2,
    margin: 13,
    borderRadius: 10
  },
  card: {},
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    padding: 9,
    marginVertical: 8
  },
  debitcard: {
    padding: 15
  },
  textstyle: {
    fontWeight: "bold"
  },
  cardstyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textunderpic:{
    textAlign:'center',
    marginTop:5,
    fontSize:10
  }
});
export default HomeScreen;
