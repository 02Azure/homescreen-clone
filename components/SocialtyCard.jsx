import React from "react"
import { View, Dimensions, Image, StyleSheet, Text } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import images from "../images/images.js"

const deviceWidth = Dimensions.get("window").width
const deviceHeight = Dimensions.get("window").height

export default function SocialtyCard(props) {
  return(
    <View style = { styles.socialtyCard }>
      <Image
        style = { styles.headerCard }
        source = { images[props.image] } 
        resizeMode = { "cover" }
      />

      <View style = { styles.socialtyCardDetail }>
        <View style = { styles.socialtyHeader }>
          <View style = { styles.socialtyNameGroup }>
            <Text style = { styles.socialtyName }>{ props.name }</Text>
            <Text style = { styles.socialtyField }>{ props.field }</Text>
          </View>
          <Ionicons name="person-add-outline" size={ 30 } color ="gray"/>
        </View>

        <View style = { styles.socialtyStats }>

          <View style = { styles.socialtyStatusDetail }>
            <Text>
              <Text style = { styles.statNumber }>{ props.reputation }</Text>
              <Text style = { styles.statName }>%</Text>
            </Text>
            <Text style = { styles.statName }>Reputation</Text>
          </View>

          <View style = { styles.socialtyStatusDetail }>
            <Text>
              <Text style = { styles.statNumber }>{ props.influence }</Text>
              <Text style = { styles.statName }>%</Text>
            </Text>
            <Text style = { styles.statName }>Influence</Text>
          </View>
        </View>

        <View style = { styles.socialtyFooter }>
          <View style = { styles.socialtyBadges }>
            <View style = { [styles.badge, { backgroundColor: "tomato" }] }><Ionicons name="fast-food" size = { 20 } color = "white"/></View>
            <View style = { [styles.badge, { backgroundColor: "gold" }]  }><Ionicons name="musical-notes" size = { 20 } color = "white"/></View>
            <View style = { [styles.badge, { backgroundColor: "yellowgreen" }]  }><Ionicons name="laptop" size = { 20 } color = "white"/></View>
            <View style = { [styles.badge, { backgroundColor: "dodgerblue" }]  }><Ionicons name="american-football" size = { 20 } color = "white"/></View>
            <View style = { [styles.badge, { backgroundColor: "mediumvioletred" }] }><Ionicons name="arrow-up-circle" size = { 20 } color = "white"/></View>
          </View>
          <View style = { styles.socialtyTitleRank }>
            <Text style = { styles.statName }>{ props.title }</Text>
            <Text style = { styles.statName }>Lv.{ props.level }</Text>
          </View>
        </View>
        
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  socialtyCard: {
    flex: 1,
    marginHorizontal: 0.05 * deviceWidth,
    alignItems: "center",
  },

  headerCard: {
    borderRadius: 6,
    backgroundColor: "red",
    height: deviceWidth * 0.7 * 0.75,
    width: deviceWidth * 0.70,
  },

  socialtyCardDetail: {
    padding: 15,
    backgroundColor: "white",
    width: "90%",
    borderRadius: 6,
    shadowColor: "gray",
    shadowRadius: 8,
    elevation: 8,
    transform: [{
      translateY: -deviceWidth * 0.7 * 0.75 * 0.2,
    }]
  },

  socialtyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 0.05 * deviceHeight
  },

  socialtyName: {
    fontWeight: "bold",
    fontSize: 18
  },

  socialtyField: {
    color: "gray"
  },

  socialtyStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 0.05 * deviceHeight
  },

  statNumber: {
    fontWeight: "bold",
    fontSize: 18
  },

  statName: {
    color: "gray", 
    fontSize: 11
  },

  socialtyBadges: {
    flexDirection: "row",
    marginBottom: 0.02 * deviceHeight,
  },

  badge: {
    padding: 7,
    borderRadius: 20,
    marginLeft: -4
  },  

  socialtyTitleRank: {
    flexDirection: "row",
    justifyContent: "space-between",
  }
});
