import React from "react"
import { ScrollView, StyleSheet, Dimensions } from "react-native"
const deviceWidth = Dimensions.get("window").width

export default function HeaderCard(props) {

  return(
    <ScrollView
      horizontal
      nestedScrollEnabled
      showsHorizontalScrollIndicator = { false } 
      style = { [styles.carousel, { minHeight: props.height }]}
    >
      {props.content}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  carousel: {
    width: deviceWidth,
    marginBottom: "5%"
  }
});
