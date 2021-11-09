import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Audio } from "expo-av";

const ListBackgroundColors = {
  1: "#51E1ED",
  2: "#4DD637",
  3: "#E5D68A",
  4: "#455CFF",
  5: "#ff7700",
  6: "#fc03e8",
  7: "#7d8545",
  8: "#804585",
  9: "#ff004c",
  10: "#B15555",
};

const soundList = {
  one: require("./assets/one.wav"),
  two: require("./assets/two.wav"),
  three: require("./assets/three.wav"),
  four: require("./assets/four.wav"),
  five: require("./assets/five.wav"),
  six: require("./assets/six.wav"),
  seven: require("./assets/seven.wav"),
  eight: require("./assets/eight.wav"),
  nine: require("./assets/nine.wav"),
  ten: require("./assets/ten.wav"),
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  playSound = async (number) => {
    const sound = new Audio.Sound();
    try {
      let path = soundList[number];
      await sound.loadAsync(path);
      await sound
        .playAsync()
        .then(async (playbackStatus) => {
          setTimeout(() => {
            sound.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.gridContainer}>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: ListBackgroundColors[1] },
              ]}
              onPress={() => {
                this.playSound("one");
              }}
            >
              <Text style={styles.itemText}>One</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: ListBackgroundColors[2] },
              ]}
              onPress={() => {
                this.playSound("two");
              }}
            >
              <Text style={styles.itemText}>Two</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: ListBackgroundColors[3] },
              ]}
              onPress={() => {
                this.playSound("three");
              }}
            >
              <Text style={styles.itemText}>Three</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: ListBackgroundColors[4] },
              ]}
              onPress={() => {
                this.playSound("four");
              }}
            >
              <Text style={styles.itemText}>Four</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: ListBackgroundColors[5] },
              ]}
              onPress={() => {
                this.playSound("five");
              }}
            >
              <Text style={styles.itemText}>Five</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: ListBackgroundColors[6] },
              ]}
              onPress={() => {
                this.playSound("six");
              }}
            >
              <Text style={styles.itemText}>Six</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: ListBackgroundColors[7] },
              ]}
              onPress={() => {
                this.playSound("seven");
              }}
            >
              <Text style={styles.itemText}>Seven</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: ListBackgroundColors[8] },
              ]}
              onPress={() => {
                this.playSound("eight");
              }}
            >
              <Text style={styles.itemText}>Eight</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: ListBackgroundColors[9] },
              ]}
              onPress={() => {
                this.playSound("nine");
              }}
            >
              <Text style={styles.itemText}>Nine</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: ListBackgroundColors[10] },
              ]}
              onPress={() => {
                this.playSound("ten");
              }}
            >
              <Text style={styles.itemText}>Ten</Text>
            </TouchableOpacity>
          </View>
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  gridContainer: {
    flex: 1,
    margin: 5,
  },
  logo: {
    alignSelf: "center",
    marginTop: 15,
  },
  rowContainer: {
    flexDirection: "row",
  },
  item: {
    flex: 1,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
  },
  itemText: {
    color: "#FFF",
    fontSize: 20,
  },
});

export default App;
