import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';

const HomeScreen = ({route}) => {

const { user } = route.params;

  return (
    <View style={styles.container}>
        <Image style={styles.avatar} source={{uri: `${user.avatar}`}}/>
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeName}>{user.name}</Text>
            <Text style={styles.welcomeName}>{user.email}</Text>
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    flexDirection: "row",
    alignItems:'center',
    gap: 8,
},
avatar: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 60,
},
welcomeContainer: {
    flex:1,
},
welcomeName: {
    fontSize:18,
    fontWeight: '600',
    marginBottom: 8,
},
welcomeSubTitle:{
    fontSize:18,
}
})