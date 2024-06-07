import React from "react";
import { View,StyleSheet,Image,Text,FlatList, TouchableOpacity} from "react-native";
import Swiper from 'react-native-swiper'


const Data=[
    {
        id:'1',
        image:require('../assets/images/21.png'),
         title:"onic"
    },
    {
        id:'2',
        image:require('../assets/images/22.png'),
         title:"BookMee"
    },
    { id:'3',
        image:require('../assets/images/st.png'),
        title:"Sastaticket"
     },
     { id:'4',
        image:require('../assets/images/tapshop.jpg'),
        title:"TapShop"
     },
     {
        id:"5",
        image: require('../assets/images/smac.jpg'),
        title:'Smach Lahore',
        
     },
     {
        id:'6',
        image: require('../assets/images/burger.png'),
        title:"Burger Lab"
     },
     {
        id:'7',
        image :require('../assets/images/efu.png'),
        title:"EFU Life"
     },
     {
        id:'8',
        image: require('../assets/images/all.png'),
        title:'More'
     }
];
const Data2=[

    { 
        id:'1',
        image: require('../assets/images/pizamax.png'),
        title:"Pizza Max",
    },
    {id:'2',
        image:require('../assets/images/parahta.png'),
        title:'What a Paratha',
    },
    {
        id:'3',
        image:require('../assets/images/jami.png'),
        title:'Jamil Sweets'
    },
    {
        id:'4',
        image:require('../assets/images/cr.jpg'),
        title:"Cricwick"
    },
    {
        id:'5',
        image:require('../assets/images/yorker.png'),
        title:'New Yorker Pizza'
    },
    {
        id:'6',
        image:require('../assets/images/gold.jpg'),
        title:'Buy Gold'
    },
    {
        id:'7',
        image: require( '../assets/images/giny.png'),
        title:'Ginyaki'
    },
    {
        id:'8',
        image: require('../assets/images/all.png'),
        title:'More'
     }

]
const Miniapp=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.hadingstyle}>
                Discover MiniApp on easypaisa
            </Text>
            <View style={styles.secondcontainer}>
            <Swiper style={styles.wrapper} showsButtons={false}  height={250} activeDotColor="green" dotColor="#d1d0cd"> 
            <View >
           <FlatList
          numColumns={4}
           data={Data}
           renderItem={({item})=>(
             <TouchableOpacity style={styles.item}>
                <Image  source={item.image}   style={styles.imagestyle}/>
                <Text style={styles.text}  numberOfLines={1} ellipsizeMode="tail" >{item?.title} </Text>

             </TouchableOpacity>
           )}
           />
            </View>
            <View  >
           <FlatList
          numColumns={4}
           data={Data2}
           renderItem={({item})=>(
             <TouchableOpacity style={styles.item}>
                <Image  source={item.image}   style={styles.imagestyle}/>
                <Text style={styles.text}>{item?.title} </Text>

             </TouchableOpacity>
           )}
           />
            </View>
            <View  >
           <FlatList
          numColumns={4}
           data={Data}
           renderItem={({item})=>(
             <TouchableOpacity style={styles.item}>
                <Image  source={item.image}   style={styles.imagestyle}/>
                <Text style={styles.text}>{item?.title} </Text>

             </TouchableOpacity>
           )}
           />
            </View>
      </Swiper>
      </View> 
        </View>
    )
};
 const styles=StyleSheet.create({
container:{
     paddingHorizontal:10,
     marginTop:10
},
hadingstyle:{
    fontSize:16,
    fontWeight:'bold',
    marginBottom:10
},
secondcontainer:{
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
    margin: 2,
    borderRadius: 15
},
imagestyle:{
    height:50,
    width:50,
    marginBottom:5
},
item:{
    flex:1,
    alignContent:'center',
    justifyContent:'center',
    padding:10,
     
},
text:{
    textAlign:'center',
    fontSize:10
}
 });
 export default Miniapp;