import React from "react"
import { View, StyleSheet, Dimensions, Image } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"

const deviceWidth = Dimensions.get("window").width
const deviceHeight = Dimensions.get("window").height

export default function NavBar(props) {
  let logoWidth = deviceWidth * 0.09

  return(
    <View style = { styles.navbar }>
      <Image
        style = { styles.logo }
        resizeMode = { "contain" }
        source = { require("../assets/logo.png") }
      />
      <View style = { styles.options }>
        <Ionicons style = { styles.icon } name="search-outline" size={ logoWidth }></Ionicons>
        <Ionicons style = { styles.icon } name="log-in-outline" size={ logoWidth }></Ionicons>
        <Ionicons style = { styles.icon } name="list-circle-outline" size={ logoWidth }></Ionicons>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    paddingHorizontal: "5%",
    justifyContent: "space-between",
    alignItems: "center",
    height: deviceHeight * 0.075,
    shadowRadius: 6,
    shadowColor: "gray",
    borderBottomWidth: 1,
    borderColor: "gray",
  },

  logo: {
    height: "100%",
    width: deviceWidth * 0.4 
  },

  options: {
    flexDirection: "row"
  },

  icon: {
    marginRight: 5
  }
});
