import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
  SafeAreaView,
  Platform,
} from "react-native";

import Constants from "expo-constants";
import logo from "./assets/img/logo.png";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  console.log(Constants.statusBarHeight);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.headerText}>Interstellar</Text>
        <View style={styles.contentText}>
          <Text style={styles.contentTextItem}>2014</Text>
          <Text style={styles.contentTextItem}>PG-13</Text>
          <Text style={styles.contentTextItem}>2h 49min</Text>
          <Text style={styles.contentTextItem}>Adventure, Drama, Sci-Fi</Text>
        </View>
        <View style={styles.mainContainer}>
          <Image
            source={require("./assets/img/film.jpg")}
            style={styles.mainFilmImage}
            resizeMode="contain"
          />
          <View style={styles.rightContainer}>
            <Text style={styles.mainText}>
              A team of explorers travel through a wormhole in space in an
              attempt to ensure humanity's survival.
            </Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.mainText}>+ ADD TO WATCHLIST</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View name="iconsContainer" style={styles.iconsContainer}>
          <View name="ratingContainer" style={styles.rateContainer}>
            <AntDesign name="star" style={styles.starIcon} />
            <Text style={styles.starText}>8.6/10</Text>
            <Text style={styles.starText}>1.1M</Text>
          </View>
          <View name="ratingContainer" style={styles.rateContainer}>
            <AntDesign name="star" style={styles.starIconWithBorder} />
            <Text style={styles.starText}>RATE THIS</Text>
          </View>
          <View name="ratingContainer" style={styles.rateContainer}>
            <Text style={styles.metaScoreItem}>74</Text>
            <Text style={styles.metaScoreText}>MetaScore</Text>
            <Text style={styles.metaScoreTextGray}>46 critic reviews</Text>
          </View>
        </View>
      </View>

      <View style={styles.topActors}>
        <Text style={styles.headerText}>Top Billed Cast</Text>
        <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
          <View style={[styles.actor, styles.firstActor]}>
            <Image
              source={require("./assets/img/matthew.jpg")}
              style={styles.actorImg}
            />
            <Text style={[styles.text, styles.actorText]} numberOfLines={1}>
              Matthew McConaughey
            </Text>
            <Text style={styles.actorTextGray} numberOfLines={1}>
              Cooper
            </Text>
          </View>
          <View style={[styles.actor, styles.secondActor]}>
            <Image
              source={require("./assets/img/anne.jpg")}
              style={styles.actorImg}
            />
            <Text style={[styles.text, styles.actorText]} numberOfLines={1}>
              Anne Hathaway
            </Text>
            <Text style={styles.actorTextGray} numberOfLines={1}>
              Brand
            </Text>
          </View>
          <View style={[styles.actor, styles.thirdActor]}>
            <Image
              source={require("./assets/img/jessica.jpg")}
              style={styles.actorImg}
            />
            <Text style={[styles.text, styles.actorText]} numberOfLines={1}>
              Jessica
            </Text>
            <Text style={[styles.text, styles.actorTextGray]} numberOfLines={1}>
              Murph
            </Text>
          </View>
          <View style={[styles.actor, styles.lastActor]}>
            <Image
              source={require("./assets/img/mackenzie.jpg")}
              style={styles.actorImg}
            />
            <Text style={[styles.text, styles.actorText]} numberOfLines={1}>
              Mackenzie
            </Text>
            <View style={styles.actorTextGray} numberOfLines={1}>
              <Text>Cooper</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    marginTop: Constants.statusBarHeight,
  },
  headerContainer: {
    height: 48,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#808080",
  },
  logo: {
    width: 60,
    height: 40,
    resizeMode: "contain",
  },
  headerText: {
    color: "white",
    fontSize: 22,
    marginTop: 10,
    marginLeft: 10,
  },
  contentText: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 10,
  },
  contentTextItem: {
    color: "gray",
    fontSize: 10,
    marginRight: 13,
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 16,
    marginBottom: 24,
  },
  mainFilmImage: {
    height: 135,
    width: 100,
  },
  rightContainer: {
    height: "100%",
    paddingHorizontal: 10,
    flex: 1,
  },
  mainText: {
    color: "white",
    fontSize: 12,
    marginLeft: 10,
    marginRight: 10,
  },
  btn: {
    marginTop: 20,
    backgroundColor: "#0277BD",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  iconsContainer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  rateContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 8,
  },
  metaScoreContainer: {
    alignItems: "center",
  },
  starIcon: {
    fontSize: 26,
    color: "gold",
  },
  starIconWithBorder: {
    fontSize: 26,
    color: "white",
  },
  metaScoreItem: {
    // height: 26,
    textAlign: "center",
    width: 26,
    fontSize: 20,
    color: "white",
    backgroundColor: "green",
  },
  starText: {
    color: "white",
    marginTop: 5,
  },
  starTextGray: {
    color: "white",
  },

  metaScoreText: {
    color: "white",
    marginTop: 5,
  },
  metaScoreTextGray: {
    color: "gray",
  },

  topContainer: {
    backgroundColor: "#212121",
    paddingBottom: 16,
  },
  actorImg: {
    width: 150,
    height: 200,
    resizeMode: "cover",
  },
  topActors: {
    flexDirection: "column",
    alignItems: "start",
  },

  actor: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 200,
    marginRight: 40,
  },

  scrollContainer: {
    marginTop: 20,
    paddingHorizontal: 16, // Adjust the value as per your preference
  },
  actorText: {
    color: "white",
    fontSize: 10,
    textAlign: "center",
  },
  actorTextGray: {
    color: "gray",
    fontSize: 10,
    textAlign: "center",
  },
});
