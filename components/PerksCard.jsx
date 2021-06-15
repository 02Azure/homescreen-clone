import React from "react"
import { Text, Dimensions, Image , StyleSheet, View } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import images from "../images/images.js"

const deviceWidth = Dimensions.get("window").width

export default function PerksCard(props) {
  let imagesCollection = [
    <View style={ styles.perkImageContainer } key="q1">
      <Image
        style = { styles.perkImage }
        source = { images[props.items[0].image] }
        resizeMode = { "cover" }
      />
    </View>,

    <View style={ styles.perkImageContainer } key="q2">
      <Image
        style = { styles.perkImage }
        source = { images[props.items[1].image] }
        resizeMode = { "cover" }
      />
    </View>,

    <View style = { styles.masonry2 } key="q3">
      <View style={ styles.perkImageContainer }>
        <Image
          style = { styles.perkImageMini }
          source = { images[props.items[2].image] }
          resizeMode = { "cover" }
        />
      </View>
      <View style={ styles.perkImageContainer }>
        <Image
          style = { styles.perkImageSmall }
          source = { images[props.items[3].image] }
          resizeMode = { "cover" }
        />
      </View>
    </View>,

    <View style = { styles.masonry2 } key="q4">
      <View style={ styles.perkImageContainer }>
        <Image
          style = { styles.perkImageSmall }
          source = { images[props.items[4].image] }
          resizeMode = { "cover" }
        />
      </View>
      <View style={ styles.perkImageContainer }>
        <Image
          style = { styles.perkImageMini }
          source = { images[props.items[5].image] }
          resizeMode = { "cover" }
        />
      </View>
    </View>,
  ]

  return(
    <View style = { styles.container }>
      <View style = { styles.customMasonry }>
        { imagesCollection }
      </View>

      <View style = { styles.headerCard }>
        <Text style = { styles.perkName }>{ props.name }</Text>
        <Ionicons name="chevron-forward-circle-outline" size = { 24 }/>
      </View>
      <Text style = { styles.perkMinCost }>Start from SC 999.999.000</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "5%"
  },

  customMasonry: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5%",
    marginBottom: "2%"
  },

  perkImageContainer: {
    shadowColor: "gray",
    shadowRadius: 4,
    elevation: 6,
    shadowOffset: {
      width: 0,
      height: 3
    },
    borderRadius: 6
  }
,
  perkImage: {
    width: deviceWidth * 0.2,
    height: deviceWidth * 0.4,
    borderRadius: 6
  },

  perkImageSmall: {
    width: deviceWidth * 0.2,
    height: deviceWidth * 0.4 * 0.95 * 2 / 3,
    borderRadius: 6
  },

  perkImageMini: {
    width: deviceWidth * 0.2,
    height: deviceWidth * 0.4 * 0.95 / 3,
    borderRadius: 6
  },

  masonry2: {
    justifyContent: "space-between"
  },

  headerCard: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  perkName: {
    fontWeight: "bold",
    fontSize: 20
  }
});
