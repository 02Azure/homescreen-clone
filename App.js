import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TextInput, Platform, StatusBar } from 'react-native';
import Navbar from "./components/Navbar"
import Carousel from "./components/CustomCarousel"
import HeaderCard from "./components/HeaderCard"
import SocialtyCard from "./components/SocialtyCard"
import RatingCard from "./components/RatingCard"
import PerksCard from "./components/PerksCard"
import JournalCard from "./components/JournalCard"

const server = "http://192.168.100.5:3000"
const deviceHeight = Dimensions.get("window").height
const deviceWidth = Dimensions.get("window").width


export default function App() {
  const [headerImages, setHeaderImages] = useState([])
  const [journals, setJournals] = useState([])
  const [perks, setPerks] = useState([])
  const [ratingItems, setRatingItems] = useState([])
  const [socialties, setSocialties] = useState([])

  useEffect(() => {
    fetch(server + "/header_banners", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setHeaderImages(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    fetch(server + "/socialties", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setSocialties(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    fetch(server + "/ratings_items", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setRatingItems(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    fetch(server + "/perks", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setPerks(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    
    fetch(server + "/journals", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setJournals(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  },[])

  let headerCarouselImages = headerImages?.map(header => {
    return(
      <HeaderCard
        { ...header }
        key = { header.id }
      />
    )
  })

  let socialtyCarouselCards = socialties?.map(socialty => {
    return(
      <SocialtyCard
        { ...socialty }
        key = { socialty.id }
      />
    )
  })

  let ratingCarouselCategories = [
    <View key="1"><Text style={ styles.ratingsCategory }>ALL</Text></View>,
    <View key="2"><Text style={ styles.ratingsCategory }>SPORTS</Text></View>,
    <View key="3"><Text style={ styles.ratingsCategory }>SNACKS</Text></View>,
    <View key="4"><Text style={ styles.ratingsCategory }>AUTOMOTIVE</Text></View>,
    <View key="5"><Text style={ styles.ratingsCategory }>FASHION</Text></View>,
    <View key="6"><Text style={ styles.ratingsCategory }>GAMES</Text></View>,
    <View key="7"><Text style={ styles.ratingsCategory }>TRAVELING</Text></View>,
  ]


  let ratingCarouselCards = ratingItems?.map(item => {
    return(
      <RatingCard
        { ...item }
        key = { item.id }
      />
    )
  })

  let perkCards = perks?.map(perk => {
    return(
      <PerksCard
        { ...perk }
        key = { perk.id }
      />
    )
  })

  let journalCarouselCards = journals?.map(journal => {
    return(
      <JournalCard
        { ...journal }
        key = { journal.id }
      />
    )
  })

  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator = { false }>
        
        <View style={ styles.headerScreen }>
          <Carousel 
            content = { headerCarouselImages }
            height = { deviceHeight * 0.3 }
          />
          <TextInput
            style = { styles.searchInput }
            placeholder = { "Search anything" }
          />
        </View>

        <View style={ styles.socialtyScreen }>
          <View style={ styles.titleHeader }>
            <Text style={ styles.sectionName }>Meet Socialty</Text>
            <Text style={ styles.detailLink }>Learn</Text>
          </View>

          <Carousel 
            content = { socialtyCarouselCards }
            height = { deviceHeight * 0.7 }
          />
        </View>

        <View style={ styles.ratingsScreen }>
          <View style={ styles.titleHeader }>
            <Text style={ styles.sectionName }>Ratings</Text>
            <Text style={ styles.detailLink }>See all</Text>
          </View>

          <ScrollView
            horizontal
            nestedScrollEnabled
            showsHorizontalScrollIndicator = { false } 
            style = { styles.categoryCarousel }
          >
            { ratingCarouselCategories }
          </ScrollView>

          <Carousel 
            content = { ratingCarouselCards }
            height = { deviceHeight }
          />
        </View>

        <View style={ styles.perksScreen }>
          <View style={ styles.titleHeader }>
            <Text style={ styles.sectionName }>Perks</Text>
            <Text style={ styles.detailLink }>See all</Text>
          </View>

          <View style={ styles.perkCardsContainer }>
            { perkCards }
          </View>
        </View>

        <View style={ styles.journalsScreen }>
          <View style={ styles.titleHeader }>
            <Text style={ styles.sectionName }>Journals</Text>
            <Text style={ styles.detailLink }>See all</Text>
          </View>

          <Carousel 
            content = { journalCarouselCards }
            height = { deviceHeight * 0.3 }
          />
        </View>


        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },

  scrollViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerScreen: {
    flex: 1,
    backgroundColor: "white",
    marginVertical: "5%"
  },

  titleHeader: {
    paddingHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "5%"
  },

  searchInput: {
    marginHorizontal: "5%",
    borderBottomWidth: 2,
    fontWeight: "bold",
    fontSize: 24
  },

  socialtyScreen: {
    flex: 1,
    paddingTop: "5%",
    backgroundColor: "whitesmoke",
  },

  sectionName: {
    fontWeight: "bold",
    fontSize: 20
  },

  detailLink: {
    fontSize: 16,
    fontWeight: "bold",
    color: "deeppink"
  },

  ratingsScreen: {
    flex: 1,
    paddingTop: "5%",
    backgroundColor: "gainsboro",
  },

  categoryCarousel: {
    paddingHorizontal: "2%",
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "gray",
    paddingBottom: "5%"
  },

  ratingsCategory: {
    fontSize: 18,
    marginRight: 24,
    fontWeight: "bold"
  },

  perksScreen: {
    flex: 1,
    paddingVertical: "5%",
    backgroundColor: "whitesmoke",
  },

  journalsScreen: {
    flex: 1,
    paddingVertical: "5%",
    height: deviceHeight * 0.7,
    backgroundColor: "gainsboro",
  },

});
