import React from "react"
import { Dimensions, Image, StyleSheet, View } from "react-native"
import images from "../images/images.js"

const deviceWidth = Dimensions.get("window").width

export default function HeaderCard(props) {
  return(
    <View style = { styles.container }>
      <Image
        style = { styles.headerCard }
        source = { images[props.image] } 
        resizeMode = { "cover" }
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "gray",
  },

  headerCard: {
    marginHorizontal: 0.05 * deviceWidth,
    height: "100%",
    width: deviceWidth * 0.75,
    borderRadius: 8,
  },
});
