import React from "react"
import { View, Dimensions, Image, StyleSheet, Text } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import images from "../images/images.js"

const deviceWidth = Dimensions.get("window").width
const deviceHeight = Dimensions.get("window").height

export default function RatingCard(props) {
  let reviewsNum = props.reviews
  if(reviewsNum >= 1000) reviewsNum = Math.floor(reviewsNum / 1000) + "k"

  let todayDate = new Date()
  let commentDateString = new Date(props.hype_review.review_date)
  commentDateString = commentDateString.toLocaleDateString("en-US")

  if(commentDateString == todayDate.toLocaleDateString("en-US")) commentDateString = "Today"

  let commentTimeString = new Date(props.hype_review.review_date)
  commentTimeString = commentTimeString.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' })
  
  let sampleLikedUserImages = [
    <View key="1">
      <Image
        style = { styles.profilePic }
        source = { images[props.hype_review.review_likes[0].image] }
        resizeMode = { "cover" }
      />
    </View>,
    <View key="2">
      <Image
        style = { styles.profilePic }
        source = { images[props.hype_review.review_likes[1].image] }
        resizeMode = { "cover" }
      />
    </View>,
    <View key="3">
      <Image
        style = { styles.profilePic }
        source = { images[props.hype_review.review_likes[2].image] }
        resizeMode = { "cover" }
      />
    </View>,
]
  return(
    <View style = { styles.ratingsCard }>
      <Image
        style = { styles.headerCard }
        source = { images[props.bg_image] } 
        resizeMode = { "cover" }
      />

      <View style = { styles.scoreAndItem }>
        <View style = { styles.scoreAndPic }>
          <View style = { styles.scoreGroup }>
            <Text style = { styles.itemScore }>
              { props.score + " "}
              <Ionicons name="star" size={ 20 } color ="orange"/>
            </Text>
            <Text style = { styles.itemReviewNum }>{ `(${reviewsNum} Reviews)` }</Text>
          </View>

          { props.item_image && 
            <Image
            style = { styles.itemImage }
            source = { images[props.item_image] } 
            resizeMode = { "contain" }
          />
          }
        </View>

        <View style = { styles.ratingNameGroup }>
          <Text style = { styles.brand }>{ props.brand }</Text>
          <Text style = { styles.productName }>{ props.name }</Text>
        </View>
      </View>

      <View style = { styles.ratingHype }>
        <Text style = { styles.commentDate }>{ commentDateString }, { commentTimeString }</Text>

        <View style = { styles.shoutoutGroup }>
          <Text style = { styles.shoutout }>"{ props.hype_review.content }"</Text>
          <Text style = { styles.shoutoutUser }>{ props.hype_review.username }</Text>
        </View>

        <View style = { styles.userLikes }>
          <View style = { styles.userImagesGroup }>{ sampleLikedUserImages }</View>
          <Text style = { styles.shoutoutUser }>User and { props.hype_review.review_likes.length - 1} others agree</Text>
        </View>
      </View>
        
    </View>

  )
}

const styles = StyleSheet.create({
  ratingsCard: {
    flex: 1,
    marginHorizontal: 6,
    shadowColor: "gray",
    shadowRadius: 7,
    borderRadius: 8,
    elevation: 12,
    width: deviceWidth * 0.70,  
  },

  headerCard: {
    height: "40%",
    borderRadius: 8,
    width: deviceWidth * 0.70
  },

  scoreAndItem: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
    maxHeight: "30%",
    width: "100%",
    justifyContent: "space-between"
  },

  scoreAndPic: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "5%"
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "5%"
  },

  itemScore: {
    fontWeight: "bold",
    fontSize: 20
  },

  itemReviewNum: {
    fontSize: 11,
    color: "gray"
  },

  itemImage: {
    width: 0.35 * deviceWidth,
    height: 0.5 * deviceWidth,
    position: "absolute",
    bottom: "15%",
    right: "-5%"
  },

  productName: {
    fontWeight: "bold",
    fontSize: 20
  },

  brand: {
    color: "gray", 
    fontSize: 14
  },

  ratingHype: {
    flex: 1,
    padding: 15,
    height: "30%",
    backgroundColor: "yellowgreen",
    justifyContent: "space-between",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8
  },

  commentDate: {
    color: "white",
  },

  shoutout: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  },

  shoutoutUser: {
    color: "white"
  },

  userLikes: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  userImagesGroup: {
    flexDirection: "row"
  },  

  profilePic: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginLeft: -6,
    borderColor: "white",
    borderWidth: 2
  }
});
