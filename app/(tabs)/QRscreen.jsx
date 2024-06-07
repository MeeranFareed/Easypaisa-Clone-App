
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Barcode from '../../components/Barcode'

const QRscreen = () => {
  return (
    <View style={styles.container}>
      <Barcode />
    </View>
  )
}

export default QRscreen

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
})

// import { StyleSheet, View } from 'react-native';
// import React from 'react';
// import Barcode from '../../components/Barcode'

// const QRscreen = () => {
//   return (
//     <View style={styles.container}>
//       <Barcode />
//     </View>
//   );
// }

// export default QRscreen;

// const styles = StyleSheet.create({
//   container: {
//      flex:1,
     
//   },
// });
