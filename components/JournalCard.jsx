import React from "react"
import { Dimensions, Image, View, Text, StyleSheet, ImageBackground } from "react-native"
import images from "../images/images.js"

const deviceWidth = Dimensions.get("window").width

export default function JournalCard(props) {
  return(
      <ImageBackground
        style = { styles.cardBackground }
        imageStyle = { styles.cardBackgroundImage }
        source = { images[props.image] }
      >
        <View style = { styles.overlay }>
          <Text style = { styles.journalTitle }>{ props.title }</Text>
          <View style = { styles.cardFooter }>
            <Image
              style = { styles.profilePic }
              source = { images[props.userImage] }
              resizeMode = { "cover" }
            />
            <View style = { styles.journalWriterInfo }>
              <Text style = { styles.username }>{ props.username }</Text>
              <Text style = { styles.userGroup }>from { props.group }</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  cardBackground: {
    flex: 1,
    width: deviceWidth * 0.8,
    height: deviceWidth * 0.8,
    borderRadius: 8,
    shadowColor: "gray",
    shadowRadius: 5,
    elevation: 7,
    marginHorizontal: 8
  },

  cardBackgroundImage: {
    borderRadius: 8,
  },

  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: "100%",
    justifyContent: "flex-end",
    padding: "5%",
    height: deviceWidth * 0.8,
    borderRadius: 8,
  },

  journalTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    marginBottom: "5%"
  },

  cardFooter: {
    flexDirection: "row",
    alignItems: "center"
  },

  profilePic: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderColor: "white",
    borderWidth: 2
  },

  journalWriterInfo: {
    marginLeft: "2%"
  },

  username: {
    color: "white",
    fontWeight: "bold",
  },

  userGroup: {
    color: "lightgray"
  }
});
